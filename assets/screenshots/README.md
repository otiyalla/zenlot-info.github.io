# Screenshots — what to capture and where to put it

The page shows eight app screens. Each one is a device frame that stays on a
branded **"Screenshot coming"** placeholder until the matching PNG exists, so
you can add captures one at a time with no code changes.

## Folder layout

```
assets/screenshots/
  en/light/   en/dark/
  fr/light/   fr/dark/
  es/light/   es/dark/
  legacy/     ← the previous site's captures, kept for reference; not used
```

The page picks the file for the visitor's **language** and the active
**theme** (light/dark toggle in the header, defaults to the system setting).
When a file is missing it falls back in this order, first hit wins:

1. `<lang>/<theme>`
2. `<lang>/<other theme>`
3. `en/<theme>`
4. `en/<other theme>`
5. placeholder

So the fastest way to get a complete page is **`en/dark/` first** — every
frame in every language will then show *something* — and fill in the other
folders as you go. Dark captures also sit best on the page's navy hero; light
captures read best inside the light "How it works" panel.

## The eight files

Same filenames in every folder. Priority P1 = the page's core story, P2 = the
"Also in the current release" gallery.

| Priority | Filename | Where it appears on the page | App screen to capture | Source in `zenlot/` |
| --- | --- | --- | --- | --- |
| P1 | `01-trade-entry.png` | Hero (front phone) and **Step 2 — Record** | Home → **+ new trade** → fill entry, lot size, stop-loss, take-profit. Capture with the Position & Governance block visible and no keyboard. | `components/organisms/TradeEntryForm/TradeEntryForm.tsx`, `components/molecules/StopLossEntry`, `TakeProfitEntry`, `TradeRatio`, `PipInfo` |
| P1 | `02-trading-rules.png` | **Step 1 — Set** | Profile → **Trading Rules** with a few stop-loss / take-profit pip rows filled in. | `app/(protected)/(profile)/tradingrules.tsx`, `components/organisms/ForexRulesTable/ForexRulesTable.tsx` |
| P1 | `03-journal.png` | Hero (back phone, small) | Journal → open one entry with a short, readable reflection (suggested text below). | `components/pages/JournalPage/JournalPage.tsx`, `components/organisms/Journal/JournalDetails.tsx` |
| P1 | `04-history.png` | **Step 3 — Review** | History tab with a populated list — mix of wins and losses. | `components/pages/HistoryPage/HistoryPage.tsx`, `components/organisms/History/HistoryDetails.tsx` |
| P2 | `05-analysis.png` | Gallery — "Weekly & monthly analysis" | Home → select weekly or monthly analysis; one focused card with its period label. | `components/organisms/TradingAnalysis/TradingAnalysis.tsx`, `components/organisms/AnalysisCard/AnalysisCard.tsx` |
| P2 | `06-risk-profile.png` | Gallery — "Risk profile" | Profile → **Risk Profile** showing Prudent / Balanced / Dynamic. | `app/(protected)/(profile)/riskprofile.tsx` |
| P2 | `07-verdict.png` | Gallery — "Trade verdict" | Open a closed trade → **Verdict** with R-multiple, setup quality and plan adherence grades. | `app/(protected)/trade/[id]/verdict.tsx`, `components/organisms/TradeVerdictView/TradeVerdictView.tsx` |
| P2 | `08-insights.png` | Gallery — "Behavioral Insights" | Home → **Behavioral Insights** with a populated report (needs 10+ evaluated trades on the demo account). | `components/organisms/BehavioralDashboard/BehavioralDashboard.tsx` |

Full set = 8 files × 2 themes × 3 languages = 48 captures. P1 in `en/dark/`
and `en/light/` (8 captures) is enough to launch; the fallback covers the rest.

## Capture guidance

- **Portrait, no device chrome.** Frames are 9:19.5 and crop from the top; the
  site draws its own bezel. Recommended size 1179 × 2556 (iPhone 15/16 Pro) or
  1080 × 2400 (Pixel) — anything at that ratio scales fine.
- **One phone, one app version, one language per folder.** Use the installed
  store build (1.5.0) so the page never shows a feature the store doesn't ship.
- **Light folder = app light theme, dark folder = app dark theme.** Set it in
  Profile → Appearance before capturing.
- **Demo account only.** No real names, emails or account identifiers. Keep
  trade values and dates consistent across screens.
- **Mixed outcomes.** Show wins *and* losses. The page labels every frame
  "Example data" — never present sample numbers as typical results.
- **No keyboards, overlays, error toasts or notifications** in the capture.
- Don't paint labels or callouts into the screenshot; the page adds context
  around it.

### Suggested journal reflection for `03-journal.png`

> Plan: Use the stop-loss and take-profit settings I chose before entering.
> Review: I changed my exit after the trade opened.
> Next reflection: What prompted the change, and did it fit my rules?

## Capturing from the Expo app

```bash
cd ../zenlot/zenlot
yarn ios          # or: yarn android
```

iOS Simulator: **Cmd+S** saves to the Desktop. On a device, use the normal
screenshot gesture and AirDrop the files over.

## Optimising before commit

Keep each file under ~400 KB:

```bash
# macOS, built-in
sips -Z 1600 *.png

# or (brew install pngquant)
pngquant --quality=70-90 --ext .png --force *.png
```

## Checking your work

Open the page locally (`python3 -m http.server 8080`), toggle the theme with
the sun/moon button, and switch language with EN · FR · ES. A frame that still
shows the placeholder tells you the exact filename it's waiting for.
