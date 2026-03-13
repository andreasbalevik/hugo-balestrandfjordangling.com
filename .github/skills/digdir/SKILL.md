---
name: digdir-design
description: Retningslinjer fra designsystem.no
---

# Designsystemet.no — Designprinsipper og Retningslinjer

> Hentet fra [designsystemet.no](https://designsystemet.no/no) — tilpasset for bruk med **Tailwind CSS** i stedet for React-komponenter.

---

## Innholdsfortegnelse

1. [Om Designsystemet](#om-designsystemet)
2. [Universell utforming og tilgjengelighet](#universell-utforming-og-tilgjengelighet)
3. [Fargesystem](#fargesystem)
4. [Typografi](#typografi)
5. [Størrelser og spacing](#størrelser-og-spacing)
6. [Border-radius](#border-radius)
7. [Skygger](#skygger)
8. [Opasitet](#opasitet)
9. [Ikoner](#ikoner)
10. [Komponentprinsipper](#komponentprinsipper)
11. [Mønstre (Patterns)](#mønstre-patterns)
12. [God praksis — Innholdsarbeid](#god-praksis--innholdsarbeid)
13. [God praksis — Tilgjengelighet](#god-praksis--tilgjengelighet)
14. [God praksis — Brukerinnsikt](#god-praksis--brukerinnsikt)
15. [Design Tokens / CSS-variabler](#design-tokens--css-variabler)
16. [Tailwind CSS-mapping](#tailwind-css-mapping)

---

## Om Designsystemet

Designsystemet er en felles verktøykasse med grunnleggende UI-komponenter, retningslinjer og mønstre for utvikling av digitale løsninger. Det er åpent og gratis for alle.

### Kjernefilosofi

- **Tilgjengelig og fleksibelt**: Grunnleggende komponenter bygges én gang med høy kvalitet, godt testet og med krav til universell utforming ivaretatt.
- **Tematiserbart**: Støtter ulike identiteter gjennom tema — farger, størrelser, typografi og andre visuelle egenskaper kan tilpasses.
- **Verktøykasse**: Du trenger ikke bruke alt. Plukk ut de delene du har behov for.
- **Felles mønstre**: Ved å etablere felles interaksjonsmønstre på tvers, blir det lettere for brukere å kjenne igjen og forstå hvordan ting fungerer.

### Lagvis bruk

Designsystemet kan brukes:
- **Direkte i løsninger** — enkleste måte å komme i gang.
- **Som fundament for eget designsystem** — du kan gjenbruke strukturen og bygge egne komponenter oppå.

---

## Universell utforming og tilgjengelighet

Designsystemet ivaretar [WCAG-kravene](https://www.uutilsynet.no/wcag-standarden/wcag-standarden/86) og tilbyr veiledning ut over lovpålagte krav.

### Prinsipper

- Universell utforming er en del av hele arbeidsprosessen — fra spesifikasjon til produksjon.
- Komponenter krever spesifikke HTML- og ARIA-attributter, korrekt fokushåndtering og dynamisk annonsering til skjermlesere.
- Tilgjengelige komponenter er bare en del av det å lage tilgjengelige løsninger.

### Synsnedsettelse — viktige hensyn

- **God kontrast**: Forsøk å nå høyere målverdier enn lovkravene. Farger oppleves ulikt selv med lik utregnet kontrast.
- **Ikke kun farge for å formidle informasjon**: Bruk alltid symboler og tekst som hovedmetode, farger som supplement.
- **Plasser innhold til venstre**: Gjør det enklere for brukere med synsnedsettelse å finne innhold.
- **Vær konsekvent**: Funksjoner og innhold skal stå på samme sted på ulike sider og på tvers av tjenester.
- **Begrens dekorative elementer**: For mange visuelle elementer uten mening gjør løsningen uoversiktlig.
- **Velg lesbar font**: Sans-serif fonter som Inter, Arial, Helvetica er best. Sjekk at lignende tegn (I, l, 1) kan skilles.

### Deaktiverte tilstander

- **Unngå deaktiverte tilstander** (`disabled`). De er vanskelige å oppfatte og forstå.
- Bruk heller `readOnly` eller vis feilmeldinger som forklarer hva brukeren må gjøre.

### Kontrast

- **WCAG 2.1 AA**: Tekst mot bakgrunn minst 4.5:1. Ikke-tekst minst 3:1.
- **WCAG 2.1 AAA** (anbefalt): Kontrastforhold på minst 7:1.
- **APCA** (fremtidig WCAG 3.0): Mer presis metode som tar hensyn til forgrunn/bakgrunn, font, størrelse og vekt.
- Designsystemet følger i dag en høyere standard enn kravene (AAA).

### Fokushåndtering

- Bruk synlig fokusring ved tastaturnavigering (`:focus-visible`).
- Designsystemet definerer egne fokus-stiler med inner/outer ring.
- For modaler: sett fokus til første interaktive element eller overskrift ved åpning. Returner fokus ved lukking.

---

## Fargesystem

### Navnestruktur

Fargene er organisert etter **bruksområde**, ikke utseende. Strukturen har tre ledd:

```
[Fargeskala] - [Gruppe] - [Variant]
```

**Fargeskalaer** (standard): `Accent`, `Neutral`, `Brand1`, `Brand2`, `Brand3`, `Success`, `Danger`, `Warning`, `Info`

**Grupper** (bruksområder):

| Gruppe | Bruksområde |
|--------|-------------|
| `Background` | Store flater, bakgrunnslag |
| `Surface` | Elementer over bakgrunn (kort, paneler) |
| `Border` | Rammer og skillelinjer |
| `Text` | Tekst og ikoner |
| `Base` | Solide bakgrunner (knapper, interaktive elementer) |

### Alle 16 fargene per skala

| # | Navn | Bruksområde |
|---|------|-------------|
| 1 | `background-default` | Standard bakgrunnsfarge |
| 2 | `background-tinted` | Bakgrunn med hint av farge |
| 3 | `surface-default` | Standardfarge for overflater/komponenter |
| 4 | `surface-tinted` | Overflater med hint av farge |
| 5 | `surface-hover` | Hover-farge for overflater |
| 6 | `surface-active` | Active-farge for overflater |
| 7 | `border-subtle` | Lav kontrast, kun dekorativt (skillelinjer) |
| 8 | `border-default` | Standard for skjemakomponenter og meningsbærende elementer |
| 9 | `border-strong` | Høy kontrast for ekstra synlighet |
| 10 | `text-subtle` | Tekst/ikon med lavere kontrast |
| 11 | `text-default` | Tekst/ikon med høy kontrast og god synlighet |
| 12 | `base-default` | Solid bakgrunn (den valgte hex-fargen) |
| 13 | `base-hover` | Hover for solide bakgrunner |
| 14 | `base-active` | Active for solide bakgrunner |
| 15 | `base-contrast-subtle` | God kontrast (4.5:1) mot base-default |
| 16 | `base-contrast-default` | God kontrast (4.5:1) mot base-default og base-hover |

### Kontrastgarantier

- `text-default` har alltid god kontrast mot alle `background` og `surface` farger.
- `text-subtle` har god kontrast (4.5:1) mot alle `background`-farger og `surface-default`.
- `border-default` har god kontrast (3:1) mot alle `background`-farger, `surface-default` og `surface-tinted`.
- `border-strong` har god kontrast (3:1) mot alle `background`- og `surface`-farger.

### Fargemodus (Light / Dark)

- Bruk `data-color-scheme="light | dark | auto"` for å sette modus.
- `auto` følger brukerens systeminnstillinger via `prefers-color-scheme`.
- I mørk modus: Surface-fargene blir gradvis lysere. Skygger bør unngås — bruk lyse kanter for hierarki.

### Tre kategorier av komponenter for farge

| Kategori | Beskrivelse | Eksempler |
|----------|-------------|-----------|
| **Eksplisitt** | Bruker dedikerte systemfarger, arver ikke | `Alert`, `ValidationMessage`, `ErrorSummary` |
| **Nøytral** | Alltid nøytrale, påvirkes ikke av arv | `Modal`, `Tooltip` |
| **Cascading** | Arver farge fra nærmeste forelder | Alle andre komponenter |

---

## Typografi

### Font-family

- Anbefalt font: **Inter** (open font license, aktivt community).
- Font er IKKE en del av designsystem-biblioteket — du må importere den selv.

```css
/* Anbefalt hosting via Altinn CDN */
@import url('https://altinncdn.no/fonts/inter/v4.1/inter.css');
```

### Kriterier for fontvalg

- Open font license med aktivt community
- Stor skriftfamilie (light, regular, italic, bold, semibold)
- Gjenkjennelige bokstaver, tall og spesialtegn
- Tydelige overlengder og underlengder
- Synlig forskjell på lignende tegn (I, l, 1)
- Åpne bokstaver som ikke gror igjen (a, e, c)
- Lik strektykkelse i overgangene
- Tabular numbers (monospace tall)
- Variabel font
- God bokstav- og ordmellomrom
- Språkstøtte

### Typografi-konfigurasjon

```css
/* Aktiver hale på liten L for bedre lesbarhet */
font-feature-settings: 'cv05' 1;
```

### Font-vekter

| Variabel | Verdi |
|----------|-------|
| `regular` | 400 |
| `medium` | 500 |
| `semibold` | 600 |

### Heading-stiler

Alle headings bruker `font-weight: 500` og `line-height: 1.3`.

| Størrelse | Letter-spacing |
|-----------|----------------|
| `heading-2xl` | -0.01em |
| `heading-xl` | -0.01em |
| `heading-lg` | -0.005em |
| `heading-md` | -0.0025em |
| `heading-sm` | 0em |
| `heading-xs` | 0.0015em |
| `heading-2xs` | 0.0015em |

### Body-stiler

Alle body-stiler bruker `font-weight: 400`.

| Variant | Line-height | Bruksområde |
|---------|-------------|-------------|
| `body` (standard) | 1.5 | Generell brødtekst |
| `body-short` | 1.3 | Kompakt tekst, UI-elementer |
| `body-long` | 1.7 | Lange lesetekster |

Størrelser: `xl`, `lg`, `md`, `sm`, `xs`

### Line-height verdier

| Variabel | Verdi |
|----------|-------|
| `line-height-sm` | 1.3 |
| `line-height-md` | 1.5 |
| `line-height-lg` | 1.7 |

---

## Størrelser og spacing

Størrelsessystemet er basert på en formel med `base` og `step` verdier:

| Modus | Base | Step |
|-------|------|------|
| `sm` | 16 | 4 |
| `md` | 18 | 4 |
| `lg` | 20 | 4 |

Verdiene beregnes i `rem` for å respektere brukerens nettleserpreferanser.

### Størrelsesskala

Variablene `--ds-size-0` til `--ds-size-15`, samt `--ds-size-18`, `--ds-size-22`, `--ds-size-26`, `--ds-size-30`.

---

## Border-radius

| Variabel | Standardverdi |
|----------|---------------|
| `border-radius-base` | 0.25rem |
| `border-radius-scale` | 0.25rem |
| `border-radius-sm` | beregnet |
| `border-radius-md` | beregnet |
| `border-radius-lg` | beregnet |
| `border-radius-xl` | beregnet |
| `border-radius-default` | beregnet |
| `border-radius-full` | 9999px |

---

## Skygger

Skygger bør brukes **bevisst og konsistent** — de uttrykker at noe ligger over noe annet.

- Skygger kan hjelpe svaksynte til å identifisere komponenter.
- **Ikke bruk skygger i mørk modus** — bruk lyse kanter for hierarki i stedet.

### Skyggeskala

| Nivå | Verdi |
|------|-------|
| `xs` | `0 0 1px 0 rgba(0,0,0,0.16), 0 1px 2px 0 rgba(0,0,0,0.12)` |
| `sm` | `0 0 1px 0 rgba(0,0,0,0.15), 0 1px 2px 0 rgba(0,0,0,0.12), 0 2px 4px 0 rgba(0,0,0,0.1)` |
| `md` | `0 0 1px 0 rgba(0,0,0,0.14), 0 2px 4px 0 rgba(0,0,0,0.12), 0 4px 8px 0 rgba(0,0,0,0.12)` |
| `lg` | `0 0 1px 0 rgba(0,0,0,0.13), 0 3px 5px 0 rgba(0,0,0,0.13), 0 6px 12px 0 rgba(0,0,0,0.14)` |
| `xl` | `0 0 1px 0 rgba(0,0,0,0.12), 0 4px 8px 0 rgba(0,0,0,0.16), 0 12px 24px 0 rgba(0,0,0,0.16)` |

Overflater i høyere "høyder" har større skygger. Lavere overflater har mindre skygger.

---

## Opasitet

| Variabel | Verdi |
|----------|-------|
| `disabled` | 30% |

---

## Ikoner

### Prinsipper

- Velg selv hvilken ikonpakke du vil bruke.
- Anbefalt: [Nav sitt ikonsett](https://aksel.nav.no/ikoner) (900+ ikoner, åpen kildekode).
- Ikoner skal støtte justering i størrelse og fargeendringer.
- Kom i stroke og fill-varianter.

### Tilgjengelighet for ikoner

- Ikoner som er dekorative: bruk `aria-hidden="true"`.
- Ikoner som formidler mening: bruk `aria-label` eller tilhørende tekst.
- [Les Navs guide om tilgjengelig ikonbruk](https://aksel.nav.no/god-praksis/artikler/tilgjengelig-ikonbruk).

---

## Komponentprinsipper

### Tilgjengelige komponenter (42 stk)

Designsystemet inneholder disse grunnkomponentene:

| Kategori | Komponenter |
|----------|-------------|
| **Handlinger** | `Button`, `Link`, `ToggleGroup`, `Chip` |
| **Skjema** | `Input`, `Textfield`, `Textarea`, `Select`, `Checkbox`, `Radio`, `Switch`, `Search`, `Suggestion`, `Field`, `Fieldset` |
| **Navigasjon** | `Breadcrumbs`, `Pagination`, `Tabs`, `SkipLink` |
| **Feedback** | `Alert`, `ValidationMessage`, `ErrorSummary`, `Spinner`, `Skeleton` |
| **Overflater** | `Card`, `Dialog`, `Popover`, `Dropdown`, `Tooltip`, `Details` |
| **Visuelt** | `Avatar`, `AvatarStack`, `Badge`, `Tag`, `Divider` |
| **Data** | `Table`, `List` |
| **Typografi** | `Heading`, `Paragraph`, `Label` |

### Button — retningslinjer

**Bruk:**
- Når brukere skal utføre en konkret handling (lagre, sende inn, åpne dialog).

**Unngå:**
- For navigasjon — bruk `Link` i stedet.
- For filtrering — bruk `Chip`.

**Varianter:**
- `primary` — Viktigste handling. Kun **én per side**.
- `secondary` — Støttehandlinger, ofte sammen med primær.
- `tertiary` — Mest diskret. Bruk med ikon når den står alene.

**Retningslinjer:**
- Én handling per knapp.
- Primærknapp først, unntatt ved Forrige/Neste.
- Kort tekst, maks tre ord. Bruk imperativ form (send, signer, endre).
- Stor forbokstav, aldri ALL CAPS.
- Alle knapper på samme side bør ha unike tekster.
- Ikke deaktiver submit-knappen for validering.

### Link — retningslinjer

**Bruk:**
- For navigasjon til nye sider (internt/eksternt).
- For navigasjon til annet sted på siden.
- For nedlasting av filer.

**Unngå:**
- For handlinger — bruk `Button`.

**Retningslinjer:**
- **Ikke bruk ikon for ekstern lenke** — det misforstås ofte.
- **Unngå å åpne lenker i ny fane**. Unntak: når brukeren risikerer å miste inndata, eller er i en prosess.
- Lenketeksten skal gi mening isolert. Unngå "Klikk her", "Les mer".
- Sett viktige ord (triggerord) først.
- Alle lenker på samme side skal ha unike tekster.

### Alert — retningslinjer

**Varianter:**
- `info` — Nøytral, nyttig informasjon.
- `success` — Bekreftelse av fullført oppgave.
- `warning` — Brukeren bør foreta handling eller være oppmerksom.
- `danger` — Kritisk, hindrer brukeren i å komme videre.

**Retningslinjer:**
- Bruk varsomt — brukere kan forveksle varsler med reklame.
- Konsistent utseende på tvers av produkter.
- Tekst: Fortell hva som skjedde, hvorfor, forsikre brukeren, gi vei ut av problemet.

### Card — retningslinjer

**Bruk:**
- Gruppering av innhold.
- Skille funksjonalitet fra resten av innholdet.
- Navigasjonskort med lenke.

**Unngå:**
- Lange tekstblokker.
- Viktige meldinger (bruk Alert).

### Dialog — retningslinjer

**Modal Dialog — bruk:**
- Bekreftelse av kritisk handling (sletting).
- Brukeren MÅ forholde seg til informasjonen.

**Unngå:**
- Omfattende eller komplekst innhold.
- Varsler som ikke krever handling (bruk Alert).

**Retningslinjer:**
- Begrens bruk — det bryter flyten.
- Alltid synlig lukkeknapp.
- Vurder om dialogen kan lukkes ved klikk utenfor.
- Overskrift bør gjerne være et spørsmål.
- Lukking uten valg = minst destruktive alternativet.

### Table — retningslinjer

**Bruk:**
- Sammenligning av informasjon.
- Data i rader og kolonner.

**Unngå:**
- Layout-formål.
- Lite data som passer bedre i liste/kort.

**Retningslinjer:**
- Innhold venstrejustert, unntak: tall høyrejusteres.
- Hold celleinnhold kort og presist.
- Bruk `<th>` for overskriftceller.

### Heading — retningslinjer

- Bruk overskrifter for å dele innhold i logiske seksjoner.
- Bruk riktige semantiske nivåer (h1-h6).
- `<h1>` beskriver hele sidens innhold.
- Start med nøkkelord for enklere skumlesing.
- Kort og tydelig.

---

## Mønstre (Patterns)

### Obligatoriske og valgfrie skjemafelt

**Generell retningslinje:** Unngå å be om informasjon du ikke trenger. Unngå valgfrie felt.

**Scenario 1: Kun obligatoriske felt**
- Informer tydelig i toppen: "Alle felt må fylles ut".
- Bruk f.eks. en gul tag.
- Ikke merk hvert enkelt felt.
- **Unngå** begrepene "Obligatorisk" og "Påkrevd".

**Scenario 2: Kombinasjon av obligatoriske og valgfrie**
- Merk alle felt hver for seg: "Må fylles ut" eller "Valgfritt".
- Bruk gul tag for "Må fylles ut", blå for "Valgfritt".
- **Ikke bruk stjerne (\*)** for å markere obligatoriske felt.
- **Unngå** begrepene "Obligatorisk" og "Påkrevd".

### Brukerutløste feilmeldinger

**Prinsipper:**
- Beskriv problemet på en lettforståelig måte.
- Forklar hva brukeren må gjøre for å komme videre.
- Feilmeldingen skal være lett synlig.

**Utseende:**
- Vis feilmelding under feltet med feil.
- Bruk tykkere kant, rød farge, ikon som visuell indikator.
- Rød tekst krever minst 4.5:1 kontrast. Felt krever 3:1 mot bakgrunn.

**Timing:**
- Vis feilmeldinger når brukeren forlater feltet eller forsøker å gå videre.
- **Ikke vis feilmelding mens brukeren fyller ut**.
- Ikke vis feilmelding for tomme obligatoriske felt før brukeren forsøker å gå videre.

**Oppsummering:**
- Vis oppsummering nær Neste/Send inn-knappen.
- Lenker i oppsummeringen skal gå direkte til feltet.
- Feil forsvinner fra oppsummeringen etter hvert som de fikses.

**Kode:**
- Bruk `aria-invalid="true"` på felt med feil.
- Bruk `aria-describedby` for å koble feilmelding til felt.
- Bruk `aria-live="polite"` for dynamiske feilmeldinger.
- **Ikke deaktiver submit-knappen** for validering.

**Forebygging:**
- Gi relevant informasjon før brukeren starter.
- Bruk ledetekster og beskrivelser.
- Godta ulik formatering (datoer, telefonnummer).
- La brukere ta pause eller avbryte.
- Vis info om maks tegn under ledeteksten.

### Systemvarsler

**Alvorlighetsgrader:**

| Grad | Beskrivelse | Presentasjon |
|------|-------------|--------------|
| **A) Kritisk** | Hele/store deler av systemet påvirket | Feilside eller modal Dialog |
| **B) Viktig** | Midlertidige feil påvirker opplevelsen | Global Alert øverst, eller modal for valg |
| **C) Info** | Planlagt vedlikehold, oppdateringer | Alert |

**Språk for systemvarsler:**
- Fortell kort hva som er galt og hvordan brukeren kommer videre.
- Vær tydelig på at feilen ikke er brukerens feil.
- Unngå humor.
- Unngå "vennligst" — skriv "Du kan kontakte brukerstøtte".
- Oppgi kontaktinfo og eventuell feilkode.

**Feilsider:**
- Fortell hva som er galt og hvordan det påvirker brukeren.
- Gi brukeren alternativer (laste på nytt, gå tilbake, kontakte support).
- 404-sider: tilby søk, forslag til sider, lenke til forside.

**Kode for systemvarsler:**
- Statiske varsler (ved sidelasting): ingen spesielle attributter nødvendig.
- Dynamiske varsler: bruk `role="alert"` (kritisk) eller `role="status"` (mindre alvorlig).
- Plasser `role="alert"` på tom `<div>` ved sidelasting, fyll med innhold dynamisk.

---

## God praksis — Innholdsarbeid

### Skriveråd

- **Test på ekte brukere**: Test tidlig, hyppig, med reell tekst.
- **Hvem gjør hva**: Skriv aktivt, bruk "du" og "vi". Unngå passivt språk.
- **Unngå substantivsjuken**: Skriv "Vi har behandlet søknaden" i stedet for "Vi har foretatt en behandling av søknaden".
- **Verb tidlig**: Sett verbet så tidlig som mulig i setningen.

### Skumlesing

1. **Punktlister** for oppramsing. Maks én setning per punkt.
2. **Korte ord**: Velg enkle ord. Bruk de ordene brukerne bruker.
3. **Korte setninger**: Ett poeng per setning. Maks ~15 ord.
4. **Ett tema per avsnitt**: Maks 3-4 setninger.
5. **Meningsbærende overskrifter**: Skal gjengi innholdet i avsnittet.
6. **Unngå** store bokstaver, kursiv og overdreven bruk av fet tekst.

### Tegnsetting i mikrotekster

| Element | Punktum? | Merknad |
|---------|----------|---------|
| Titler/overskrifter | Nei | Unngå utropstegn |
| Ingress under titler | Ja | Vanlige setninger |
| Ledetekster (labels) | Nei | Aldri kolon eller utropstegn. Stor forbokstav. |
| Beskrivelser under ledetekster | Ja | Vanlige setninger |
| Hjelpetekster | Ja | Vanlige setninger |
| Meldinger (info/validering/feil) | Ja | |
| Knappenavn | Nei | |
| Details/accordion innledning | Nei | Regnes som overskrift |
| Details/accordion innhold | Ja | Vanlige setninger |

### Vanlige begreper — anbefalinger

| Handling | Anbefalt begrep | Merknad |
|----------|-----------------|---------|
| Slette | **Slett** | Ikke bruk "Fjern". Ett begrep for én handling. |
| Navigere fremover/bakover | **Neste / Forrige** | Nynorsk: Neste / Tilbake |
| Navigere i brødsmulesti | **Gå til [sted]** | Skiller fra "Neste" i flyt |
| Redigere | **Endre** | Kort og kjent for alle |
| Lukke | **Lukk** | For modaler |
| Vise/skjule | **Vis / Skjul** | I trekkspillister/nedtrekk |

**Tilgjengelighet for begreper:**
- Gi kontekst med `aria-label` når kun verb vises: "Slett søknaden", "Lukk produktoversikten".

---

## God praksis — Tilgjengelighet

### CSS Hjelpeklasser (repliker i Tailwind)

| Klasse | Funksjon | Tailwind-ekvivalent |
|--------|----------|---------------------|
| `ds-sr-only` | Skjuler visuelt, tilgjengelig for skjermlesere | `sr-only` |
| `ds-focus` | Fokusring ved tastaturnavigering | `focus-visible:ring-2 focus-visible:ring-offset-2` |
| `ds-focus--inset` | Fokusring innenfor elementet | Tilpass med `ring-inset` |

### CSS Layers

Designsystemet bruker CSS `@layer` for lav spesifisitet, slik at egen styling lett kan overstyre. Anbefalt: legg din CSS reset i en layer og sorter den først.

---

## God praksis — Brukerinnsikt

### Digitalt sårbare brukergrupper

Ved å lage tjenester for disse gruppene, gjør vi det lettere for alle:

1. **Eldre** — må overta digitale oppgaver de ikke er vant med
2. **Unge** (16-24) — møter forvaltningen for første gang uten støtte
3. **Innvandrere** — svake norskferdigheter
4. **Utenfor arbeidslivet** — svekket konsentrasjon/hukommelse
5. **Pårørende/hjelpere** — vil hjelpe, men mangler fullmakter
6. **Verger** — forvalter mange, møter digitale barrierer

### ResearchOps — prinsipper

- Kartlegg modenhetsnivået i organisasjonen.
- Lag struktur og prosess for scope.
- Bygg et solid brukerrekrutteringsteam.
- Tenk utover design — inkluder alle som jobber med brukerinnsikt.
- Del og gjør innsikten nyttig — dokumenter grundig.

---

## Design Tokens / CSS-variabler

Alle variabler som genereres av Designsystemet:

### Fargevariabler

```css
--ds-color-background-default
--ds-color-background-tinted
--ds-color-surface-default
--ds-color-surface-tinted
--ds-color-surface-hover
--ds-color-surface-active
--ds-color-border-subtle
--ds-color-border-default
--ds-color-border-strong
--ds-color-text-subtle
--ds-color-text-default
--ds-color-base-default
--ds-color-base-hover
--ds-color-base-active
--ds-color-base-contrast-subtle
--ds-color-base-contrast-default
```

### Størrelsesvariabler

```css
--ds-size-0 through --ds-size-15
--ds-size-18, --ds-size-22, --ds-size-26, --ds-size-30
--ds-size-unit
```

### Border-radius

```css
--ds-border-radius-sm
--ds-border-radius-md
--ds-border-radius-lg
--ds-border-radius-xl
--ds-border-radius-default
--ds-border-radius-full
```

### Skygger

```css
--ds-shadow-xs
--ds-shadow-sm
--ds-shadow-md
--ds-shadow-lg
--ds-shadow-xl
```

### Typografi

```css
--ds-font-family
--ds-font-weight-regular     /* 400 */
--ds-font-weight-medium      /* 500 */
--ds-font-weight-semibold    /* 600 */
--ds-line-height-sm           /* 1.3 */
--ds-line-height-md           /* 1.5 */
--ds-line-height-lg           /* 1.7 */
--ds-letter-spacing-1 through --ds-letter-spacing-9
```

### Opasitet

```css
--ds-opacity-disabled  /* 30% */
```

---

## Tailwind CSS-mapping

Her er en veiledning for å mappe Designsystemets prinsipper til Tailwind CSS:

### tailwind.config.js — forslag

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        // Body sizes (bruk med tilhørende line-height)
        'body-xs': ['0.75rem', { lineHeight: '1.5', letterSpacing: '0.0015em' }],
        'body-sm': ['0.875rem', { lineHeight: '1.5', letterSpacing: '0.0025em' }],
        'body-md': ['1rem', { lineHeight: '1.5', letterSpacing: '0.005em' }],
        'body-lg': ['1.125rem', { lineHeight: '1.5', letterSpacing: '0.005em' }],
        'body-xl': ['1.25rem', { lineHeight: '1.5', letterSpacing: '0.005em' }],
        // Heading sizes
        'heading-2xs': ['0.875rem', { lineHeight: '1.3', letterSpacing: '0.0015em', fontWeight: '500' }],
        'heading-xs': ['1rem', { lineHeight: '1.3', letterSpacing: '0.0015em', fontWeight: '500' }],
        'heading-sm': ['1.125rem', { lineHeight: '1.3', letterSpacing: '0em', fontWeight: '500' }],
        'heading-md': ['1.25rem', { lineHeight: '1.3', letterSpacing: '-0.0025em', fontWeight: '500' }],
        'heading-lg': ['1.5rem', { lineHeight: '1.3', letterSpacing: '-0.005em', fontWeight: '500' }],
        'heading-xl': ['1.875rem', { lineHeight: '1.3', letterSpacing: '-0.01em', fontWeight: '500' }],
        'heading-2xl': ['2.25rem', { lineHeight: '1.3', letterSpacing: '-0.01em', fontWeight: '500' }],
      },
      fontWeight: {
        regular: '400',
        medium: '500',
        semibold: '600',
      },
      boxShadow: {
        'ds-xs': '0 0 1px 0 rgba(0,0,0,0.16), 0 1px 2px 0 rgba(0,0,0,0.12)',
        'ds-sm': '0 0 1px 0 rgba(0,0,0,0.15), 0 1px 2px 0 rgba(0,0,0,0.12), 0 2px 4px 0 rgba(0,0,0,0.1)',
        'ds-md': '0 0 1px 0 rgba(0,0,0,0.14), 0 2px 4px 0 rgba(0,0,0,0.12), 0 4px 8px 0 rgba(0,0,0,0.12)',
        'ds-lg': '0 0 1px 0 rgba(0,0,0,0.13), 0 3px 5px 0 rgba(0,0,0,0.13), 0 6px 12px 0 rgba(0,0,0,0.14)',
        'ds-xl': '0 0 1px 0 rgba(0,0,0,0.12), 0 4px 8px 0 rgba(0,0,0,0.16), 0 12px 24px 0 rgba(0,0,0,0.16)',
      },
      borderRadius: {
        'ds-sm': '0.125rem',
        'ds-md': '0.25rem',
        'ds-lg': '0.5rem',
        'ds-xl': '0.75rem',
        'ds-full': '9999px',
      },
      opacity: {
        'disabled': '0.3',
      },
    },
  },
}
```

### Komponent-til-Tailwind mapping

| Designsystemet | Tailwind-klasser (eksempel) |
|-----------------|----------------------------|
| `Button primary` | `bg-[--base-default] text-[--base-contrast-default] hover:bg-[--base-hover] active:bg-[--base-active] rounded-ds-md font-medium px-4 py-2` |
| `Button secondary` | `border border-[--border-default] text-[--text-default] hover:bg-[--surface-hover] rounded-ds-md font-medium px-4 py-2` |
| `Button tertiary` | `text-[--text-default] hover:bg-[--surface-hover] rounded-ds-md font-medium px-4 py-2` |
| `Alert info` | `bg-[--surface-tinted] border-l-4 border-[--border-default] p-4 rounded-ds-md` |
| `Card` | `bg-[--surface-default] border border-[--border-subtle] rounded-ds-lg shadow-ds-sm p-6` |
| `Input` | `border border-[--border-default] rounded-ds-md px-3 py-2 focus-visible:ring-2 focus-visible:ring-offset-2` |
| `sr-only` | `sr-only` (innebygd i Tailwind) |
| Disabled opacity | `opacity-disabled` → `opacity-30` |
| Fokusring | `focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[--focus-color]` |

### Viktige Tailwind-prinsipper fra Designsystemet

1. **Bruk CSS custom properties** for farger — definer dem basert på Designsystemets token-struktur.
2. **Bruk `data-color-scheme`** attributt på `<html>` eller containere for dark/light mode.
3. **Bruk `prefers-color-scheme`** media query via Tailwinds `dark:` prefix for auto-modus.
4. **Inter-font** med `font-feature-settings: 'cv05' 1` for hale på L.
5. **Størrelser i rem** for å respektere brukerens nettleserpreferanser.
6. **Skygger kun i lys modus** — bruk `dark:shadow-none` med lyse kanter i mørk modus.

---

## Kilder

- [designsystemet.no](https://designsystemet.no/no)
- [Temabygger](https://theme.designsystemet.no)
- [GitHub: digdir/designsystemet](https://github.com/digdir/designsystemet)
- [Nav ikoner](https://aksel.nav.no/ikoner)
- [WCAG 2.1](https://www.w3.org/Translations/WCAG21-no/)
- [UU-tilsynet](https://www.uutilsynet.no/)
