# Copilot instructions for this repo

Project-specific decisions and workflow rules. Follow these when suggesting or making changes.

## Workflow

- Commits go **directly to `main`** — there is no PR-based workflow. Don't propose GitHub Actions CI
  or other PR-gated checks; they wouldn't run before code ships.
- No pre-commit hooks (e.g. Husky) are used. This was considered and deliberately declined — there's
  no history of bad commits reaching `main`, so the extra tooling isn't worth the friction. Don't add
  Husky/pre-commit hooks unless explicitly requested again.
- BackstopJS visual regression (`npm run backstop:*`) is a **manual-only** step (see README). Do not
  wire it into any automated pipeline.

## Dependencies

- `package-lock.json` is committed (tracked in git) for reproducible installs. Never re-add it to
  `.gitignore`.
- Keep `netlify.toml`'s `HUGO_VERSION` in sync with the Hugo version actually used/tested locally
  (`hugo version`), so production builds match local dev.
- Keep `tailwindcss` / `@tailwindcss/cli` up to date with `npm outdated` / `npm update`.

## Styling

- **Always use Tailwind utility classes in layouts.** Never add `<style>` blocks, new rules in
  `assets/css/custom.css`, or a `style="..."` attribute for anything expressible as a Tailwind class
  (spacing, color, typography, layout, borders, shadows, etc.).
- `assets/css/custom.css` exists **only** for brand tokens (`@theme`) and the handful of utilities
  Tailwind can't express (e.g. `.bg-hero`, `.flip-horizontal`). Don't grow it with one-off component
  styles — add Tailwind classes in the layout instead.
- Inline `style="..."` is only acceptable for genuinely dynamic, per-page values that can't be
  Tailwind classes at build time — e.g. a CMS-driven `background-color` from content params, or a
  generated `background-image: url(...)` for a blurred hero. Don't use it as a shortcut for static
  spacing/sizing that a utility class already covers.
- When polishing or fixing spacing/padding, prefer adjusting or removing Tailwind classes over
  introducing new CSS. If two elements both set padding on the same box (e.g. a wrapper `py-*` class
  stacked on top of the `.container` utility's own responsive padding), that's a bug — resolve it by
  removing the redundant class, not by adding more overrides.

## Local dev workflow

- The theme lives in a git submodule; if `themes/balevikit-tailwindcss-hugo-theme/` is empty, run
  `git submodule update --init` first.
- `hugo server -D` needs the TailwindCSS CLI binary, installed via the theme's `package.json`
  postinstall. Run `npm install` at the repo root before starting the server, or the build fails
  with `TAILWINDCSS: ... binary with name tailwindcss not found`.
- To verify a change, start `hugo server -D --port <port>` and check pages with `curl -o /dev/null
  -w "%{http_code}"` (expect 200) plus the `browser` canvas for a visual pass. Don't assume the dev
  server is still running across a long session — re-check with `lsof -ti:<port>` /
  a curl before relying on it; it's easy to have killed it earlier.
- The `browser` canvas has no `reload` action. Use `navigate_page` (with `page_id`, not the
  canvas `instanceId`) to reload or go to a new URL, `read_page` for text/element snapshots, and
  `screenshot_page` for visual checks.

## Code structure

- **Extract, don't duplicate.** If the same markup block (or near-identical block with only a
  couple of dynamic values) appears in 2+ layout files, pull it into a partial under
  `layouts/partials/` instead of copy-pasting. Group partials by role: `partials/components/` for
  generic UI (byline, dropdowns, buttons, headings), `partials/activity/` for activity-domain
  pieces (meta badges, quality badge, related-activity cards).
- Give each partial a short Hugo-comment header describing its purpose and its expected params
  (see `partials/components/section-heading.html` and `partials/components/byline.html` for the
  pattern). Prefer a `dict` of named params when a partial needs more than the page context itself.
- Before merging near-identical blocks, check whether the differences are **meaningful per-page
  choices** (e.g. a different background needing a different border color, a genuinely different
  content role) rather than accidental drift — keep those as caller-supplied params, don't force
  a false unification.
- Don't merge blocks that look similar but serve a different role just because the markup is
  close (e.g. a plain-text duration/persons list in a decision panel vs. icon badges on a card) —
  same data, different presentation intent, so keep them separate.

## Theme submodule (`themes/balevikit-tailwindcss-hugo-theme`)

- **Never edit files inside `themes/`.** It's a separate git submodule/repo — changes must go there,
  not in this repo.
- Only clean up unused templates/partials under the project's own `layouts/` directory.

## SEO

- `robots.txt` is generated from `layouts/robots.txt` (requires `enableRobotsTXT = true` in
  `config.toml`). Keep both in sync if the sitemap path or crawl rules change.

## Design & UI

The full visual identity — name, philosophy, color tokens, typography, component patterns,
motion rules, and guardrails — is documented in **[`.github/design/visual-identity.md`](design/visual-identity.md)**.
That file is the source of truth for any design/UI change, polish pass, or new section. Read it
before making visual changes; do not duplicate its rules here or let this section drift out of
sync with it.

- The site should feel **made by a small family business**, not designed for a large travel company.
  Prefer plain, useful layouts and natural photos over polished marketing patterns.
- Do not add decorative eyebrows, divider bars, icon circles, badges, shadows, or motion by default.
  Keep the established right arrow on links and buttons, and retain the large colored category
  buttons on the activities list.
- A little unevenness and personality is welcome. Do not "correct" the site toward corporate
  symmetry, premium-editorial polish, or generic landing-page conventions.
- Keep the homepage hero's established blurred photo background and framed white content card.
- Keep the homepage's dark Captain Tor statement section between recommended activities and
  inspirations.
