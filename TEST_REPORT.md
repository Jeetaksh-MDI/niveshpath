# NiveshPath 2.1 · Regression and restoration report

## What was fixed

The prior v2.0 simplified navigation but unintentionally obscured original fraud simulations, achievements and the seven-step demat walkthrough, and presented new games only when recommended. v2.1 restores discoverability through the side navigation and a dedicated Practice & Simulations hub. The full experience remains available through opt-in disclosure; the personalized dashboard itself stays tightly filtered.

The A/B/C answer layout issue came from a generic rule that stretched the prefix when the diagnostic option text was an unwrapped text node. All new diagnostic options now have explicit text spans. Consistent CSS grid sizing, anchored labels and `grid-auto-rows:1fr` produce uniform heights and centered answer text across diagnostics, existing lesson quizzes and existing scenario quizzes, including narrow mobile viewports.

## Automated Chromium checks conducted

| Test suite | Passing checks | Failing checks | Scope |
|---|---:|---:|---|
| Original v2.0 browser regression re-run | 29 | 0 | Multi-goal onboarding, six learner profiles, all eight new games, recommendation updates, privacy checker, voice/chat fallback UI and mobile responsiveness |
| Original extended regression re-run | 7 | 0 | Browser-storage restoration, wrong answers, SEBI/CDSL resource links, team photos, Hindi/contrast settings, progress deletion |
| New v2.1 focused checks | 14 | 0 | Equal-sized centered choices, separate practice selections for five profiles, both libraries exposed, existing game/scenario play, original badges and demat checklist, mobile expanded library |
| Individual original simulation completions | 10 | 0 | Each of the ten original fraud scenarios opened, answered, graded and persisted through the actual Practice hub |
| **Total executed checks** | **60** | **0** | Some suites overlap by design; this is not 60 independent user studies |

**Testing environment:** local headless Chromium via Playwright. No live GitHub Pages deployment, external-load validation or real-user usability study was performed. The existing official source links remain available but must be periodically reviewed before production. The voice functionality depends on the user's browser and was not validated against every speech engine.

## Evidence in the ZIP

- `screenshots/v21-01-centered-diagnostic.png` — equal-size centered desktop choices
- `screenshots/v21-05-mobile-centered-diagnostic.png` — equal-size mobile choices with wrapped text
- `screenshots/v21-02-complete-practice-library.png` — 8 new games plus all 10 original simulations in the optional expanded library
- `screenshots/v21-03-centered-lesson-quiz.png` — original lesson question styled consistently
- `screenshots/v21-04-mobile-practice.png` — practice selection and library on 390px screens
- `test_evidence/v21_results.json` — focused regression results
- `test_evidence/scenario_v21_results.json` — 10 original scenario playthroughs
- `test_evidence/extended_results.json` — original extended suite results
- `test_evidence/results.json` — original v2.0 suite results from first implementation; `v21` focused tests are additional

## Current limits and boundaries

The recommender is a deterministic explanation-based prototype, not trained ML. It uses preliminary formative scores, so a diagnostic response is not definitive evidence of mastery. The application does not advise purchases, execute trades, access accounts, automatically detect scams in images, or send screenshot data to servers. Browser speech availability and some Hindi content vary. Content, accessibility and regulatory references need domain-expert review and live-site testing before public production launch.

