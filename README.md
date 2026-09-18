# smkerr.github.io

Personal site, built with [Astro](https://astro.build), based on the [astro-starter-portfolio](https://github.com/BracoZS/astro-starter-portfolio) template (see [THIRD_PARTY_NOTICES.md](./THIRD_PARTY_NOTICES.md)).

## Development

```
pnpm install
pnpm dev       # local dev server
pnpm build     # production build to dist/
pnpm preview   # preview the production build
```

## Content

- Site-wide copy (name, tagline, nav, social links) lives in `src/site.config.ts`.
- Projects/publications are markdown files in `src/content/work/`. Add a new file there to add an entry; `featured: true` pins it near the top of the homepage and work list.
- The About page is `src/pages/about.astro`.
- The CV is a static PDF at `public/cv.pdf`, linked directly from the nav rather than duplicated as a web page, so there's one document to keep current.

## Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds the site and publishes it to GitHub Pages. In the repo's **Settings → Pages**, the source needs to be set to **GitHub Actions** (not the legacy Jekyll build) for this to take effect.
