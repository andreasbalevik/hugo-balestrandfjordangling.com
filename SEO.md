# Teknisk SEO

Kontrollen under tester den bygde Hugo-outputen lokalt. Den er ikke en måling av
rangering, trafikk eller hvordan Google faktisk indekserer nettstedet.

## Kommando

Bygg production-output og kjør kontrollen mot den:

```sh
hugo --gc --minify
npm run seo:check
```

Kontrollen leser `public/` og skriver ingenting til kilde eller output. Pek på en
annen mappe med `--dir` og overstyr domenet med `--base`:

```sh
node scripts/seo-check.mjs --dir public --base https://balestrandfjordangling.com
```

Testene av kontrollen selv kjøres med:

```sh
node --test scripts/seo-check.test.mjs
```

## Hva kontrollen gjør

- Leser alle HTML-filer i output, også Hugo-minifisert HTML med uquotede
  attributter, og skiller ekte innholdssider fra alias-/redirect-sider og
  admin-siden.
- Krever `title`, `meta description`, `lang`, `viewport` og absolutt
  `https`-canonical på innholdssider, og at canonical ligger på produksjonsdomenet.
- Sjekker at sitemap-oppføringer finnes som innholdsside med samme canonical, og
  at `noindex`-sider ikke står i sitemap.
- Parser JSON-LD og rapporterer blokker som ikke er gyldig JSON.
- Sjekker interne lenker, bilder, `srcset` og SVG `use` mot filene i output, med
  URL-dekoding for Unicode-URL-er. Eksterne lenker hentes ikke.
- Rapporterer duplikate titler og beskrivelser, manglende `alt`, manglende eller
  feil `viewport`, og om forsiden, activities, inspirations og about finnes.
- Crawler interne sider fra forsiden og varsler om indekserbare sider som ikke
  nås via lenker.

## Hva kontrollen ikke gjør

- Den er ikke en full HTML-validator, og den vurderer ikke innholdskvalitet,
  søkeintensjon eller språk i teksten.
- Den sjekker ikke eksterne lenker (ingen nettverkskall), ikke Core Web Vitals
  og ikke hvordan Google tolker strukturerte data.
- Den krever ikke sitemap `priority` eller `changefreq`; Google bruker dem ikke.
- Den behandler ikke korte eller lange titler og beskrivelser som feil. Duplikater
  rapporteres presist, og lengder bør vurderes manuelt.
- 404 indekserbar og sider som ikke lenkes fra forsiden rapporteres som
  advarsler. Enkelte sider, som bekreftelsessiden, skal ikke lenkes.

## Etter deploy: Google Search Console og verktøy

Disse stegene gjøres i nettleseren mot den live siden og kan ikke verifiseres av
den lokale kontrollen.

1. **Domenebekreftelse.** Bekreft domenet i Google Search Console (DNS- eller
   filbekreftelse) hvis det ikke allerede er gjort. Kontrollen sier ingenting om
   hvorvidt en konto finnes eller er bekreftet.
2. **Sitemap.** Send inn `https://balestrandfjordangling.com/sitemap.xml` under
   Sitemaps, og se at Google leser den uten feil.
3. **URL Inspection.** Bruk den for enkeltsider for å se om Google har indeksert
   dem, og be om indeksering av nye eller endrede sider.
4. **Indexing-rapport.** Følg opp sider med status «Discovered – currently not
   indexed» eller «Crawled – currently not indexed» og se etter årsaker.
5. **Core Web Vitals.** Bruk PageSpeed Insights på den live URL-en etter deploy
   for felt- og laboratoriedata. Den lokale kontrollen måler ikke ytelse.
6. **Rich Results Test.** Test en representativ side live for å se hvilke
   strukturerte data Google godkjenner. Testen bekrefter ikke at et bestemt
   resultat vises i søk.

## Innhold og internlenking

Innholdet bør være skrevet for besøkende først: reell lokal erfaring fra
Balestrand og Sognefjorden, konkrete opplevelser og klar informasjon om
bestilling. Unngå å skrive for søkemotoren eller gjenta søkeord unødig.

Relevant internlenking hjelper både besøkende og Google: lenk fra inspirations til
de aktivitetene de hører sammen med, og fra aktivitetssider tilbake til
inspirasjon og bestilling.

FAQ-strukturerte data er ikke en garanti for et FAQ-resultat i søk. `llms.txt` og
`meta keywords` har ingen dokumentert effekt på rangering og bør ikke tillegges
vekt i SEO-arbeidet.