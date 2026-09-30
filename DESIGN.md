---
name: Balestrand Fjord Angling
description: "Hjemme ved fjorden — a small family business that knows the fjord better than marketing."
colors:
  primary: "#1e6b80"
  primary-dark: "#175a6c"
  success: "#0f7f20"
  warning: "#e8b43a"
  fjord: "#1d3640"
  mist: "#769ba4"
  fjord-light: "#f0f7fb"
  fjord-pale: "#deeef7"
typography:
  display:
    fontFamily: "Inter, system-ui, -apple-system, sans-serif"
    fontSize: "1.875rem (md: 2.25rem, lg: 3rem)"
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: "-0.025em"
  headline:
    fontFamily: "Inter, system-ui, -apple-system, sans-serif"
    fontSize: "1.5rem (md: 1.875rem, lg: 2.25rem)"
    fontWeight: 500
    letterSpacing: "-0.025em"
  title:
    fontFamily: "Inter, system-ui, -apple-system, sans-serif"
    fontSize: "1.25rem (md: 1.5rem)"
    fontWeight: 500
    lineHeight: 1.375
  body:
    fontFamily: "Inter, system-ui, -apple-system, sans-serif"
    fontSize: "1rem (md: 1.125rem)"
    fontWeight: 400
    lineHeight: 1.625
  label:
    fontFamily: "Inter, system-ui, -apple-system, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 600
    letterSpacing: "0.1em"
rounded:
  md: "6px"
  lg: "8px"
  full: "9999px"
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "#ffffff"
    rounded: "{rounded.lg}"
    padding: "12px 24px (md: 16px 32px)"
  button-primary-hover:
    backgroundColor: "rgb(30 107 128 / 0.9)"
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
  card:
    backgroundColor: "#ffffff"
    textColor: "{colors.fjord}"
    rounded: "{rounded.lg}"
    padding: "20px (md: 24px)"
---

# Design System: Balestrand Fjord Angling

## Overview

**Creative North Star: "Hjemme ved fjorden" (Home by the fjord)**

The site should look like the website of a small family business that knows the fjord better than it knows marketing. Tidy and easy to use, but never so polished it could be mistaken for a travel chain, a booking platform, or a generated company template. Three words summarize the direction: **personal, simple, real.** Personal — Tor and the family answer, plan, and run the tours. Simple — show what people need to understand the trip and get in touch; remove the rest. Real — own photos, concrete words, experience from the fjord; a little roughness is a strength.

The design does not need to be perfect or symmetrical. Small differences in text length, image crops, and rhythm may stand when they come naturally from the content. No decoration is added just to make things look more "finished". Confirmed anti-references: premium editorial staging, luxury language, dashboard feel with many identical cards and badges, mandatory uppercase labels over every heading, decorative divider strokes and icon circles, shadows or hover effects added to seem advanced, dark brand bands that repeat the message without adding information, urgency, discounts, artificial social proof, or anything suggesting large scale.

The test for every element: **would a small family business need this to explain the trip?** If no, it normally goes.

**Key Characteristics:**
- Real photos from the Sognefjord, the boat, the guests, and the family — photos are the proof
- White and pale-fjord surfaces; dark band reserved for the personal Captain Tor quote
- Still elements: color change on hover only; only the arrow may move
- One clear heading per section; eyebrow labels and dividers are exceptions, not recipe
- Ordinary sentences and letter casing; written as Tor would explain it face to face

## Colors

A quiet, water-and-slate palette where the teal accent does the useful work and dark tones stay rare.

### Primary
- **Fjord Teal** (`#1e6b80`): buttons, links, and small useful accents. The only accent the interface needs.
- **Fjord Teal Deep** (`#175a6c`): hover/active variant of the primary.

### Neutral
- **Deep Fjord** (`#1d3640`): dark text and rare dark surfaces (the Captain Tor quote band).
- **Fjord Light** (`#f0f7fb`): calm background between white sections; with white, the default surface.
- **Fjord Pale** (`#deeef7`): discreet borders and mild backgrounds on cards and inputs.
- **Fjord Mist** (`#769ba4`): muted secondary tone.

### Semantic
- **Confirmation Green** (`#0f7f20`): confirmation states and form submit.
- **Signal Amber** (`#e8b43a`): warnings and stars, only when actually needed.

### Named Rules
**The Still Water Rule.** White and `fjord-light` are the standard surfaces. The dark `fjord` band is used only when the content needs dark contrast (the personal quote), never as an automatic "brand moment".

**The One Accent Rule.** Teal marks what is clickable or worth noticing. If everything is teal, nothing is.

## Typography

**Display/Body/Label Font:** Inter (system-ui, -apple-system fallback). Do not introduce a new font to create character; the character comes from the words and photos.

**Character:** One quiet sans at medium weight. Headings are clear, not monumental; body text is relaxed and readable. The voice is a person talking, not a brand presenting.

### Hierarchy
- **Display** (500, 1.875rem → 3rem, line-height 1.2, tight tracking): page titles and hero heading. One per page.
- **Headline** (500, 1.5rem → 2.25rem, tight tracking): section titles, optionally followed by the small teal divider (48px × 4px, rounded full).
- **Title** (500, 1.25rem → 1.5rem, snug): card titles; shifts to teal on group hover.
- **Body** (400, 1rem → 1.125rem, relaxed 1.625): prose; comfortable line length (`max-w-2xl`/`max-w-3xl`).
- **Label** (600, 0.875rem, wide tracking, uppercase): short functional labels only, where casing genuinely aids scanning ("Why choose us", category labels). Never as default decoration over headings.

### Named Rules
**The Plain Speech Rule.** Ordinary sentences and normal letter casing. Write like Tor explaining something face to face: short, concrete, friendly. Avoid "curated", "premium", "exclusive", "human edge", "raw luxury", "unfiltered" and other glossy marketing words when a plain word says the same.

**The One Heading Rule.** One clear heading per section. Do not add eyebrow and divider as fixed recipe decoration.

## Layout

Simple text and image surfaces; photos may stand directly in the layout without living in a "premium card". Sections alternate white and `fjord-light` inside a standard centered container with generous but not monumental air — avoid oversized sections that make little content look grandiose. Cards may be used when they make a list easier to scan (image grids use `md:grid-cols-2` / `lg:grid-cols-3`); an uneven last row or differing text lengths is fine — never pad with decor for symmetry. The header is fixed (70px offset) with clear navigation, booking, and practical information. The home page hero is a deliberate exception: blurred photo background with the white framed content card stays as is.

## Elevation & Depth

The system is essentially flat. Depth is conveyed by tonal layering — white cards on pale-fjord sections, a discreet `fjord-pale` border — not by shadow theater. Cards carry one soft static shadow (Tailwind `shadow`: `0 1px 3px rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)`) as a site-wide habit, but shadow is normally not necessary and is never a hover reward.

### Shadow Vocabulary
- **Card rest** (`0 1px 3px rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)`): the only shadow in the system; static, ambient, never grows.

### Named Rules
**The Standing Still Rule.** No lift, scaling, shadow growth, or unnecessary movement on cards and buttons. A simple color change on hover is enough. The one permitted motion is a small nudge of the arrow itself (translate-x, 300ms); the rest of the element stands still. Focus is always visible (`focus-visible` outline, 2px, offset 2px, teal).

## Shapes

Gently rounded corners everywhere (8px on cards and buttons, 6px on small tags), fully round only for functional pills: the teal section divider, the confirmation check circle, category chips. Discreet 1px `fjord-pale` borders define cards instead of stacking border + radius + shadow + badge + hover animation. Images clip to the card's rounded top (`overflow-hidden`) at calm aspect ratios (3:2 or 16:10).

## Components

### Buttons
Quiet and confident; the right arrow does the talking.
- **Shape:** gently rounded (8px).
- **Primary:** fjord teal background, white semibold text, roomy padding (12px 24px → 16px 32px), right arrow after the label.
- **Hover / Focus:** background deepens to 90% teal (`transition-colors`, 200ms); the arrow nudges right (~4px) while the button stays put; visible teal focus outline.
- **Secondary:** white background, `fjord-pale` border, near-black text; hover fills `fjord-light`. Only on colored/dark backgrounds — white on white is invisible.
- **Submit:** confirmation green, same shape; reserved for form submission.
- **Booking:** a separate partial with `data-modal-target`; use it instead of the generic button when opening the booking modal.

### Cards / Containers
- **Character:** nature photo, title, necessary information — nothing stacked for effect.
- **Corner Style:** gently rounded (8px), image flush to the top edge.
- **Background:** white on `fjord-light` sections (and the reverse).
- **Border:** discreet 1px `fjord-pale`.
- **Shadow Strategy:** soft static shadow at rest (see Elevation); never a hover lift.
- **Internal Padding:** 20px → 24px; the "Read story" arrow link pins to the bottom (`mt-auto`, right-aligned), title turns teal on hover.

### Chips / Meta Badges
- **Style:** inline icon + `font-medium` text (teal icon), no pill chrome — used only when the shape conveys information faster than words: duration and group size on activities.
- **Category tags:** small colored chips whose color comes from content params (dynamic inline `background-color`) — information, not decoration.
- **Category buttons:** the big colored buttons on the activities list are a deliberate, established exception to the otherwise quiet style; keep them.

### Navigation
- Fixed white header (70px), logo left, plain text links right; hamburger on mobile. No hover theatrics — color change only. Footer is the one large dark surface besides the quote band: deep fjord background with contact details and social links.

### Section Heading
- Title (headline scale), optionally one short description, optionally the small teal divider (48px × 4px, rounded full). Eyebrow off by default; the front-page "Why choose us" USP block is the sanctioned exception.

### Hero (signature)
- Blurred family-photo background with a white framed content card — the conscious, pinned exception to the flat simplicity everywhere else. Preserve it.

### Quote Band (signature)
- Dark deep-fjord band holding Captain Tor's personal quote between activities and inspiration on the front page. Reserved for an actual quote that adds information; never a generic sales line in a dark band.

## Do's and Don'ts

### Do:
- **Do** remove an unnecessary element rather than restyle it; reuse existing Tailwind classes and tokens; choose the simplest solution that is still clear and robust.
- **Do** let real photos be the proof — natural, slightly rough images from the fjord, boat, guests, and family over retouched or stock imagery.
- **Do** keep hover to a color change plus the arrow nudge (`transition-colors`, 200–300ms).
- **Do** keep focus always visible, and never sacrifice contrast, readability, touch sizes, or the booking flow for the homespun look.
- **Do** verify on mobile and desktop; uneven rows and differing text lengths are welcome when they come from real content.
- **Do** write in first person where it fits — "we", "Tor", "our family" over anonymous company voice.

### Don't:
- **Don't** add lift, scale, shadow growth, or movement to cards and buttons on hover.
- **Don't** stack border + radius + shadow + badge + hover animation on one card; border or image-and-text is enough.
- **Don't** add eyebrow labels, decorative dividers, or icon circles as default recipe — the established exceptions (USP block, quote band, hero) are already in place.
- **Don't** use luxury/scale language ("curated", "premium", "exclusive", "unfiltered"...), urgency, discounts, or artificial social proof.
- **Don't** use ALL-CAPS for content titles; uppercase is for short functional labels only.
- **Don't** introduce a new font, a dark brand band without informational content, or decorative illustrations on top of photos that already tell the story.
- **Don't** polish away personality or natural differences — priority when something must yield: understanding → trust → action → consistency → decor.
