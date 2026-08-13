# Visuell identitet: "Hjemme ved fjorden"

Dette dokumentet er fasit for design- og UI-arbeid på nettstedet.

## Retning

**Hjemme ved fjorden** skal se ut som nettsiden til en liten familiebedrift som kan fjorden bedre
enn den kan markedsføring. Siden skal være ryddig og lett å bruke, men ikke så polert at den ser ut
som en reisekjede, bookingplattform eller AI-generert bedriftsmal.

Tre ord oppsummerer retningen: **personlig, enkel, ekte.**

- **Personlig:** Det er Tor og familien som svarer, planlegger og gjennomfører turene.
- **Enkel:** Vis det folk trenger for å forstå turen og ta kontakt. Fjern resten.
- **Ekte:** Bruk egne bilder, konkrete ord og erfaring fra fjorden. Litt råhet er en styrke.

Designet trenger ikke være perfekt eller symmetrisk. Små forskjeller i tekstlengde, bildeutsnitt og
rytme kan få stå når de kommer naturlig fra innholdet. Vi skal ikke legge til pynt bare for at alt
skal se mer "ferdig designet" ut.

## Det vi ikke skal ligne

Unngå uttrykket til en stor, profesjonell reiselivsbedrift:

- ingen "premium editorial"-iscenesettelse eller luksusspråk
- ingen dashboard-følelse med mange like kort, badges og filtre
- ingen obligatoriske små uppercase-labels over hver overskrift
- ingen dekorative divider-streker eller ikon-sirkler
- ingen skygger og hover-effekter bare for å få komponenter til å virke mer avanserte
- ingen mørke brand-bånd eller store sitater som gjentar budskapet uten å tilføre informasjon
- ingen urgency, rabatter, kunstig sosialt bevis eller språk som antyder stor skala

Spør ved hvert element: **Ville en liten familiebedrift trengt dette for å forklare turen?** Hvis
svaret er nei, skal det normalt bort.

## Layout

- Bruk enkle tekst- og bildeflater. Foto kan stå direkte i layouten uten å ligge i et "premiumkort".
- Forsidens hero er et bevisst unntak: behold den blurrede fotobakgrunnen og det hvite,
  innrammede innholdskortet.
- Behold det mørke Captain Tor-sitatet på forsiden som et personlig pusterom mellom aktiviteter og
  inspirasjon.
- Behold god luft, men unngå overdrevent store seksjoner som gjør lite innhold monumentalt.
- Kort kan brukes når de gjør en liste lettere å skanne. Bruk da enkel border eller bare bilde og
  tekst; ikke stable border, radius, skygge, badge og hover-animasjon.
- En ujevn siste rad eller ulike tekstlengder er helt greit. Ikke fyll på med dekor for symmetri.
- Navigasjon, booking og praktisk informasjon skal fortsatt være tydelig og tilgjengelig.

## Farger

Tokens ligger i `assets/css/custom.css` og skal brukes fremfor rå fargeverdier i layouts.

| Token | Rolle |
|---|---|
| `--color-primary` | Knapper, lenker og små nyttige aksenter |
| `--color-primary-dark` | Hover/aktiv variant |
| `--color-fjord` | Mørk tekst og sjeldne mørke flater |
| `--color-fjord-light` | Rolig bakgrunn mellom hvite seksjoner |
| `--color-fjord-pale` | Diskré border og mild bakgrunn |
| `--color-mist` | Dempet sekundærtone |
| `--color-success` | Bekreftelse og submit |
| `--color-warning` | Varsler og stjerner når de faktisk trengs |

Hvitt og `bg-fjord-light` er standard. `bg-fjord` brukes bare når innholdet trenger mørk kontrast,
ikke som et automatisk "brand moment".

## Typografi og språk

- Bruk eksisterende sans-serif-font. Ikke introduser en ny font for å skape særpreg.
- Overskrifter skal være tydelige, men ikke unødvendig store. `font-medium` er nok.
- Vanlige setninger og normal bokstavbruk er standard. Uppercase brukes bare på korte, funksjonelle
  etiketter der det faktisk gjør informasjonen lettere å skanne.
- Bruk én tydelig overskrift. Ikke legg til eyebrow og divider som fast oppskriftsdekor.
- Skriv som Tor eller familien ville forklart noe ansikt til ansikt: kort, konkret og vennlig.
- Unngå ord som "curated", "premium", "exclusive", "human edge", "raw luxury", "unfiltered" og
  andre glatte markedsord når et vanlig ord sier det samme.
- Bruk første person når det passer: "we", "Tor" og "our family" er bedre enn anonymt
  selskaps- eller supportspråk.

## Komponenter

- **Lenker og knapper:** bruk den etablerte høyrepilen for å gjøre navigasjon tydelig. En liten
  bevegelse i selve pilen på hover er tillatt; resten av elementet skal stå stille.
- **Kort:** naturfoto, tittel og nødvendig informasjon. Border kan brukes; skygge er normalt ikke
  nødvendig.
- **Seksjonsoverskrifter:** tittel og eventuelt én kort beskrivelse. Ingen obligatorisk eyebrow eller
  dekorativ strek.
- **Aktivitetskategorier:** behold de store fargede knappene på aktivitetslisten. De gjør de tre
  hovedtypene lette å finne og er et bevisst, etablert unntak fra den ellers enkle stilen.
- **Badges og ikoner:** bruk bare når formen formidler informasjon raskere enn tekst, for eksempel
  varighet eller gruppestørrelse. Ikke bruk dem som pynt eller kvalitetsstempel.
- **Sitat:** bruk når det er et faktisk sitat med ny informasjon. Ikke lag et mørkt brand-bånd av en
  generell salgslinje.

## Foto

- Bruk ekte bilder fra Sognefjorden, båten, gjestene og familien.
- Naturlige og litt røffe bilder er bedre enn hard retusjering eller stockfoto.
- La bilder være beviset. Ikke legg dekorative illustrasjoner oppå når fotografiet allerede forteller
  historien.

## Bevegelse og tilgjengelighet

- Ingen løft, skalering eller unødvendig bevegelse på kort og knapper.
- En enkel fargeendring på hover er nok.
- Fokusmarkering skal alltid være synlig.
- Kontrast, lesbarhet, touch-størrelser og bookingflyt skal ikke ofres for det hjemmesnekrede
  uttrykket.

## Arbeidsregel

Før en UI-endring:

1. Fjern heller et unødvendig element enn å restyle det.
2. Gjenbruk eksisterende Tailwind-klasser og tokens.
3. Velg den enkleste løsningen som fortsatt er tydelig og robust.
4. Ikke poler bort personlighet eller naturlige forskjeller.
5. Sjekk at resultatet fortsatt fungerer på mobil og desktop.

Prioritet når noe må vike: **forståelse → tillit → handling → konsistens → dekor.**
