# Screenshots

Drop your app screenshots here as PNGs. Both `index.html` and `fr/index.html`
already reference these exact filenames — no code changes needed. Until a file
exists, its device frame shows a branded placeholder instead of a broken image.

| Filename       | Used in                                    | Suggested screen |
| -------------- | ------------------------------------------ | ---------------- |
| `plan.png`     | Hero (front phone) + "Risk rules" feature  | Trade plan with stop-loss / take-profit / position size |
| `journal.png`  | Hero (back phone) + "Journaling" feature   | Journal entry for a trade |
| `history.png`  | "Analytics" feature                        | History / weekly-monthly pip analysis |

## Capture guidance

- **Portrait only.** The frames are 9:19.5 (iPhone-shaped) and crop from the top.
- **Recommended size:** 1179 × 2556 (iPhone 15/16 Pro) or anything at that ratio.
  Larger is fine — they're scaled down.
- **Use dark mode** so the screenshots sit naturally on the navy background.
- **No device chrome.** Capture the app UI only; the site draws its own bezel,
  and a second bezel inside the frame looks wrong.
- **Use realistic-looking data.** Blank states undersell the product; obviously
  fake numbers undermine trust.

## Capturing from the Expo app

```bash
cd ../zenlot/zenlot
yarn ios          # or: yarn android
```

Then in the simulator: **Cmd+S** (iOS Simulator saves to Desktop), or on a
device use the normal screenshot gesture and AirDrop them over.

## Optimising before commit

Keep each file under ~400 KB so the page stays fast:

```bash
# macOS, using the built-in sips
sips -Z 1600 plan.png journal.png history.png

# or with pngquant (brew install pngquant)
pngquant --quality=70-90 --ext .png --force *.png
```
