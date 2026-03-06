# SEO Forbedringer - 2026 Industristandard

## Gjennomførte endringer

### ✅ 1. Meta Tags (`meta.html`)

#### Forbedret meta description lengde
- **Før**: 160 tegn
- **Etter**: 155 tegn (Google 2026 beste praksis)

#### Lagt til manglende meta tags
- `<meta name="author">` - Angir forfatter
- `<meta name="publisher">` - Angir utgiver
- `<meta property="og:image:type">` - Spesifiserer bilde MIME-type for bedre sosiale medier visning
- `<meta name="twitter:site">` - Twitter/X konto for nettstedet

---

### ✅ 2. Organization Schema (`_organization.html`)

#### Utvidet Organization schema med:
- **contactPoint** - Utvidet med telefon og contactType
- **address** - Full PostalAddress med gate, by, region, postnummer, land
- **sameAs** - Lenker til Instagram og Facebook profiler
- **founder** - Captain Tor Balevik som grunnlegger
- **areaServed** - GeoCircle med 50km radius rundt Balestrand

---

### ✅ 3. Product Schema (`_product.html`)

#### Forbedret Product/TouristTrip schema:
- **sku** - Support for produkt SKU (valgfritt felt i frontmatter)
- **offerCount** - Antall pristilbud i AggregateOffer
- **aggregateRating** - Support for rangeringer og anmeldelser (valgfritt felt i frontmatter)

#### Eksempel frontmatter for å bruke nye felt:

```yaml
product_info:
  sku: "BFA-1720"  # Valgfritt
  duration:
    hours: 1
    minutes: 30
  persons: "7"
  prices:
    - person_number: 1
      price: 3000
    # ... etc

aggregateRating:  # Valgfritt - kun hvis du har anmeldelser
  ratingValue: "4.8"
  reviewCount: "24"
```

---

### ✅ 4. Schema.org URLs

Alle schema.org context URLs oppdatert fra `http://` til `https://`:
- `_website.html` - Oppdatert til https
- `_webpage.html` - Oppdatert til https

---

### ✅ 5. Nye Schema Typer

#### VideoObject Schema (`_video.html`)
Støtte for video rich results. Legg til i frontmatter:

```yaml
video:
  name: "Sognefjord Fishing Experience"
  description: "Experience authentic fjord fishing"
  thumbnailUrl: "https://example.com/thumbnail.jpg"
  contentUrl: "https://youtube.com/watch?v=..."
  embedUrl: "https://youtube.com/embed/..."
  duration: "PT5M30S"  # 5 min 30 sek
  uploadDate: "2026-01-15"
```

#### ItemList Schema (`_itemlist.html`)
Automatisk generert for alle liste-sider (activities/, inspirations/, tags/).
- Viser alle items i listen med riktig strukturert data
- Støtter både Product og Article typer
- Inkluderer pris-informasjon for aktiviteter

---

### ✅ 6. Config.toml

Lagt til nødvendige parametere:

```toml
[Params]
  logo = "/images/varde-experience-quality.png"
  brand_image = "/images/varde-experience-quality.png"
```

---

## Rich Results Støtte

Med disse endringene får du nå støtte for:

### 🎯 Google Rich Results
1. **Product Rich Results** (aktiviteter)
   - Priser vises i søkeresultater
   - Rangeringer (hvis du legger til aggregateRating)
   - Bilder
   - Tilgjengelighet

2. **Article Rich Results** (inspirations)
   - Forfatter
   - Publiseringsdato
   - Bilde
   - Breadcrumbs

3. **LocalBusiness Rich Results** (hjemmeside)
   - Åpningstider
   - Kontaktinformasjon
   - Plassering på kart
   - Tjenester

4. **Video Rich Results** (når du legger til video frontmatter)
   - Video thumbnail i søkeresultater
   - Varighet
   - Upload dato

5. **ItemList Rich Results** (liste-sider)
   - Carousel visning i Google
   - Produkter/artikler i søkeresultater

6. **Breadcrumbs** (alle sider)
   - Navigasjonssti i søkeresultater

---

## Testing av Rich Results

### Google Rich Results Test
1. Gå til: https://search.google.com/test/rich-results
2. Lim inn URL til en side på nettstedet
3. Sjekk at alle schema typer validerer

### Schema.org Validator
1. Gå til: https://validator.schema.org/
2. Lim inn URL eller kildekode
3. Verifiser strukturert data

---

## Beste Praksis for Fremtidig Innhold

### For aktiviteter (activities/)
```yaml
# Minimum required
title: "Din Aktivitet"
description: "Beskrivelse under 155 tegn"
images:
  - src: images/bilde.jpg
    alt: "Beskrivende alt-tekst"
product_info:
  duration:
    hours: 2
    minutes: 0
  persons: "6"
  prices:
    - person_number: 1
      price: 2000

# Anbefalt for bedre SEO
keywords: [keyword1, keyword2, keyword3]
product_info:
  sku: "UNIQUE-SKU"  # Unik produktkode

# Valgfritt - legg til når du har anmeldelser
aggregateRating:
  ratingValue: "4.7"  # Gjennomsnittsrangering
  reviewCount: "15"   # Antall anmeldelser
```

### For inspirations (blog posts)
```yaml
title: "Din Artikkel"
description: "Beskrivelse under 155 tegn"
keywords: [keyword1, keyword2, keyword3]
images:
  - src: images/hovedbilde.jpg
    alt: "Beskrivende alt-tekst"
related_activities:
  - aktivitet-1/index
  - aktivitet-2/index

# Valgfritt - for videoinnhold
video:
  name: "Video tittel"
  description: "Video beskrivelse"
  thumbnailUrl: "/images/video-thumb.jpg"
  contentUrl: "https://youtube.com/watch?v=ID"
  embedUrl: "https://youtube.com/embed/ID"
  duration: "PT3M45S"
```

---

## Neste Steg for Ytterligere SEO-forbedring

1. **Legg til aggregateRating** på populære aktiviteter
2. **Legg til video frontmatter** på sider med YouTube/Instagram videoer
3. **Optimaliser meta descriptions** til 150-155 tegn
4. **Legg til unike SKU** på alle produkter/aktiviteter
5. **Opprett sitemap.xml** (Hugo gjør dette automatisk)
6. **Submit til Google Search Console**
7. **Monitor rich results** i Google Search Console

---

## Validering

Build kjørt uten feil:
```bash
hugo --quiet
# Exit code: 0 ✅
```

Alle endringer er bakoverkompatible - eksisterende innhold fungerer fortsatt.
