# saara-website

Campaign site for **Saara Kiventöyry** (Kokoomus), served at
[saarakiventoyry.fi](https://saarakiventoyry.fi). React + TypeScript, built with
Vite, deployed to GitHub Pages by GitHub Actions.

## ⚠️ Content still to write

The structure, design and image pipeline are finished. **The words are not.**
Every unwritten block is wrapped in `<p className="placeholder">` and renders as
a dashed box labelled **TÄYTETTÄVÄ**, so nothing invented can be mistaken for
Saara's actual positions. Nothing in this repo states a policy she has not
approved.

Outstanding, by file:

| File                         | Needs                                                           |
| ---------------------------- | --------------------------------------------------------------- |
| `src/pages/Home.tsx`         | Candidate number, when it is drawn                              |
| `src/pages/Teemat.tsx`       | Done. Three themes; the essay opens from the title              |
| `src/pages/Tietoa.tsx`       | Done. Biography and positions of trust                          |
| `src/pages/Yhteystiedot.tsx` | Email, phone, social links                                      |

Delete the `placeholder` class as each is filled in. Anything still dashed on
the live site is unfinished.

## Local development

```bash
npm ci
npm run dev      # http://localhost:5173
```

| Script                 | What it does                                          |
| ---------------------- | ----------------------------------------------------- |
| `npm run dev`          | Dev server with hot reload                            |
| `npm run build`        | Typecheck (`tsc -b`) then build to `dist/`            |
| `npm run images`       | Regenerate image derivatives from `assets/originals/` |
| `npm run preview`      | Serve the built `dist/` locally                       |
| `npm run typecheck`    | Types only, no build output                           |
| `npm run lint`         | oxlint, fails on any warning                          |
| `npm run format`       | Rewrite files with Prettier                           |
| `npm run format:check` | Fail if anything is unformatted (what CI runs)        |
| `npm run lhci`         | Lighthouse CI against `dist/` — needs a local build   |

## Images

Originals live in `assets/originals/`. `npm run images` generates responsive
derivatives into `public/img/` plus a typed manifest at
`src/images.generated.ts`, which the `<Photo>` component reads to build its
`srcset`.

Both the derivatives and the manifest are **committed**. That keeps `typecheck`
and CI working without an image-generation ordering step, and makes builds fast
and reproducible. Re-run `npm run images` and commit the result whenever an
original changes.

Each photo is emitted as AVIF, WebP and JPEG across several widths, never
upscaled beyond the source. Quality settings use 4:4:4 chroma to protect skin
tones and facial detail — measured mean per-channel difference against the
original is 0.90/255, which is imperceptible. The full-width portrait is 62 kB
in AVIF against 203 kB for the equivalent JPEG.

**EXIF and XMP are deliberately stripped** from everything published. The
originals carry both, which can include GPS coordinates and camera serials.
Colour is normalised to sRGB so it still renders correctly.

`public/img/og.jpg` (1200×630) is generated for social link previews, since the
platforms that unfurl links mostly still want a plain landscape JPEG.

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
refresh on `/teemat` would normally hit GitHub's own 404 page. A small Vite
plugin in `vite.config.ts` copies `dist/index.html` to `dist/404.html` at build
time; GitHub serves that for unknown paths, React Router reads the URL, and the
correct page renders.

One caveat worth knowing: those responses carry an HTTP **404 status** even
though the right content renders. Browsers and users never notice, but if
search engine indexing of deep links becomes important, the alternatives are
hash routing (`/#/teemat`, ugly but always 200) or moving to a host that
supports rewrites.

## Custom domain — saarakiventoyry.fi

The apex `saarakiventoyry.fi` is canonical; `www` redirects to it. A custom
domain always sits at the domain root, which is why `vite.config.ts` sets
`base: '/'`.

`public/CNAME` is committed and copied into `dist/` on every build. Note that
for **Actions-based** deployments this file does not by itself configure the
domain — that is set on the repository's Pages settings — but keeping it in the
build prevents a deployment from clearing it.

### DNS (Route 53)

The zone is hosted in Route 53. Route 53's ALIAS record type only targets AWS
resources, so it **cannot** point at GitHub Pages — the apex uses plain A
records listing GitHub's four Pages addresses.

| Record  | Name                     | Type    | TTL | Value                                                                                            |
| ------- | ------------------------ | ------- | --- | ------------------------------------------------------------------------------------------------ |
| apex v4 | `saarakiventoyry.fi`     | `A`     | 300 | `185.199.108.153`<br>`185.199.109.153`<br>`185.199.110.153`<br>`185.199.111.153`                 |
| apex v6 | `saarakiventoyry.fi`     | `AAAA`  | 300 | `2606:50c0:8000::153`<br>`2606:50c0:8001::153`<br>`2606:50c0:8002::153`<br>`2606:50c0:8003::153` |
| www     | `www.saarakiventoyry.fi` | `CNAME` | 300 | `hunab-ku-co.github.io`                                                                          |

All four values go in **one** record set, one per line. GitHub issues the
`www` → apex redirect itself once the CNAME resolves; nothing extra is needed.

The zone has no CAA records, so nothing blocks certificate issuance. If you add
CAA later, include `letsencrypt.org`.

Enable **Enforce HTTPS** in Settings → Pages once the certificate is issued. If
it stays stuck, removing and re-adding the custom domain retriggers
provisioning.

### If you ever drop the custom domain

Moving back to `hunab-ku-co.github.io/saara-website/` requires two changes:
set `base: '/saara-website/'` in `vite.config.ts`, and delete `public/CNAME`.
Skip the first and every asset URL 404s. The absolute URLs in
`public/sitemap.xml`, `public/robots.txt`, `index.html` and
`src/hooks/usePageMeta.ts` would also need updating.

## Design

Colours are sampled directly from the Kokoomus campaign template rather than
eyeballed — deep blue `#0b288b`, accent `#3f57a9`, cream `#ece0aa`, pale blue
`#ccdefe` — so the site matches printed and social material.

The site deliberately commits to one palette instead of following the visitor's
light/dark preference: a candidate's colours should not change with a device
setting.

The party wordmark is **not** reproduced here. If official Kokoomus logo assets
are supplied, they can be added to the header and footer.

## Mobile

Mobile-first: fluid type via `clamp()`, `auto-fit` grids that collapse to one
column without media queries, a nav that becomes a hamburger below `48em`, 44px
minimum touch targets, and `env(safe-area-inset-*)` padding so content clears
iOS notches and the home indicator. Finnish compounds are long, so headings set
`overflow-wrap: break-word` and `hyphens: auto`.

Layout is verified by screenshotting real viewports (375/390/820/1440) and
asserting no horizontal overflow and no undersized tap targets — not by
assumption. Lighthouse CI runs mobile emulation by default, so the budgets in
`lighthouserc.json` are enforced against a throttled mid-range phone.
