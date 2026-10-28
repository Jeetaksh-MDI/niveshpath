# NiveshPath · CDSL Reimagine Ideathon | Team MDI Innovators

A deployable, privacy-conscious, **educational-only** static website that teaches finance and cybersecurity through lessons, accessible learning journeys, quizzes and simulated safety decisions. This is an independent team prototype, **not** an official CDSL/SEBI site or an account-opening/trading service.

## What is included

- **24 educational modules** (the six original modules expanded + 18 new detailed modules) including saving, budgeting, why people consider investing, inflation, financial instruments, financial planning, CDSL/NSDL, NSE/BSE, account opening, market infrastructure, IPOs, bonds, funds/ETFs, investor rights, nomination and transmission, retirement preparedness, behavioural biases, complaints and cybersecurity.
- **Three distinct learner pathways**: students, first-time investors and senior citizens see different first lessons, different lesson order and contextual examples. All lessons remain accessible to all groups.
- **10 fictional fraud and investor-safety simulations** (four originals plus six new cases), with feedback, points and badges.
- **Gamification**: one-time points for mastering lessons, one-time points for safe simulation decisions, a learning level, quest suggestions, achievement badges, and a guided demat checklist. No monetary prizes or incentives to trade.
- **A step-by-step, seven-step demat account orientation** referencing the official CDSL Depository Participant search. **The site never requests real documents, credentials or personal financial details.**
- **Expanded guarded learning assistant** with deterministic educational answers on savings, instruments, demat procedures, fraud, market structure, rights and complaints. **No live LLM/API integration and no investment advice.**
- **Official resources directory** featuring SEBI, CDSL, CDSL IPF, NISM, NSDL, NSE, BSE, NCFE, SCORES, SMART ODR and the cybercrime portal. Old unfocused CDSL Investor Awareness FAQ link removed.
- **About page** with Team MDI Innovators, Jeetaksh Gandhi and Sakshi Singh, their supplied photos, and realistic future development roadmap.
- Hindi navigation and summaries from the previous prototype are preserved. Some **new advanced lesson detail and answer explanations remain in English**; a clear notice is shown in those Hindi lessons. Complete Hindi and regional-language localization is a planned later step, not a functioning feature yet.
- Responsive layout, larger-font/high-contrast preferences, browser text-to-speech where supported, no analytics, no backend and no account creation.

## GitHub Pages deployment

These files are already in a valid GitHub Pages **repository root**. Do not upload a ZIP as a single file to GitHub Pages; upload/commit the **contents** of the folder.

1. Back up your existing GitHub repository or create a branch.
2. Download the provided ZIP and extract it.
3. Open the extracted `niveshpath-main` folder. Copy **all** of its files and the `assets/` folder into your existing repo's root, replacing existing versions of `index.html`, `app.js`, `styles.css`, `sw.js` and `README.md`. Keep the new `curriculum.js`, `assets/jeetaksh.jpg`, and `assets/sakshi.jpg`.
4. Commit and push to your GitHub repository's main branch. No `npm install`, environment variables, build step or backend are necessary.
5. In GitHub: **Settings → Pages → Build and deployment → Deploy from a branch**, select `main` and `/(root)`.
6. Open your GitHub Pages URL. If an older version appears, use **Ctrl+Shift+R**, close/reopen the tab or clear the site's cached data. The service worker cache was updated to `niveshpath-static-v3`.

For local testing, open `index.html` in a browser. Some browsers restrict service workers under `file://`, which is normal. GitHub Pages uses HTTPS.

## File guide

| Path | Purpose |
| --- | --- |
| `index.html` | HTML entry, loads the two JavaScript files in order |
| `styles.css` | Responsive original design plus additional styles |
| `curriculum.js` | Eighteen comprehensive added learning modules |
| `app.js` | Existing app plus expanded site content, simulations, rewards, source links and About page |
| `sw.js` | Service-worker asset caching for HTTPS pages |
| `assets/jeetaksh.jpg`, `assets/sakshi.jpg` | Team member photos provided for this project |
| `favicon.svg` | Original logo mark |

## Working today versus proposed features

**Working:** local onboarding and learner segmentation, lessons, one-question mastery checks, point and badge progress, fictional simulation choices, dynamic recommendations, informational demat checklist, source navigation, rule-based FAQs and accessibility controls.

**Proposed only:** an LLM-based agent, genuine AI/ML adaptive recommendations, automated official-source retrieval, regional-language lessons beyond the current partial Hindi experience, verified partner integrations, real-user validation and impact measurement. The site never claims these are already implemented.

## Security, privacy and scope

- Never enter PAN, Aadhaar, OTP, PIN, password, phone number, demat account identifiers or financial account information into NiveshPath.
- Educational progress is saved to **this browser's localStorage only**. There is no server, tracking service, sign-up or collection of payment details.
- The chat assistant uses local keyword-based rules and does not send messages to an external AI model. Do not paste personal data into chat.
- No live trading, investments, payments, stock selection or transaction execution are available.
- Any examples of investments, prices, returns and messages are educational and fictional.
- Linked websites are third-party official resources, not endorsements or partnerships. Links were reviewed on **28 October 2026**; external site availability and regulatory instructions may change. Certain sites may block automated clients.
- Content must be reviewed by subject-matter experts and completed in other languages before a public launch.

## Official reference destinations

- [SEBI Investor Education Materials](https://investor.sebi.gov.in/iematerial.html)
- [NISM Investor Education (Basic)](https://online.nism.ac.in/sdm/investor-education-basic.html)
- [CDSL](https://www.cdslindia.com/)
- [CDSL demat-account guide](https://www.cdslindia.com/Investors/open-demat.html)
- [CDSL Investor Protection Fund](https://www.cdslipf.com/resources.html)
- [NSDL](https://nsdl.co.in/)
- [NSE](https://www.nseindia.com/)
- [BSE](https://www.bseindia.com/)
- [SEBI SCORES](https://scores.sebi.gov.in/scores-home)
- [SMART ODR](https://smartodr.in/)
- [National Cyber Crime Portal](https://cybercrime.gov.in/)

**Team MDI Innovators, MDI Gurgaon:** Jeetaksh Gandhi and Sakshi Singh.
