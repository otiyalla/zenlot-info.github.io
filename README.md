# zenlot-site

Marketing landing page for **Zenlot** — the risk-management and trade-journaling
app. Static HTML + Tailwind (Play CDN), no build step, deployed to GitHub Pages.

Live: <https://otonyeiyalla.github.io/zenlot-site/> · FR: <https://otonyeiyalla.github.io/zenlot-site/fr/>

## Structure

```
index.html            English landing page
fr/index.html         French landing page (copy matched to localization/french.ts)
assets/site.css       Shared styles — palette, device frames, cards, animations
assets/site.js        Shared behaviour — scroll reveal, mobile menu, screenshot fallback
assets/brand/         Logo + favicons, lifted from the Expo app's assets
assets/screenshots/   ← drop your app screenshots here (see that folder's README)
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

Note the live site is served from a **`/zenlot-site/` sub-path**, so every asset
reference is relative (`assets/…` from the root, `../assets/…` from `fr/`).
Don't switch any of them to absolute (`/assets/…`) — they'd 404 in production.

## Editing

**Store links** appear in four places per page (hero badges, final CTA badges,
footer). Search and replace:

- iOS — `https://apps.apple.com/us/app/zenlot/id6759946394`
- Android — `https://play.google.com/store/apps/details?id=com.zenlot.app`

**Colours** live as CSS custom properties at the top of `assets/site.css`.
They were sampled from the app icon: teal `#2fbcc1` → blue `#1478a7` on the
splash navy `#001c34` from `zenlot/app.json`.

**Copy** in the FR page is aligned to `zenlot/localization/french.ts`. If you
change wording in the app, mirror it here so terminology stays consistent.

## Custom domain

You already own `zenlot.net` (it serves `privacy.zenlot.net`). To move this site
to e.g. `www.zenlot.net`:

1. Add a `CNAME` file at the repo root containing `www.zenlot.net`
2. Add a DNS `CNAME` record: `www` → `otonyeiyalla.github.io`
3. **Settings → Pages → Custom domain**, then enable *Enforce HTTPS*
4. Update the absolute URLs in `sitemap.xml`, `robots.txt`, and the
   `canonical` / `hreflang` / `og:*` tags in both HTML files

## Production hardening (optional)

The Tailwind Play CDN compiles styles in the browser — fine for a landing page,
but it costs a little first-paint time and shows a console warning. To remove
both, install Tailwind, generate a static stylesheet, and swap the
`<script src="https://cdn.tailwindcss.com…">` tag for that file.
