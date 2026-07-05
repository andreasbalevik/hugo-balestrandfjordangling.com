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

## Theme submodule (`themes/balevikit-tailwindcss-hugo-theme`)

- **Never edit files inside `themes/`.** It's a separate git submodule/repo — changes must go there,
  not in this repo.
- Only clean up unused templates/partials under the project's own `layouts/` directory.

## SEO

- `robots.txt` is generated from `layouts/robots.txt` (requires `enableRobotsTXT = true` in
  `config.toml`). Keep both in sync if the sitemap path or crawl rules change.

## Design & UI

- **Minimal hover effects:** Do not use movement, scaling, or translation (e.g., `-translate-y-1`, `scale-110`) on hover states for cards, buttons, or components. Keep hover effects minimal and stable (e.g., subtle `shadow-md` or simple color transitions). The UI should not "jump" or move when interacted with.

### Section rhythm & color zones

The site reads as "finished" when sections divide into deliberate, alternating color
zones (inspired by havilavoyages.com). Follow these rules when adding or editing sections:

- **Canonical zone palette** (only these backgrounds for full-width sections):
  - `bg-white` and `bg-fjord-light` — the two alternating light zones (default rhythm).
  - `bg-fjord-pale` — a mild accent zone (e.g. related/continue-exploring blocks).
  - `bg-fjord` (dark) — a rare "statement" anchor; **max one per page**.
- **Never place two identical section backgrounds directly adjacent.** Alternate the
  zone color so every boundary is visible. Where two light zones must meet, separate
  them with a discreet `border-t border-fjord-pale` on the lower section.
- **Eyebrow labels are consistent:** every top-of-section heading uses an eyebrow that
  is `text-primary`, `uppercase`, `tracking-widest` (this matches the divider accent).
  Prefer the `components/section-heading` partial; do not hardcode `text-fjord` eyebrows.
  On dark/colored backgrounds the heading title may switch color for contrast, but the
  eyebrow stays `text-primary`.
