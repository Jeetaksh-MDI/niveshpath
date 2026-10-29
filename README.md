# NiveshPath 2.1 · Learn. Decide. Invest Independently.

**Team MDI Innovators · MDI Gurgaon · CDSL Reimagine Ideathon 2027**

NiveshPath is an **independent educational-only prototype**. It is not a CDSL, NSDL or SEBI product and offers no investment advice, securities recommendations, payments, account creation, brokerage integration or financial-data collection.

## v2.1 correction: preserve every existing feature, personalize discovery instead

This revision addresses the user-reported UI and discoverability regression:

- **Answer choices:** All quiz/diagnostic/scenario options use equal-width cards with centered text and a small A/B/C marker anchored on the left. CSS grid equalizes the card heights within each question, even when text wraps on mobile.
- **Existing experiences restored to navigation:** `Practice & simulations`, `My skills & achievements`, and the existing seven-step `Demat walkthrough` are now directly reachable. None of the original 24 lessons, original 10 fraud simulations, photos, resources, scores, badges or completed-learning records were deleted.
- **Practice & simulations hub:** At most three activities appear in **Recommended practice for you**. Explicit *Explore all eight learning games* and *Explore all ten original simulations* controls reveal the complete activity library on demand. This preserves all activities without overwhelming the personalized home dashboard.
- **Original achievements:** `My skills & achievements` again includes lesson counts, safe-decision scores, learning points, recent practice, and a user-controlled reveal for original milestones, badges and capability quests.
- **Genuine hyperpersonalization stays central:** The home dashboard retains a maximum of three needs-based recommendations. The separate activity hub derives practice suggestions from chosen goals, skill gaps, misconceptions, and prior attempts; existing content is never permanently hidden.
- **Working on GitHub Pages:** Bumped stylesheet/script version parameters and service-worker cache identifier for a clean upgrade. No account, backend or external AI service added.

**Examples of distinct practice starting points:** a new budget learner sees Savings Challenge; an experienced learner working on behaviour sees Decision Under Pressure; a learner tackling fraud risks sees Spot the Red Flags plus relevant original simulations; a demat learner sees Demat Journey plus KYC/app safety exercises. These are educational examples, not demographic assumptions.

## What changed from the uploaded working website

The original design, **24 financial-education lessons, 10 fictional safety scenarios**, curated official resources, team members/photos, demat awareness checklist and static GitHub Pages architecture are retained. The previous three mutually exclusive learner journeys have been replaced by a problem-first, explainable adaptive experience.

| Component | Implemented in v2.0 |
|---|---|
| Overlapping identities | Optional multi-select life context, independent investing experience, multiple simultaneous goals and learning format |
| Progressive diagnostic | Eight short, objective questions selected by goals; skipping is supported |
| Adaptive profile | Scores, repeated misconceptions, goals and completed activities stored locally |
| Relevance filter | Default dashboard displays **one priority step + up to two relevant activities**, never the full library |
| Concept dependency map | Verified acyclic 24-topic DAG, with previously demonstrated skills skipped and cybersecurity emergency override |
| Transparent recommendation engine | Configurable heuristic ranks demonstrated gap, safety concerns, goal fit, prerequisite readiness and format |
| Personal learning progression | Correct/incorrect lessons and scenarios recalculate priorities; optional all-topic exploration |
| Additional interactive games | **8 newly added** mechanics: savings sliders, inflation inference, instrument matching, safety checklist, fraud-red-flag recognition, ordered demat process, diversification assessment, behavioural decision practice |
| Local screenshot checker | Optional file preview, manual obscuring via canvas rectangles, user-led red flag checklist and official reporting links; **not** automated fraud classification |
| Context-aware guide | Existing offline rule-based FAQ enhanced with goal-aware next-step answers; no generative AI claims |
| Voice | Browser text-to-speech with adjustable rate and optional browser speech-recognition question entry, with text fallback and compatibility warnings |
| Accessibility | English/Hindi interface prompts where translated, high contrast, large type, keyboard controls, reduced-motion support, mobile navigation |
| Examples | Six fictional learner demonstrations showing different recommended learning paths |
| Team & sources | Existing Jeetaksh/Sakshi photos, team/About section, citations/official resource directory and disclaimer preserved |

**Important distinction:** Scores are lightweight prototype signals. A single correct diagnostic/lesson answer is *not* a validated proof of financial or behavioural mastery. A user may override the recommendations and explore all material. No source data is uploaded or analyzed by an external AI model.

## Run locally / deploy on GitHub Pages

**No build process, paid services, credentials, npm dependency or backend is necessary.** Upload the *contents* of this folder (not the ZIP itself) into the root of the existing repository.

1. Make a backup of the current repository (a branch is recommended).
2. Extract `NiveshPath_2.0_Deployable.zip` and open its `niveshpath-main` folder.
3. Copy the existing and new deployment files to the repository **root**, overwriting corresponding files: `index.html`, `app.js`, `curriculum.js`, `adaptive.js`, `experience.js`, `styles.css`, `sw.js`, `favicon.svg`, `jeetaksh.jpg`, `sakshi.jpg`. Keep any other repository content that does not conflict.
4. Commit and push to the publishing branch, typically `main`.
5. Open **GitHub → your repository → Settings → Pages**, select **Deploy from a branch**, `main`, `/(root)` and save (or retain your existing working Pages configuration).
6. Visit the project's actual GitHub Pages URL. If the old site appears, use a hard refresh (Ctrl+Shift+R) or clear the site's old service-worker cache from the browser's site settings. The new service worker has a distinct cache name.

For a simple local server, use `python -m http.server 8000` from the `niveshpath-main` folder, then visit `http://localhost:8000`. Plain `file://` opening can run the UI in some browsers but cannot demonstrate service-worker caching and may restrict storage APIs.

### File map

- `index.html` — HTML entrypoint; loads original curriculum, adaptive engine, original app, and enhancement layer **in that order**.
- `app.js` — original 24-lesson/10-scenario/official-resource/team app, preserved and lightly link-corrected.
- `curriculum.js` — the 18 added modules from the original ZIP (6 modules are in `app.js`).
- `adaptive.js` — isolated, deterministic learner profiling, goal maps, diagnostic bank, topic graph, recommended next steps, game maps and demo profiles.
- `experience.js` — new onboarding, pages, games, screenshot-checker, assistive speech UI, contextual guide, app integration, state changes and reset support.
- `styles.css` — original styling plus focused UI enhancements.
- `sw.js` — static-network-first offline shell cache, scoped to this GitHub Pages path.
- `jeetaksh.jpg` and `sakshi.jpg` — original team photographs.
- `screenshots/` — real Chromium-rendered examples produced by the automated visual test harness.
- `test_evidence/` — automated browser test script, machine-readable test outcomes and fictional test image.
- `TEST_REPORT.md` — tested vs. untested scope, decision engine explanation, limitations and source checks.

## How relevance works

1. A learner may select any subset of goals. Context labels are not treated as an ability score.
2. A short objective assessment, if taken, sets preliminary topic-level signals and records safety-relevant mistakes.
3. `adaptive.js` expands relevant target topics to prerequisite chains, **removing mastered steps**. A demonstrated safety-critical mistake can take precedence immediately.
4. Irrelevant modules are removed **before** sorting. Remaining candidates use illustrative weights: 35% learning deficit, 25% observed safety misconception, 20% selected goal, 10% readiness and 10% preferred format. These are engineering defaults, **not empirically validated psychometric weights**.
5. The dashboard shows **at most three items**. Games appear only where linked to relevant topics; mastered topics are not endlessly pushed.
6. A lesson, practice game or safe-decision scenario changes the specific competency, updates mistakes if necessary, and recalculates recommendations.
7. The complete library remains available only on intentional **Explore all 24 topics** action; reporting/official safety resources are always accessible.

The graph is checked for cycles during initialization. A direct user request may open any module even if the personalized engine would recommend its prerequisites first.

## Safety, privacy and transparency

- Only non-sensitive profile preferences, completed lesson IDs, formative scores and practice progress go in this device's `localStorage`. The user can reset it under Accessibility & goals. Using a shared browser is not equivalent to secure individual accounts.
- Do **not** enter or dictate account identifiers, PAN, Aadhaar, banking details, balances, PINs, OTPs, passwords, contact details or personal identity documents.
- Screenshot selection is **local-only**: no OCR, automated screenshot classification, external upload or permanent image saving. Redaction is manual visual masking; users should remove private details before selecting the file. Selecting “Clear screenshot”, navigating away or resetting deletes the image reference from the running page.
- The microphone option may use **browser-vendor speech processing**; support, language availability and data-handling policies depend on the browser. Text chat always remains available.
- All investment scenarios use fictional examples. Scores and points reinforce safety recognition and learning, **not** profit seeking, trading frequency or investment risk-taking.
- External reference sites are independent. Links do not imply institutional affiliation. Some official pages are difficult for automated clients to fetch, and should be manually rechecked before public deployment.

## Demonstrate six journeys

On the first page open **“Preview six distinct learner experiences”** and select a fictional example. The starting priorities should include budgeting foundations, behavioural decision-making, fraud recognition, demat education, digital safety basics and uncertainty-driven foundations. They do **not** all display the same 24 modules or every game.

## Future scope — **not implemented**

Peer-reviewed curriculum validation, accessibility user testing, full Hindi/other regional-language translation, AI-generated retrieval-grounded explanations with independent safeguards, fully automated privacy-preserving screenshot interpretation, genuine voice conversations, advanced recommender model training, institutional partnerships, opt-in notifications and PWA offline packs. Any real account integration would require separate consent, legal, regulatory and security review.

**Current limitations:** the FAQ assistant is rule-based, not an AI model; some original advanced lessons and original scenario text remain in English; browser speech/microphone support varies; no real-user study, clinical/psychometric validation, automated app-store checks, or public GitHub Pages smoke test was conducted in this workspace. See `TEST_REPORT.md`.

## v2.1 browser verification

See `TEST_REPORT.md`, `test_evidence/v21_results.json`, and `test_evidence/scenario_v21_results.json`. A responsive 390px diagnostic with aligned options and the expanded 18-activity library are pictured in `screenshots/v21-05-mobile-centered-diagnostic.png` and `screenshots/v21-02-complete-practice-library.png`. These are real headless Chromium screenshots, not mock-ups.

For updating an earlier deployed site, overwrite the changed files in the same repository and hard-refresh if your browser briefly serves old assets. This version uses cache `niveshpath-static-v20261029-3`.
