# NiveshPath 2.2 — wording and comprehension review

## Problem reported
The v2.1 section “Complete original + new activity library” and the two “Explore all…” buttons did not tell learners what they would get or that the `+` simply expanded the sections.

## What changed

| Area | Before | Now |
|---|---|---|
| Practice page heading | Games & original simulations | Games & safety scenarios |
| Activity library heading | Complete original + new activity library | Explore more activities |
| First expansion | Explore all 8 learning games + | Learning games — 8 games to practise money skills and safer decisions, with a chevron |
| Second expansion | Explore all 10 original simulations + | Fraud & cybersecurity scenarios — 10 original scenarios to practise spotting scams and staying safe, with a chevron |
| Dashboard priority | Your most important next step | Your recommended next step |
| Onboarding | Find my knowledge gaps | Take a short knowledge check |
| Knowledge check | A few questions. A smaller learning path. | A short quiz to find your starting point |
| Progress | Competency indicators are formative prototype signals | These percentages are rough learning indicators, not grades or certifications |
| Screenshot tool | Check This Message | Review a Suspicious Message; explicitly states no automated scanning |
| Chatbot | Your learning guide / generic AI-like wording | Ask the learning guide; specifically says built-in rules, not live AI |
| About | Described three exclusive learner groups | Describes overlapping goals and actual working features |
| Existing chatbot guidance | Referred to old “Learning journeys” and “Scam Simulator” menu names | References “My learning path” and “Games & safety practice” |

No quiz or game scoring was intentionally changed. All original 24 lessons, all original 10 safety scenarios, and all 8 added games remain part of the build. The recommendation system still limits default suggestions instead of blocking the full library.

## Copy guidelines for future content
- Use everyday language before terms such as “prerequisite”, “competency” or “simulation”.
- Distinguish **suggested** learning from assessment-proven mastery.
- Say what a button does; avoid unexplained `+` actions.
- Avoid implying that an educational checklist can authenticate a person, link, or screenshot.
- Do not imply AI-powered automation where there are only built-in rules.
- Treat English/Hindi availability transparently; some existing content is still in English.

## Test boundaries
See `TEST_REPORT.md` for 15 successful headless Chromium UI checks, historical prior-release results, and unverified live deployment behavior.
