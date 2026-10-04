# zenlot-site

Marketing landing page for **Zenlot** — the forex trading journal for building
discipline. Plain static HTML + CSS, no build step, no framework, deployed to
GitHub Pages. The page is an infographic-style walk through the app's routine:
**Set your rules → Record your trade → Review and reflect**.

Live: <https://info.zenlot.net/> ·
FR: <https://info.zenlot.net/fr/> ·
ES: <https://info.zenlot.net/es/>

## Structure

```
index.html                 English page (also the language auto-router)
fr/index.html              French page — terminology matched to zenlot/localization/french.ts
es/index.html              Spanish page — terminology matched to zenlot/localization/spanish.ts
assets/site.css            All styles: theme tokens, shell/paper surfaces, device frames, infographic
assets/site.js             Theme toggle, screenshot resolution + fallback, nav, reveal, language memory
assets/brand/              Logo, favicons, per-language social-share images (og-*.png), download QR
assets/screenshots/        ← app captures go here: <lang>/<light|dark>/NN-name.png (see its README)
assets/screenshots/legacy/ previous site's captures, unused
sitemap.xml, robots.txt    absolute URLs on https://info.zenlot.net/
.github/workflows/         Pages deploy on push to main
```

## Page sections

Hero → Why Zenlot (rules/trade/review loop) → How it works (three-stage
infographic on a light panel, with a suggested reflection and plain-language
glossary) → What makes it worth trying (six benefit cards + gallery of four
more screens) → Who it's for → Download (badges + QR) → FAQ → footer with
Support / Privacy / Account deletion links and the scope statement.

Copy follows `ZENLOT_INFOGRAPHIC_BRIEF.md` and promotes only what ships in the
current store release (1.5.0). Every device frame is captioned "Example data".

## Light / dark theme

The page follows the visitor's system setting and offers a sun/moon toggle in
the header. Choosing a theme stores it (`localStorage` `zenlot:theme`); picking
the one that matches the system clears the stored choice so the page goes back
to following the system. `?theme=light|dark` on any page forces (and stores) a
theme — handy for testing. Header, hero, download panel and footer stay navy in
both themes; the How-it-works panel stays light; everything else switches.

Colours are CSS custom properties at the top of `assets/site.css` — `:root`
holds the light palette, `:root[data-theme="dark"]` the dark one (repeated
under `prefers-color-scheme: dark` for visitors without JS).

## First-time setup

```bash
cd ~/Projects/zenlot-site
git init -b main
git add -A
git commit -m "Zenlot landing page"
gh repo create zenlot-site --public --source=. --push
```

Then in **Settings → Pages**, set **Source: GitHub Actions**. The workflow
deploys on every push to `main`.

Without the `gh` CLI: create the repo on github.com, then

```bash
git remote add origin https://github.com/otonyeiyalla/zenlot-site.git
git push -u origin main
```

## Local preview

```bash
python3 -m http.server 8080
# → http://localhost:8080
```

Every asset reference is relative (`assets/…` from the root, `../assets/…` from
`fr/` and `es/`) so the site works unchanged whether it's served from a domain
root or a `/zenlot-site/` sub-path. Keep them relative — don't switch to
absolute (`/assets/…`).

## Editing

**Store links** appear in four places per page (hero badges, final CTA badges,
footer) across all three language pages. Search and replace:

- iOS — `https://apps.apple.com/us/app/zenlot/id6759946394`
- Android — `https://play.google.com/store/apps/details?id=com.zenlot.app`

**Colours** were sampled from the app icon: teal `#2fbcc1` → blue `#1478a7`
on the splash navy `#001c34` from `zenlot/app.json`.

**Copy** in the FR and ES pages uses the same feature names as
`zenlot/localization/french.ts` and `spanish.ts` (Règles de trading, Profil de
risque, Verdict du trade, Analyses comportementales / Reglas de trading, Perfil
de riesgo, Veredicto de la operación, Información conductual…). If you rename a
feature in the app, mirror it here.

**Legal links** go to `privacy.zenlot.net/support/`, `/privacy-policy/` and
`/account-deletion/` (with `/fr` and `/es` suffixes on the localized pages).
Terms of Service and Data Retention are referenced in the footer text but not
linked, because no public page for them exists yet — add links when they do.

**Screenshots** — see `assets/screenshots/README.md` for the eight filenames,
which app screen each shows, and the light/dark + language fallback order.

## Language routing

The site has three pages: `/` (English, and the fallback), `/fr/`, `/es/`.

- **Auto-detect.** An inline script in `index.html`'s `<head>` runs before paint.
  On a first visit it reads the browser's language list (`navigator.languages`)
  and, if the best match is `fr` or `es`, `location.replace()`s to that
  subpage. Anything else stays on English. It uses `replace()` (no history
  entry) and bails out on back/forward navigations, so it's never a
  back-button trap.
- **Manual choice wins.** Clicking **EN · FR · ES** in the header, menu or
  footer stores that pick in `localStorage` (`zenlot:lang`, wired in
  `assets/site.js` via `a[hreflang]`). From then on the auto-detect defers to
  it — including sending the visitor to their chosen locale when they hit `/`.
- **Force a language** with `?lang=en|fr|es` on the root URL — handy for
  support links and testing. It also updates the stored choice.
- **Subpages never redirect**, so a shared `/fr/` or `/es/` link always opens
  in that language.

`hreflang` + `x-default` tags (pointing `x-default` at English) are in every
page's `<head>` so search engines index each locale directly rather than
following the JS redirect.

## Custom domain

The site is served from **`info.zenlot.net`** (root `CNAME` file + DNS `CNAME`
`info` → `otonyeiyalla.github.io`, *Enforce HTTPS* on in **Settings → Pages**).
The `otonyeiyalla.github.io/zenlot-site/` path 404s once a custom domain is set.

All absolute URLs (`canonical` / `hreflang` / `og:*` / `twitter:image` in the
three HTML files, plus `sitemap.xml` and `robots.txt`) point at
`https://info.zenlot.net/`. To move to another domain, update the `CNAME` file,
the DNS record, and those same absolute URLs.

## Before publishing

- Drop in at least the P1 screenshots (`assets/screenshots/README.md`).
- Open both store links on their phones; confirm regional availability.
- Confirm "currently free" still applies.
- Check the theme toggle, keyboard navigation and the EN · FR · ES switcher.
