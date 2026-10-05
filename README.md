# Balestrand Fjord Angling

## Prerequisites

- Git
- Node.js with npm
- Hugo extended 0.160.1 (matches `HUGO_VERSION` in `netlify.toml`)

## Setup

Run the setup script from the repository root:

```sh
./get-started.sh
```

It initializes the theme submodule (`git submodule update --init --recursive`)
and installs the dependencies with `npm install` from the root. The theme has no
separate install step.

## Local development

```sh
hugo server --disableFastRender -D
```

Open <http://localhost:1313/>. The `-D` flag includes drafts.

## Local CMS (optional)

For local CMS editing, set `local_backend: true` in `static/admin/config.yml`
locally (do not commit that change), then start the local backend in a second
terminal:

```sh
npm run cms:local
```

With Hugo running, open <http://localhost:1313/admin/>. The local backend writes
directly to the files in this working copy, so use a disposable clone or branch
for tests.

## Technical SEO check

Build the production output, then run the SEO check against it:

```sh
hugo --gc --minify
npm run seo:check
```

The check reads `public/` only and never writes to the source or output. See
[SEO.md](SEO.md) for what it covers, Google Search Console follow-up, and how to
point it at another output directory.
