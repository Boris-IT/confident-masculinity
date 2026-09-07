# Confident Masculinity — advertorial pages

Static site (Astro) for confident-masculinity.com. Paid traffic lands here, reads a
short article, and clicks through to the shop. Built for ads, not search.

## Editing

- Articles are plain JS files in `src/data/articles/`. One file per article.
  Set `draft: true` to keep one off the site.
- `partner: true` renders the disclosure tag under the byline. Any article that
  links to a product it is being paid to feature MUST keep this — advertorial
  without disclosure is a per-se ban under the EU unfair commercial practices
  rules, and Meta rejects landing pages that hide it.
- Site name, tagline, tracking IDs and outbound UTM defaults live in `src/config.js`.

## Tracking

Nothing third-party loads until a visitor accepts the cookie banner. Leave the
IDs in `src/config.js` empty and no banner is shown at all, because there is
nothing to consent to.

## Local

```
npm install
npm run dev
npm run build
```
