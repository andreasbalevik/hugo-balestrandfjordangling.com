# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Families, friend groups, and solo travelers visiting Balestrand / the Sognefjord for an authentic, private experience; cruise passengers arriving via Vik are secondary content.

## Product Purpose

The site presents Balestrand Fjord Angling's experiences (angling tours, boat tours, e-bike rental) and turns visitors into booking requests. Booking is by request only: Captain Tor confirms by email within 24 hours; payment on arrival (card only).

## Positioning

Exclusive private tours with a 4th-generation local captain, not mass tourism or self-serve. Rivals can copy "boat tour in the Sognefjord"; they cannot copy the heritage, the review, or the no-middlemen relationship.

## Operating Context

- Hugo static site (theme as git submodule, never edited in place), Tailwind v4, Netlify.
- Edited through Decap CMS (Netlify Identity / git-gateway); pages are CMS-managed, so templates must tolerate editor copy of varying length. CMS copy is English even where i18n keys are Norwegian.
- Email and phone/SMS (+47 900 81 939, SMS only); BackstopJS is manual-only and the impeccable design hook runs on UI edits.

## Capabilities and Constraints

- Pages: home, activities, inspirations, about, tags, booking confirmation, privacy, 404.
- Booking ends in a request confirmation, never payment or instant confirmation.
- `DESIGN.md` is the binding record; Tailwind utilities and shared partials only, no `<style>` blocks.

## Brand Commitments

- Name: Balestrand Fjord Angling; Captain Tor is the face of the product. Voice: warm, first-person family business; normal casing.

## Evidence on Hand

- Press: TV series "People of the North", a KAYAK guide mention, social profiles, a Captain Tor quote. No testimonials, ratings or review scores exist on the site; never fabricate proof.

## Product Principles

1. The family is the product — real people and stories, never stock-looking gloss.
2. Exclusivity through requests — the request flow is a feature, not friction.
3. Heritage is the proof — 4th-generation knowledge leads, not amenities.
4. Simplicity over decoration.

## Accessibility & Inclusion

- Always-visible focus; plain English for international visitors.
