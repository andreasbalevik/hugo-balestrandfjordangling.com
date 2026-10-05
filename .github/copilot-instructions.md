# Copilot instructions for this repo

Follow project conventions and these repo-specific rules. [`DESIGN.md`](../DESIGN.md) is the source of truth for UI changes; [`PRODUCT.md`](../PRODUCT.md) holds product context; do not restate design rules here.

## Workflow and pull requests

- No pre-commit hooks or BackstopJS automation unless requested — BackstopJS is manual-only, no hook, no CI.
- Keep PR descriptions short and current before merging: high-level bullets plus `Estimated active time: ~X hours`, from session history and real activity. Exclude idle, waiting and unrelated time; never use elapsed time between first and last event.

## Dependencies

- Keep `package-lock.json` tracked, `netlify.toml`'s `HUGO_VERSION` aligned with the tested Hugo version, and Tailwind packages current.

## Styling

- Use Tailwind utilities; no `<style>` blocks, inline styles, or one-off `custom.css` rules where Tailwind can express it. Reserve `custom.css` for brand tokens and unexpressible utilities; inline styles only for dynamic values.
- Adjust existing utilities to fix spacing, not overrides or duplicate padding.

## Local development

- Initialize the theme submodule if empty and run `npm install` before Hugo.
- Verify UI changes with `hugo server -D`, an HTTP 200 check, and a browser pass.
- Never edit files in `themes/`; change the theme in its own repository.

## Overrides, partials and SEO

- Project overrides live at the same path under `layouts/` with a Hugo comment explaining what differs. Extract repeated markup into a partial with a short Hugo comment and named parameters; do not merge components with different roles.
- Keep `layouts/robots.txt`, `enableRobotsTXT`, and sitemap/crawl config aligned.
