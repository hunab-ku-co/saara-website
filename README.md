# saara-website

Marketing site for Saara. React + TypeScript, built with Vite, deployed to
GitHub Pages by GitHub Actions.

## Local development

```bash
npm ci
npm run dev      # http://localhost:5173
```

| Script                 | What it does                                        |
| ---------------------- | --------------------------------------------------- |
| `npm run dev`          | Dev server with hot reload                          |
| `npm run build`        | Typecheck (`tsc -b`) then build to `dist/`          |
| `npm run preview`      | Serve the built `dist/` locally                     |
| `npm run typecheck`    | Types only, no build output                         |
| `npm run lint`         | oxlint, fails on any warning                        |
| `npm run format`       | Rewrite files with Prettier                         |
| `npm run format:check` | Fail if anything is unformatted (what CI runs)      |
| `npm run lhci`         | Lighthouse CI against `dist/` — needs a local build |

## How deployment works

`.github/workflows/deploy.yml` runs on every push to `main`. It builds the site
and publishes `dist/` using GitHub's official Pages actions
(`configure-pages` → `upload-pages-artifact` → `deploy-pages`).

Authentication is OIDC: the workflow requests `pages: write` and
`id-token: write`, and GitHub mints a short-lived token scoped to this
deployment. There is no personal access token to create, store or rotate, and
no `gh-pages` branch holding build output in git history.

Deployments appear under the repository's **github-pages** environment, so you
get a history and one-click rollback in the GitHub UI.

`.github/workflows/ci.yml` runs on pull requests: typecheck, lint, format
check, build, then Lighthouse CI against the built output. It never deploys.

## Routing and the 404 fallback

GitHub Pages serves static files with no server-side rewrites, so a hard
refresh on `/about` would normally hit GitHub's own 404 page. A small Vite
plugin in `vite.config.ts` copies `dist/index.html` to `dist/404.html` at build
time; GitHub serves that for unknown paths, React Router reads the URL, and the
correct page renders.

One caveat worth knowing: those responses carry an HTTP **404 status** even
though the right content renders. Browsers and users never notice, but if
search engine indexing of deep links becomes important, the alternatives are
hash routing (`/#/about`, ugly but always 200) or moving to a host that
supports rewrites.

## Custom domain — saarakiventoyry.fi

The apex `saarakiventoyry.fi` is canonical; `www` redirects to it. A custom
domain always sits at the domain root, which is why `vite.config.ts` sets
`base: '/'`.

`public/CNAME` is committed and copied into `dist/` on every build. This
matters: GitHub's Pages settings store the custom domain, but a deployment that
does not include a `CNAME` file can clear it. Keeping the file in the repo makes
the domain part of the build rather than a setting someone has to remember.

### DNS (Route 53)

The zone is hosted in Route 53. Route 53's ALIAS record type only targets AWS
resources, so it **cannot** point at GitHub Pages — the apex has to use plain
A records listing GitHub's four Pages addresses.

| Record  | Name                     | Type    | TTL | Value                                                                                            |
| ------- | ------------------------ | ------- | --- | ------------------------------------------------------------------------------------------------ |
| apex v4 | `saarakiventoyry.fi`     | `A`     | 300 | `185.199.108.153`<br>`185.199.109.153`<br>`185.199.110.153`<br>`185.199.111.153`                 |
| apex v6 | `saarakiventoyry.fi`     | `AAAA`  | 300 | `2606:50c0:8000::153`<br>`2606:50c0:8001::153`<br>`2606:50c0:8002::153`<br>`2606:50c0:8003::153` |
| www     | `www.saarakiventoyry.fi` | `CNAME` | 300 | `hunab-ku-co.github.io`                                                                          |

All four A values go in **one** record set, one per line — not four separate
records. Same for AAAA.

Because `public/CNAME` holds the apex, GitHub issues the redirect
`www.saarakiventoyry.fi` → `saarakiventoyry.fi` automatically once the `www`
CNAME resolves. Nothing extra is needed to make `www` work.

The zone has no CAA records, so nothing blocks GitHub from issuing the
Let's Encrypt certificate. If you add CAA later, include `letsencrypt.org`.

After DNS propagates, enable **Enforce HTTPS** in Settings → Pages. The
certificate usually issues within minutes, occasionally up to 24 hours.

### If you ever drop the custom domain

Moving back to `hunab-ku-co.github.io/saara-website/` requires two changes:
set `base: '/saara-website/'` in `vite.config.ts`, and delete `public/CNAME`.
Skip the first and every asset URL 404s. The absolute URLs in
`public/sitemap.xml`, `public/robots.txt` and `src/hooks/usePageMeta.ts` would
also need updating.

## Mobile

The layout is mobile-first: fluid type via `clamp()`, `auto-fit` grids that
collapse to one column without media queries, a nav that becomes a hamburger
below `48em`, 44px minimum touch targets, and `env(safe-area-inset-*)` padding
so content clears iOS notches and the home indicator.

Lighthouse CI runs mobile emulation by default, so the performance and
accessibility budgets in `lighthouserc.json` are enforced against a throttled
mid-range phone, not a desktop.
