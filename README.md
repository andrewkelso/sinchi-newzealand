# Sinchi.co.nz — Local Google Search & Website Engineering

Official production website for **Sinchi** (Auckland & remote New Zealand), specializing in Google Business Profile ranking and high-converting website speed updates for Kiwi service businesses.

Built with **Astro v7**, Vanilla CSS, `@astrojs/vercel` serverless adapter, and strict AEO/GEO/SEO structured data schemas.

---

## 1. Quick Start Locally

```bash
# Install dependencies
npm install

# Start development server (serves http://localhost:4321)
npm run dev

# Run production build
npm run build

# Preview production build locally
npm run preview
```

---

## 2. Deploying to Vercel

The project is preconfigured with `@astrojs/vercel` and generates native Vercel Build Output API assets (`.vercel/output`).

### Option A: Via GitHub / GitLab / Bitbucket (Recommended)
1. Push this project folder to your GitHub repository (e.g. `andrewkelso/sinchi-nz-website`).
2. Log into [vercel.com](https://vercel.com) and click **"Add New..."** → **"Project"**.
3. Import the repository.
4. Vercel will automatically detect:
   - **Framework Preset**: Astro
   - **Build Command**: `npm run build`
   - **Output Directory**: `.vercel/output`
5. Click **Deploy**.

### Option B: Via Vercel CLI
```bash
# In the project directory:
npx vercel
# Follow prompts to link to your Vercel team/account
# For production:
npx vercel --prod
```

### Environment Variables (Vercel Project Settings)
Under **Project Settings** → **Environment Variables**, add:
- `N8N_AUDIT_WEBHOOK_URL`: (Optional) Webhook URL to receive Free Audit & feature modal submissions.
- `N8N_TIPS_WEBHOOK_URL`: (Optional) Webhook URL to receive 3 Quick Fixes submissions.

*(If unset, the API runs safely in mock mode, logging payload and returning `{ success: true, redirect: '/thanks' }`).*

---

## 3. Configuring Cloudflare DNS for `sinchi.co.nz`

When hosting on **Vercel** with **Cloudflare DNS & Proxy**, configure the following:

### Step 1: Add Custom Domain in Vercel
1. Go to your project in Vercel → **Settings** → **Domains**.
2. Add `sinchi.co.nz` (and optionally `www.sinchi.co.nz`).
3. Set your preferred redirect (e.g. redirect `www.sinchi.co.nz` → `sinchi.co.nz` or vice-versa).

### Step 2: Configure Cloudflare DNS Records
In your Cloudflare dashboard for `sinchi.co.nz` → **DNS** → **Records**:

| Type | Name | Content / Target | Proxy Status |
|---|---|---|---|
| **A** | `@` (or `sinchi.co.nz`) | `76.76.21.21` | **DNS Only (Grey Cloud)** initially |
| **CNAME** | `www` | `cname.vercel-dns.com` | **DNS Only (Grey Cloud)** initially |

> **Crucial Tip for Vercel SSL Verification**: 
> Keep the proxy status as **DNS Only (Grey Cloud)** until Vercel verifies domain ownership and issues the SSL certificate (usually 1-2 minutes). Once Vercel shows a green checkmark, you can switch the cloud to **Proxied (Orange Cloud)** if you want Cloudflare's WAF and DDoS protection.

### Step 3: Cloudflare SSL/TLS Encryption Mode (Critical!)
In Cloudflare → **SSL/TLS** → **Overview**:
- **Set Encryption mode to:** **Full (Strict)** or **Full**.
- ⚠️ **DO NOT USE "Flexible"**: Vercel forces HTTPS automatically. Setting Cloudflare to "Flexible" will cause an infinite redirect loop (`ERR_TOO_MANY_REDIRECTS`).

### Step 4: Cloudflare Edge Settings
- In Cloudflare → **SSL/TLS** → **Edge Certificates**:
  - Turn **Always Use HTTPS** to **ON**.
  - Set **Minimum TLS Version** to **TLS 1.2** (or 1.3).
- In Cloudflare → **Speed** → **Optimization**:
  - Keep Auto Minify **OFF** (Vite / Astro already minifies HTML, CSS, and JS optimally).

---

## 4. Key Pages & Features

- `/` — Homepage featuring the interactive Google Maps local 3-pack simulator and call estimator.
- `/google-business-profile-ranking` — GBP ranking service with 6 interactive audit deep-dive modals.
- `/website-updates` — Website speed, schema & conversion service with 6 interactive audit deep-dive modals.
- `/free-google-check` — Focused 5-point audit landing page.
- `/3-quick-fixes` — 1-field instant download lead capture.
- `/about` — Andrew's background in security engineering, test-and-measure methodology, and remote NZ service.
- `/faq` — 14 AEO-optimized answers with structured FAQPage JSON-LD.
- `/privacy` & `/terms` — Plain English NZ Privacy Act 2020 & Fair Trading Act 1986 compliance.
- `/robots.txt`, `/llms.txt`, `/llms-full.txt` — AI/GEO crawler and LLM grounding guides.
