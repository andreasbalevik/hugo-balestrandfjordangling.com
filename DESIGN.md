---
name: Balestrand Fjord Angling
description: "Hjemme ved fjorden — a small family business that knows the fjord better than marketing."
binding: true
colors:
  # Values are the live tokens in assets/css/custom.css (@theme). The ratio in
  # each comment is measured against white — re-measure after any change.
  primary: "#1e6b80"          # 6.05:1 — accent text, links, icons (AA, not AAA)
  primary-dark: "#175a6c"     # 7.73:1 — filled button base (AAA with white text)
  primary-darker: "#0f4250"   # 10.96:1 — hover/pressed for filled buttons
  success: "#0b6519"          # 7.27:1 — submit and booking actions (AAA)
  success-darker: "#07460f"   # 11.10:1 — hover for submit/booking actions
  warning: "#e8b43a"          # 1.91:1 on white — never text on a light surface (9.31:1 on gray-900)
  fjord: "#1d3640"            # 12.70:1 — dark surface (quote band), text on light
  mist: "#769ba4"             # 3.00:1 — icons and graphics only, never text
  fjord-light: "#f0f7fb"
  fjord-pale: "#deeef7"
typography:
  display:
    fontFamily: "Inter, system-ui, -apple-system, sans-serif"
    class: "text-3xl md:text-4xl lg:text-5xl font-medium leading-[1.2] tracking-tight text-balance"
    fontWeight: 500
  headline:
    fontFamily: "Inter, system-ui, -apple-system, sans-serif"
    class: "text-2xl md:text-3xl lg:text-4xl font-medium tracking-tight text-balance"
    fontWeight: 500
  title:
    fontFamily: "Inter, system-ui, -apple-system, sans-serif"
    class: "text-xl md:text-2xl font-medium text-balance"
    fontWeight: 500
  body:
    fontFamily: "Inter, system-ui, -apple-system, sans-serif"
    class: "text-base md:text-lg leading-relaxed"
    fontWeight: 400
  label:
    fontFamily: "Inter, system-ui, -apple-system, sans-serif"
    class: "text-sm font-semibold uppercase tracking-widest"
    fontWeight: 600
rounded:
  md: "6px (rounded-md)"
  lg: "8px (rounded-lg)"
  xl: "12px (rounded-xl — consent dialog only)"
  full: "9999px (rounded-full — divider, dots, icon circles)"
components:
  button-primary:
    backgroundColor: "{colors.primary-dark}"
    textColor: "#ffffff"
    rounded: "{rounded.lg}"
    padding: "12px 24px (md: 16px 32px)"
  button-primary-hover:
    backgroundColor: "{colors.primary-darker}"
    textColor: "#ffffff"
  button-secondary:
    backgroundColor: "#ffffff"
    textColor: "#111827"
    rounded: "{rounded.lg}"
    padding: "12px 24px (md: 16px 32px)"
  button-secondary-hover:
    backgroundColor: "{colors.fjord-light}"
  button-submit:
    backgroundColor: "{colors.success}"
    textColor: "#ffffff"
    rounded: "{rounded.lg}"
    padding: "12px 24px (md: 16px 32px)"
  button-submit-hover:
    backgroundColor: "{colors.success-darker}"
    textColor: "#ffffff"
  card:
    backgroundColor: "#ffffff"
    textColor: "{colors.fjord}"
    rounded: "{rounded.lg}"
    padding: "20px (md: 24px)"
---

# Design System: Balestrand Fjord Angling

## How to use this document

This is the binding record for every visual and interactive decision on the site. It answers three questions: which
tokens and classes exist, which component does what, and how a change is verified. Intent lives here; product truth
(offer, audience, positioning) lives in [PRODUCT.md](PRODUCT.md). Where this document describes a value, that value was
read from the code or measured in a browser — not estimated.

- The tokens are defined once, in `assets/css/custom.css` (`@theme`). Templates use the resulting Tailwind utilities.
- The theme (`themes/balevikit-tailwindcss-hugo-theme/`) is a **submodule and must never be edited from this repo**.
  Where the theme's defaults need to change, the project overrides them — for example the prose link default below.
- Anything this document calls an exception is pinned on purpose. Do not "clean it up" in passing.

## Overview

**Creative North Star: "Hjemme ved fjorden" (Home by the fjord)**

The site should look like the website of a small family business that knows the fjord better than it knows marketing.
Tidy and easy to use, but never so polished it could be mistaken for a travel chain, a booking platform, or a generated
company template. Three words summarize the direction: **personal, simple, real.** Personal — Tor and the family answer,
plan, and run the tours. Simple — show what people need to understand the trip and get in touch; remove the rest. Real —
own photos, concrete words, experience from the fjord; a little roughness is a strength.

The design does not need to be perfect or symmetrical. Small differences in text length, image crops, and rhythm may
stand when they come naturally from the content. No decoration is added just to make things look more "finished".
Confirmed anti-references: premium editorial staging, luxury language, dashboard feel with many identical cards and
badges, mandatory uppercase labels over every heading, decorative divider strokes and icon circles, shadows or hover
effects added to seem advanced, dark brand bands that repeat the message without adding information, urgency, discounts,
artificial social proof, or anything suggesting large scale.

The test for every element: **would a small family business need this to explain the trip?** If no, it normally goes.

**Key Characteristics:**
- Real photos from the Sognefjord, the boat, the guests, and the family — photos are the proof
- White and pale-fjord surfaces; dark band reserved for the personal Captain Tor quote
- Still elements: color change on hover only; only the arrow may move
- One clear heading per section; eyebrow labels and dividers are exceptions, not recipe
- Ordinary sentences and letter casing; written as Tor would explain it face to face

## Site shape

| Route | Layout | What it is |
| --- | --- | --- |
| `/` | `layouts/_default/home.html` | Hero card, category buttons, USP ("Why choose us"), Captain Tor's recommendation, quote band, inspirations + CTA, gallery + Instagram link. The "Featured" band renders only when `featured.enabled: true` (currently `false`). |
| `/activities/` | `layouts/activities/list.html` | Intro copy, `h1`, teal divider, large category buttons, tag-filter disclosure, card grid (`grid-cols-1 md:grid-cols-2 lg:grid-cols-3`) |
| `/activities/<slug>/` | `layouts/activities/single.html` | Hero → price and badges with booking CTA → byline → about (`#about`) → FAQ (`#faq`, only when the activity sets `faqItems`) → practical information (`#practical`) → photo gallery (`#gallery`) → related activities. Every anchored section carries `scroll-mt-[70px] md:scroll-mt-[128px]` so the fixed header does not cover the heading. |
| `/inspirations/`, `/inspirations/<slug>/` | `layouts/inspirations/*` | Stories; single uses the shared prose wrapper |
| `/tags/<tag>/` | `layouts/tags/list.html` | Category listing: a white back link to `/activities/` above the title, then the tag title and description on the tag colour band, then the filtered card grid |
| `/about/` | `layouts/about/section.html` | Family and boat background |
| `/privacy/` | `layouts/_default/page.html` | Privacy statement, including the analytics settings control (`shortcodes/analytics-settings.html`) |
| `/request_confirmation/` | `layouts/request_confirmation/section.html` | Netlify form success page |
| other | `layouts/404.html`, `robots.txt`, `sitemap.xml`, `index.json`, `index.txt`, `llms.txt` | Utility outputs |

**Front matter that drives layout.** Home: `images`, `categories.title`, `usp.items[].icon`, `statement.quote/source`,
`gallery.images`, `inspirations.*`, `featured.enabled`. Activity: `images` (hero + gallery), `tags`, `quality`,
`product_info.duration.hours/minutes`, `product_info.persons`, `product_info.prices[].person_number/price`,
`information.options.*`, `information.practical[]`, `faqItems[]`. Tag: `color` (chip background). All of it is edited in
Decap CMS (`static/admin/config.yml`), which mirrors these fields.

**Critical files**

| File | Owns |
| --- | --- |
| `config.toml` | Site params, taxonomies, output formats, cache busters, `[imaging]` |
| `assets/css/custom.css` | Brand tokens (`@theme`), prose link default, background utilities |
| `assets/js/site-core.js` | Mobile menu, dropdown/disclosure behaviour |
| `assets/js/activity-components.js` | Dialogs, booking modal, carousel, fullscreen gallery |
| `assets/js/analytics-consent.js` | Consent storage and loader injection |
| `layouts/partials/**` | Every component in this document |
| `backstop.json` | Manual-only visual regression reference |

## Colors

A quiet, water-and-slate palette where the teal accent does the useful work and dark tones stay rare. All ratios below
are measured against white (WCAG 2.1: 4.5:1 AA, 7:1 AAA for normal text).

| Token | Value | On white | Use |
| --- | --- | --- | --- |
| `primary` | `#1e6b80` | **6.05:1** | Decoration and graphics: divider bars, icon washes, borders, focus ring. Never text on a light surface. |
| `primary-dark` | `#175a6c` | **7.73:1** | Every accent text and icon tone (links, eyebrows, quality badges, card hover, active nav) and the filled primary button base. |
| `primary-darker` | `#0f4250` | **10.96:1** | Hover/pressed for filled buttons and hover for accent text. |
| `success` | `#0b6519` | **7.27:1** | Submit and booking actions. |
| `success-darker` | `#07460f` | **11.10:1** | Hover for submit and booking actions. |
| `warning` | `#e8b43a` | 1.91:1 | Defined for warnings and stars, currently unused by any template. If it is used, only on dark surfaces (9.31:1 on `gray-900`) — never text on white. |
| `fjord` | `#1d3640` | **12.70:1** | Dark surface (quote band, category chips without a colour) and body text on light surfaces. |
| `mist` | `#769ba4` | 3.00:1 | Icons, rings, and graphics only — exactly 3:1, so never text. |
| `fjord-light` | `#f0f7fb` | 1.08:1 | Calm alternating section surface; hover fill for secondary buttons. |
| `fjord-pale` | `#deeef7` | 1.19:1 | 1px card and input borders. |

Category chip and tag-band backgrounds come from content (`color` in `content/tags/*/_index.md`): `#3b5b44` 7.59:1,
`#2f567c` 7.66:1, `#52526e` 7.52:1, default `#1d3640` 12.70:1. White chip text is `text-xl`, which is still normal
text under WCAG (large text starts at 24px), so **every value must reach 7:1 with white text** — the section band on
`tags/list.html` uses the same colour behind the back link, the page title and the description. The value lives in the
file (the CMS tag collections do not expose it) and each file repeats the rule above the value.

### Named Rules
**The Still Water Rule.** White and `fjord-light` are the standard surfaces. The dark `fjord` band is used only when the
content needs dark contrast (the personal quote), never as an automatic "brand moment".

**The One Accent Rule.** Teal marks what is clickable or worth noticing. If everything is teal, nothing is.

**The Seven-One Rule.** Text on a token surface must reach 7:1 where the palette allows it. `primary` (6.05:1) is the
decoration tone and never text; accent text and icons use `primary-dark` (7.73:1); filled buttons start at
`primary-dark` (7.73:1) so white label text is AAA; `mist` and `warning` are never text on a light surface.

**The Scrim Rule.** Text that sits on a photo is read against a scrim, not the photo. The scrim is sized to the text: the
gradient box spans the text panel plus `-top-32` (128px) above it, and the veil is `from-fjord/90 via-fjord/65
to-transparent` by default, so the veil is 90% brand fjord at the bottom of the box, 65% at the middle and transparent
at the top. This is the softer production tone, deliberately weakened from the earlier flat-95% floor: the photograph
keeps more of the frame, but the lower half of the panel is where the lighter lines sit, so contrast depends on where a
line lands. Composite the worst case — a white pixel of the photo behind the veil — white text reaches 9.33:1 at the
90% bottom stop and 4.33:1 at the 65% middle stop, between them the value falls off linearly. The description, title
and label sit low in the panel (near the bottom stop, ~9:1 or better); the tag row sits highest and is the weakest
point, so treat the top of the panel as decoration-tolerant and keep the readable words near the bottom. The panel
participates in the layout, so a longer title or larger text grows the gradient with it — the scrim is never detached
from the words it protects. Because the hero's minimum height at `md` and up matches the old photo crop
(`md:min-h-[min(66.667vw,620px)]`, `lg:min-h-[min(56.25vw,700px)]`) and the panel can exceed it, the section grows
instead of clipping. If the AAA guarantee behind the overlay words is to be restored, use `from-fjord/95 via-fjord/95
via-65%` (the previous default), which holds 86–95% behind the whole panel and measured 8.3:1 or better at every hero
instance. Below `md` the scrim is `hidden`, so the mobile panels are unchanged: the fjord panel measures 12.7:1 and the
390px white glass panel 8.05:1 with `gray-900` text. At 200% text the hero grows (classic 902px, story 755px, People of
the North 841px at 1440) and no text leaves the frame. Do not stack a second scrim layer on the gradient: one continuous
curve is what keeps the photo from showing an edge.

**The Photo Stays Central Rule.** An overlay never turns a photograph into a flat block of colour, and it never draws a
line across one. The hero has a single gradient layer, so the transition is one continuous curve; a second layer with a
shorter fade of its own would step the composite wherever that fade met the photo. The veil is dark only behind the text
band and gone 128px above it, so the photograph keeps the whole upper part of the frame untouched and the transition
stays a curve — the photo is spent on the text band, not on the frame. The panel is sized to its text, not to the
section, and an overlay hero on a narrow screen keeps a floor height for the photo, so a 16:9 frame is not swallowed by
the panel on a phone. Where a new text-over-image surface is added, size the scrim to the text and let one gradient
carry the blend.

## Typography

**Font:** Inter, falling back to `system-ui, -apple-system, sans-serif` (`--font-sans`). Do not introduce a new font to
create character; the character comes from the words and photos. Body base is `16px`, line-height `1.625`, headings at
weight `500` with letter-spacing `-0.015em`.

### Hierarchy
| Role | Classes | Where |
| --- | --- | --- |
| Display | `text-3xl md:text-4xl lg:text-5xl font-medium leading-[1.2] tracking-tight text-balance` | Page `h1`: activities list. The hero's `text-3xl` form belongs to its `alwaysOverlay` variant, which no page uses; every hero is the default `text-2xl md:text-4xl lg:text-5xl text-white` with the panel in flow under the image on mobile (`mobileBg: "white"` starts at `text-gray-900` and turns white from `md` up). |
| Headline | `text-2xl md:text-3xl lg:text-4xl font-medium tracking-tight text-balance` | Section `h2` from `section-heading.html` |
| Title | `text-xl md:text-2xl font-medium text-balance text-gray-900 group-hover:text-primary-dark transition-colors duration-200` | Card titles (`h2` in the list templates), compact panels |
| Body (prose) | `prose md:prose-lg lg:prose-xl max-w-4xl mx-auto` with `leading-relaxed` | Article and activity description |
| Body (UI) | `text-base md:text-lg leading-relaxed` | Descriptions, form labels |
| Body on a tinted surface | `text-gray-800` (never `text-gray-900/80`) | Section descriptions; `fjord-light` bands |
| Small | `text-sm leading-relaxed text-gray-700` | Card summary (`line-clamp-3`), meta rows |
| Label | `text-sm font-semibold uppercase tracking-widest` | Eyebrow, quality badge |
| Micro | `text-xs font-medium text-gray-700` | "From" above a price |

Prices are formatted by `components/format/price.html`: values ≥ 10 000 are printed with a space as the thousands
separator (`12000` → `12 000`), everything else as-is. Always call the partial instead of formatting inline.

### Named Rules
**The Plain Speech Rule.** Ordinary sentences and normal letter casing. Write like Tor explaining something face to
face: short, concrete, friendly. Avoid "curated", "premium", "exclusive", "human edge", "raw luxury", "unfiltered" and
other glossy marketing words when a plain word says the same.

**The One Heading Rule.** One clear heading per section. Do not add eyebrow and divider as fixed recipe decoration.

## Layout

Simple text and image surfaces; photos may stand directly in the layout without living in a "premium card". Sections
alternate white and `fjord-light` inside the standard `.container` (max-width 1280px, padding 1rem, block padding
3rem → 4rem at `lg` → 5rem at `2xl`); at `2xl` the horizontal padding drops to 0 because the container hits its
max-width. Avoid oversized sections that make little content look grandiose.

Cards may be used when they make a list easier to scan (image grids use `md:grid-cols-2` / `lg:grid-cols-3`); an uneven
last row or differing text lengths is fine — never pad with decor for symmetry. The header is fixed at 70px
(`h-[70px]`, page offset `mb-[70px]` / `mt-[70px]`) with clear navigation, booking, and practical information. The home
page hero is a deliberate exception: blurred photo background with the white framed content card stays as is.

### Images

Photographs are the main attraction on every page. They are real pictures of the fjord, the boat, the guests and the
family, shown large and sharp, and nothing in the layout competes with them: no tint, overlay or blur is placed on a
photo that carries content.

Delivery lives in `components/images/image.html`, a project override of the theme partial. Four presets, cropped with
`Fill` to calm ratios (3:2 or 16:10) and shipped as WebP with a JPEG fallback:

| Preset | ≥1024px | 640–1023px | <640px | Used by |
| --- | --- | --- | --- | --- |
| `hero` | 1920×1080 | 768×512 | 640×400 | Activity hero, activity gallery |
| `card` | 720×520 | 720×520 | 480×320 | Inspiration card, featured single, home hero card |
| `thumbnail` | 720×480 | 720×480 | 560×373 | Activity cards, booking dialog |
| `square` | 600×600 | 600×600 | 400×400 | available, currently unused |

Every tier exists at 1x and 2x — `quality` 85/80/75 for 1x (`thumbnail` 88/85/82) and 75/70/65 for 2x — so the browser
can always pick a file at least as wide as the box it fills. That includes high-density screens, where a card is
otherwise upscaled, and the 640–1023px range, where the single-column grid makes a card photo wider than the smallest
tier. Each `<img>` carries `width`/`height` from the processed resource, so space is reserved before the bytes arrive.
`hero` is `loading="eager" fetchpriority="high"`; every other preset is `loading="lazy"`.

Alt text is required for anything informative and empty only for genuinely decorative or redundant images. The
description names what is in the frame, not what it means or how it feels.

**The Photograph Leads Rule.** A photo that carries content is never soft, blurred, flattened by compression, or hidden
behind decoration. The one deliberate exception is the home hero backdrop — a `Resize "x600 q10 webp"` with
`GaussianBlur 50` — which is a pinned backdrop for the white framed card; the photo inside that card is the sharp one.
Text over a photo is the other sanctioned overlay: one gradient in the brand fjord holds 86–95% behind the text panel and
fades to nothing across the top third of its box, so the photo keeps everything above the text band — see The Scrim Rule
and The Photo Stays Central Rule.

## Elevation & Depth

The system is essentially flat. Depth is conveyed by tonal layering — white cards on pale-fjord sections, a discreet
`fjord-pale` border — not by shadow theater. Five shadow levels are in use, all static:

| Level | Used for |
| --- | --- |
| `shadow-sm` | The USP cards on the home page and the category chips on `/activities/` |
| `shadow` | The site default: cards, prose images, dropdown, booking panel, page wrapper, the circular carousel controls and the Varde quality box |
| `shadow-lg` | The floating fullscreen trigger on gallery images (white circle over a photo) |
| `shadow-xl` | The home page hero card |
| `shadow-2xl` | The analytics consent dialog only, because it floats above a dimmed page |

`drop-shadow` / `md:drop-shadow-lg` on hero text is legibility over photos, not elevation. Inspiration cards
deliberately carry **no** shadow: border plus image is enough there.

### Named Rules
**The Standing Still Rule.** No lift, scaling, shadow growth, or unnecessary movement on cards and buttons. A simple
color change on hover is enough. The one permitted motion is a small nudge of the arrow itself
(`transition-transform duration-300 group-hover:translate-x-1`, `translate-x-0.5` on cards); the rest of the element
stands still. Focus is always visible: `focus-visible:outline-2 focus-visible:outline-offset-2` in `primary` (or white
on dark surfaces).

## Shapes

Gently rounded corners everywhere: `rounded-lg` (8px) on cards, buttons, inputs, dialogs; `rounded-md` (6px) on small
hero badges; `rounded-xl` (12px) on the consent dialog; `rounded-full` only for functional pills — the teal section
divider (`w-12 h-1 bg-primary rounded-full`), carousel dots, avatar circle. A 1px `fjord-pale` border defines cards and
inputs; images clip to the card's rounded top (`overflow-hidden`) at calm aspect ratios (3:2 or 16:10).

## Components

Every component is a partial under `layouts/partials/`. Reuse these; do not re-create their markup inline.

### Buttons — `components/buttons/button.html`, `components/buttons/booking.html`
| Variant | Element | Base | Hover | Notes |
| --- | --- | --- | --- | --- |
| `primary` | `<a>` | `bg-primary-dark text-white` | `bg-primary-darker` | Default. Right arrow after the label, nudges `translate-x-1`. |
| `secondary` | `<a>` | `bg-white border border-fjord-pale text-gray-900` | `bg-fjord-light` | Only on colored/dark surfaces — white on white is invisible. |
| `submit` | `<button type="submit">` | `bg-success text-white` | `bg-success-darker` | Form submission only. |
| booking | `<button>` with `data-modal-target="crud-modal"` | `bg-success text-white`, `min-h-11` | `bg-success-darker` | Use instead of `button.html` whenever the action opens the booking dialog. |

All variants: `rounded-lg`, `font-semibold text-base md:text-lg`, padding `px-6 md:px-8 py-3 md:py-4`,
`transition-colors duration-200`, `focus-visible:outline-2 focus-visible:outline-offset-2`, `no-underline` (links),
arrow `w-4 md:w-5 h-4 md:h-5` with `transition-transform duration-300 group-hover:translate-x-1`.

Every `<button>` and every `<select>` carries `cursor-pointer`; links get the pointer from the browser. Tailwind v4's
preflight no longer sets a pointer cursor on `<button>`, so without the utility the browser draws the default arrow on
a control that is clickable. Theme controls we do not override need a project override for the same reason — see
`components/to-top-button.html`.

The label is `text-white` in every filled variant, and white text meets AAA exactly because the backgrounds start at
8.2:1 (`primary-darker`) or better. Do not "brighten on hover": `primary` (6.05:1) and lighter shades drop below the
AAA text contrast the buttons meet at rest.

### Cards
**Activity card** (`layouts/activities/li.html`) — `article` with `bg-white border border-fjord-pale rounded-lg
overflow-hidden shadow group focus-within:ring-2 focus-within:ring-primary`; image flush to the top, content
`p-5 md:p-6`, meta row `text-sm text-gray-700`, title as the Title role, description `line-clamp-3`, price row on a
`border-t border-fjord-pale pt-4` with "From" + min price + "View experience" (`mt-auto`, arrow nudges
`translate-x-0.5`). The whole card is one link. Minimum price = lowest `product_info.prices[].price`.

**Inspiration card** (`layouts/inspirations/li.html` and the explore/archive grids in `layouts/inspirations/list.html`)
— same shape without the shadow and without the price row. Both listing grids use the Title scale
(`text-xl md:text-2xl`) and `p-5 md:p-6`; the archive's shorter descriptions do not change those roles.
The "Read story" link pins to the bottom (`mt-auto pt-1`). The `/featured/` card keeps its shadow and uses the same
20px mobile / 24px desktop content padding.

### Chips, badges and labels
- **Meta badges** (`activity/meta-badges.html`) — icon + `font-medium` text, no pill chrome: `Duration 1h 30m`,
  `Your group · up to 7`. Teal icon (`w-4 h-4 text-primary-dark`), `aria-hidden`.
- **Quality badge** (`activity/quality-badge.html`) — `text-sm font-semibold text-primary-dark uppercase tracking-widest`,
  one line above the title on the activity page. The value is free text from `quality:` in front matter.
- **Category buttons** (`components/tag-buttons.html`) — `grid-cols-1 md:grid-cols-2 lg:grid-cols-3`, each a link
  wrapping a `text-xl text-white p-6 text-center rounded-lg shadow-sm border border-black/5` block whose
  `background-color` comes from the tag's `color`. A deliberate, established exception to the otherwise quiet style:
  keep them.
- **Activity highlight tag band** (`activities/highlight.html`, `activity/highlight-related.html`) — chips along the
  bottom edge of the card photo, inside a `pt-8 pb-4` strip with `bg-gradient-to-t from-black/50 to-transparent`. The
  band is sized to the chip row and the chips carry their own tag `color`, so the scrim only separates them from the
  photo; it never veils the image on their behalf.
- **Filter button** (`activities/list.html`, `tags/list.html`) — `inline-flex items-center gap-2 rounded-lg min-h-11 px-4
  py-2 border border-fjord-pale bg-white text-sm font-medium`, `aria-controls`, `aria-expanded`. Its accessible name
  repeats the visible selection — `Filter activities by category: All activities` on the index and
  `Filter activities by category: <tag>` on a tag page — so speech input can activate it by the visible label (2.5.3).

### Section heading — `components/section-heading.html`
Title (Headline), optional description (`max-w-2xl`, `text-lg md:text-xl leading-relaxed text-pretty text-gray-800`,
solid rather than a translucent `gray-900/80`, so it also clears 7:1 on the `fjord-light` band), optional teal divider,
optional eyebrow (`Label`, `text-primary-dark`, off by default). Alignment defaults to center. The front-page "Why
choose us" USP block is the sanctioned eyebrow exception.

### Hero — `components/hero/image.html` (signature)
One panel that sits under the image on mobile and becomes an overlay from `md` up, so the page renders exactly one
`h1`. Title `text-2xl md:text-4xl lg:text-5xl text-white md:drop-shadow-lg`; label and description are `text-white` too,
with no white/90 — the text is white at full strength over the veil.
The overlay scrim is the only dark layer over the photo: `from-fjord/90 via-fjord/65 to-transparent` by default
(overridable through the `gradient` parameter), drawn on a box that spans the panel plus `-top-32` above it. The veil
is strongest at the foot of the panel and gone above it; there is no step
for an edge to show, because it is still a single gradient. The panel is in the flow at every
breakpoint, so the hero's height follows its content: from `md` up the image is `md:absolute md:inset-0` behind the panel
and the section keeps a minimum height equal to the old photo crop (`md:min-h-[min(66.667vw,620px)]`,
`lg:min-h-[min(56.25vw,700px)]`), so the crop is unchanged for normal text and a longer title or enlarged text grows the
section instead of being clipped. The contrast trade-off of the softened scrim is in The Scrim Rule: the mobile fjord
panel stays at 12.7:1, and no text leaves the frame at 200% text.
`alwaysOverlay` is the theme's variant for keeping the panel over the photo at every breakpoint; the override keeps it
working (the panel is then positioned over an absolutely-filled photo box, which carries a floor height below `lg` —
`h-[360px] sm:h-[440px] md:h-[520px]` — and the image fills it with `object-cover`, because a 16:9 frame with an overlaid
panel otherwise loses most of the photograph on a phone), but no page uses it: the About hero, its only caller, sits
under the photo on mobile like every other hero.
`mobileBackground: "fjord"` (default) uses an opaque fjord panel under the image on mobile, and
`mobileBackground: "white"` uses the white glass panel with `text-gray-700`/`text-gray-900` on mobile. Optional badge
area for tags, the Varde quality mark and a back-link chip. Cards, tags and the booking button take their accessible
name from their own visible text — do not add an `aria-label` that replaces it, because a name that omits the visible
label breaks 2.5.3.
The panel keeps its 20px mobile gutter. From `md` up, `md:container` supplies the same horizontal padding as the
header: 16px below `2xl`, then 0px at `2xl`. Do not override it with `md:px-0`; that removes the gutter at tablet widths.
The home page pairs it with a blurred photo background and a white framed card — the conscious, pinned exception to
the flat simplicity everywhere else. Preserve it.

### Quote band — `components/statement-band.html` (signature)
Dark `fjord` band with a decorative `"` glyph (`text-8xl md:text-9xl text-primary/20`, `aria-hidden="true"`), the quote
in `text-xl md:text-2xl text-white/90 leading-relaxed font-light italic`, and the source as
`cite` in `text-sm font-semibold text-white uppercase tracking-widest`. Reserved for an actual quote that adds
information; never a generic sales line in a dark band.

### Byline — `components/byline.html`
Avatar circle (`w-9 h-9 rounded-full bg-fjord ring-2 ring-mist/40`), author name, and an updated date from
`Lastmod`/`GitInfo`, closed by a `border-b` divider (`border-mist/20` on dark, `border-fjord-pale` elsewhere).

### FAQ — `components/faq.html`
Native `<details class="group cursor-pointer" data-faq-item>` with `<summary class="… list-none">` (chevron
`group-open:rotate-180`), answer in `prose prose-sm`, each row closed by `border-b border-gray-300`. No JavaScript.
Renders only when the activity sets `faqItems` (see Known drift, item 9).

### Practical information — `activity/practical.html`
`h3` sections (`text-lg md:text-xl font-medium`, underlined by `border-b border-gray-300 pb-4`), icon bullets
(`w-5 h-5 text-primary-dark`, `aria-hidden`), notes in `text-gray-700 italic`. The surrounding article uses
`prose md:prose-lg` for 16px mobile and 18px desktop body text, without `prose-h3:*` size overrides; the partial owns
its subsection sizes. `prose-h3:mb-6` preserves the 24px gap below each heading when `md:prose-lg` is active.
Rendered only when the activity's `information.options.*` flags are set.

### Prose — `components/prose-content.html`
The shared article wrapper: `prose md:prose-lg lg:prose-xl max-w-4xl mx-auto`, headings at weight 500 with
`text-gray-900`, links `primary-dark` and underlined at rest (the tone comes from `--tw-prose-links` in
`assets/css/custom.css`, so every prose surface follows it, and hover darkens through
`hover:prose-a:text-primary-darker`), `leading-relaxed` paragraphs, images `rounded-lg shadow`.
`layouts/about/section.html` and `layouts/featured/single.html` inline the same recipe plus `prose-h3:*` sizes.

### Booking dialog — `activity/booking.html`
Native `<dialog id="crud-modal">` opened through `data-modal-target`, panel `max-w-3xl` (`bg-white rounded-lg shadow
border border-fjord-pale`), header with an `h2` (`#modal-title`) and a 44px close button (`w-11 h-11`).
Form contract (Netlify): `name="booking"` + `data-netlify`, hidden `activity` and `quality` fields carrying the
activity's title and quality, then `name`, `email`, `date` (required) plus `time` (09:00 / 12:00 / 15:00 / 18:00),
`people` (one option per `product_info.prices` tier, each carrying `data-price`, under a "Maximum capacity" hint),
`total_price` (readonly `#price-visible`, filled from the first tier and refreshed by the inline script in the partial
through `toLocaleString("nb-NO")`), and `message` (required). Inputs are
`bg-gray-50 border border-gray-300 text-gray-900 rounded-lg p-4 focus:ring-primary focus:border-primary`, labels
`block mb-4 text-base font-semibold text-gray-900`. The dialog opens focused on `#modal-title`, locks body scroll,
closes on Escape or backdrop click, and returns focus to the trigger.

### Carousel and fullscreen gallery — `components/images/carousel.html` + `utils/carousel-controls.html`
Track with `[data-carousel-item]` slides, arrow buttons (`carousel-control-btn`, full-height, `px-4`, inner circle
`w-10 h-10 rounded-full bg-white`, `aria-hidden` SVG), indicator row of 44px buttons (`h-11 w-11`) wrapping a 12px dot
(`h-3 w-3 rounded-full`, `bg-primary` when active), an optional fullscreen button, and a `<dialog>` for the fullscreen
view. Slides cross-fade (`opacity 0.7s ease-in-out`) and the animation is skipped under
`prefers-reduced-motion: reduce`. The gallery and its fullscreen dialog are two carousels linked with
`data-carousel-sync`; opening the dialog copies the current index.

### Header, navigation, footer
Fixed white header (`z-100`, `h-[70px] border-b border-slate-200`), logo + wordmark, plain links (`text-gray-900`),
booking button, hamburger below `lg`. The header markup lives in the theme and hardcodes `text-primary` for the active
tone (6.05:1), so `assets/css/custom.css` paints `header a[aria-current="page"]` in `primary-dark`
(`header` + attribute selector outranks the utility's class); the theme already sets `aria-current="page"` on exactly
that link, so no markup is duplicated. `layouts/partials/layout/header.html` is a project override of that partial, and
it changes exactly three things: the mobile toggle is emitted **before** the `#navbar-sticky` menu, so forward `Tab`
reaches the open menu instead of jumping into the page behind it; the brand link carries one accessible name
(`aria-label`, with the logo `img` at `alt=""`) instead of announcing the title twice; and the brand and desktop nav
links carry `min-h-11` so every standalone header target is 44px tall. Mobile menu is the full-height white panel
(`top-[70px]`) toggled by `data-collapse-toggle="navbar-sticky"`, closing on Escape, on link press, and returning focus
to the button; while it is open `setupMobileMenu` cycles `Tab`/`Shift+Tab` inside the panel (toggle plus the three menu
links) so focus cannot move to the covered page, and closes it when the viewport reaches `lg`. The project override
`layouts/partials/layout/mobile-menu-button.html` keeps the toggle at 44×44px (`min-w-11 min-h-11 w-11 h-11`).

Footer is a large dark surface (`bg-gray-900 text-white`) with contact details, an address block, social icon buttons
(`p-4 bg-gray-800 rounded-lg hover:bg-gray-600`) and a privacy link. The theme's base sets headings to `gray-900`, so
the footer headings carry an explicit `text-white` in the project override — without it they are invisible on the dark
surface. Footer headings sit at `h2` (the brand) and `h3` (`Follow Us`, `Information`) so a page whose only heading is
its `h1` — `/tags/` — still has a valid outline. The TripAdvisor button shows its name as text rather than the initials
"TA"; every footer link and social button is at least 44px tall and carries a white focus ring
(`focus-visible:outline-white`) so the focus indicator is visible against `gray-900`; the e-mail address carries
`wrap-anywhere`, because a long unbroken address has no break opportunity and pushed the document wider than a 320px
viewport. The footer override is `layouts/partials/layout/footer.html`.

### Utility furniture
- **Skip link** — `sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-1/2 focus:-translate-x-1/2
  focus:z-[120] focus:px-4 focus:py-2 focus:bg-white focus:text-gray-900 focus:rounded-lg focus:shadow
  focus:inline-flex focus:items-center focus:min-h-11 focus:outline-2 focus:outline-primary`, targets `#main-content`.
  Measured on focus: 187×44px at the top of the viewport, white pill with `gray-900` text (17.74:1).
- **Analytics consent** — native `<dialog>` with a greeting heading that still names the subject — "Hello, may we use
  analytics?", so the dialog's accessible name tells a screen reader what the modal is for — the brand mark as a
  decorative letterhead (`site.Params.logo` at `x112`/`x224` webp, `alt=""`, `h-14 md:h-16`), one short explanation with
  the privacy link, a full-width `Accept analytics` button (`min-h-12`, `bg-primary-dark`) and a plain underlined
  `Reject analytics` text button (`min-h-11`). One click either way; refusal is deliberately as reachable as
  acceptance. Without JavaScript the dialog stays closed and nothing loads. It is the warmest surface in the system,
  and the warmth is token colour plus the brand mark: a `from-fjord-light to-white` wash behind the greeting and a
  two-line fjord stroke in `fjord-pale` at the card's foot. Every line of text is read against white or the wash —
  measured on the rendered pixels with the glyphs hidden, the heading is 16.8:1, the sentence 14.1:1 and the privacy
  link 7.6:1 — and the wave sits below every control, so the colour costs no contrast. The scrim is brand `fjord/70`
  rather than neutral grey, so the modal stays in the site's palette. The dialog is `overflow-y-auto` with the card on
  `my-auto`, so at 200% text the card grows and scrolls from its top instead of being clipped (measured: 1780px card in
  an 844px viewport, both controls reachable by scroll and by `Tab`).
- **404** — heading, short explanation, and a `text-primary-dark hover:text-primary-darker` link home with
  `focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary`.
- **Utility page** (`layouts/_default/page.html`, used by `/privacy/`) — full-width white sheet on mobile; from `md`,
  the rounded `max-w-4xl` card has a 16px outer gutter (`md:px-4`) so its corners do not meet the viewport edge.
  Its compact `prose` scale is unchanged.

## Interaction contract

Behaviour is driven by data attributes, so markup and JavaScript stay decoupled. `assets/js/activity-components.js`
loads on activity pages; `assets/js/site-core.js` loads site-wide.

| Attribute | Element | Behaviour |
| --- | --- | --- |
| `data-modal-target="<id>"` | button | Opens the `<dialog id="<id>">` with `showModal()`, focus `#modal-title`, remembers the trigger |
| `data-modal-toggle="<id>"` | button | Closes that dialog |
| `data-open-modal="<id>"` | button | Opens the fullscreen gallery dialog and syncs the carousel index first |
| `data-close-modal="<id>"` | button or wrapper | Closes the dialog (wrapper form also closes on click on itself) |
| `data-carousel` (+ `id`) | wrapper | Initializes the carousel |
| `data-carousel-item`, `data-carousel-prev`, `data-carousel-next`, `data-carousel-slide-to`, `data-carousel-dot` | elements inside | Slides, arrows, indicator buttons, active dot |
| `data-carousel-sync="<peerId>"` | carousel | Two-way index sync between the inline gallery and the fullscreen one |
| `data-carousel-fullscreen-modal="<carouselId>"` | dialog | Enables ArrowLeft/ArrowRight only while that dialog is open |
| `data-dropdown-toggle="<id>"` | button | Toggles the disclosure and keeps `aria-expanded` in sync |
| `data-collapse-toggle="navbar-sticky"` | button | Mobile menu toggle (`aria-expanded`, label swap) |
| `data-faq-item` | `<details>` | FAQ row (native behaviour; attribute is for tooling) |
| `data-consent-accept` / `data-consent-reject` / `data-consent-key` / `data-gtm` / `data-ga4` / `data-analytics-enabled` | consent dialog | Stores the choice in `localStorage`, injects GA4/GTM only when the build allows analytics |

Dialog behaviour (one implementation for all of them): `showModal()` so the browser owns the focus trap; body scroll is
locked and the previous value restored on close; the native `close` event restores focus to the trigger; clicking the
backdrop (`event.target === dialog`) closes it; Escape works natively. There is no custom focus-trap code to maintain.

## Accessibility

WCAG 2.1 AA is the floor (Norwegian regulation), AAA is the target wherever the palette and content allow it.

- **Text contrast** — the token table above is measured, not assumed. Filled buttons run at 7.73:1 (primary) and
  7.27:1 (success) with their white labels and darken on hover; accent text and icons use `primary-dark` (7.73:1) and
  never `primary` (6.05:1); chip and tag-band colours are at 7.52:1 or better with white text; `--tw-prose-links`
  keeps article links at 7.73:1 and underlined. The audit is by computed style over the rendered pages, not by reading
  class names: every text node is measured against its resolved background, and text over a photo is measured against
  the rendered pixels of the real image with the glyphs hidden. The hero's text-over-photo band is the surface this
  audit watches most closely — the overlay measures 8.6:1 or better at 768 and 1440 on every hero page, the mobile fjord
  panel 12.7:1 and the mobile white glass panel 8.05:1 (see The Scrim Rule).
  The token table above is measured at 6.05:1 or better.
- **In-text links** — underlined at rest and darker on hover. The theme's prose default (underline only on hover) is
  overridden in `assets/css/custom.css`, because a link that differs from body text by colour alone (2.43:1 against
  `gray-800`) does not meet WCAG 1.4.1. Link text names its destination: "HERE" and "Link here" are not link text.
- **Target size** — every standalone interactive element is at least 44px: buttons (`px-6 py-3` ≈ 52px), the booking and
  dialog close buttons (`w-11 h-11`, `min-h-11`), carousel indicators (`h-11 w-11`), consent buttons (`min-h-12` /
  `min-h-11`), filter button and its menu rows, menu toggle (`44×44`), form inputs (`p-4`), skip link (`min-h-11`),
  header brand and nav links, activity section nav (`min-h-11 min-w-11`), footer links and social buttons, and the
  back links on `/tags/`, `/404` and the tag bands. Carousel arrows are visually 40px circles inside a full-height
  strip (`px-4`), which measures 72×650px — far larger than 44px. Only links inside a running sentence are exempt.
- **Focus** — always visible and never removed: `focus-visible:outline-2 focus-visible:outline-offset-2` in `primary`
  (white on dark surfaces). Card links keep `focus-visible:outline-none` only because the whole card carries its own
  solid ring through `focus-within:ring-2 focus-within:ring-primary` (`#1e6b80`, 6.05:1 on white, 5.59:1 on
  `fjord-light`) — a 40%-alpha ring is not enough.
- **Motion** — hover changes color and may nudge the arrow; the carousel cross-fade is disabled under
  `prefers-reduced-motion: reduce`.
- **Landmarks and semantics** — one `h1` per page including `/tags/`, `main#main-content`, `aria-label` on icon-only
  controls, `aria-hidden` on decorative SVGs, `aria-current="page"` on the active nav link and on the active carousel
  indicator, a named `nav` for the activity page's in-page sections (`data-section-nav`, `aria-label="Sections on this
  page"`) so it is distinguishable from the header nav, footer headings at `h2`/`h3`, native `<dialog>`, `<details>`,
  `<blockquote>/<cite>`. Controls that carry visible text take their accessible name from it — an `aria-label` that
  pushes the visible label out of the name breaks 2.5.3. The activity section nav marks its current section with
  `aria-current="true"`, not colour alone. The booking dialog's total price updates are announced through a polite
  `role="status"` region (`#price-status`) in addition to the read-only input that holds the value.

## Motion

Transitions are short and functional: `transition-colors duration-200` on buttons and links,
`duration-300` on arrows and the mobile menu, `0.7s ease-in-out` only for carousel cross-fades (reduced-motion aware).
No parallax, no scroll-triggered animation, no entrance effects.

## Do's and Don'ts

### Do:
- **Do** remove an unnecessary element rather than restyle it; reuse existing Tailwind classes and tokens; choose the
  simplest solution that is still clear and robust.
- **Do** let real photos be the proof — natural, slightly rough images from the fjord, boat, guests, and family over
  retouched or stock imagery.
- **Do** keep hover to a color change plus the arrow nudge (`transition-colors`, 200–300ms).
- **Do** keep focus always visible, and never sacrifice contrast, readability, touch sizes, or the booking flow for the
  homespun look.
- **Do** verify on mobile and desktop; uneven rows and differing text lengths are welcome when they come from real
  content.
- **Do** write in first person where it fits — "we", "Tor", "our family" over anonymous company voice.

### Don't:
- **Don't** add lift, scale, shadow growth, or movement to cards and buttons on hover.
- **Don't** stack border + radius + shadow + badge + hover animation on one card; border or image-and-text is enough.
- **Don't** add eyebrow labels, decorative dividers, or icon circles as default recipe — the established exceptions
  (USP block, quote band, hero) are already in place.
- **Don't** use luxury/scale language ("curated", "premium", "exclusive", "unfiltered"...), urgency, discounts, or
  artificial social proof.
- **Don't** use ALL-CAPS for content titles; uppercase is for short functional labels only.
- **Don't** introduce a new font, a dark brand band without informational content, or decorative illustrations on top of
  photos that already tell the story.
- **Don't** edit anything under `themes/`; change the theme through its own repository.
- **Don't** polish away personality or natural differences — priority when something must yield:
  understanding → trust → action → consistency → decor.

## Verification

Design changes are verified by looking at the result, not by trusting the diff.

```bash
hugo server -D                      # local pass: real pages, draft content
npm run seo:check                   # production build with template diagnostics
hugo --environment production --minify --destination /tmp/bfa-production \
  --baseURL http://127.0.0.1:1314/  # production output for a browser pass
npm run backstop:test               # manual only, never in a hook or CI
```

- **Browser pass** at 320px, 390px, 768px and 1280px on `/`, `/activities/`, one activity page, one inspiration,
  `/privacy/`, one tag page and `/404.html`: heading hierarchy (one `h1`, no skipped level), hover and focus states,
  dialog open/close (Escape, backdrop, focus return), tag filter, carousel plus fullscreen gallery, mobile menu, and
  `document.scrollWidth === clientWidth` (no sideways scroll).
- **Contrast** — re-measure whenever a token changes; the ratio table in this document is the reference. The pass used
  here reads computed styles in the browser and resolves each text node's real background (walking up to the first
  non-transparent ancestor, descending into gradients, and sampling the actual photo pixels where text sits on one),
  rather than trusting class names. Store the analytics choice before the pass, or no page is measured through the
  consent dialog.
- **Production** — after deploy, check that the built page still carries `lang`, canonical, description, Open Graph
  image, and the correct `HUGO_VERSION` in `netlify.toml`.

## Known drift and open decisions

These are recorded because they differ from the intent above; each is either a deliberate exception, an owner decision,
or work that belongs in another repository.

1. **Footer colour** — the footer uses the neutral `bg-gray-900`, not the teal-tinted `fjord` token, although it reads
   as a brand surface alongside the quote band. Changing it means a change in the theme repository.
2. **Active navigation colour** — the theme hardcodes `primary` (6.05:1) for the active menu link. The project restores
   AAA with `header a[aria-current="page"]` in `assets/css/custom.css`; the rest of the theme's nav tones (hover
   `bg-primary/20` under `gray-900` text in a mobile menu) already clear 7:1. Any deeper change still belongs in the
   theme repository (`header.html`), since `layouts/` in this repo holds only the overrides listed in README.
3. **Category chip contrast** — chip and tag-band colours are content data (`color` in `content/tags/*/_index.md`), so
   an edit can introduce a failing colour. The three current values were darkened to 7.52–7.66:1 with white text (AAA),
   and the rule is repeated as a comment above each value: keep every `color` at ≥ 7:1 with white.
4. **`quality` is free text** — the CMS uses a string field for `quality`, and the live content holds eleven different
   values ("PREMIUM", "Local Fisherman", "Go Viking & Springfulness", "WORK"...), all rendered uppercase. A controlled
   vocabulary would remove the inconsistency.
5. **Front-page wording** — the USP block currently says "The Human Edge" and "raw luxury", both of which the Plain
   Speech Rule discourages. The copy is CMS content; changing it is the owner's call.
6. **Consent dismissal** — Escape closes the consent dialog without storing a choice, and the dialog returns on the
   next visit; nothing loads in the meantime. That is the native `<dialog>` behaviour of the surface, and it means a
   visitor can keep reading without choosing. Without JavaScript the dialog never opens.
7. **Tags in keywords** — `content/tags/business-and-pleasure/_index.md` still lists "Premium", "Curated" and
   "Executive" as keywords; harmless for the layout, but it contradicts the wording rules.
8. **ALL-CAPS content headings** — six headings across three activities are written in capitals in Markdown
   (`## OPTION 2: SCENIC FJORD EXCURSION…`, `### PRISTINE FJORDS: LOST…`), which the casing rule above forbids. They
   are content, so they are fixed in the CMS, not in a layout.
9. **FAQ section is dormant** — `faqItems` is not set on any of the twenty activities, so the `#faq` section never
   renders today. The component is finished and styled; if FAQs belong on activity pages, the content is missing.
10. **One content heading level skip** — the classic tour writes `#### DIGITAL DETOX` inside a blockquote, which jumps
    `h2 → h4`. Every layout heading now steps one level at a time; this last skip is in the Markdown and is fixed in
    the CMS.
11. **Tag front matter outside the CMS** — the three tag files carry `title`, `color` and `aliases`, none of which the
    CMS tag collections expose (they define keywords, description, images and body). Treat those fields as file-managed
    and check the rendered chip, band and heading after editing a tag page in the CMS.
12. **Generic link text in content** — three links in the classic tour's Markdown are labelled "HERE" (Instagram and
    YouTube links), which Lighthouse flags under its link-text audit and which tells a screen-reader user nothing about
    the destination. They are content, so the fix is a link label that names what it opens. Every front-matter image
    now carries alt text; the wording of those descriptions is still the owner's to adjust in the CMS.