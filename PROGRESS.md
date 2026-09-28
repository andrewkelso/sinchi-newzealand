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
| **4** | **CTA Pages & Forms** | 🟡 Next | `/free-google-check` (distraction-free), `/3-quick-fixes`, `/thanks`, API routes to n8n with honeypot & fallback |
| **5** | **Trust & Legal Pages** | ⚪ Not Started | `/about` (Andrew's engineering background), `/faq` (14+ AEO questions), `/privacy` (NZ Privacy Act 2020), `/terms` |
| **6** | **SEO, AEO & GEO** | ⚪ Not Started | JSON-LD schemas (Org, Service, FAQ, Person, Breadcrumbs), sitemap.xml, robots.txt, llms.txt, Open Graph meta |
| **7** | **QA & Performance** | ⚪ Not Started | Lighthouse 95+ audit across all 4 scores, 320px mobile test, WCAG 2.2 AA contrast, link checks |
| **8** | **Deploy & Handover** | ⚪ Not Started | Git repository clean, Vercel build config, environment variables documentation, README |

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

## 3. Placeholders to Fill Before Launch
- [ ] `N8N_AUDIT_WEBHOOK_URL` (in `.env` / Vercel env)
- [ ] `N8N_TIPS_WEBHOOK_URL` (in `.env` / Vercel env)
- [ ] Starting price placeholder in Service pages (e.g. `From $___ NZD / month`)
- [ ] Andrew's LinkedIn URL in `/about` and `Person` schema
- [ ] Direct contact email (`hello@sinchi.co.nz` or `andrew@sinchi.co.nz`)

---

## 4. Changelog
- **Stage 0:** Initialized `PROGRESS.md`, analyzed brand assets (`Sinchi_LOGO.png`, `Sinchi_Favacon.png`, `avatar.png`), extracted color palette, structured build roadmap.
