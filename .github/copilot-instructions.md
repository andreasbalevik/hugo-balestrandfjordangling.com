# Copilot instructions for this repo

Follow existing project conventions and these repository-specific rules.

## Workflow and pull requests

- Do not add pre-commit hooks or automate BackstopJS unless explicitly requested. BackstopJS is
  manual-only.
- Keep PR descriptions short, concrete, and current:
  - Summarize the completed work in high-level bullet points.
  - Include `Estimated active time: ~X hours`.
- Update the description and time estimate before merging. Estimate active time from the relevant
  conversation/session history and actual work activity. Exclude idle gaps, periods without
  conversation or tool activity, waiting time, and unrelated work; do not use the elapsed time
  between the first and last event.

## Dependencies

- Keep `package-lock.json` tracked.
- Keep `netlify.toml`'s `HUGO_VERSION` aligned with the locally tested Hugo version.
- Keep `tailwindcss` and `@tailwindcss/cli` up to date.

## Styling

- Use Tailwind utility classes in layouts. Do not add `<style>` blocks, static inline styles, or
  one-off rules in `assets/css/custom.css` when Tailwind can express the styling.
- Reserve `assets/css/custom.css` for brand tokens and utilities Tailwind cannot express. Inline
  styles are only for genuinely dynamic values.
- Fix spacing by adjusting existing utilities rather than adding overrides or duplicate container
  padding.

## Local development

- Initialize the theme submodule if it is empty and run `npm install` before starting Hugo.
- Verify UI changes with `hugo server -D`, an HTTP 200 check, and a visual browser pass.
- Never edit files in `themes/`; make theme changes in the theme repository.

## Code structure

- Extract repeated layout markup into a partial under `layouts/partials/`.
- Give partials a short Hugo-comment header. Use named parameters when more than page context is
  needed.
- Preserve meaningful presentation differences; do not merge components that serve different roles.

## SEO

- Keep `layouts/robots.txt`, `enableRobotsTXT`, and sitemap/crawl configuration aligned.

## Design and UI

- [`.github/design/visual-identity.md`](design/visual-identity.md) is the source of truth for UI
  changes.
- Preserve the established small-family-business character and existing design patterns. Do not add
  corporate polish or decorative UI by default.
