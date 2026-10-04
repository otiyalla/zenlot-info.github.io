# Zenlot infographic page: content and production brief

Prepared: 8 September 2026.

**Purpose:** Create a visual landing page that explains why Zenlot exists, what makes its approach useful, why traders should try it, and where to download it.

**Founder-confirmed direction:** Zenlot is already released on mobile, is currently free, and is for traders at every experience level. Its purpose is to help improve discipline and encourage trading by rules. Download actions should lead to the Apple App Store and Google Play. **Promote only features available in the current store release.**

**Review basis:** Current mobile/backend source, historical mobile source with version 1.2.0, release notes, components, and public App Store search results. No screenshots were captured and no installed store build was visually tested. This is a content/design handoff, not a website implementation.

## 1. The message the page should leave behind

**Recommended headline: “Build discipline. Trade by your rules.”**

**One-sentence description:** Zenlot is a free mobile forex trading journal that brings your trading rules, trade details, and reflections into a repeatable routine.

**Why Zenlot exists:** To help traders improve discipline and trade by rules. This purpose comes directly from the founder; the page should make it explicit.

**What makes its approach useful:** Reusable stop-loss and take-profit settings connect the rules you choose with the trades you record. Journaling and history give you a place to return to the reasoning and results. Weekly and monthly analysis support that review habit.

Present this combination as Zenlot’s approach. Do not claim it is the only app with these features or that competitors lack them; no competitor audit was performed.

**Why try it:** It is currently free, works on mobile, and offers a concrete first step: record a trade with its reasoning, then return to review it.

**Audience:** Traders at every experience level. Use forex examples because that is what the reviewed product supports; “all experience levels” must not become a claim of support for every asset class.

| Experience | Relevant motivation | How the page should speak to them |
| --- | --- | --- |
| Starting out | Build a clear recording and review routine. | Explain terms such as stop-loss and take-profit in plain language. |
| Developing consistency | Stop leaving rules and reflections disconnected from trade records. | Show reusable rules and a meaningful journal example. |
| Experienced | Keep a repeatable record and review process on mobile. | Show actual trade details, history, and analysis without exaggerated promises. |

**Tone:** Practical, calm, encouraging, and specific. Describe discipline as a habit the app supports, not a guaranteed result of installing it.

## 2. Release scope: the evidence behind the claims

The local working app reports 1.5.0. Indexed public results for the [Zenlot App Store listing](https://apps.apple.com/cm/app/zenlot/id6759946394) for English [Zenlot App Store English listing](https://apps.apple.com/us/app/zenlot/id6759946394) showed version 1.2.0, listed as free, with automatic trade closing in its release notes. Direct page retrieval failed, so this is indexed evidence rather than a live install verification. (Note: version 1.5.0 is now released. You can check)

Historical mobile commits `ad4e8f5` and `5234430` declare version/runtime 1.2.0. Their source contains the core capabilities below. This makes them a better basis for the current-release page than the newer working tree, although a historical commit is not proof of the exact shipped binary.

| Include in the current-release story | Evidence and appropriate claim |
| --- | --- |
| Reusable trading rules | Historical trading-rules screen and stop-loss/take-profit components use saved pip values to suggest price levels. Say “Reuse your stop-loss and take-profit settings.” |
| Structured trade records | Historical trade-entry form includes symbol, entry, lot size, stop-loss, take-profit, pip information, and risk/reward ratio. Say “Keep the key details of a trade together.” |
| Journaling | Historical trade-entry notes and journal screens support written reflections, search, pins, and archives. Say “Record your reasoning and return to it later.” |
| Active trades and history | Historical home/history screens support reviewing recorded trades and their status. Say “Follow your recorded trades from entry to review.” |
| Weekly/monthly analysis | Historical analysis component includes weekly/monthly analysis and pip summaries. Say “Review your activity over time.” |
| Automatic record closing | Public iOS release notes describe tracked trades closing when take-profit or stop-loss is reached. Use as an optional iOS detail after checking platform parity; do not imply broker execution. |
| English/French and themes | Historical localization/theme sources support them. Useful secondary details; confirm in both downloadable builds before adding platform-wide badges. |

**Exclude from the current page unless independently verified in the downloadable builds:** setup-quality scores, plan-adherence scoring, the structured trading-plan wizard, process-versus-outcome verdicts, behavioral detection, AI coaching, newer risk-summary/governance/portfolio/drawdown screens, and stop-adjustment coaching. These exist in later source and should not drive the current page or its screenshots.

The page may invite users to reflect on their decisions, but must not imply that the current release automatically grades their discipline or detects behavioral patterns.

## 3. Page structure and ready-to-use visitor copy

Build a responsive scrolling webpage with real text, a simple workflow infographic, and product screenshots. Aim for approximately 450–650 words of visible copy including FAQs. The material below is a copy bank; the producer can shorten it while preserving meaning.

### A. Hero: what it is and why it matters

**Eyebrow:** A forex trading journal for every experience level

**Headline:** Build discipline. Trade by your rules.

**Body:** Bring your trading rules, trade details, and reflections into one mobile journal. Zenlot helps you build a routine around planning, recording, and reviewing your trades.

**Offer line:** Currently free on iOS and Android.

**Primary actions:** Official “Download on the App Store” and “Get it on Google Play” badges, linked to the exact store destinations.

**Secondary action:** See how Zenlot works → scroll to the workflow.

**Visual:** A real trade-entry screen from the released app showing entry, stop-loss, take-profit, and risk/reward details. Pair with a small journal or history crop if both remain readable.

### B. Why Zenlot: the purpose and the problem

**Headline:** Give your trading rules a place in your routine.

**Body:** Having rules is one step. Returning to them is another. Zenlot was built to help traders improve discipline by keeping trade details, reusable settings, and written reflections close at hand.

**Three short callouts:**

- Set the rules you want to work with.
- Record the thinking behind a trade.
- Make time to review what happened.

**Visual:** Three labeled objects—“My rules,” “My trade,” “My review”—connected into one loop. Use familiar app details instead of stock trading imagery.

### C. The main infographic: a repeatable trading routine

**Headline:** Set your rules. Record your trade. Review and reflect.

| Step | Visitor copy | Product proof |
| --- | --- | --- |
| 1. Set | Save stop-loss and take-profit pip settings you can reuse when recording trades. | Trading Rules screen with readable values |
| 2. Record | Add your entry, lot size, stop-loss, and take-profit. Keep the reason for the trade alongside its details. | Completed Trade Entry form and note |
| 3. Review | Return to your history and journal. Use weekly and monthly analysis to support your review. | History, journal, and an analysis crop |

**Supporting line:** Start with one clear record. Build a habit you can return to.

**Layout:** Three connected stages on desktop; three stacked stages on mobile. The loop illustrates the user’s routine, not automated trade execution.

**Optional illustrative reflection:** “What was my reason for entering? Did I follow the rules I intended to use? What should I remember next time?” This is suggested journal content, not a claim of an automated in-app questionnaire.

### D. What makes Zenlot worth trying

Use three short benefit cards, each paired with a real component crop.

**Rules you can reuse.**  
Your saved stop-loss and take-profit settings provide suggestions while you enter trade details.

**A record with context.**  
Keep the numbers and the reasoning. Written reflections give you more to revisit than an outcome alone.

**A review routine on mobile.**  
Return to your trade history, journal, and weekly or monthly analysis wherever you use your phone.

**Small supporting line:** Built for traders at every experience level. Currently free.

This is the current-release differentiation. Do not turn “rules you can reuse” into “rules automatically enforced,” or “review routine” into “automatic behavioral analysis.”

### E. Show that different traders belong here

**Headline:** Wherever you are in trading, a clear record helps you review.

- **Starting out?** Build a habit of recording the details and your reasoning.
- **Working on consistency?** Keep your rules and reflections part of the routine.
- **Already experienced?** Keep your trading record and review process close at hand.

Keep this section brief. It should broaden relevance without suggesting the app replaces trading education or professional judgment.

### F. A practical reason to download

**Headline:** Start your next trade review with a clearer record.

**Body:** Set your trading rules, record a trade, and write down why you took it. Give yourself something concrete to return to.

**Offer:** Zenlot is currently free.

Repeat the App Store and Google Play badges. Do not add “free forever,” “no credit card required,” a trial deadline, or feature limits that the founder has not specified.

### G. Short FAQs and footer

**Who is Zenlot for?**  
Traders at every experience level who want to build discipline through rules, trade recording, and reflection. The reviewed app focuses on forex.

**What can I record?**  
Trade details such as entry, lot size, stop-loss, and take-profit, together with written notes.

**Does Zenlot place trades with my broker?**  
The reviewed app records and tracks trades; it does not submit orders to your broker.

**Is Zenlot free?**  
Yes. Zenlot is currently free.

**Where can I download it?**  
Use the App Store or Google Play buttons on this page.

**Footer links:** Support · Privacy · Terms.

Suggested short scope statement, consistent with the app’s existing product description: “Zenlot supports journaling and trade review. It does not guarantee trading results.” Link to the approved public terms for the complete wording.

## 4. Screenshot recommendations for this page

**Recommended minimum: four captures—trade entry, trading rules, journal, and history.** Add an analysis crop if it remains clear at mobile size. These demonstrate the actual current-release story.

The component paths below locate the relevant areas in the repository. **Capture the installed store version or the corresponding release build.** Current files may contain newer UI, so their existence alone does not make a working-tree screenshot suitable.

| Priority / suggested filename | Screen and navigation | Source location | Capture and purpose |
| --- | --- | --- | --- |
| P1 · `01-trade-entry.png` | Home → new trade → fill trade details | `zenlot/components/organisms/TradeEntryForm/TradeEntryForm.tsx`; `StopLossEntry`, `TakeProfitEntry`, `TradeRatio`, and `PipInfo` under `components/molecules/` | Show entry, lot size, stop-loss, take-profit, and ratio with consistent demo values. Best hero image: immediately communicates the product. |
| P1 · `02-trading-rules.png` | Profile → Trading Rules | `zenlot/app/(protected)/(profile)/tradingrules.tsx`; `zenlot/components/organisms/ForexRulesTable/ForexRulesTable.tsx` | Show reusable stop-loss/take-profit pip settings. Pair a small crop with the suggested levels in trade entry to explain how rules connect to a record. |
| P1 · `03-journal-reflection.png` | Journal → open a meaningful entry | `zenlot/components/pages/JournalPage/JournalPage.tsx`; `zenlot/components/organisms/Journal/JournalDetails.tsx` | Use a short fictional reflection about the intended rules, actual decision, and lesson. Makes “discipline” concrete. On the older release, do not invent the newer Reflections/Insights switch. |
| P1 · `04-trade-history.png` | History → populated list, or open one trade | `zenlot/components/pages/HistoryPage/HistoryPage.tsx`; `zenlot/components/organisms/History/HistoryDetails.tsx` | Show readable closed records with mixed outcomes. Demonstrates returning to previous trades. |
| P2 · `05-analysis.png` | Home → select weekly/monthly analysis | `zenlot/components/organisms/TradingAnalysis/TradingAnalysis.tsx`; `zenlot/components/organisms/AnalysisCard/AnalysisCard.tsx` | One focused analysis card with its period label and sample values. Supports review over time; no impressive-return montage. |
| P2 · `06-active-trades.png` | Home → active trades | `zenlot/components/organisms/ActiveTrades/ActiveTrades.tsx`; `zenlot/components/organisms/TradeCard/TradeCard.tsx` | A populated overview for a supporting gallery or social preview. Less distinctive than the rules-to-trade sequence. |

### Demonstration content

Suggested fictional journal note:

> Plan: Use the stop-loss and take-profit settings I chose before entering.  
> Review: I changed my exit after the trade opened.  
> Next reflection: What prompted the change, and did it fit my rules?

Label synthetic screenshots **“Example data.”** This is sample user-authored content, not a testimonial or proof of outcomes.

### Capture and image-production requirements

- Use one consistent phone size, app version, language, and theme. Prefer a light-theme set for this page’s reading surfaces; keep high-resolution originals.
- Use a dedicated demo account. Remove personal names, emails, account identifiers, and private notes. Keep trade values and dates internally consistent.
- Use both winning and losing examples. Sample returns and statistics must not be presented as typical user results.
- Capture completed screens without keyboards, debug overlays, error messages, or unrelated notifications. Do not use the existing `signup_failure_after_submit.png` in marketing.
- Preserve the real UI. Add explanatory callouts outside the screenshot rather than painting features or labels into the app.
- Show a full screen for context and an enlarged detail crop where needed. Readability is more valuable than fitting six tiny phones into one section.
- Export appropriately sized web variants; preserve aspect ratios and reserve layout space. Lazy-load images below the hero.
- Supply alt text such as “Zenlot trade-entry screen showing entry, stop-loss, take-profit, and risk/reward details.” Repeat essential meaning in adjacent page text.
- Storybook can help explain current component structure, but present-day stories may demonstrate later features. Use only release-matched fixtures, label them as demonstrations, and never call them store-build screenshots.
- Login, signup, profile settings, generic candlestick charts, and splash screens should not be the main selling images.

## 5. Download destinations and conversion behavior

**Confirmed by founder:** The app is released on mobile; the page should lead to the App Store and Google Play. It is not a waitlist or beta landing page.

| Destination | Evidence / status | Handoff requirement |
| --- | --- | --- |
| Apple App Store | App identity `6759946394` is corroborated by indexed public results and local EAS submission configuration. | Use `https://apps.apple.com/app/id6759946394` as the candidate destination; verify the final redirect and intended country availability on a device. |
| Google Play | Founder confirms this is the intended destination. Android package is `com.zenlot.app`; the exact public listing was not verified. | **Founder to provide the actual share link.** Do not fabricate a listing URL from the package identifier. |
| Support | `info@zenlot.net` appears in current in-app legal copy. | Confirm it is monitored before publishing it. |
| Privacy and Terms | In-app legal content exists; working public URLs were not verified. | Provide approved pages that visitors can read without logging into the app. |

**Hero and final section:** Show both official store badges with the line “Currently free.” Use the store providers’ official assets when building the page.

**Mobile:** Put the matching platform first while keeping the other destination discoverable. Avoid forced redirects. A small sticky download action is optional if it does not cover content or controls.

**Desktop:** Show both clickable badges. An optional QR code should open a stable first-party download-selection page containing both destinations; create that page before generating the QR code. A QR code alone is not sufficient.

**Placement:** Hero, after the main product demonstration, and the final download section. Use “Download Zenlot” for a general anchor to the download section and platform badges for outbound actions.

**Link checks before publication:** Open both links on their respective phones and desktop; check regional availability, the app identity, and that the visitor can reach installation. Unresolved links are launch tasks, not a reason to delay producing this brief.

## 6. Visual direction based on the existing app

- **Mood:** Calm, clear, practical. Show how the product works through real details.
- **Palette:** Navy `#0A2540`, splash navy `#001C34`, blue `#2D9CDB`, white `#FFFFFF`, text `#11181C`, and pale surfaces `#F3F4F6`. These are grounded in the app’s styling. Validate final contrast on the webpage rather than copying every existing color pairing.
- **Typography:** The app’s Text primitive uses the system font. A system sans-serif stack offers continuity. Use clear headings and comfortably readable body copy.
- **Brand assets:** Inspect `zenlot/assets/images/zenlot-darkGradient.png`, `zenlot-lightGradient.png`, `zenlot_darkMono.png`, and `zenlot_lightMono.png`; choose the correct variant for the background. Platform icon assets are under `zenlot/assets/images/favicon/`.
- **Layout:** A clear hero, a three-stage routine infographic, three short benefit blocks, then a download section and FAQs. Use generous whitespace and avoid excessive feature grids.
- **Infographic:** “Set → Record → Review” is the central graphic. Connect each stage to a real product crop and one user benefit.
- **Accessibility:** Use real text rather than flattening the page into an image. Make headings semantic, links descriptive, keyboard focus visible, images explained, and touch targets comfortable. Do not rely on color alone.
- **Responsive behavior:** Stack the workflow on phones. Keep labels and calls to action visible without horizontal scrolling. Test common phone, tablet, and desktop widths.
- **Motion:** Optional subtle transitions that respect reduced-motion preferences. No profit counters, confetti for wins, or autoplay video needed to understand the story.

The ui-ux-pro-max skill was consulted for app-landing structure and responsive image guidance. Its generic suggestions for ratings, testimonial sections, and unrelated typography were not adopted: real evidence and the existing Zenlot identity take priority.

## 7. Other information worth including or preparing

1. **The first-use expectation:** Invite a simple first step: set defaults, record a trade with reasoning, and review it later. Avoid promising instant insights or a quantified time to results.
2. **Scope of “rules”:** For this release, explain reusable stop-loss/take-profit settings. Do not imply that arbitrary trading strategies are automatically enforced or assessed.
3. **Broker boundaries:** Trade records and automatic record closing are not brokerage orders. Multi-broker execution appears in a proposed design document and is not a current selling point.
4. **Founder context:** A short “Why we built Zenlot” line can use the confirmed purpose: helping traders build discipline and trade by rules. Do not invent a personal trading history or origin anecdote.
5. **Trust:** Real screenshots and plain explanations are enough to start. Add testimonials, ratings, or usage counts only if real, current, and approved for publication. Never invent profitability improvements.
6. **Pricing clarity:** “Currently free” is confirmed. Revisit the page if access changes; do not create an implied lifetime promise.
7. **Privacy:** Give visitors working public privacy/terms links. Avoid claims such as “data never leaves your device,” “bank-grade,” or certifications unsupported by the product.
8. **Search metadata:** Suggested title: “Zenlot | Free Forex Trading Journal.” Suggested description: “Build a trading routine with Zenlot. Set reusable trading rules, record trades, and review your journal and history. Currently free on iOS and Android.”
9. **Social preview:** Prepare a share image with the logo, headline, and one legible trade-entry crop. A downloadable infographic can reuse the same three-step story with a QR code and written destination.
10. **Measurement:** Track App Store and Play Store clicks by placement. A store click is not an install; use supported store/app attribution for installations and first completed records. Establish a baseline before choosing conversion targets.
11. **Languages:** English is the working language of this brief. An optional French version can match the app’s localization once release parity and page translation are checked.

## 8. Remaining inputs

The audience, purpose, current free access, mobile release status, and current-release-only scope are settled.

**Needed to complete the page’s destinations:** the exact Google Play share link; final App Store destination confirmation; public support, privacy, and terms URLs. https://play.google.com/store/apps/details?id=com.zenlot.app

**Needed during asset production:** release-matched screenshots and a quick check that the selected features/screens are present on both downloadable platforms. Historical source and public listing data support the brief but do not replace that check. (Create a read me to help me know the pictures and location)

**Optional:** preferred launch countries, a French page, approved testimonials, and a longer founder story. The page can proceed without these extras.

## 9. Future-use appendix — not part of current launch copy

The newer working tree contains potentially stronger differentiation for a later page update:

| Later capability | Future screenshot candidate | Condition for adding it |
| --- | --- | --- |
| Setup quality and plan-adherence scores | `PreTradeEvaluationResult` showing both scores | Verified in the downloadable release; explain scores as assessments of recorded inputs, not win probabilities. |
| Process-versus-outcome verdict | `TradeVerdictView`: weak-process win paired with strong-process loss | Verified release availability. A 2×2 process/outcome matrix could become a future central infographic. |
| Behavioral insights | `BehavioralDashboard` with a populated report and evidence | Verified release availability; disclose at least 10 fully evaluated trades in the analysis window and additional pattern-specific evidence requirements. |
| Risk profiles, governance, portfolio, and drawdown | Completed `RiskSummary` and profile subpages | Verify actual released behavior and explain acknowledged overrides accurately. |
| AI coaching | Completed coaching text within an evaluation or report | Confirm live service availability; describe written reflection without promises of profitable decisions. |

These are internal planning notes, not “coming soon” promises. Do not publish this appendix on the current page.

## 10. Source map and production checks

Paths are relative to this Markdown file. For claims about 1.2.0, inspect these paths at historical mobile commit `5234430` or `ad4e8f5`, not only at the current working tree.

| Subject | Source |
| --- | --- |
| Identity and version | [App configuration](zenlot/app.json); historical 1.2.0 configuration at both commits above |
| Trade entry | [TradeEntryForm](zenlot/components/organisms/TradeEntryForm/TradeEntryForm.tsx) |
| Reusable rule suggestions | [StopLossEntry](zenlot/components/molecules/StopLossEntry/StopLossEntry.tsx), [TakeProfitEntry](zenlot/components/molecules/TakeProfitEntry/TakeProfitEntry.tsx) |
| Journaling | [JournalPage](zenlot/components/pages/JournalPage/JournalPage.tsx), [JournalDetails](zenlot/components/organisms/Journal/JournalDetails.tsx) |
| History | [HistoryPage](zenlot/components/pages/HistoryPage/HistoryPage.tsx), [HistoryDetails](zenlot/components/organisms/History/HistoryDetails.tsx) |
| Weekly/monthly analysis | [TradingAnalysis](zenlot/components/organisms/TradingAnalysis/TradingAnalysis.tsx) |
| Copy and languages | [English](zenlot/localization/english.ts), [French](zenlot/localization/french.ts) |
| Visual language | [Colors](zenlot/constants/Colors.ts), [Text](zenlot/components/atoms/Text/Text.tsx), [Logo](zenlot/components/atoms/Logo/Logo.tsx) |
| Release history | [Release notes](zenlot/RELEASE_NOTES.md) |
| Future evaluation and insights | [Verdict engine](zenlot-server/src/evaluation/engine/verdict.ts), [Behavioral engine](zenlot-server/src/evaluation/engine/behavioral.ts) |
| Proposed broker capabilities | [Multi-broker PRD](zenlot-server/docs/PRD_MULTI_BROKER_SHARED_RISK.md) |
| Public iOS evidence | [Zenlot App Store listing](https://apps.apple.com/cm/app/zenlot/id6759946394), indexed result reviewed 8 September 2026; direct retrieval unsuccessful |

Before publishing the resulting page:

- Use only current-release claims and screenshots; keep the future appendix internal.
- Replace every unresolved destination and check the install paths.
- Confirm “currently free” still applies.
- Check mobile readability, keyboard navigation, image descriptions, contrast, and unobstructed download controls.
- Verify that sample data and testimonials are clearly and honestly presented.

Only this Markdown brief was created. No app behavior was changed, no page was published, and runtime tests were not needed for this document.
