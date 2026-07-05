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
