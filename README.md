# zenlot-site

Marketing landing page for **Zenlot** — the risk-management and trade-journaling
app. Static HTML + Tailwind (Play CDN), no build step, deployed to GitHub Pages.

Live: <https://info.zenlot.net/> ·
FR: <https://info.zenlot.net/fr/> ·
ES: <https://info.zenlot.net/es/>

## Structure

```
index.html            English landing page
fr/index.html         French landing page (copy matched to localization/french.ts)
es/index.html         Spanish landing page (copy matched to localization/spanish.ts)
assets/site.css       Shared styles — palette, device frames, cards, animations
assets/site.js        Shared behaviour — scroll reveal, mobile menu, screenshot fallback
assets/brand/         Logo + favicons, lifted from the Expo app's assets
assets/screenshots/   ← drop your EN app screenshots here (see that folder's README)
assets/screenshots/fr/  French-locale screenshots
assets/screenshots/es/  Spanish-locale screenshots (placeholder until PNGs are added)
.github/workflows/    Pages deploy on push to main
```

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

**Colours** live as CSS custom properties at the top of `assets/site.css`.
They were sampled from the app icon: teal `#2fbcc1` → blue `#1478a7` on the
splash navy `#001c34` from `zenlot/app.json`.

**Copy** in the FR and ES pages is aligned to `zenlot/localization/french.ts`
and `zenlot/localization/spanish.ts`. If you change wording in the app, mirror
it here so terminology stays consistent.

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

## Production hardening (optional)

The Tailwind Play CDN compiles styles in the browser — fine for a landing page,
but it costs a little first-paint time and shows a console warning. To remove
both, install Tailwind, generate a static stylesheet, and swap the
`<script src="https://cdn.tailwindcss.com…">` tag for that file.
