# MarketMinds — Digital Marketing & Growth Agency

[![Live Site](https://img.shields.io/badge/Live-market--minds--phi.vercel.app-gold?style=flat-square)](https://market-minds-phi.vercel.app/)
[![React 19](https://img.shields.io/badge/React-19.2-blue?style=flat-square&logo=react)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-8.1-646CFF?style=flat-square&logo=vite)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38B2AC?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)
[![Deployment](https://img.shields.io/badge/Deploy-Vercel-black?style=flat-square&logo=vercel)](https://vercel.com/)

A production-grade, hardened website for **MarketMinds**, a digital growth agency led by **Dhruv Verma**. Engineered with React 19, Vite, Tailwind CSS, Framer Motion, and Three.js WebGL.

---

## ✨ Features & Architecture

- **11 Modular Routes**:
  - `Home` (`/`) — Hero, Marquee, Services Overview, Founder Spotlight, Why Us, Testimonials, CTA.
  - `About` (`/about`) — Agency philosophy, core values, founder story.
  - `Services` (`/services`) & Sub-pages (`/services/:slug`) — Dedicated pages for SEO, Digital Marketing, and Website Design with pricing tables and deliverables.
  - `Pricing` (`/pricing`) — Interactive service category tabs and on-demand pricing tiers.
  - `Approach` (`/work`) — 5-stage delivery sequence and discipline showcases.
  - `Contact` (`/contact`) — Working lead capture with anti-spam honeypot and fallback.
  - `Legal Policies` — [Privacy Policy](https://market-minds-phi.vercel.app/privacy-policy), [Terms & Conditions](https://market-minds-phi.vercel.app/terms), and [Refund Policy](https://market-minds-phi.vercel.app/refund-policy) with responsive sticky TOC navigation.
- **Liquid Gold 3D Ambient Layer**: GPU-accelerated wireframe terrain running on `@react-three/fiber` that respects `prefers-reduced-motion`, browser tab visibility, and low-concurrency devices.
- **Dark / Light Mode**: Seamless theme toggling with zero flash-of-wrong-theme on load, persisted to `localStorage`.
- **Lead Capture & Anti-Spam**: Web3Forms integration with anti-bot honeypot field, timeout abort controller, and graceful `mailto:` fallback.
- **Hardened Security**: Pre-configured HTTP security headers (`nosniff`, `SAMEORIGIN`, `strict-origin-when-cross-origin`, HSTS, staged CSP), and RFC 9116 `/.well-known/security.txt`.
- **Fault-Tolerant React Error Boundary**: Catches WebGL and rendering runtime errors with a user-friendly recovery UI.

---

## 🎨 Design System

| Token | Dark Mode (`ink`) | Light Mode (`paper`) | Brand Accent (`gold`) |
|---|---|---|---|
| Background | `#0B0B0D` / `#131316` | `#FAF6EC` / `#FFFFFF` | `#C9A227` / `#D4AF37` |
| Text | `#F3EFE4` (`ivory`) | `#17161A` (`charcoal`) | Gold Gradient |
| Typography | **Display**: Fraunces | **Body**: Inter | **Labels/Code**: Space Mono |

---

## 📁 Project Structure

```
MarketMinds-Website/
├── public/
│   ├── .well-known/              # RFC 9116 security.txt
│   ├── og-image.png              # 1200×630 OpenGraph social share card
│   ├── robots.txt                # Search crawler instructions
│   ├── sitemap.xml               # Canonical sitemap for all 11 routes
│   └── site.webmanifest          # PWA & browser metadata
├── src/
│   ├── components/
│   │   ├── layout/               # Navbar, Footer, FloatingButtons, AscentRail
│   │   ├── sections/             # Hero, ServicesCardGrid, PricingTabs, ContactForm...
│   │   ├── three/                # BackgroundCanvas, TerrainField (WebGL wireframe)
│   │   └── ui/                   # Logo, PricingCard, Accordion, ErrorBoundary...
│   ├── config/
│   │   └── site.js               # Centralized domain and metadata config
│   ├── data/
│   │   ├── content.js            # Site-wide copy, contact info, brand socials
│   │   ├── pricing.js            # Tier packages, deliverables, FAQs
│   │   └── webServices.js        # Deep service specifications & pricing
│   ├── pages/
│   │   ├── legal/                # PrivacyPolicy.jsx, Terms.jsx, RefundPolicy.jsx
│   │   ├── Home.jsx, About.jsx, Services.jsx, ServiceDetail.jsx...
│   │   └── NotFound.jsx
│   ├── App.jsx                   # Route tree & ErrorBoundary wrapper
│   ├── main.jsx                  # React 19 entry point
│   └── index.css                 # Tailwind layers & design system utilities
├── .github/
│   └── workflows/ci.yml          # GitHub Actions build & lint verification
├── vercel.json                   # SPA routing rewrites & security headers
├── vite.config.js                # Vite build chunking & optimization
└── package.json
```

---

## ⚙️ Environment Variables

Copy `.env.example` to `.env.local` for local development:

```env
# Canonical site URL without trailing slash (used for SEO & OpenGraph tags)
VITE_SITE_URL=https://market-minds-phi.vercel.app

# Web3Forms access key for contact form lead capture (https://web3forms.com)
VITE_WEB3FORMS_KEY=1b4686c9-7030-4146-8fda-fea550b4c742
```

---

## 📝 Editing Site Copy & Data

All website copy is decoupled from UI components. Update data directly in `src/data/`:

- **`src/data/content.js`** — Business phone, email, WhatsApp, founder bio, and social links.
- **`src/data/pricing.js`** — Pricing packages, feature checklists, and pricing FAQs.
- **`src/data/webServices.js`** — Service details, taglines, and category deliverables.

---

## 🚀 Getting Started

Requires **Node.js 20+** (`>=20.19.0` recommended).

```bash
# 1. Install dependencies
npm install

# 2. Start local development server
npm run dev

# 3. Run fast oxlint check
npm run lint

# 4. Build for production
npm run build

# 5. Preview production build locally
npm run preview
```

---

## 🌐 Custom Domain Launch Checklist

When you are ready to point your custom domain:

1. **Add Domain in Vercel**: Go to Project Settings → Domains → Add your custom domain.
2. **Configure DNS Records**: Add CNAME or A records pointing to `cname.vercel-dns.com` or `76.76.21.21`.
3. **Update Environment Variable**: Set `VITE_SITE_URL=https://yourdomain.com` in Vercel Project Settings.
4. **Whitelist Domain in Web3Forms**: Add your custom domain in the [Web3Forms Dashboard](https://web3forms.com).
5. **Submit Sitemap**: Submit `https://yourdomain.com/sitemap.xml` to Google Search Console.

---

Built with intention for **MarketMinds**, led by **Dhruv Verma**.
