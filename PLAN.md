# Sinchi.co.nz — Website Plan & Antigravity Build Prompt

Version 1 · Market: New Zealand · Language: New Zealand English (British spelling: optimise, colour, centre, enquiry)

---

## 1. Strategy in one paragraph

Sinchi helps local New Zealand businesses (tradies, clinics, driving schools, lawyers, trades services) get found on Google Maps and turn that visibility into calls. Two offers only: **Google Business Profile ranking** (get into the local 3-pack) and **website updates** (fix the site so the traffic converts and backs up the Maps ranking). The site's single job is to get a local business owner to request a **free Google visibility check**. Everything on the site either earns trust or points at that button.

## 2. Call to action — recommendation

Use two CTAs, one primary and one softer fallback. ProfResults leans on a "3 free tips" video; that's low friction but attracts tyre-kickers. You already have a rank checker and an audit tool, so a personalised audit is a stronger, more qualifying offer.

| | Primary CTA | Secondary CTA |
|---|---|---|
| Name | **Free Google Visibility Check** | **3 Quick Fixes to Climb Google Maps** |
| Button text | "Get my free check" | "Send me the 3 fixes" |
| Ask | Business name, website, main service, town/city, email (phone optional) | Email only |
| What they get | A personalised report within one working day: where they rank for their main search, who's beating them, top fixes for their profile and site | An email (or short video) with three fixes they can do today |
| Backend | Form posts to an n8n webhook → SerpAPI rank check + website audit tool → report emailed | Form posts to n8n → adds to list → sends email |
| Why | High intent, qualifies leads, uses tools you've already built | Catches people not ready to share details |

The 3 fixes (use these as the lead-magnet content):

1. **Get your categories right.** Your primary Google Business category is the biggest single ranking lever. Match it to what customers actually search, then add every relevant secondary category.
2. **Get reviews every week, and reply to all of them.** A steady flow beats a burst. Reply using your service and suburb naturally ("Thanks for choosing us for your hot water cylinder in Papakura").
3. **Make your website agree with your profile.** Same business name, address and phone everywhere, a page for each main service mentioning the areas you cover, and LocalBusiness schema on the site.

## 3. Sitemap

**Launch (phase 1)**
- `/` Home
- `/google-business-profile-ranking` Service page 1
- `/website-updates` Service page 2
- `/free-google-check` Primary CTA landing page (also the ad/cold-email landing page)
- `/3-quick-fixes` Secondary CTA page
- `/about` Andrew, the engineer's approach (E-E-A-T)
- `/faq` Answer-first FAQ (AEO)
- `/privacy` and `/terms`
- `/thanks` Post-submit page (noindex)
- `robots.txt`, `sitemap.xml`, `llms.txt`

**Phase 2 (content engine)**
- `/industries/` e.g. tradies, driving schools, dental and health clinics, lawyers. Only publish one when there's genuinely distinct content; thin duplicate pages hurt rankings.
- `/guides/` Answer-first articles targeting questions NZ owners actually search (see section 6).

## 4. Page outlines and draft copy

Tone: plain, confident, friendly, a bit Kiwi-direct. No hype words ("revolutionise", "skyrocket", "unlock"). Short sentences. Talk about calls and customers, not "SEO".

### Home
- **H1:** Get found on Google Maps by customers near you
- **Sub:** We fix your Google Business Profile and website so local customers call you, not the business down the road.
- **Buttons:** Get my free check (primary) · Send me 3 quick fixes (text link)
- **Problem block — "Why you're not in the top 3":** Most customers never scroll past the three businesses in the map. If you're fourth, you're invisible. Usually it's not your work that's the problem, it's a handful of fixable things: the wrong category, too few recent reviews, a website that doesn't back up your profile.
- **Two services:** short card each, linking to service pages.
- **How it works (a genuine sequence, so numbering is fine):** 1. We check where you rank today. 2. We fix your profile and website. 3. We track your position every month and report back in plain English.
- **Proof:** sample audit report screenshot (anonymised), rank-tracking chart. Add real client results only when you have them. Don't invent testimonials or stats.
- **Short FAQ** (4 questions, links to /faq).
- **Final CTA band.**

### Google Business Profile ranking
- H1: Google Business Profile optimisation for NZ businesses
- Answer-first intro (40–60 words): what it is, who it's for, typical timeframe.
- What's included: category and service setup, profile completion, photos, review system and reply templates, Google posts, NAP citations, spam and duplicate-listing checks, monthly rank tracking across the suburbs you serve.
- What you get each month (report example).
- Pricing: "From $___ NZD per month" (fill in) or "Pricing depends on your area and competition, see it in your free check."
- FAQ specific to GBP. CTA.

### Website updates
- H1: Website updates that turn Google visitors into calls
- Intro: your site needs to load fast, work on a phone, make calling easy and tell Google exactly what you do and where.
- What's included: speed and mobile fixes, click-to-call and clear enquiry forms, service and area pages, LocalBusiness schema, content that matches your Google profile, trust signals (reviews, licences, photos of real work).
- Before/after example. Pricing placeholder. FAQ. CTA.

### Free Google Check (landing page)
- No main nav (reduces exits); logo links home.
- H1: See exactly where you rank on Google, free
- Bullets: where you rank for your main search, the 3 businesses beating you and why, the top fixes for your profile and site.
- Form (5 fields max) + consent checkbox + "We'll send your report within one working day. No sales call unless you ask for one."
- Short about-Andrew trust line.

### About
- Andrew's story: 20+ years as a security systems engineer on high-stakes sites; brings the same systematic, test-and-measure approach to local search. Build the AI automation angle in lightly ("we use automation to check more, so you pay for fixes, not admin").
- Be upfront that Sinchi works remotely for NZ clients. Don't imply a NZ office you don't have. Honesty here is also a trust signal.
- Photo, LinkedIn link (sameAs).

## 5. SEO, AEO and GEO checklist

### Technical SEO
- Static-first site (Astro), deployed on Vercel; Lighthouse 95+ on all four scores, mobile first.
- Core Web Vitals: LCP < 2.5s, INP < 200ms, CLS < 0.1. Images in AVIF/WebP with width/height set; self-hosted fonts with `font-display: swap`.
- `<html lang="en-NZ">`, one H1 per page, logical H2/H3, descriptive alt text.
- Unique title (≤ 60 chars) and meta description (≤ 155 chars) per page; canonical tags; Open Graph and Twitter cards with a branded OG image.
- Clean URLs, XML sitemap, robots.txt, 404 page, internal links between services, FAQ and CTA pages.
- Register in Google Search Console and Bing Webmaster Tools (Bing feeds ChatGPT search and Copilot).

### Local and entity SEO
- Consistent business name, contact details and service area across site, LinkedIn and any directories.
- Only create a Google Business Profile for Sinchi if you have an eligible NZ address or service-area setup; don't use a virtual office, which breaks Google's guidelines and risks suspension.
- Target keywords (validate volumes before committing): "google business profile optimisation nz", "local seo nz", "google maps ranking", "how to rank on google maps", "website updates for small business nz", plus city variants later (Auckland, Christchurch, Wellington, Hamilton, Tauranga).

### Structured data (JSON-LD)
- Sitewide: `Organization` (name, url, logo, sameAs, contactPoint, areaServed: New Zealand) and `WebSite`.
- Service pages: `Service` with `provider` and `areaServed`, plus `BreadcrumbList`.
- FAQ blocks: `FAQPage` (Google shows it less in results now, but AI systems still parse it).
- About: `Person` for Andrew with `worksFor`, `knowsAbout`, `sameAs`.
- Guides: `Article` with author, datePublished, dateModified.
- Validate everything with Google's Rich Results Test and Schema.org validator.

### AEO (answer engine optimisation: featured snippets, voice, AI Overviews)
- Every page and section opens with a direct 40–60 word answer, then detail.
- Headings written as the real questions people ask ("How long does it take to rank on Google Maps?").
- Use lists and tables for steps, comparisons and pricing factors.
- A proper `/faq` page with 12–20 questions, each answer self-contained.

### GEO (generative engine optimisation: ChatGPT, Perplexity, Gemini, Claude)
- A clear one-sentence entity definition repeated consistently: "Sinchi is a local SEO service that helps New Zealand businesses rank in Google Maps and improve their websites."
- `llms.txt` at the root summarising who Sinchi is, services, areas and key URLs.
- robots.txt allows AI crawlers (GPTBot, OAI-SearchBot, ClaudeBot, PerplexityBot, Google-Extended) unless you decide otherwise.
- Specific, citable facts: named methods, numbers with sources, dates. Vague marketing copy doesn't get cited.
- Visible author, credentials and "last updated" dates on guides.
- Presence off-site: LinkedIn company page, a couple of relevant directories, guest answers on NZ business forums. AI tools weigh mentions elsewhere.

### NZ compliance
- Privacy Act 2020: a privacy policy explaining what you collect on the forms, why, where it's stored (note any overseas storage) and how to request access or deletion.
- Unsolicited Electronic Messages Act 2007: consent checkbox for marketing emails and a working unsubscribe in every email.
- Fair Trading Act 1986: no guaranteed rankings, no made-up reviews or results.

## 6. Phase 2 content ideas (answer-first guides)
- How to rank higher on Google Maps in New Zealand
- Google Business Profile categories: how to choose the right one
- How many Google reviews do you need to rank in the top 3?
- Do you need a website to rank on Google Maps?
- How much does local SEO cost in NZ?
- Why did my Google Business Profile get suspended (and how to fix it)?
- Service-area business vs storefront: what's the difference on Google?

## 7. Brand notes
- Assets: `Sinchi_LOGO.png` (wordmark), `Sinchi_Favacon.png` (favicon), `avatar.png` (large S mark for social/OG).
- Colours (sample exact values from the logo files): Sinchi purple ≈ `#6B12A5`, deep plum ≈ `#2A0840` for text and dark sections, white `#FFFFFF`, soft lilac ≈ `#F3ECFA` for quiet backgrounds, review-star gold ≈ `#F5B400` used only for star ratings.
- Type: a heavy, slightly wide sans for headlines that echoes the chunky italic wordmark (e.g. Archivo at Expanded/Black), with the same family at regular weight for body text.

## 8. Launch checklist
- [ ] Fill pricing placeholders
- [ ] Set `N8N_AUDIT_WEBHOOK_URL` and `N8N_TIPS_WEBHOOK_URL` in Vercel env vars
- [ ] Test both forms end to end (submission → n8n → email received)
- [ ] Point Sinchi.co.nz DNS at Vercel, force HTTPS and non-www (or www, pick one)
- [ ] Submit sitemap in Search Console and Bing Webmaster Tools
- [ ] Validate schema, run Lighthouse on mobile
- [ ] Add analytics (Vercel Analytics or GA4) with conversion events on both forms
- [ ] Update LinkedIn and email signatures with the new site

---

## 9. Build stages and progress tracker

The build runs one stage at a time. Antigravity stops after each stage, shows you the result, and waits for your go-ahead. It also keeps a `PROGRESS.md` file in the project, recording what's done, what changed and what's next, so you (or Antigravity) can pick up exactly where you left off.

Save a copy of this file in the project root as `PLAN.md` so Antigravity can refer back to it.

| Stage | What gets built | Done when | ✓ |
|---|---|---|---|
| 0. Plan and setup | Astro project, Git repo, brand assets in `/public/brand/`, design tokens, `PROGRESS.md` | You've approved the plan and the project runs locally | [ ] |
| 1. Design system and layout | Colours, fonts, buttons, header, footer, base page layout, 404 page | Header and footer look right on mobile and desktop | [ ] |
| 2. Home page | All home sections, including the Google Maps hero animation | Home page complete with placeholder proof | [ ] |
| 3. Service pages | Google Business Profile ranking and Website updates pages | Both pages complete with FAQs and CTAs | [ ] |
| 4. CTA pages and forms | Free Google Check, 3 Quick Fixes, Thanks page, server endpoints to n8n | Test submissions reach n8n and redirect to /thanks | [ ] |
| 5. Trust and legal pages | About, FAQ, Privacy, Terms | All pages written in NZ English, no invented claims | [ ] |
| 6. SEO, AEO and GEO | Meta tags, JSON-LD schema, sitemap, robots.txt, llms.txt, OG image | Schema validates, sitemap and llms.txt load | [ ] |
| 7. QA and performance | Lighthouse, accessibility, mobile at 320px, broken-link check | Lighthouse 95+ on every page | [ ] |
| 8. Deploy | Push to GitHub, import to Vercel, env vars, domain, Search Console | sinchi.co.nz live over HTTPS, both forms working | [ ] |
| Phase 2 | Industry pages and guides | Added one at a time when there's real content | [ ] |

**To resume later**, open the project in Antigravity and paste:

```text
Read PLAN.md and PROGRESS.md. Summarise where we are, confirm the next unfinished stage, and wait for my go-ahead before building it.
```

---

## 10. The Antigravity prompt

Copy everything inside the block below into Antigravity. Put the three logo files in `/public/brand/` and this file in the project root as `PLAN.md` first.

```text
You are a senior web developer, local SEO specialist and conversion copywriter building the marketing website for Sinchi (sinchi.co.nz). PLAN.md in the project root is the full brief and the source of truth.

## How to work: build in stages
Build strictly one stage at a time, following the stages in PLAN.md section 9:
0 Plan and setup · 1 Design system and layout · 2 Home page · 3 Service pages · 4 CTA pages and forms · 5 Trust and legal pages · 6 SEO, AEO and GEO · 7 QA and performance · 8 Deploy.

Rules:
- Start with Stage 0: produce an implementation plan covering design tokens, page list, component list and SEO setup, and wait for my approval before writing code.
- Create PROGRESS.md in the project root. After each stage, update it with: the stage status (done / in progress / not started), what was built, files created or changed, any decisions made, open questions, and placeholders I still need to fill.
- At the end of each stage: run the site in the browser, check the new work at mobile and desktop widths, commit to Git with a message like "Stage 2: home page", update PROGRESS.md, give me a short summary, then STOP and wait for my go-ahead. Never start the next stage without it.
- If I say "resume", read PLAN.md and PROGRESS.md, tell me where we are, and wait for confirmation.
- In Stage 7, run Lighthouse on every page and fix anything below 95.

## About the business
Sinchi helps local New Zealand businesses (tradies, clinics, driving schools, lawyers, local services) get found on Google Maps and turn that visibility into phone calls. It is run by Andrew, a systems engineer with 20+ years' experience, working remotely for NZ clients. Do not invent a NZ street address, office, testimonials, client logos, awards or statistics. Where proof is needed, use clearly marked placeholders like [CLIENT RESULT].

Two services only:
1. Google Business Profile ranking — getting clients into the Google Maps top 3 for their area.
2. Website updates — fixing speed, mobile, calls to action, service/area pages and schema so the site converts and supports the Maps ranking.

## Primary goal and CTAs
The site exists to get a local business owner to request a free check.
- Primary CTA: "Get my free check" → /free-google-check. Form fields: business name, website URL, main service, town/city, email, phone (optional), plus an unticked consent checkbox for marketing emails. Microcopy: "We'll send your report within one working day. No sales call unless you ask for one."
- Secondary CTA: "Send me the 3 fixes" → /3-quick-fixes. Email field + consent checkbox.
- Both forms POST JSON to n8n webhooks read from env vars (N8N_AUDIT_WEBHOOK_URL, N8N_TIPS_WEBHOOK_URL) via a small server endpoint so the URLs are never exposed in client code. Include a honeypot field and basic validation, clear inline error messages, and redirect to /thanks (noindex) on success.
- Primary CTA appears in the header, after the hero, after the services, and in a final band on every page. /free-google-check has no main navigation.

## Language and tone
New Zealand English with British spelling (optimise, colour, enquiry, centre). Prices in NZD. Plain, confident, friendly, a little Kiwi-direct. Short sentences. Talk about customers, calls and being found, not jargon. Never use: revolutionise, skyrocket, unlock, supercharge, game-changer, "in today's digital landscape". Sentence case for headings and buttons. Buttons say exactly what happens.

## Pages
/ (home), /google-business-profile-ranking, /website-updates, /free-google-check, /3-quick-fixes, /about, /faq, /privacy, /terms, /thanks, custom 404.

Home structure:
- H1: "Get found on Google Maps by customers near you"
- Sub: "We fix your Google Business Profile and website so local customers call you, not the business down the road."
- Why you're not in the top 3 (most customers never look past the three businesses in the map; the usual causes are fixable: wrong category, too few recent reviews, a website that doesn't back up the profile)
- The two services
- How it works: 1. We check where you rank today. 2. We fix your profile and website. 3. We track your position monthly and report back in plain English.
- Proof section with placeholders (sample audit report image, rank chart)
- Short FAQ (4 questions) linking to /faq
- Final CTA band

Service pages: answer-first intro (40–60 words), what's included, what the monthly report shows, pricing placeholder "From $[PRICE] NZD per month", page-specific FAQ, CTA.
/3-quick-fixes content: (1) choose the right primary and secondary Google Business categories, (2) get reviews every week and reply to every one using your service and suburb naturally, (3) make your website match your profile: same name, address and phone, a page per main service mentioning the areas you cover, LocalBusiness schema.
/about: Andrew's engineering background and his systematic test-and-measure approach; states that Sinchi works remotely with NZ businesses; photo placeholder; LinkedIn link.
/privacy: written for the NZ Privacy Act 2020 (what's collected, why, where it's stored including overseas, how to request access or deletion). Emails must meet the Unsolicited Electronic Messages Act 2007 (consent + unsubscribe). No guaranteed-ranking claims (Fair Trading Act).
/faq: 12–16 questions, each heading is the real question and each answer starts with a direct 40–60 word answer. Include: What is a Google Business Profile? How long does it take to rank on Google Maps? How much does local SEO cost in NZ? Do I need a website to rank on Google Maps? Can you guarantee a top 3 ranking? (answer: no, and explain why honest agencies don't). How many reviews do I need? What's the difference between a service-area business and a storefront? Do you work with businesses outside Auckland?

## Tech stack
Astro (static output) + TypeScript, deployed on Vercel. Minimal client JS. Self-hosted variable fonts with font-display: swap. Images as AVIF/WebP with explicit width and height. Use the logo files in /public/brand/: Sinchi_LOGO.png (header wordmark), Sinchi_Favacon.png (favicon, generate sizes + apple-touch-icon), avatar.png (basis for a 1200x630 OG image).

## Design direction
Brand colours sampled from the logo: Sinchi purple ~#6B12A5 (confirm from the file), deep plum ~#2A0840 for text and dark bands, white, soft lilac ~#F3ECFA for quiet sections, gold ~#F5B400 used only for review stars. Headlines in a heavy, slightly wide sans that echoes the chunky italic wordmark (e.g. Archivo, Expanded/Black); same family at regular weight for body. Body line length under 75 characters.
The one memorable element: the hero shows a stylised Google Maps local results panel for a search like "plumber near me", with a placeholder business moving up into the top 3 in a single short animation on load (respect prefers-reduced-motion by showing the final state). Keep everything else calm and disciplined.
Avoid generic template tells: no all-caps eyebrow labels above headings, no identical rounded cards with the same soft shadow everywhere, no gradient washes as decoration, no fade-up animation on every section, no single accented word in headlines, no arrows appended to button text. Numbered markers only for the genuine 3-step process.
Accessibility: WCAG 2.2 AA contrast, visible keyboard focus, labelled form fields, skip link, works at 320px wide.

## SEO requirements
- <html lang="en-NZ">, one H1 per page, logical heading order, descriptive alt text.
- Unique title (≤60 chars) and meta description (≤155 chars) per page, written for NZ searches; canonical URLs; Open Graph + Twitter card tags.
- Target terms (use naturally, no stuffing): google business profile optimisation nz, local seo nz, google maps ranking, how to rank on google maps, website updates for small business nz.
- Auto-generated sitemap.xml, robots.txt, internal links between service pages, FAQ and CTA pages.
- Core Web Vitals targets: LCP < 2.5s, INP < 200ms, CLS < 0.1.

## Structured data (JSON-LD, validated)
- Sitewide Organization (name "Sinchi", url, logo, areaServed "New Zealand", sameAs [LINKEDIN_URL], contactPoint with email) and WebSite.
- Service schema on each service page with provider and areaServed; BreadcrumbList on inner pages.
- FAQPage on /faq and on page-level FAQ blocks.
- Person schema for Andrew on /about (jobTitle, worksFor, knowsAbout: local SEO, Google Business Profile, website optimisation, automation).

## AEO and GEO requirements
- Every page opens with a direct, self-contained answer to the page's main question before detail.
- Use real questions as H2s where it reads naturally; use lists and tables for steps and comparisons.
- Repeat one consistent entity definition in the footer and about page: "Sinchi is a local SEO service that helps New Zealand businesses rank in Google Maps and improve their websites."
- Create /llms.txt summarising Sinchi, the two services, areas served, the free check, and links to key pages.
- robots.txt allows Googlebot, Bingbot, GPTBot, OAI-SearchBot, ClaudeBot, PerplexityBot and Google-Extended.
- Show "Last updated" dates on FAQ and service pages.

## Analytics
Vercel Analytics, with custom events for free_check_submit and quick_fixes_submit.

## Deliverables
The working Astro project, an up-to-date PROGRESS.md, a Git commit per stage, a README covering env vars, local dev and deployment to Vercel, and a list of every placeholder I need to replace.
```
