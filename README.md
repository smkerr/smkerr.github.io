# smkerr.github.io

Personal site of Steven Kerr, built with [Astro](https://astro.build) and Tailwind CSS, based on the [astro-starter-portfolio](https://github.com/BracoZS/astro-starter-portfolio) template (see [THIRD_PARTY_NOTICES.md](./THIRD_PARTY_NOTICES.md)). Live at <https://smkerr.github.io>.

## Development

Requires Node 22 or newer and [pnpm](https://pnpm.io).

```
pnpm install
pnpm dev       # local dev server at http://localhost:4321
pnpm build     # type-check (astro check) and build to dist/
pnpm preview   # preview the production build
pnpm format    # format with Prettier
```

If the dev server shows stale content after you change `src/content.config.ts`, restart it.

## Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml`, which installs with `pnpm install --frozen-lockfile`, runs `pnpm run build` and publishes `dist/` to GitHub Pages. In the repo's **Settings → Pages**, the source needs to be set to **GitHub Actions** (not the legacy Jekyll build) for this to take effect.

## Tooling

Fonts are self-hosted through `@fontsource` packages (Fraunces, Inter, Space Mono), not loaded from Google. The sitemap comes from `@astrojs/sitemap`. Prettier (with the Astro and Tailwind plugins) formats the code.
