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

- Scenarios and viewports are in `backstop.json` (mobile/tablet/desktop + key pages/templates).
- `backstop_data/engine_scripts/puppet/onReady.js` stabilizes captures by:
  - removing elements marked with `data-backstop-hide`
  - freezing elements marked with `data-backstop-freeze`
  - forcing lazy-loaded images to load before screenshots
- Generated test/report output is written to `backstop_data/` (test bitmaps and reports are gitignored).

## Decap

`npx decap-server`
