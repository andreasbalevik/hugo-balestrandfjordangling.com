#!/usr/bin/env node
// Teknisk SEO-kontroll av en ferdig Hugo production-output.
//
// Kontrollen leser kun output-mappen og skriver ingenting til kilde eller public.
// Bruk: node scripts/seo-check.mjs [outputDir] [--base https://example.com]
// Standard outputDir er "public". Standard base hentes fra sitemap.xml.

import { readdirSync, readFileSync, statSync, existsSync } from "node:fs"
import { join, relative, sep, posix } from "node:path"

const DEFAULT_OUTPUT = "public"
const REQUIRED_PAGES = ["", "activities/", "inspirations/", "about/"]
const ADMIN_PREFIX = "admin/"

// ---------------------------------------------------------------------------
// CLI
// ---------------------------------------------------------------------------

function parseArgs(argv) {
  let outputDir = DEFAULT_OUTPUT
  let base = null
  for (let i = 0; i < argv.length; i++) {
    const arg = argv[i]
    if (arg === "--base") {
      base = argv[++i]
    } else if (arg === "--dir") {
      outputDir = argv[++i]
    } else if (!arg.startsWith("--")) {
      outputDir = arg
    }
  }
  return { outputDir, base }
}

// ---------------------------------------------------------------------------
// Filsamling
// ---------------------------------------------------------------------------

function collectFiles(dir, acc = []) {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name)
    if (entry.isDirectory()) collectFiles(full, acc)
    else acc.push(full)
  }
  return acc
}

function toUrlPath(root, file, isDirectory) {
  const rel = relative(root, file).split(sep).join(posix.sep)
  if (isDirectory) return "/" + rel.replace(/\/?$/, "/")
  if (rel === "index.html") return "/"
  if (rel.endsWith("/index.html")) return "/" + rel.slice(0, -"index.html".length)
  return "/" + rel
}

// ---------------------------------------------------------------------------
// Minimal HTML-leser som tåler Hugo-minifisering (uquotede attributter)
// ---------------------------------------------------------------------------

function parseAttributes(raw) {
  const attrs = new Map()
  const re = /([^\s"'>/=]+)(?:\s*=\s*("[^"]*"|'[^']*'|[^\s"'>]+))?/g
  let m
  while ((m = re.exec(raw))) {
    const name = m[1].toLowerCase()
    let value = m[2] ?? ""
    if (value.startsWith('"') || value.startsWith("'")) value = value.slice(1, -1)
    attrs.set(name, value)
  }
  return attrs
}

function findTags(html, tagName) {
  const tags = []
  const re = new RegExp(`<${tagName}\\b([^>]*)>`, "gi")
  let m
  while ((m = re.exec(html))) tags.push(parseAttributes(m[1]))
  return tags
}

function firstAttr(tags, name) {
  for (const tag of tags) {
    if (tag.has(name)) return tag.get(name)
  }
  return null
}

function textOf(html, tagName) {
  const m = html.match(new RegExp(`<${tagName}\\b[^>]*>([\\s\\S]*?)</${tagName}>`, "i"))
  return m ? m[1].replace(/<[^>]*>/g, "").trim() : ""
}

function isHtmlPage(html) {
  return /<!doctype html>/i.test(html) || /<html[\s>]/i.test(html)
}

function isAlias(html) {
  return /http-equiv=("?refresh"?|refresh)/i.test(html)
}

function decodeHtmlEntities(value) {
  return value
    .replace(/&amp;/g, "&")
    .replace(/&#39;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&nbsp;/g, " ")
}

// ---------------------------------------------------------------------------
// URL-hjelpere
// ---------------------------------------------------------------------------

const EXTERNAL_RE = /^(https?:)?\/\//i
const SKIP_RE = /^(mailto:|tel:|javascript:|data:|blob:|#|urn:|ftp:)/i

function isExternal(url) {
  return EXTERNAL_RE.test(url)
}

function splitUrl(url) {
  const [withoutFragment] = url.split("#")
  const [pathname, query = ""] = withoutFragment.split("?")
  return { pathname, query }
}

function safeDecodePath(pathname) {
  let decoded = pathname
  try {
    decoded = decodeURIComponent(pathname)
  } catch {
    // beholder rå sti når dekoding feiler
  }
  return decoded.normalize("NFC")
}

// Sitemap bruker prosentkoding av UTF-8, mens filnavn på disk kan være NFC
// eller NFD. Normaliser begge sider før oppslag.
function normalizeUrlPath(pathname) {
  return safeDecodePath(pathname)
}

// ---------------------------------------------------------------------------
// Sitemap
// ---------------------------------------------------------------------------

function parseSitemap(xml) {
  const baseMatch = xml.match(/<loc>\s*(https?:\/\/[^/]+)/i)
  const base = baseMatch ? baseMatch[1] : null
  const locs = [...xml.matchAll(/<loc>\s*([^<\s]+)\s*<\/loc>/gi)].map((m) => m[1].trim())
  return { base, locs }
}

// ---------------------------------------------------------------------------
// Sider
// ---------------------------------------------------------------------------

function readPage(root, file) {
  const html = readFileSync(file, "utf8")
  const urlPath = normalizeUrlPath(toUrlPath(root, file, false))
  const aliases = isAlias(html)
  const robots = firstAttr(findTags(html, "meta").filter((t) => (t.get("name") || "").toLowerCase() === "robots"), "content")
  const title = textOf(html, "title")
  const descriptions = findTags(html, "meta")
    .filter((t) => (t.get("name") || "").toLowerCase() === "description")
    .map((t) => t.get("content") || "")
  const canonicalTags = findTags(html, "link").filter((t) => (t.get("rel") || "").toLowerCase() === "canonical")
  const language = firstAttr(findTags(html, "html"), "lang")
  const viewports = findTags(html, "meta")
    .filter((t) => (t.get("name") || "").toLowerCase() === "viewport")
    .map((t) => t.get("content") || "")
  const h1Tags = findTags(html, "h1")
  const images = findTags(html, "img")
  const jsonLdBlocks = [...html.matchAll(/<script[^>]*type=(?:"application\/ld\+json"|application\/ld\+json)[^>]*>([\s\S]*?)<\/script>/gi)].map(
    (m) => m[1],
  )

  return {
    file,
    urlPath,
    isAdmin: urlPath.replace(/^\//, "").startsWith(ADMIN_PREFIX),
    aliases,
    robots,
    title,
    descriptions,
    canonical: canonicalTags.length > 0 ? canonicalTags[0].get("href") : null,
    language,
    viewports,
    h1Count: h1Tags.length,
    images,
    jsonLdBlocks,
    html,
  }
}

// ---------------------------------------------------------------------------
// Sjekker
// ---------------------------------------------------------------------------

const findings = { errors: [], warnings: [] }
const error = (msg) => findings.errors.push(msg)
const warn = (msg) => findings.warnings.push(msg)

function checkRequiredMeta(page, base) {
  if (page.aliases || page.isAdmin) return
  if (!page.title) error(`${page.urlPath}: mangler <title>`)
  if (page.descriptions.length === 0) error(`${page.urlPath}: mangler meta description`)
  else if (!page.descriptions[0].trim()) error(`${page.urlPath}: tom meta description`)
  if (!page.language) error(`${page.urlPath}: mangler lang på <html>`)
  if (page.viewports.length === 0) error(`${page.urlPath}: mangler meta viewport`)
  else if (!page.viewports[0].includes("width=device-width")) error(`${page.urlPath}: viewport mangler width=device-width`)

  if (!page.canonical) {
    error(`${page.urlPath}: mangler rel=canonical`)
    return
  }
  if (!/^https:\/\//i.test(page.canonical)) {
    error(`${page.urlPath}: canonical er ikke absolutt https (${page.canonical})`)
    return
  }
  if (base && !page.canonical.startsWith(base + "/") && page.canonical !== base && page.canonical !== base + "/") {
    error(`${page.urlPath}: canonical peker utenfor produksjonsdomenet (${page.canonical})`)
  }
}

function checkDuplicates(pages) {
  const byTitle = new Map()
  const byDescription = new Map()
  for (const page of pages) {
    if (page.aliases || page.isAdmin) continue
    if (page.title) {
      if (!byTitle.has(page.title)) byTitle.set(page.title, [])
      byTitle.get(page.title).push(page.urlPath)
    }
    if (page.descriptions[0]) {
      const key = page.descriptions[0].trim()
      if (!byDescription.has(key)) byDescription.set(key, [])
      byDescription.get(key).push(page.urlPath)
    }
  }
  reportDuplicateGroup(byTitle, "tittel")
  reportDuplicateGroup(byDescription, "meta description")
}

function reportDuplicateGroup(map, label) {
  for (const [value, urls] of map) {
    if (urls.length > 1) {
      warn(`Duplikat ${label} på ${urls.length} sider (${urls.join(", ")}): "${value}"`)
    }
  }
}

function checkJsonLd(page) {
  if (page.aliases || page.isAdmin) return
  page.jsonLdBlocks.forEach((raw, index) => {
    try {
      JSON.parse(raw)
    } catch (err) {
      error(`${page.urlPath}: JSON-LD blokk ${index + 1} kan ikke parses (${err.message})`)
    }
  })
}

function checkImages(page) {
  if (page.aliases || page.isAdmin) return
  page.images.forEach((img, index) => {
    const src = img.get("src")
    const hasAlt = img.has("alt")
    if (!hasAlt) {
      warn(`${page.urlPath}: <img> #${index + 1} mangler alt-attributt (${src || "(ingen src)"})`)
    }
  })
}

// Samler interne referanser fra href/src/srcset og JSON-LD.
function collectInternalRefs(page) {
  const refs = []
  const add = (value, kind) => {
    if (!value) return
    const url = decodeHtmlEntities(value.trim())
    if (!url || SKIP_RE.test(url) || isExternal(url)) return
    if (!url.startsWith("/")) return
    refs.push({ kind, url })
  }

  for (const a of findTags(page.html, "a")) add(a.get("href"), "lenke")
  for (const img of page.images) {
    add(img.get("src"), "bilde")
    const srcset = img.get("srcset")
    if (srcset) {
      for (const part of srcset.split(",")) add(part.trim().split(/\s+/)[0], "bilde-srcset")
    }
  }
  for (const source of findTags(page.html, "source")) {
    const srcset = source.get("srcset")
    if (srcset) {
      for (const part of srcset.split(",")) add(part.trim().split(/\s+/)[0], "bilde-srcset")
    }
  }
  for (const link of findTags(page.html, "link")) {
    const rel = (link.get("rel") || "").toLowerCase()
    if (["canonical", "alternate", "manifest", "icon", "apple-touch-icon", "sitemap"].includes(rel)) {
      add(link.get("href"), "link")
    }
  }
  for (const slot of findTags(page.html, "use")) add(slot.get("href"), "svg-use")
  return refs
}

// Kandidatfil for en intern absolutt sti, med URL-dekoding og katalogindeks.
function resolveInternalRef(root, pathname) {
  const decoded = safeDecodePath(pathname)
  const rel = decoded.replace(/^\//, "")
  const candidates = []
  if (rel === "") {
    candidates.push("index.html")
  } else {
    candidates.push(rel)
    candidates.push(rel + "/index.html")
    if (rel.endsWith("/")) candidates.push(rel + "index.html")
  }
  for (const candidate of candidates) {
    const full = join(root, candidate)
    if (existsSync(full)) {
      try {
        if (statSync(full).isFile()) return true
      } catch {
        // ignorer
      }
    }
  }
  return false
}

function checkRefs(page, root) {
  if (page.isAdmin) return
  const refs = collectInternalRefs(page)
  for (const ref of refs) {
    const { pathname } = splitUrl(ref.url)
    if (!pathname) continue
    if (!resolveInternalRef(root, pathname)) {
      error(`${page.urlPath}: ødelagt intern ${ref.kind} (${ref.url})`)
    }
  }
}

function checkSitemap(root, pages, baseFromSitemap) {
  const sitemapPath = join(root, "sitemap.xml")
  if (!existsSync(sitemapPath)) {
    error("sitemap.xml mangler i output")
    return { base: baseFromSitemap, locs: [] }
  }
  const { base, locs } = parseSitemap(readFileSync(sitemapPath, "utf8"))
  const effectiveBase = baseFromSitemap || base
  const realPages = new Map()
  for (const page of pages) {
    if (page.aliases || page.isAdmin) continue
    realPages.set(page.urlPath, page)
  }

  for (const loc of locs) {
    if (effectiveBase && !loc.startsWith(effectiveBase)) {
      warn(`sitemap: ${loc} ligger utenfor domenet ${effectiveBase}`)
    }
    let pathname
    try {
      pathname = normalizeUrlPath(new URL(loc).pathname)
    } catch {
      error(`sitemap: ugyldig URL ${loc}`)
      continue
    }
    const resolved = resolveInternalRef(root, pathname)
    if (!resolved) {
      error(`sitemap: ${loc} peker ikke til en eksisterende fil i output`)
      continue
    }
    const page = realPages.get(pathname) || realPages.get(pathname.replace(/\/?$/, "/")) || realPages.get(pathname.replace(/\/$/, ""))
    if (!page) {
      error(`sitemap: ${loc} matcher ingen innholdsside i output`)
      continue
    }
    if (page.aliases) {
      error(`sitemap: ${loc} peker til en alias/redirect-side`)
      continue
    }
    if (page.robots && page.robots.toLowerCase().includes("noindex")) {
      error(`sitemap: ${loc} er noindex og skal ikke stå i sitemap`)
    }
    const canonicalPath = page.canonical ? normalizeUrlPath(new URL(page.canonical, loc).pathname) : null
    if (page.canonical && canonicalPath !== pathname) {
      error(`sitemap: ${loc} canonical peker et annet sted (${page.canonical})`)
    }
  }

  // Noindex-sider må ikke finnes i sitemap (sjekkes per side, ikke bare oppslag).
  const sitemapPaths = new Set(
    locs.map((loc) => {
      try {
        return normalizeUrlPath(new URL(loc).pathname)
      } catch {
        return null
      }
    }),
  )
  for (const page of pages) {
    if (page.aliases || page.isAdmin) continue
    if (page.robots && page.robots.toLowerCase().includes("noindex") && sitemapPaths.has(page.urlPath)) {
      error(`${page.urlPath}: noindex-side er med i sitemap`)
    }
  }

  return { base: effectiveBase, locs }
}

function checkRequiredPages(pages) {
  const urlSet = new Set(pages.filter((p) => !p.aliases && !p.isAdmin).map((p) => p.urlPath))
  for (const required of REQUIRED_PAGES) {
    const path = "/" + required
    if (!urlSet.has(path)) error(`Påkrevd indeksside mangler i output: ${path}`)
  }
}

function check404(pages) {
  const page = pages.find((p) => p.urlPath === "/404.html")
  if (!page) {
    warn("404.html mangler i output")
    return
  }
  if (!page.robots || !page.robots.toLowerCase().includes("noindex")) {
    warn(`404.html er indekserbar (robots: ${page.robots || "ingen"}); bør være noindex`)
  }
}

// Bredde-først crawl fra forsiden over interne sider.
function checkReachability(root, pages) {
  const byPath = new Map()
  for (const page of pages) {
    if (page.aliases || page.isAdmin) continue
    byPath.set(page.urlPath, page)
  }
  const start = "/"
  if (!byPath.has(start)) {
    warn("Kan ikke crawlbarhetskontrollere: forsiden mangler")
    return
  }
  const seen = new Set([start])
  const queue = [start]
  while (queue.length > 0) {
    const current = queue.shift()
    const page = byPath.get(current)
    if (!page) continue
    for (const ref of collectInternalRefs(page)) {
      const { pathname } = splitUrl(ref.url)
      const decoded = normalizeUrlPath(pathname)
      let target = decoded
      if (!byPath.has(target)) target = decoded.replace(/\/?$/, "/")
      if (byPath.has(target) && !seen.has(target)) {
        seen.add(target)
        queue.push(target)
      }
    }
  }
  for (const [path, page] of byPath) {
    // Feilside og noindex-sider er ikke navigasjonsmål og skal ikke lenkes fra forsiden.
    if (path === "/404.html") continue
    if (page.robots && page.robots.toLowerCase().includes("noindex")) continue
    if (!seen.has(path)) warn(`Ikke crawlbar fra forsiden: ${path}`)
  }
}

// ---------------------------------------------------------------------------
// Filer for AI-agenter: llms.txt, index.json og index.txt
// ---------------------------------------------------------------------------

// llms.txt skal beskrive de faktiske sidene. Den genereres fra innholdet, men
// en fri tekst kan fortsatt navngi produkter som ikke finnes, og en mal-endring
// kan gjøre listen ufullstendig. Kontroller at hver innholdsside i sitemap er
// nevnt med sin URL, og at ingen lenke peker på en side som ikke finnes.
function llmsLinkPaths(text) {
  const paths = new Set()
  for (const match of text.matchAll(/\]\((\S+?)\)/g)) {
    try {
      paths.add(normalizeUrlPath(new URL(match[1]).pathname))
    } catch {
      // relativ eller ugyldig lenke håndteres av den generelle lenkekontrollen
    }
  }
  return paths
}

function checkAgentFiles(root, pages, sitemapLocs) {
  const llmsPath = join(root, "llms.txt")
  if (!existsSync(llmsPath)) {
    error("llms.txt mangler i output")
  } else {
    const text = readFileSync(llmsPath, "utf8")
    if (!text.trim()) {
      error("llms.txt er tom")
    }
    const linked = llmsLinkPaths(text)

    // Hver side i sitemap skal være omtalt, ellers får agenten et ufullstendig
    // bilde av nettstedet.
    const missing = []
    for (const loc of sitemapLocs) {
      let pathname
      try {
        pathname = normalizeUrlPath(new URL(loc).pathname)
      } catch {
        continue
      }
      if (pathname === "/" || pathname.endsWith(".xml") || pathname.endsWith(".txt")) continue
      if (!linked.has(pathname)) missing.push(pathname)
    }
    if (missing.length > 0) {
      error(`llms.txt mangler ${missing.length} side(r) fra sitemap: ${missing.slice(0, 5).join(", ")}${missing.length > 5 ? ", …" : ""}`)
    }

    // Lenker i llms.txt må peke på en side som faktisk finnes i output.
    for (const pathname of linked) {
      if (pathname.endsWith(".xml") || pathname.endsWith(".txt")) continue
      if (!resolveInternalRef(root, pathname)) {
        error(`llms.txt lenker til en side som ikke finnes i output (${pathname})`)
      }
    }

    checkLlmsProductClaims(root, text, pages)
  }

  // index.json og index.txt oppgir sidetall. De skal stemme med sitemap, ellers
  // får en agent som bruker tallet som omfang et feil inntrykk.
  const jsonPath = join(root, "index.json")
  if (existsSync(jsonPath)) {
    let data
    try {
      data = JSON.parse(readFileSync(jsonPath, "utf8"))
    } catch (err) {
      error(`index.json kan ikke parses (${err.message})`)
    }
    if (data && typeof data.sitemapPageCount === "number" && sitemapLocs.length > 0 && data.sitemapPageCount !== sitemapLocs.length) {
      error(`index.json: sitemapPageCount er ${data.sitemapPageCount}, men sitemap har ${sitemapLocs.length} oppføringer`)
    }
  }

  const txtPath = join(root, "index.txt")
  if (existsSync(txtPath)) {
    const text = readFileSync(txtPath, "utf8")
    const match = text.match(/^Pages:\s*(\d+)\s*$/m)
    if (match && sitemapLocs.length > 0 && Number(match[1]) !== sitemapLocs.length) {
      error(`index.txt: Pages er ${match[1]}, men sitemap har ${sitemapLocs.length} oppføringer`)
    }
  }
}

// Fri tekst i llms.txt er posisjonering og tone, ikke produktkatalog. Den
// tidligere versjonen listet opp produkter som ikke fantes ("Business &
// Pleasure", "Culture & Fishing") og instruerte agenter i å anbefale dem.
// Fanger den feilen ved å kreve at et navngitt produkt i løpende tekst har en
// tilsvarende side i output.
//
// Produktnavn gjenkjennes som en fetet eller kursiv frase som inneholder et
// produktord. Vanlige ord fra prosa og overskrifter er utelatt med vilje, slik
// at setninger som "private charters" ikke gir falske treff.
const PRODUCT_WORD_RE = /\b(tour|tours|rental|charter|transfer|expedition|adventure|school|services|route|classic|legacy|lifestyle|snowshoe|angling|fishing|bike|e-bike|viking|glacier|hiking)\b/i

function checkLlmsProductClaims(root, text, pages) {
  // Titler som faktisk finnes i output, normalisert for sammenligning.
  const knownTitles = pages
    .filter((p) => !p.aliases && !p.isAdmin && p.title)
    .map((p) => p.title.toLowerCase().replace(/[^a-z0-9æøå]+/g, " ").trim())
    .filter(Boolean)

  const isKnown = (name) => {
    const normalized = name.toLowerCase().replace(/[^a-z0-9æøå]+/g, " ").trim()
    if (!normalized) return true
    return knownTitles.some((title) => title.includes(normalized) || normalized.includes(title))
  }

  // Fetede/kursive fraser, som er slik et produktnavn presenteres i prosa.
  const seen = new Set()
  for (const match of text.matchAll(/\*\*([^*\n]{3,80})\*\*|\*([^*\n]{3,80})\*/g)) {
    const raw = (match[1] || match[2] || "").trim()
    // Fjern en ledende etikett som "Voice:" eller "Identity:".
    const name = raw.replace(/^[A-Za-zÆØÅæøå ]{0,20}:\s*/, "").replace(/[.,;:]+$/, "").trim()
    if (!name || !PRODUCT_WORD_RE.test(name)) continue
    if (/^(the\s+)?(human edge|ai detox|voice|identity|prioritization|accuracy|about)$/i.test(name)) continue
    const key = name.toLowerCase()
    if (seen.has(key)) continue
    seen.add(key)
    if (!isKnown(name)) {
      error(`llms.txt nevner "**${name}**" som et produkt, men ingen side i output har den tittelen`)
    }
  }
}

// ---------------------------------------------------------------------------
// Hovedflyt
// ---------------------------------------------------------------------------

function main() {
  const { outputDir, base } = parseArgs(process.argv.slice(2))
  if (!existsSync(outputDir) || !statSync(outputDir).isDirectory()) {
    console.error(`Output-mappen finnes ikke: ${outputDir}`)
    console.error("Bygg production-output først, f.eks. hugo --gc --minify, og pek på mappen med --dir.")
    process.exit(2)
  }

  const htmlFiles = collectFiles(outputDir).filter((f) => f.toLowerCase().endsWith(".html"))
  const allPages = htmlFiles.map((f) => readPage(outputDir, f))

  const aliases = allPages.filter((p) => p.aliases)
  const adminPages = allPages.filter((p) => !p.aliases && p.isAdmin)
  const contentPages = allPages.filter((p) => !p.aliases && !p.isAdmin)

  for (const page of contentPages) {
    checkRequiredMeta(page, base)
    checkJsonLd(page)
    checkImages(page)
    checkRefs(page, outputDir)
  }
  for (const page of aliases) checkRefs(page, outputDir)
  for (const page of adminPages) checkRefs(page, outputDir)

  checkDuplicates(contentPages)
  checkRequiredPages(allPages)
  check404(allPages)
  const sitemap = checkSitemap(outputDir, allPages, base)
  checkReachability(outputDir, allPages)
  checkAgentFiles(outputDir, allPages, sitemap.locs)

  const effectiveBase = base || sitemap.base || "(ukjent)"
  console.log(`SEO-kontroll av ${outputDir}`)
  console.log(`Domene: ${effectiveBase}`)
  console.log(`HTML-filer: ${allPages.length} (innholdssider ${contentPages.length}, alias ${aliases.length}, admin ${adminPages.length})`)
  console.log(`Sitemap-oppføringer: ${sitemap.locs.length}`)
  console.log(`Feil: ${findings.errors.length}, advarsler: ${findings.warnings.length}`)

  if (findings.errors.length > 0) {
    console.log("\nFeil:")
    for (const msg of findings.errors) console.log(`  ✗ ${msg}`)
  }
  if (findings.warnings.length > 0) {
    console.log("\nAdvarsler:")
    for (const msg of findings.warnings) console.log(`  ! ${msg}`)
  }
  if (findings.errors.length === 0 && findings.warnings.length === 0) {
    console.log("\nIngen tekniske SEO-avvik funnet.")
  }

  process.exit(findings.errors.length > 0 ? 1 : 0)
}

main()