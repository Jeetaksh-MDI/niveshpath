# NiveshPath — investor confidence & cyber-safety learning lab

A **working, deployable static prototype** for a proposed CDSL Reimagine Ideathon concept. The project is **independent** and is not an official CDSL/SEBI product or an endorsement. It offers educational exercises only; no investments, trading, brokerage connectivity or financial advice.

## Try the live workflows

1. Open `index.html` in a modern browser, or deploy the contents of this folder to a static web host.
2. Choose **Student**, **First-time investor**, or **Senior citizen**, then English or Hindi.
3. Answer a 3-question **baseline diagnostic**.
4. Explore the dashboard. Notice how the **recommended lesson changes** according to your persona, your baseline and what you have mastered.
5. Complete a lesson and its knowledge check. Correct completion updates your skill and awards one-time learning points.
6. Open the **Scam simulator** and respond to fictional OTP, guaranteed-profit, remote-access and financial-fraud scenarios. Results update the safety metric.
7. Inspect **My skills**, and try the **Learning guide** (rule-based; not a generative AI service).
8. Test Hindi, increased text size, high contrast, browser text-to-speech and clearing all saved demo data in **Accessibility**.

### What is really implemented?

| Capability | Status |
|---|---|
| Responsive desktop and mobile UI | Working |
| Three persona paths | Working |
| Three-question diagnostic | Working |
| Transparent adaptive lesson ordering | Working; rule/score-based, not ML |
| Six learning modules + formative quizzes | Working |
| Four interactive fraud simulations | Working |
| Points, mastery tracking, competency milestones | Working (no trading incentives or leaderboards) |
| English + Hindi UI and instructional content | Working for demo content |
| Education-only guided Q&A | Working; curated response rules, **not live AI** |
| Screen-reader friendly semantics, large text, contrast | Basic implementation; accessibility audit still required |
| Text-to-speech | Uses browser speech engine, availability varies |
| Offline revisit after first hosted visit | Basic service-worker shell cache, on supported HTTPS hosts |
| Learning-data persistence | Browser-local storage only |
| Production AI/ML, authenticated accounts, model training | **Not implemented** |
| Live link/fraud reputation classification | **Not implemented** (unsafe to promise) |
| Real trades, portfolio access, user investments | **Not implemented and not intended** |

## Deploy (no build, credentials, or subscription required)

**Option A — Netlify**: Extract the ZIP. In Netlify, use the manual deploy / drag-and-drop deployment and upload the contents of `niveshpath-prototype` (the folder containing `index.html`).

**Option B — GitHub Pages**: Add `index.html`, `styles.css`, `app.js`, `favicon.svg` and `sw.js` at the repository root; go to **Settings → Pages**, select deploy from the main branch root. The site should be served via HTTPS.

**Option C — Vercel / Cloudflare Pages**: Create a static project from this folder with no build command and the project root as the output directory. (Platform UI labels can vary.)

**Local preview**: `index.html` opens directly in a browser. To test the offline service worker, use a local HTTP server or a secure HTTPS deployment (service workers do not run from `file://`). Example: `python -m http.server 8000`, then open `http://localhost:8000/`.

**Single-file option**: `NiveshPath_Standalone_Demo.html` (provided separately with this delivery) includes its CSS and JavaScript and runs when opened directly. The deployable folder is recommended for maintainability and caching.

## Files

- `index.html` — semantic app shell and metadata.
- `styles.css` — responsive design and accessibility variants. System-font fallbacks; no external font requests.
- `app.js` — local curriculum, diagnostic, personalization, modules, simulator, guide and view routing.
- `favicon.svg` — original simple icon.
- `sw.js` — optional offline shell cache.
- `preview-onboarding.png`, `preview-dashboard.png`, `preview-mobile.png` — test screenshots.

## Personalization logic (MVP)

1. Persona defines a **priority order**, not access restrictions.
2. Baseline answers provide initial skill estimates for three topics.
3. The recommended next topic minimizes a clear score: `0.68 × current skill estimate + 6 × persona priority rank`, among lessons not yet mastered.
4. Successfully completing a quiz marks that lesson mastered. Simulation results contribute to relevant safety-area practice scores.
5. The user sees a short “why this is recommended” message. This is **not** a trained AI model or a prediction of investor risk.

**Beyond the prototype:** privacy-preserving Bayesian knowledge tracing / item-response methods could estimate topic mastery; content-based recommendations could choose practice formats; constrained retrieval over human-approved, versioned official sources could power an AI assistant. This should be implemented only after content governance, fairness review, security controls, cost/performance evaluation, child-data considerations and validation with the target groups. User financial holdings and credentials are not needed.

## Safety & privacy

- Only the chosen persona, language, UI preferences, knowledge-check answers and practice outcomes are stored in the browser's localStorage. **No backend, tracking, login or financial account details.**
- Clear data in **Accessibility → Reset demo** or clear the browser's site data.
- Practice scenarios are explicitly fictional; the tool does **not** claim to classify real calls, messages, people, sites or links as safe.
- The “guide” uses safe canned answers; it avoids security selection/advice and cannot make definitive judgments about real incidents.
- There are no payout, wagering, trading, stock-picking or speculative rewards. Points reflect educational mastery, not risk-taking or speed.
- The source links are direct official websites; they are not partnership claims.
- Before public launch: conduct legal/regulatory review, threat modelling, content sign-off, WCAG 2.2 testing, handling of minors, privacy notices, source monitoring, and usability pilots for each audience. Content accuracy and procedures can change.

## Official reference websites

Checked for prototype content on **26 October 2026**:

- SEBI Investor: https://investor.sebi.gov.in/
- SEBI Investor Support / intermediary verification: https://investor.sebi.gov.in/Investor-support.html
- CDSL: https://www.cdslindia.com/
- CDSL Investor Awareness FAQ: https://www.cdslindia.com/downloads/Investors/FAQs/FAQs%20-%20Investor%20Awareness%20-%20v3.pdf
- SEBI SCORES: https://scores.sebi.gov.in/scores-home
- National Cybercrime Reporting Portal: https://cybercrime.gov.in/

## Suggested 4-minute jury demo

1. **0:00–0:40:** Pick senior citizen or student; mention no sensitive information is collected.
2. **0:40–1:20:** Complete diagnostic; reveal personalized dashboard and explanation of lesson order.
3. **1:20–2:20:** Show a small demat/market learning card + knowledge check; dashboard progress changes.
4. **2:20–3:10:** Run a fictional OTP/fraud scenario. Show the risk flag, a safer choice, and official reporting route.
5. **3:10–4:00:** Switch language, enlarge text, show local data reset and clarify what real AI could add later.

## Prototype limitations

All learner scores and sample achievements are **illustrative practice indicators**. No effectiveness data or adoption outcomes have been collected. This product is not ready for regulated or public service use. Localization and accessibility must be validated with actual users; browser speech quality may vary, especially for Hindi. Service worker caching does not make external official reference sites available offline.
