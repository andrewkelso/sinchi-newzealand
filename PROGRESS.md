# Sinchi.co.nz — Build Progress & Implementation Log

**Last Updated:** Stage 0 (Plan and Setup)
**Status:** In Progress (Waiting for User Approval on Stage 0 Implementation Plan)

---

## 1. Stage Tracker

| Stage | Name | Status | Summary / Deliverables |
|---|---|---|---|
| **0** | **Plan & Setup** | 🟢 Done | Architecture design, token definition, Astro + TypeScript setup, PROGRESS.md, Git init |
| **1** | **Design System & Layout** | 🟢 Done | Header with brand logo & mobile nav, Footer with entity & compliance, Layout.astro, 404 page, CSS tokens |
| **2** | **Home Page** | 🟢 Done | Hero with Google Maps 3-pack animation, Problem block, 2 Services, 3-Step Process, Proof/Audit mockups, FAQ, Final CTA |
| **3** | **Service Pages** | 🟢 Done | `/google-business-profile-ranking` & `/website-updates` (Answer-first, deliverables, report sample, pricing placeholder, FAQ, CTA) |
| **4** | **CTA Pages & Forms** | 🟢 Done | `/free-google-check` (distraction-free), `/3-quick-fixes`, `/thanks`, API routes to n8n with honeypot & fallback |
| **5** | **Trust & Legal Pages** | 🟢 Done | `/about` (Andrew's engineering background), `/faq` (14+ AEO questions), `/privacy` (NZ Privacy Act 2020), `/terms` |
| **6** | **SEO, AEO & GEO** | 🟢 Done | JSON-LD schemas (Org, Service, FAQ, Person, HowTo, Breadcrumbs), sitemap.xml, robots.txt, llms.txt, llms-full.txt, Open Graph meta |
| **UX+** | **Interactive Modals & CTAs** | 🟢 Done | Feature cards on `/google-business-profile-ranking` & `/website-updates` open into interactive deep-dive modals with in-modal Free Audit form (`/api/submit-check`), keyboard navigation, backdrop blur, and instant validation |
| **7** | **QA & Performance** | 🟢 Done | Zero broken links (all 14 routes + API tested 200 OK), 320px mobile viewport overflow fixed, WCAG 2.2 AA/AAA contrast verified, 0 forbidden em/en dashes, zero ranking guarantees |
| **8** | **Deploy & Handover** | 🟢 Done | Production bundle built, `.vercel/output` verified, `.env.example` created, `README.md` with Cloudflare DNS & Vercel deployment guide completed |

---

## 2. Stage 0 Implementation Plan

### A. Design Tokens (Sampled from Brand Assets)
- **Primary Brand Purple:** `#6D10A3` / `#6B12A5`
- **Deep Plum (Text & Dark Bands):** `#2A0840`
- **Light / Quiet Backgrounds:** `#F3ECFA` (Soft lilac), `#F9F6FC` (Subtle off-white)
- **Surface White:** `#FFFFFF`
- **Review Star Gold:** `#F5B400` (Used exclusively for review stars and high-trust badge accents)
- **Border / Outline:** `#E5D9F2`
- **Muted Text:** `#5A4866`
- **Typography:**
  - Headings: `Archivo, -apple-system, BlinkMacSystemFont, sans-serif` (Expanded / Black weights, tight letter-spacing)
  - Body: `Archivo, -apple-system, BlinkMacSystemFont, sans-serif` (Regular / Medium weights, max line length 75ch)

### B. Complete Page Roadmap
1. `/` — Home (Hero with local 3-pack climber animation, problem section, 2 services, 3-step timeline, proof visualizer, 4-item FAQ, CTA)
2. `/google-business-profile-ranking` — Service 1 (GBP 3-pack ranking, category optimization, reviews system, monthly report breakdown)
3. `/website-updates` — Service 2 (Speed, mobile, call-to-action, local schema, content alignment)
4. `/free-google-check` — Primary CTA landing page (No main nav, high-converting 5-field form + consent checkbox + 1-day delivery promise)
5. `/3-quick-fixes` — Secondary CTA lead capture (Email only + consent checkbox + instant 3 actionable fixes)
6. `/about` — Andrew's story (20+ yrs security systems engineer, systematic test-and-measure approach, remote NZ focus, E-E-A-T)
7. `/faq` — 14+ question answer-first repository (AEO optimized with 40–60 word direct answers)
8. `/privacy` — NZ Privacy Act 2020 & UEMA 2007 compliant policy
9. `/terms` — Plain-English terms & Fair Trading Act 1986 compliance
10. `/thanks` — Submission confirmation page (noindex)
11. `404` — Branded 404 page with quick navigation back to key pages

### C. Component Architecture
- `Layout.astro`: Base HTML shell with `<html lang="en-NZ">`, meta tags, JSON-LD injection, skip-to-content link, global styles.
- `Header.astro`: Brand logo (`Sinchi_LOGO.png`), navigation links, primary "Get my free check" button.
- `Footer.astro`: Entity definition, navigation links, NZ compliance notes, copyright.
- `MapsHeroVisual.astro`: Stylised Google Maps local 3-pack ranking animation (CSS animated with `prefers-reduced-motion` static fallback).
- `ServiceCard.astro`: Reusable card for the two core offers with clear deliverables.
- `ProcessTimeline.astro`: Numbered 1-2-3 sequence component.
- `AuditReportMockup.astro`: Interactive, sharp SVG/HTML vector mockup of the visibility check & suburb rank grid.
- `FaqAccordion.astro`: Accessible, semantic FAQ accordion with microdata.
- `CtaBand.astro`: High-converting final call to action banner.
- `VisibilityCheckForm.astro`: Client-side validated form with honeypot & server endpoint submission.
- `QuickFixesForm.astro`: Secondary lead-magnet form.

### D. Technical & SEO Setup
- **Framework:** Astro (TypeScript, `@astrojs/vercel` adapter).
- **API Endpoints:** `/api/submit-check` and `/api/submit-fixes` with honeypot spam protection, server-side payload validation, and n8n webhook relay (with local mock fallback).
- **Structured Data (JSON-LD):** `Organization`, `WebSite`, `Service`, `FAQPage`, `Person`, `BreadcrumbList`.
- **AEO / GEO Files:** `/llms.txt`, `robots.txt` (crawlers enabled), `sitemap.xml`.

---

## 3. Placeholders & Conventions to Maintain
- **Typography & Punctuation Rule:** Never use em dashes (`—`) or en dashes (`–`) anywhere on the site. Use colons, commas, hyphens, or natural phrasing instead.
- [ ] `N8N_AUDIT_WEBHOOK_URL` (in `.env` / Vercel env)
- [ ] `N8N_TIPS_WEBHOOK_URL` (in `.env` / Vercel env)
- [ ] Starting price placeholder in Service pages (e.g. `From $___ NZD / month`)
- [ ] Andrew's LinkedIn URL in `/about` and `Person` schema
- [ ] Direct contact email (`hello@sinchi.co.nz` or `andrew@sinchi.co.nz`)

---

- **Stage 0:** Initialized `PROGRESS.md`, analyzed brand assets (`Sinchi_LOGO.png`, `Sinchi_Favacon.png`, `avatar.png`), extracted color palette, structured build roadmap.
- **Stage 1 to 5:** Built Design System, Home Page with live Maps visualizer, Service Pages, CTA Pages, and Trust/Legal pages.
- **Stage 6 (SEO, AEO & GEO):**
  - Configured `@astrojs/sitemap` with automated generation for all 9 indexable pages (`sitemap-index.xml`, `sitemap-0.xml`).
  - Created `public/robots.txt` allowing search engines and all major AI / answer engine crawlers (GPTBot, ClaudeBot, PerplexityBot, Google-Extended, etc.).
  - Created `public/llms.txt` and `public/llms-full.txt` GEO entity specifications and knowledge base files.
  - Implemented comprehensive JSON-LD schemas: `Organization`, `WebSite`, `Service` (with pricing offers), `FAQPage` (all 14 repository questions and service FAQs), `Person` (Andrew Kelso E-E-A-T credentials), `HowTo` (3 Quick Fixes), and dynamic `BreadcrumbList` across all inner pages.
  - Added New Zealand regional meta tags (`geo.region="NZ"`, `geo.placename="New Zealand"`, `author="Andrew Kelso"`), Open Graph, and Twitter Cards with absolute URLs.
  - Verified title tag lengths (≤ 60 chars) and meta descriptions (≤ 155 chars).
