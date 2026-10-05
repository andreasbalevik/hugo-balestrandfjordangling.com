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
  xl: "12px (rounded-xl — modal dialogs only)"
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

The binding record for visual and interactive decisions; product truth lives in [PRODUCT.md](PRODUCT.md). Tokens are defined once in `assets/css/custom.css` (`@theme`); the theme (`themes/…`, a submodule) is **never edited from this repo** — change it through project overrides. Every value is read from the code or measured in a browser.

## Direction

**"Hjemme ved fjorden" (Home by the fjord).** Look like a small family business that knows the fjord better than marketing: tidy and usable, never so polished it could pass for a travel chain, a booking platform, or a generated template. Three words: **personal, simple, real** — the family runs the tours, show only what people need to understand the trip and get in touch, and use own photos, concrete words, and real experience, where a little roughness is a strength.

The design need not be symmetrical — differences in text length, crops, and rhythm may stand when they come from the content, and nothing is added just to look "finished". Rejected looks: premium staging, luxury language, many identical cards and badges, uppercase labels over every heading, decorative dividers and icon circles, extra shadows or hover effects, dark bands that repeat the message, urgency, discounts, social proof, or anything suggesting large scale. The test for every element: **would a small family business need this to explain the trip?** If no, it normally goes. The system is flat: depth is tonal layering, hover changes color and may nudge the arrow but the element never lifts, scales, or grows a shadow, and focus is always visible (`focus-visible:outline-2 focus-visible:outline-offset-2` in `primary`, or white on dark). Priority when something must yield: **understanding → trust → action → consistency → decor.**

## Tokens

Ratios are measured against white (WCAG 2.1: 4.5:1 AA, 7:1 AAA for normal text).

| Token | Value | On white | Use |
| --- | --- | --- | --- |
| `primary` | `#1e6b80` | 6.05:1 | Decoration and graphics only — dividers, icon washes, borders, focus ring. Never text on light. |
| `primary-dark` | `#175a6c` | 7.73:1 | Accent text/icons (links, eyebrows, badges, card hover, active nav) and the filled primary button. |
| `primary-darker` | `#0f4250` | 10.96:1 | Hover/pressed for filled buttons and accent text. |
| `success` | `#0b6519` | 7.27:1 | Submit and booking actions. |
| `success-darker` | `#07460f` | 11.10:1 | Hover for submit and booking actions. |
| `warning` | `#e8b43a` | 1.91:1 | Warnings/stars, unused; only on dark surfaces, never text on white. |
| `fjord` | `#1d3640` | 12.70:1 | Dark surface (quote band) and body text on light. |
| `mist` | `#769ba4` | 3.00:1 | Icons, rings, graphics only — exactly 3:1, so never text. |
| `fjord-light` | `#f0f7fb` | 1.08:1 | Alternating section surface; secondary button hover fill. |
| `fjord-pale` | `#deeef7` | 1.19:1 | 1px card and input borders. |

Two rules: **white and `fjord-light` are the standard surfaces**, the dark `fjord` band reserved for the personal quote; **teal marks what is clickable or worth noticing.** Text on a token surface must reach 7:1 where the palette allows: `primary` is decoration and never text, accent text/icons use `primary-dark`, filled buttons start at `primary-dark` so white labels are AAA, and `mist`/`warning` are never text on light. Chip and tag-band backgrounds come from content (`color` in `content/tags/*/_index.md`): `#3b5b44` 7.59:1, `#2f567c` 7.66:1, `#52526e` 7.52:1, default `#1d3640` 12.70:1. White chip text is `text-xl`, still normal WCAG text, so **every value must reach 7:1 with white** — the same colour sits behind the tag page's back link, title, and description.

## Typography, layout and shapes

**Font:** Inter, falling back to `system-ui, -apple-system, sans-serif`. Never introduce a new font to create character; it comes from the words and photos. Body is `16px`/`1.625`, headings weight `500`. Roles come from the YAML `typography` block: Display (page `h1`), Headline (section `h2`), Title (cards, `text-xl md:text-2xl`, turning `primary-dark` on hover), Body (prose and UI), Label (short uppercase functional labels). Body on a tinted band is solid `text-gray-800`, never `text-gray-900/80`, so it also clears 7:1; prices are formatted by `components/format/price.html`, never inline.

Content is simple text and image surfaces inside the standard `.container` (max 1280px, block padding 3rem → 5rem at `2xl`), alternating white and `fjord-light`; cards are used only where they help scanning (grids `md:grid-cols-2` / `lg:grid-cols-3`), and an uneven last row is fine — never pad with decor for symmetry. The header is fixed at 70px. Corners: `rounded-lg` (8px) on cards, buttons, inputs, dialogs; `rounded-md` (6px) on hero badges; `rounded-xl` (12px) on modal dialogs; `rounded-full` for pills. A 1px `fjord-pale` border defines cards and inputs.

**Photos are the proof.** Real pictures of the fjord, boat, guests, and family, shown large and sharp, are the main attraction; a photo that carries content is never tinted, blurred, flattened, or hidden behind decoration (the sole exception is the blurred home hero backdrop). Alt text names what is in the frame, not what it means. Write plainly: ordinary sentences, normal letter casing, short and concrete, as Tor would explain it face to face.

## Established exceptions

These are pinned on purpose; do not "clean them up" in passing.

- **Home hero** — a blurred photo background with a white framed content card.
- **Category buttons** and the **quote band** — the large colored category links and the dark `fjord` Captain Tor quote band.
- **USP eyebrow** — the front-page "Why choose us" block is the one sanctioned eyebrow.

- **Text over a photo** — the hero overlay and the card's bottom tag strip may place text on a themed scrim; see Accessibility.

## Accessibility

WCAG 2.1 AA is the floor (Norwegian regulation); AAA is the target wherever the palette and content allow it. The statement is measured, not assumed, and **does not claim AAA for every hero state** — the softened scrim below is the deliberate exception.

- **Contrast and links** — tokens and ratios are in the table; `primary` is never text on light, accent text uses `primary-dark`, chips are ≥ 7:1 with white. Article links stay underlined at rest and darker on hover, because colour alone (2.43:1 against `gray-800`) fails 1.4.1; link text names its destination ("HERE" is not link text). Audit by computed style and real pixels, not class names.
- **Target size and focus** — every standalone control is at least 44px; only links inside a running sentence are exempt. Focus is always visible and never removed (`focus-visible:outline-2 focus-visible:outline-offset-2` in `primary`, white on dark); card links rely on the whole-card `focus-within:ring-2 focus-within:ring-primary`.
- **Motion and semantics** — carousel cross-fades are disabled under `prefers-reduced-motion: reduce`. One `h1` per page, `main#main-content`, `aria-label` on icon-only controls, `aria-hidden` on decorative SVGs, `aria-current="page"` on the active nav link, a named `nav` for the in-page section nav, footer headings at `h2`/`h3`. Controls with visible text take their name from it (2.5.3).

**Text over a photo** sits on a scrim, not the photo. The gradient box is sized to the text (the panel plus 128px above it) and runs `from-fjord/90 via-fjord/65 to-transparent` by default — 90% at the foot, 65% in the middle, transparent at the top. The 90/65 compromise was weakened from the earlier flat-95% floor so the photo keeps more of the frame: the words sit low where the veil is strongest, and **the top of the panel is not AAA**. Where AAA behind the words is needed, use `from-fjord/95 via-fjord/95 via-65%`, which held 8.3:1 or better at every hero instance. Below `md` the scrim is hidden and the mobile panel uses a solid background. Do not stack a second scrim layer — one continuous gradient keeps the photo from showing an edge.

## Change boundaries

- **Theme** — never edit `themes/`; change theme behavior through project overrides at the same path under `layouts/`, each with a Hugo comment. Deeper changes belong in the theme repository.
- **Tokens** — the brand tokens and the `--tw-prose-links` tone live only in `assets/css/custom.css`; re-measure the ratios here after any change.
- **Tags** — `title`, `color`, and `aliases` in `content/tags/*/_index.md` are file-managed (the CMS tag collections do not expose them); keep every `color` at ≥ 7:1 with white, and check the chip, band, and heading after editing a tag page.
- **Empty overrides** — `layouts/partials/dns-prefetch.html` removes the theme's unconditional third-party preconnect so the page makes no unnecessary third-party contact, and `layouts/partials/seo/preload.html` does not re-introduce a raw LCP preload the page never displayed; both must stay empty.
- **Dormant FAQ** — `components/faq.html` is finished but no activity sets `faqItems`, so `#faq` never renders today; the missing piece is content.

## Verification

```bash
hugo server -D                      # local pages and draft content
npm run seo:check                   # production-style build, template diagnostics
npm run backstop:test               # manual only, never in a hook or CI
```

- **Browser pass** — verify by looking at the result: 320/390/768/1280px and 200% text zoom on `/`, `/activities/`, one activity, one inspiration, `/privacy/`, one tag page, and `/404.html`; one `h1` and no skipped level, hover and focus states, dialog open/close (Escape, backdrop, focus return), tag filter, carousel and fullscreen gallery, mobile menu, and `document.scrollWidth === clientWidth`. Text and controls must remain visible and reachable.
- **Contrast** — re-measure on any token, chip, or scrim change against the ratio table; measure computed styles and each text node's real background, not class names, sampling photo pixels where text sits on one.

## Booking and no-tracking contracts

**Booking** is a request, not an instant or paid confirmation: the Netlify form posts `name="booking"` with the activity and quality hidden fields, the visitor is confirmed by email within 24 hours, and payment happens on arrival (card only). The dialog is a native `<dialog id="crud-modal">` opened through `data-modal-target`; it focuses `#modal-title`, locks body scroll, closes on Escape or backdrop click, and returns focus to the trigger. The form asks only for the details needed to answer the request, and holds no marketing consent.

**No tracking** is the contract: the site loads no analytics, advertising, or third-party provenance script, sets no analytics or advertising cookies, and stores no consent or visitor state in `localStorage`. The only third-party contacts are the font from altinncdn.no and Netlify's page delivery and form handling. Manual checks: no analytics or advertising request in the network panel; no site JavaScript sets a cookie or writes visitor state; JavaScript off → reading and booking are unaffected.
