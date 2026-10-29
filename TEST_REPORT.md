# NiveshPath 2.0 — implementation and verification report

**Build date:** 29 October 2026  
**Source:** user-supplied `niveshpath-main` ZIP and the accompanying CDSL Reimagine Ideathon proposal.  
**Design priority:** hyper-personalization based on actual problem/gap, not exclusive demographic grouping.

## Actual executed tests

`test_evidence/test_site.py` used headless Chromium and Playwright with the production CSS and JavaScript loaded into an isolated browser document. This environment did **not** permit direct browser navigation to localhost or `file://`, so the script injected the identical site resources into the document. It executed live DOM clicks, selected game answers, simulated input and generated screenshots. The report below **does not** claim a successful GitHub Pages deployment or service-worker fetch test.

- **36 passed / 0 failed** across **29 core browser checks + 7 extended checks** in the latest executed runs (`test_evidence/results.json` and `test_evidence/extended_results.json`).
- Onboarding: 8 goal buttons, multiple simultaneous goals and life contexts; 8-question objective quiz.
- Personalization: 6 fictional personas with **5 distinct primary next-step topics**; no 24-lesson dump; at most 3 shown activities.
- Adaptivity: completing the first targeted lesson changes the next recommendation from `goalplan` to `saving`.
- Explore: the full 24-module library stays hidden by default and becomes available on user request.
- Eight original games: each game was opened, completed with valid choices, graded 100% and recorded a competency update.
- Screenshot checker: PNG loaded locally, visible redaction was applied by pointer drag, checklist provided next actions and clearing removed the preview.
- Rule-based learning guide: a user's question about what to learn next produced a goal-specific answer.
- Mobile: 390px Chromium layout rendered with no horizontal overflow, functional mobile navigation and no JavaScript exceptions.
- Extended tests confirmed mock-backed localStorage save/restore across a fresh app boot, wrong-answer remediation, official source links, preserved team bios/photo elements, contrast and Hindi controls, and reset deletion.
- JS syntax checks of all JavaScript entrypoints passed; curriculum graph validation returned `true` for 24 topics.

**Test evidence:** see `test_evidence/results.json`, `test_evidence/extended_results.json`, runnable test scripts in `test_evidence/`, and `screenshots/*.png`.

### Screenshot references

| File | Preview |
|---|---|
| `screenshots/01-onboarding.png` | Goal-first opt-in initial screen |
| `screenshots/02-persona-student_beginner.png` | Saving/budget foundation path |
| `screenshots/02-persona-student_investor.png` | Experienced student focused on behaviour |
| `screenshots/02-persona-senior_safety.png` | Experienced retired learner focused on scams |
| `screenshots/02-persona-demat_beginner.png` | Practical demat pathway |
| `screenshots/02-persona-digital_beginner.png` | Digital safety fundamentals |
| `screenshots/02-persona-unsure.png` | Adaptive beginning without predefined knowledge |
| `screenshots/03-game-red-flags.png` | Functional Red Flags game completion |
| `screenshots/04-message-checker.png` | Local screenshot canvas and red-flag checklist |
| `screenshots/05-mobile-personalized.png` | Responsive 390px view |

## Architecture and why it is not generative AI

- `adaptive.js`: deterministic profile model, typed goals, objective diagnostic bank, 24-node DAG, goals-to-skills, interpretable scoring, expected safety overrides, game associations and six illustrative profiles.
- `experience.js`: presentation and interaction layer. Original course data and team information from `app.js` / `curriculum.js` remain live and accessible.
- No model endpoint is called and there is no AI-powered OCR. User-specific recommendation is explicitly described as **rule-based**.
- Profile, practice evidence and scores are browser local; no account connection is made.

## Key linked-source checks

A web review was carried out for the following official resources on 29 October 2026:

- RBI currency game listing: <https://indiancurrency.rbi.org.in/games/> — reviewed for its short, diverse mechanics (feature finding, memory, puzzle, spy, quiz). Original NiveshPath games do not copy RBI assets.
- CDSL DP/how-to-open-demat guide: <https://www.cdslindia.com/investors/open-demat.html> — accessible; canonical lower-case path used.
- CDSL investor charter: <https://www.cdslindia.com/Investors/Investorcharter.html> — accessible.
- CDSL FAQs: <https://www.cdslindia.com/Investors/FAQs.html> — accessible.
- CDSL IPF resources: <https://www.cdslipf.com/resources.html> — accessible.
- SEBI Investor support: <https://investor.sebi.gov.in/Investor-support.html> — accessible.
- SEBI SCORES: <https://scores.sebi.gov.in/scores-home> — accessible.
- NSE investor awareness: <https://www.nseindia.com/static/invest/investors-awareness-programs> — accessible.
- NCFE e-LMS: <https://ncfe.org.in/e-lms/> — accessible.
- NSDL demat guide: an original portal URL was not accessible through this review service, and was changed to an official NSDL-hosted PDF discovered in search results: <https://nsdl.co.in/downloadables/pdf/e-Guide%20for%20demat%20account%20holders%20-%20English.pdf> (the PDF itself should still be checked manually when deploying).
- The National Cybercrime Portal timed out in the web review tool; its official-domain URL is retained: <https://cybercrime.gov.in/>. SMART ODR returned an accessible empty extracted document. Both merit manual verification in a normal browser.

Other links provided by the original site were **not exhaustively checked**. Avoid claiming full link validation without a new manual review.

## What was not verified

1. Publishing into the user's GitHub repository or actual Pages availability; no repository write operation was performed.
2. End-to-end service-worker installation, offline fetch/cache updates or user data persistence across real served sessions. Static code and cache manifest were inspected, but the browser policy blocked localhost/file navigation.
3. Speech synthesis output, microphone permissions, vendor speech processing, or Hindi voice availability in real devices.
4. Third-party sites' access in users' live browsers, or regulatory/source changes after the review date.
5. WCAG audit with screen readers or full assistive technology; CSS, keyboard actions and mobile layout were checked, but do not constitute certification.
6. Correctness of every advanced lesson/translation by a licensed subject-matter expert; this remains a pre-public-launch content review.
7. Validity of heuristic scoring weights or learning efficacy on real people. Pilot research is required.
8. Automated screenshot understanding or accurate authenticity/fraud detection — neither exists in this static version.

### Recommended pre-publication checklist

Deploy to a staging Pages URL, hard refresh, test localStorage across reloads, test in Chrome/Firefox/Safari on mobile/desktop, verify photos and reference links, test service-worker update replacement, perform keyboard/screen-reader checks, review all content with finance/cybersecurity experts and conduct a small consent-based usability pilot.
