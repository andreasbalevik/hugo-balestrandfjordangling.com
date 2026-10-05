// Tester for scripts/seo-check.mjs.
//
// Testene bygger små Hugo-lignende output-trær i en midlertidig mappe, kjører
// kontrollen som barneprosess og bekrefter exitkode og utvalgte meldinger.
// Ingen filer i repoet berøres.

import { mkdtempSync, mkdirSync, writeFileSync, rmSync } from "node:fs"
import { tmpdir } from "node:os"
import { join, dirname } from "node:path"
import { spawnSync } from "node:child_process"
import { fileURLToPath } from "node:url"
import test from "node:test"
import assert from "node:assert/strict"

const SCRIPT = fileURLToPath(new URL("./seo-check.mjs", import.meta.url))
const BASE = "https://example.com"

function writeFile(root, rel, content) {
  const full = join(root, rel)
  mkdirSync(dirname(full), { recursive: true })
  writeFileSync(full, content)
}

function page({ title = "Tittel", description = "Beskrivelse", lang = "en", canonical, robots = "index, follow", jsonLd, body = "<h1>Tittel</h1>" }) {
  return `<!doctype html><html lang=${lang}><head><meta charset=utf-8><title>${title}</title>
<meta name=viewport content="width=device-width,initial-scale=1">
${description === null ? "" : `<meta name=description content="${description}">`}
${canonical === null ? "" : `<link rel=canonical href=${canonical}>`}
${robots ? `<meta name=robots content="${robots}">` : ""}
${jsonLd ? `<script type=application/ld+json>${jsonLd}</script>` : ""}
</head><body>${body}</body></html>`
}

function withFixture(files) {
  const root = mkdtempSync(join(tmpdir(), "seo-check-"))
  for (const [rel, content] of Object.entries(files)) writeFile(root, rel, content)
  return root
}

function run(root) {
  const result = spawnSync(process.execPath, [SCRIPT, "--dir", root, "--base", BASE], { encoding: "utf8" })
  return { code: result.status, out: result.stdout + result.stderr }
}

function sitemap(urls) {
  return `<?xml version="1.0" encoding="utf-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls
    .map((u) => `<url><loc>${u}</loc></url>`)
    .join("")}</urlset>`
}

test("god fixture uten avvik gir exit 0", () => {
  const root = withFixture({
    "index.html": page({ canonical: `${BASE}/` }),
    "about/index.html": page({ title: "Om", description: "Om oss", canonical: `${BASE}/about/` }),
    "activities/index.html": page({ title: "Aktiviteter", description: "Aktiviteter", canonical: `${BASE}/activities/` }),
    "inspirations/index.html": page({ title: "Inspirasjon", description: "Inspirasjon", canonical: `${BASE}/inspirations/` }),
    "sitemap.xml": sitemap([`${BASE}/`, `${BASE}/about/`, `${BASE}/activities/`, `${BASE}/inspirations/`]),
  })
  try {
    const { code, out } = run(root)
    assert.equal(code, 0, out)
  } finally {
    rmSync(root, { recursive: true, force: true })
  }
})

test("manglende title, description og canonical gir feil", () => {
  const root = withFixture({
    "index.html": page({ title: "", description: null, canonical: null }),
    "about/index.html": page({ canonical: `${BASE}/about/` }),
    "activities/index.html": page({ canonical: `${BASE}/activities/` }),
    "inspirations/index.html": page({ canonical: `${BASE}/inspirations/` }),
    "sitemap.xml": sitemap([`${BASE}/`]),
  })
  try {
    const { code, out } = run(root)
    assert.equal(code, 1)
    assert.match(out, /mangler <title>/)
    assert.match(out, /mangler meta description/)
    assert.match(out, /mangler rel=canonical/)
  } finally {
    rmSync(root, { recursive: true, force: true })
  }
})

test("ødelagt JSON-LD gir feil", () => {
  const root = withFixture({
    "index.html": page({ canonical: `${BASE}/`, jsonLd: '{"@type":"Thing",}' }),
    "about/index.html": page({ title: "Om", canonical: `${BASE}/about/` }),
    "activities/index.html": page({ title: "Aktiviteter", canonical: `${BASE}/activities/` }),
    "inspirations/index.html": page({ title: "Inspirasjon", canonical: `${BASE}/inspirations/` }),
    "sitemap.xml": sitemap([`${BASE}/`]),
  })
  try {
    const { code, out } = run(root)
    assert.equal(code, 1)
    assert.match(out, /JSON-LD blokk 1 kan ikke parses/)
  } finally {
    rmSync(root, { recursive: true, force: true })
  }
})

test("noindex-side i sitemap gir feil", () => {
  const root = withFixture({
    "index.html": page({ canonical: `${BASE}/` }),
    "about/index.html": page({ title: "Om", canonical: `${BASE}/about/` }),
    "activities/index.html": page({ title: "Aktiviteter", canonical: `${BASE}/activities/` }),
    "inspirations/index.html": page({ title: "Inspirasjon", canonical: `${BASE}/inspirations/` }),
    "privacy/index.html": page({ title: "Personvern", canonical: `${BASE}/privacy/`, robots: "noindex, nofollow" }),
    "sitemap.xml": sitemap([`${BASE}/`, `${BASE}/privacy/`]),
  })
  try {
    const { code, out } = run(root)
    assert.equal(code, 1)
    assert.match(out, /noindex og skal ikke stå i sitemap|noindex-side er med i sitemap/)
  } finally {
    rmSync(root, { recursive: true, force: true })
  }
})

test("ødelagt intern lenke og bilde gir feil", () => {
  const root = withFixture({
    "index.html": page({
      canonical: `${BASE}/`,
      body: '<h1>Hjem</h1><a href="/finnes-ikke/">Død lenke</a><img src="/bilder/mangler.webp" alt="Bilde">',
    }),
    "about/index.html": page({ title: "Om", canonical: `${BASE}/about/` }),
    "activities/index.html": page({ title: "Aktiviteter", canonical: `${BASE}/activities/` }),
    "inspirations/index.html": page({ title: "Inspirasjon", canonical: `${BASE}/inspirations/` }),
    "sitemap.xml": sitemap([`${BASE}/`]),
  })
  try {
    const { code, out } = run(root)
    assert.equal(code, 1)
    assert.match(out, /ødelagt intern lenke \(\/finnes-ikke\/\)/)
    assert.match(out, /ødelagt intern bilde \(\/bilder\/mangler\.webp\)/)
  } finally {
    rmSync(root, { recursive: true, force: true })
  }
})

test("minifisert HTML med uquotede attributter og eksterne lenker gir ikke falske feil", () => {
  const root = withFixture({
    "index.html": `<!doctype html><html lang=en><head><meta charset=utf-8><title>T</title><meta name=viewport content="width=device-width,initial-scale=1"><meta name=description content="D"><link rel=canonical href=${BASE}/><meta name=robots content="index, follow"></head><body><h1>H</h1><a href=/about/>Om</a><a href="https://external.example/x">Ekstern</a><a href="#top">Anker</a><img src=/img/a.webp alt=""><svg><use href=/sprite.svg#icon></use></svg></body></html>`,
    "about/index.html": page({ title: "Om", canonical: `${BASE}/about/` }),
    "activities/index.html": page({ title: "Aktiviteter", canonical: `${BASE}/activities/` }),
    "inspirations/index.html": page({ title: "Inspirasjon", canonical: `${BASE}/inspirations/` }),
    "img/a.webp": "x",
    "sprite.svg": "<svg></svg>",
    "sitemap.xml": sitemap([`${BASE}/`, `${BASE}/about/`]),
  })
  try {
    const { code, out } = run(root)
    assert.equal(code, 0, out)
  } finally {
    rmSync(root, { recursive: true, force: true })
  }
})