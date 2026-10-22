---
# Ruter som gjør at /llms.txt blir produsert.
#
# Hugo kan ikke gi en output et vilkårlig filnavn, så denne filen finnes bare
# for å peke url-en på en TXT-output med layouten "llms". Alt innhold i
# llms.txt genereres av layouts/_default/llms.txt fra de faktiske sidene, slik
# at filen ikke kan komme ut av sync med aktivitetene.
#
# Filen redigeres derfor ikke i Decap CMS. Den har ingen body.
url: llms.txt
layout: llms
type: page
outputs:
  - TXT
sitemap:
  disable: true
---
