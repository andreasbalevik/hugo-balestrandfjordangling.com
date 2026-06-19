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

1. Start Hugo in one terminal:
   `hugo serve --disableFastRender`
2. Compare local pages against production (`https://balestrandfjordangling.com`):
   `npm run backstop:test`
   (Includes both listing and representative single templates for activities/inspirations.)
3. (Optional) If you want file-based local baselines instead, create/update references:
   `npm run backstop:reference`
4. If intended changes are correct in file-based mode, approve them:
   `npm run backstop:approve`
5. Open the latest report:
   `npm run backstop:open`

## Decap

`npx decap-server`
