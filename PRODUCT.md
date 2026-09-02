# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Primary: families, friend groups, and solo travelers planning a visit to Balestrand / the Sognefjord who want an authentic, private fjord experience. Cruise passengers arriving via Vik exist as a secondary content audience (inspiration stories address them), but they are not the primary design target.

## Product Purpose

The site presents Balestrand Fjord Angling's experiences (private fjord angling tours, scenic boat tours, e-bike rental) and turns visitors into booking requests. Success is a qualified request the family can confirm personally, not raw volume. Booking is by request only: the visitor asks, Captain Tor checks requests morning and evening and confirms by email within 24 hours. Payment happens on arrival (card only).

## Positioning

Exclusive private tours with a 4th-generation local captain. Not mass tourism, and not self-serve: it is not a matter of course that you get to book — every request is personally reviewed and confirmed. Neighboring operators can copy "boat tour in the Sognefjord"; they cannot truthfully copy the family heritage, the personal vetting, or the direct no-middlemen relationship.

## Operating Context

- Hugo static site (theme as git submodule `balevikit-tailwindcss-hugo-theme`, never edited in place), Tailwind v4, deployed on Netlify.
- Content is edited through Decap CMS (Netlify Identity / git-gateway, writes to `master`); many pages are CMS-managed, so template changes must tolerate editor-supplied copy of varying quality and length.
- Site language is English (international visitors); i18n keys are Norwegian-named (e.g. `tilbake` → "Go back").
- Contact rituals: email and phone/SMS (+47 900 81 939, SMS only); requests checked ~08:00 and ~21:00.
- BackstopJS visual regression is manual-only; the impeccable design detector hook is active on UI edits.

## Capabilities and Constraints

- Pages: home, activities (list + singles), inspirations (list + singles), featured (list + single), about, tags, booking request confirmation, privacy, 404.
- Booking flow ends in a request confirmation, not a payment or instant confirmation — no e-commerce.
- `DESIGN.md` (repo root) is the binding design record for all UI work.
- Layout conventions: Tailwind utilities only, shared partials under `layouts/partials/`, no `<style>` blocks or one-off CSS.

## Brand Commitments

- Name: Balestrand Fjord Angling; the person Captain Tor is the face of the product.
- Voice: personal, warm, direct, first-person family business; ordinary letter casing, no marketing shout.
- Design identity: `DESIGN.md` at repo root is the binding record.

## Evidence on Hand

- Real photography throughout (activity and story bundles under `content/`, `assets/images/`).
- Captain Tor quote band on the home page ("Simplicity creates emotions...").
- Press/proof: featured in the TV series "People of the North" (`content/featured/people-of-the-north-2922/`), KAYAK travel guide mention (inspiration story), social profiles (YouTube, Instagram, Facebook, TripAdvisor in footer).
- No testimonials, ratings, or review scores exist on the site — do not fabricate them.

## Product Principles

1. The family is the product — show real people, real photos, real stories; never stock-looking polish.
2. Exclusivity through requests — the request flow is a feature, not friction; copy and design reinforce personal confirmation.
3. Heritage is the proof — 4th-generation local knowledge is the differentiator; lead with it rather than with amenities.
4. Simplicity over decoration — one honest layout beats clever UI; DESIGN.md arbitrates disputes.

## Accessibility & Inclusion

- Focus must always be visible (identity doc requirement; `focus-visible` outlines are the established pattern).
- International audience: plain English copy, readable type sizes, and content that works without cultural context.
