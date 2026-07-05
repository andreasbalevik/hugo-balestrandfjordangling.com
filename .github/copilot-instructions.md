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

### Important caveat: `hugo --printUnusedTemplates` gives false positives

For `layouts/_default/home.html` and `layouts/_default/page.html`, Hugo's unused-template detector
incorrectly flags them as unused even though they are the active overrides of the theme's (broken/
placeholder) `_default/home.html` and `_default/page.html`. Verified by temporarily removing them:
the build either errors (home.html) or silently renders different content (page.html) using the
theme's fallback template instead.

Before deleting any template flagged as "unused", verify it first:
1. Move the file out of the repo temporarily.
2. Run `hugo --minify --gc` and check for build errors.
3. Diff the full `public/` output (ignore the CSS filename's content hash, which changes with any
   Tailwind class purge) against a baseline build to confirm no page content changed.
4. Only delete if the build succeeds and page content is provably identical.

Plain (non-overriding) unused partials — i.e. partials nothing else references — are safe to remove
without this extra caution, but still confirm with a before/after build diff.

## SEO

- `robots.txt` is generated from `layouts/robots.txt` (requires `enableRobotsTXT = true` in
  `config.toml`). Keep both in sync if the sitemap path or crawl rules change.
