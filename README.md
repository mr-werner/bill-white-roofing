# Bill White Roofing & Specialty Co., Inc.: Blueprint WebStudio Concept

Independent, non-official redesign concept for https://www.bwroof.com/ (Bill White Roofing & Specialty Co., Inc., Bessemer / Birmingham, Alabama).
Preview: https://bwr.blueprintwebstudio.com (noindex; the demo code lives in the Neon `demos` table).

Custom build. Content and layout are in `src/App.jsx`, styles in `src/styles.css`, and the Blueprint WebStudio concept widget in `src/concept.jsx`.

## Local setup

```bash
npm install
cp .env.example .env.local
npm run dev
```

## Build

```bash
npm run build
```

## Deployment

Vercel project `bill-white-roofing` (framework: Vite, team mrwerner-s-projects). Pushes to `main` deploy automatically.
Domain `bwr.blueprintwebstudio.com` is a CNAME at Porkbun pointing to the target Vercel shows for this project.

Environment variables (all optional): `VITE_CONCEPT_END_DATE` (countdown end, defaults to 2026-11-30), `RESEND_API_KEY` / `CONTACT_TO_EMAIL` / `CONTACT_FROM_EMAIL` for the inspection request form (`api/contact.js`; without them the form answers in demo mode). The "I'm Interested" form posts to `api/demo-interest.js`, which proxies to the main studio site.

## Design

- Their script logo ("Your Roof is Our Roof", with the umbrella mascot) on a white header; the mascot is the favicon. Navy from the logo (#2c3489) and site (#232e6c), with a roofing red (#b8322b), shingle gray and warm white.
- Archivo, set wide and heavy for headings, with Petrona italic as the script accent that echoes the logo's lettering.
- Roofing motif: the hero photo sits in a gable-shaped frame with a red ridge tag for "1969", a CSS three-tab shingle band under the hero and above the footer, nail heads as markers (they hand nail everything), service photos with a roof-peak edge, and the replacement process stacked as six offset shingle courses.
- Section order: top bar → header with call button → hero ("Your roof is our roof.", BBB / TAMKO / satisfaction badges, hours card) → four craft promises → six services → an interactive "do you need a roofer?" checklist with their 9 warning signs → six-step replacement process → family timeline (1969, 1984, 2013, today) with licenses and memberships → 6 reviews → photo strip of their work → service areas and FAQ → contact with hours and inspection form → footer.

## What changed from the current site

- The site says "since 1969" and "over 45 years" on the same pages. The concept uses only "since 1969".
- Visible "Button" placeholder labels show under photo blocks on the home, services, commercial, repair and replacement pages; gone.
- The footer reads "Copyright ©" with no year. Typos are fixed ("best roofing contractor  & Homewood, ALfor the job"). In one review, "Mr. /white" is shown as "Mr. [W]hite".
- The service-area lists differ between the home, contact, services and areas pages; the concept merges them into one list.
- The home page is a very long wall of SEO text; the concept keeps the knowledge (warning signs, replacement process, gutter guard advice, family history, licenses) in short, scannable sections, with phone and hours in the top bar, header, hero and contact section.
- The TAMKO Pro Certified Contractor badge and the licensing and association memberships were buried on the About page; they are now shown with the BBB badge.
- Checked at 1280px and 390px with no sideways scrolling.

## Owner should confirm

- Street address: the site only gives "Bessemer, AL 35022", while the home page says the office is "just outside of the Hoover city limits". No street address or map is shown.
- Service area: the concept merges Birmingham, Bessemer, Hoover, Homewood, Vestavia Hills, Mountain Brook, Pelham, Alabaster, Helena, McCalla, Trussville and Leeds from various pages. Confirm the list.
- TAMKO Pro Certified Contractor status, the BBB A+ rating (badge says as of 11/17/2024), and all four licenses and memberships are still current.
- The "Satisfaction Guaranteed" badge: what the guarantee covers (no warranty terms are on the site).
- Inspection frequency: the replacement page advises inspections "twice a year" and the FAQ says "annually"; the concept says "regularly and after severe weather".
- "Free roof inspection" is from the About and home pages; the skylight page offers "free estimates". Confirm both.
- Photo captions: the About page labels one photo "Bill White with his original roofing crew in 1984" and another "Steve White, son of Bill, with roofing crew". The concept matches them by alt text and age of the photo; confirm which is which.
- Reviews: the 6 reviews are quoted word for word from the "Customer Reviews" section of bwroof.com; the original source (Google or otherwise) is not stated there. The page links to their Google listing (g.co/kgs/a8hTTf7) rather than showing a rating.
- Hours: Mon–Fri 7:30 am–5:00 pm, Sat–Sun by appointment (from the contact page).

## Photos

All job photos, the founder and crew photos, the logo and the badges are their own from bwroof.com. Most of their photos are small (about 470px wide) phone shots; higher-resolution originals should replace them before launch. The old site's hero photo looked like stock and is not used.
