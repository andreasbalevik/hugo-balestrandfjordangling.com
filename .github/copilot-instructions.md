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
