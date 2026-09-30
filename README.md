# Balestrand Fjord Angling

## Install dependencies

`npm install`

## Local development

`hugo serve --disableFastRender`

## Preview drafts

`hugo serve -D -p 1313`

## Build

`hugo build --gc --minify`

## Visual regression (BackstopJS)

Backstop compares local pages (`http://127.0.0.1:1313`) with either production URLs or local baseline images.

1. Start Hugo in one terminal:  
   `hugo serve --disableFastRender`
2. Run visual diff against production (`referenceUrl` in `backstop.json`):  
   `npm run backstop:test`
3. Open the report:  
   `npm run backstop:open`

### File-based baseline mode

Use this when you want to keep accepted screenshots in git-tracked local references instead of comparing directly to production.

1. Create or refresh local references:  
   `npm run backstop:reference`
2. Run the comparison against those references:  
   `npm run backstop:test`
3. Approve expected changes:  
   `npm run backstop:approve`

### Config notes

- Scenarios and viewports are in `backstop.json` (320/390/768/1440 + key pages/templates).
- The dev breakpoint helper is now opt-in (`[Params] showBreakpointIndicator = true`), so it stays off during Backstop runs by default.
- `backstop_data/engine_scripts/puppet/onReady.js` stabilizes captures by:
  - removing elements marked with `data-backstop-hide`
  - freezing elements marked with `data-backstop-freeze`
  - forcing lazy-loaded images to load before screenshots
- Generated test/report output is written to `backstop_data/` (test bitmaps and reports are gitignored).

## Analytics consent

Google Analytics 4 and Google Tag Manager are loaded only after an explicit
choice. Nothing (no script, no cookie, no network request) is loaded before
that choice, and a rejection keeps analytics permanently off.

- `layouts/partials/components/analytics-consent.html` renders the banner
  (`#bfa-consent`, hidden until JS decides) plus the GTM/GA4 ids as data
  attributes, and loads `assets/js/analytics-consent.js`.
- `layouts/partials/utils/analytics-enabled.html` decides whether a build may
  load analytics at all (it reads Netlify's `CONTEXT`; `config.toml` allowlists
  `os.Getenv` under `[security.funcs]`). Development and deploy previews/branch
  deploys render the surface but pass `data-analytics-enabled="false"`, so the
  script stores a choice without ever injecting a loader.
- The choice is stored in `localStorage` under `bfa-analytics-consent`. The
  footer "Analytics settings" control reopens the banner. Rejecting also clears
  the first-party GA cookies and reloads.
- With JavaScript disabled no analytics is loaded and normal reading/booking is
  unaffected.

Manual checks: load a page with no stored choice (banner appears, no GA/GTM
request), choose accept (requests appear on production, none on dev/preview),
choose reject (cookies cleared, page reloads, no analytics), then reopen via the
footer control and withdraw.

## Project overrides

The theme is pinned; theme behaviour is changed through project overrides at
the same path under `layouts/`. Each override carries a Hugo comment explaining
what differs.

- `layouts/_default/baseof.html` — body scripts and the consent component placed
  before `</body>`; English skip-link text.
- `layouts/_default/page.html` — long URLs wrap (`break-words`) instead of
  causing horizontal scroll at 320px.
- `layouts/_default/home.html` — home hero card image is `eager`/`fetchpriority
  high`.
- `layouts/partials/layout/footer.html` — footer email wraps; "Analytics
  settings" control.
- `layouts/partials/layout/mobile-menu-button.html` — English accessible name,
  44×44px target.
- `layouts/partials/dns-prefetch.html` — preconnect list trimmed to the origins
  actually used.
- `layouts/partials/seo/preload.html` — intentionally empty: the theme preloaded
  a raw LCP candidate that the page never displayed (a 654 KB 1920w image next to
  the 37 KB image actually rendered).
- `layouts/partials/components/images/image.html` — optional `loading` /
  `fetchpriority` parameters and an always-emitted `alt`.
- `layouts/partials/components/images/carousel.html` — native `<dialog>`
  fullscreen viewer, intrinsic `width`/`height`, 44px controls.
- `layouts/partials/components/images/utils/carousel-controls.html` — unique
  ids, 44px indicator buttons with a 12px dot, wrapping indicator row.
- `layouts/partials/components/hero/image.html` — one responsive
  title/description block (under the image on mobile, overlay on desktop) instead
  of a duplicate desktop overlay plus mobile section.
- `layouts/partials/components/tag-dropdown-menu.html` — the filter is a
  disclosure with ordinary links, not a listbox.
- `layouts/partials/components/buttons/button.html` — filled primary/success
  buttons use `primary-dark`/darkened `success` with no contrast-reducing hover
  opacity.
- `layouts/partials/seo/json-ld/_product.html`, `_itemlist.html`,
  `_localbusiness.html`, `_faqpage.html` — real min/max prices, no unsupported
  availability/opening-hours claims, config-driven business data, and JSON built
  with `jsonify`.

When the theme is upgraded, an override can be dropped once the theme covers the
same behaviour.

## Manual verification recipes

- Build diagnostics: `npm run seo:check` (build must succeed; the "unused
  template" warnings are pre-existing).
- Production build + local server:
  `hugo --environment production --minify --destination /tmp/bfa-audit-production --baseURL http://127.0.0.1:1314/`
  then `python3 -m http.server 1314 --directory /tmp/bfa-audit-production`.
- Lighthouse (needs a Chrome binary; `CHROME_PATH` points at one):
  `CHROME_PATH="/path/to/Google Chrome for Testing" npm exec --no -- lighthouse http://127.0.0.1:1314/ --only-categories=performance,accessibility,best-practices,seo --output=json --output-path=/tmp/bfa-lh-home.json --chrome-flags="--headless=new --no-sandbox"`.
  Run it more than once and compare the spread; local numbers are not comparable
  with Google's server-side run.
- Contrast is checked on the real surfaces: filled primary buttons use
  `--color-primary-dark` (#175a6c) and filled success buttons use the darkened
  `--color-success` (#0b6519) so white text reaches 7.7:1 / 7.3:1.

## Decap

`npx decap-server`
