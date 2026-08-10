# Visuell identitet: "Fjordklar Editorial"

Dette dokumentet er **fasit** for design- og UI-arbeid på dette nettstedet. Det finnes for at
fremtidige endringer — enten fra et menneske, en janitor-polish eller et redesign-forslag —
kan sjekkes mot en felles retning i stedet for individuell smak. Ved uenighet om et visuelt
valg: dette dokumentet vinner over personlig preferanse.

## Navn og filosofi

**Fjordklar Editorial** — roen fra fjorden møter presisjonen fra et redaksjonelt reisemagasin.

> Nettstedet skal føles som et velredigert reisemagasin skrevet av en lokal, ikke som en
> bookingmotor med marketing-støy oppå. Naturen og fortellingen er hovedpersonen; grensesnittet
> er en stille ramme rundt den.

Tre ord som oppsummerer retningen: **fjordro, presisjon, tillit.**

- **Fjordro:** mye hvitrom, lav visuell temperatur, ingen unødvendig bevegelse eller støy.
- **Presisjon:** konsistente mønstre — samme rolle skal alltid se lik ut, uansett side.
- **Tillit:** ekte naturfoto, lokal stemme (Captain Tor), direkte og ærlig språk — ingen
  "salgs-glans" som undergraver autentisiteten.

### Hvem vi er — og hvem vi bevisst ikke er

Vi er en **liten familiebedrift**, ikke et masseturisme-selskap. Det er ikke en bortforklaring —
det er selve produktet, og designet skal tørre å vise det tydelig:

- **Autentisk fremfor polert.** Ekte stemme, ekte historier, ekte bilder av Captain Tor og
  fjorden. Ikke stockfoto-glans eller generisk "reisebyrå"-språk.
- **Personlig fremfor anonymt.** Du booker med en person, ikke et kontaktskjema i et
  konsern. Direkte kommunikasjon (SMS, e-post fra Tor selv) er en styrke, ikke en mangel på
  skala — vis det frem, ikke skjul det bak et supportsystem.
- **Eksklusivt og privat fremfor delt/pulje.** Alle turer er private, guidede opplevelser —
  **ingen deling med fremmede, ingen samlebåter, ingen puljer**. Dette er en kjernedifferensiator
  mot masseturisme-aktører, og skal være synlig i både tekst og visuelt hierarki (f.eks.
  "Private charter only — no shared boats, no strangers" er et løfte, ikke en fotnote).
- **Trygg fremfor kommersiell.** Guttet av 35 års lokal erfaring og ekte anmeldelser — tillit
  bygges gjennom historie og direkte relasjon, ikke gjennom badges, rabattmerker eller
  urgency-triks ("kun 2 plasser igjen!").
- **Tør å være annerledes.** Vi trenger ikke se ut som et stort cruiserederi eller en
  turoperatør-plattform for å virke seriøse. Det lille, personlige og ekte er selve
  salgsargumentet — design og tekst skal forsterke det, ikke normalisere det bort til å ligne
  konkurrentene.

## Opphav / inspirasjon

Retningen er inspirert av [havilavoyages.com](https://www.havilavoyages.com/) — et premium
norsk reise-/cruisemerke. Det vi låner derfra:

- **Alternerende, rolige fargesoner** mellom seksjoner (myk salvie/pudderblå/krem/marineblå)
  i stedet for én lang hvit side.
- **Store, lette overskrifter** (tynn vekt, god luft) som lar innholdet ta plass uten å skrike.
- **Fotografi som hovedbevis** — ikte-illustrasjoner, ekte skip/fjord/mennesker-bilder som
  fyller store flater.
- **Rolige, avrundede CTA-er** med tydelig men underspilt hierarki (én primærhandling per seksjon).
- **Små uppercase-labels** ("eyebrows") over overskrifter for redaksjonell struktur.

Det vi **ikke** kopierer: Havila er et stort corporate cruisemerke med tett informasjonstetthet
(mange kort, priser, filtre om hverandre) og selger *skala* (store skip, hundrevis av passasjerer,
delte opplevelser). Vi selger det motsatte: **det lille, private og personlige.** Derfor skal
vårt nettsted ha *færre* elementer per skjerm og *mer* luft rundt hver historie enn Havila har,
og aldri bruke visuelle signaler som antyder masseturisme (køer, store grupper, "book nå og spar",
prisrabatt-badges). Det redaksjonelle tempoet er saktere; Captain Tor er en person, ikke en flåte.

## Design-DNA

1. **Fjordro + presisjon** — lavt visuelt støynivå, konsistent rytme, ingen tilfeldige avvik.
2. **Naturtro foto som bevis** — ekte bilder av fjord, båt og folk erstatter dekorative ikoner
   der det er mulig. Foto > illustrasjon > ikon i bevisverdi.
3. **Editorial premium** — store, luftige overskrifter og god linjelengde, som et magasin,
   ikke en SaaS-landingsside.
4. **Bookingklar enkelhet** — én tydelig, rolig handling per seksjon. Aldri flere konkurrerende
   CTA-er i samme visuelle vekt.
5. **Lite, privat og personlig** — hver seksjon skal kunne forsvares med "ville Captain Tor
   sagt dette selv, ansikt til ansikt?". Skala, volum og "flere kunder samtidig" skal aldri
   være det visuelle eller språklige budskapet.

Prioritert rekkefølge når noe må vike: **lesbarhet → tillit → forståelse → handling → dekor.**
Dekor taper alltid mot de fire andre.

## Fargesystem

Tokens er definert i `assets/css/custom.css` (`@theme`) — bruk alltid disse, aldri rå hex-verdier
i layouts.

| Token | Hex | Rolle |
|---|---|---|
| `--color-primary` | `#1e6b80` | Primær CTA, lenker, ikon-aksent, eyebrows |
| `--color-primary-dark` | `#175a6c` | Hover/aktiv variant av primary |
| `--color-fjord` | `#1d3640` | Mørk "statement"-flate, footer, mørk tekst på lys bunn |
| `--color-fjord-light` | `#f0f7fb` | Lys sone nr. 2 (alternerer med hvit) |
| `--color-fjord-pale` | `#deeef7` | Mild aksent-sone / border-farge mellom lyse soner |
| `--color-mist` | `#769ba4` | Dempet sekundærtone (bruk sparsomt) |
| `--color-success` | `#0f7f20` | Bekreftelse, submit-knapper, suksess-tilstander |
| `--color-warning` | `#e8b43a` | Stjerner/rating, varsel-aksent |

**Soneregel (full-bredde seksjoner):**

- Kun disse bakgrunnene er lov: `bg-white`, `bg-fjord-light`, `bg-fjord-pale` (mild aksent),
  `bg-fjord` (mørk — **maks én per side**, en sjelden "statement"-anker).
- To identiske sonefarger skal **aldri** ligge inntil hverandre. Alternér alltid. Der to lyse
  soner må møtes, bruk `border-t border-fjord-pale` for å markere grensen.
- `bg-fjord` er et unntak, ikke en mal — bruk det for én emosjonell "pusterom"-seksjon
  (f.eks. et sitat), ikke som generell mørk variant.

## Typografi

- Fontfamilie: `Inter` (system-sans), definert i temaet (`--font-sans`). Ingen serif — den
  "redaksjonelle" følelsen kommer fra størrelse/luft/vekt, ikke fra en serif-font slik Havila
  bruker. Ikke introduser en ny font uten eksplisitt bestilling.
- Overskrifter: `font-medium` (aldri bold/black), `tracking-tight`, `text-balance`, og alltid
  luft over/under (`mt-0 mb-5 md:mb-6` er standardmønsteret via `section-heading`-partialen).
- Eyebrow-mønster (obligatorisk over seksjonsoverskrifter): `text-sm font-semibold uppercase
  tracking-widest`, farge `text-primary` som standard. Bruk `components/section-heading`-partialen
  — ikke hardkod egne eyebrow-varianter.
- Brødtekst: `leading-relaxed`, `text-pretty`, behagelig linjelengde (`max-w-2xl`/`max-w-4xl`
  på prose-innhold via `components/prose-content`).
- Ingen ALL CAPS på brødtekst eller overskrifter — kun på eyebrows og små UI-labels
  (f.eks. "PRICE FROM").

## Komponenter og mønstre

- **Kort** (`activities/li`, `inspirations/li`): `bg-white`, `border border-fjord-pale`,
  `rounded-lg`, `shadow` → `hover:shadow-md`. Aldri `-translate-y`/`scale` på hover (se
  bevegelsesregel under).
- **Knapper**: bruk alltid `components/buttons/button`-partialen (primary/secondary/submit).
  Primær = `bg-primary` fylt; sekundær = hvit m/border, **kun på farget/mørk bunn** (hvit på
  hvit er usynlig); submit = `bg-success`. Alle har pil-ikon med diskré hover-transform på
  ikonet (ikke hele knappen).
- **Seksjonsoverskrift**: alltid via `components/section-heading` — eyebrow + tittel + kort
  divider-strek (`w-12 h-1 bg-primary rounded-full`) + valgfri beskrivelse.
- **Priser**: format er alltid `<beløp>,- NOK` (ikke `NOK <beløp>,-`) — konsistent på tvers av
  kort, aktivitetsside og bookingskjema.
- **Statement-bånd**: mørk `bg-fjord`-seksjon med stort, tynt sitat i kursiv og en liten
  uppercase kilde-linje. Brukes maks én gang per side.

## Bevegelse og tilstander

- **Minimale hover-effekter.** Ingen bevegelse, skalering eller translasjon
  (`-translate-y-1`, `scale-110`) på kort, knapper eller andre komponenter. Grensesnittet skal
  ikke "hoppe" ved interaksjon. Tillatt: `shadow-md`, enkle fargeoverganger, ikon-mikrobevegelse
  (f.eks. pil som glir 2px).
- **Fokus-tilstander** skal alltid være synlige (`focus-visible:outline-2
  focus-visible:outline-offset-2`) — aldri fjern fokusring for det visuelle utseendets skyld.

## Budskap og tone (henger sammen med design)

Innhold og design skal forsterke hverandre — ikke motsi hverandre. Når tekst/UI kommuniserer
noe, skal det underbygge disse løftene, aldri undergrave dem:

- **Direkte kontakt er en styrke, ikke en unnskyldning.** "Jeg sjekker booking kl. 7 og 22" er
  et ekte, personlig løfte — vis det som sådan (varmt, konkret), ikke gjem det bak et
  anonymt kontaktskjema-språk.
- **Eksklusivitet betyr privat, ikke dyrt-for-dyrt-skyld.** Fremhev "kun deg og Captain Tor" /
  "ingen delte båter, ingen fremmede" som selve verdien — ikke som en liten fotnote nederst.
- **Anmeldelser og historie > rabattmerker.** Tillit bygges med ekte sitater, 35 års erfaring,
  4. generasjons lokal tilknytning — ikke med "Populært valg!"-badges eller nedtellings-timere.
- **Ingen falsk skala.** Ikke bruk språk eller bilder som antyder store grupper, flåter eller
  "hundrevis av fornøyde kunder" — vi er én kaptein, én båt, én familie.

## Fotografi

- Ekte foto av Sognefjorden, båtturer og Captain Tor — aldri stockbilder som ikke matcher
  stedet, aldri illustrasjoner/ikoner som erstatning for foto der ekte bilde er mulig.
- Bilder skal se **naturtro og litt rå** ut (ikke overdrevent retusjert/glossy) — det støtter
  "no middlemen, no scripts"-løftet i innholdet.
- Hero-bilder kan få et mørkt/blurret bakgrunnslag (`images.GaussianBlur` + `Contrast`) bak
  hvite kort for lesbarhet, aldri en flat fargeplate over et skarpt foto.

## Grenser (guardrails)

Gjør:
- Bruk eksisterende tokens, partialer og soneregler før noe nytt introduseres.
- Alternér sonefarger, hold én CTA-vekt per seksjon, behold luft fremfor tetthet.
- Legg til nye seksjoner ved å kopiere nærmeste eksisterende mønster (kort, section-heading,
  knapp-partial) — ikke oppfinn en ny visuell variant for samme rolle.

Ikke gjør:
- Ikke innfør ny font, ny palett eller ny ikonstil uten eksplisitt bestilling — det er
  redesign, ikke polish.
- Ikke legg til bevegelseseffekter (hover-løft, skalering) — de bryter fjordro-prinsippet.
- Ikke hardkod hex-farger i layouts — bruk `@theme`-tokens.
- Ikke stable flere sterke CTA-er eller badges i samme seksjon — det bryter
  "én rolig handling per seksjon".
- Ikke gjør nettstedet tettere/mer "katalog" for å presse inn mer innhold — kurater hardere i
  stedet (færre, større, roligere elementer) fremfor å komprimere avstand.
- Ikke bruk visuelle eller språklige signaler som antyder masseturisme: urgency-tellere,
  "X plasser igjen", rabatt-badges, bilder av store grupper/køer/flåter, eller
  "book nå og spar"-mønstre. Det bryter med at vi er en liten, privat, familiedrevet aktør.

## Hvordan bruke dette dokumentet

- **Før enhver design-/UI-endring:** sjekk om endringen er i tråd med sonereglene, typografien
  og bevegelsesreglene over.
- **Ved polish-oppgaver** (janitor-skill): dette dokumentet er kilde nr. 1 i "source of truth"-
  rekkefølgen (dokumenterte tokens/regler → etablerte komponentmønstre → nærmeste analoge UI →
  dominant mønster i scope).
- **Ved forslag om ny retning:** hvis en endring krever å bryte en regel her, er det et
  produktvalg/redesign — ikke gjør det stille. Flagg det og oppdater dette dokumentet eksplisitt
  hvis retningen endres.
