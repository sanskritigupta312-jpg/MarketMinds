# MarketMinds — Digital Marketing & Growth Agency

[![Live Site](https://img.shields.io/badge/Live-market--minds--phi.vercel.app-gold?style=flat-square)](https://market-minds-phi.vercel.app/)
[![React 19](https://img.shields.io/badge/React-19.2-blue?style=flat-square&logo=react)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-8.1-646CFF?style=flat-square&logo=vite)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38B2AC?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)
[![Deployment](https://img.shields.io/badge/Deploy-Vercel-black?style=flat-square&logo=vercel)](https://vercel.com/)

A production-grade, hardened website for **MarketMinds**, a digital growth agency led by **Dhruv Verma**. Engineered with React 19, Vite, Tailwind CSS, Framer Motion, and Three.js WebGL.

---

## 🌟 Executive Overview

**MarketMinds** is a digital marketing and growth agency built on a core philosophy: *“Attention is earned, not bought.”* The web platform delivers a sleek, performance-oriented experience that combines bespoke aesthetic craft with modern frontend engineering standards.

---

## ⚡ Engineering & Architecture Highlights

### 1. Liquid Gold 3D WebGL Ambient Layer
- **GPU-Accelerated Simulation**: Custom vertex displacement shaders running on `@react-three/fiber` and Three.js.
- **Adaptive Performance**: Dynamically throttles rendering on background tabs, respects `prefers-reduced-motion`, and scales geometry density based on device hardware concurrency and viewport width.
- **Dynamic Fog & Color Mixing**: Real-time shader uniform interpolation seamlessly blending across dark (`#0B0B0D`) and light (`#FAF6EC`) themes.

### 2. High-Performance Design System
- **Curated Palette**: Deep obsidian (`ink`), warm ivory (`paper`), and tailored metallic accents (`gold-gradient`).
- **Editorial Typography**: Variable optical-size typography pairing **Fraunces** (display serif), **Inter** (clean UI body), and **Space Mono** (data & metadata labels).
- **Micro-Interactions**: Smooth spring physics, scroll-triggered reveals, and fluid layout transitions powered by **Framer Motion**.

### 3. Enterprise Hardening & Security
- **Strict HTTP Headers**: Production-ready configurations including `X-Content-Type-Options: nosniff`, `X-Frame-Options: SAMEORIGIN`, `Referrer-Policy: strict-origin-when-cross-origin`, and HSTS.
- **Content Security Policy (CSP)**: Fine-grained directive whitelisting for Google Fonts, Google Maps embeds, and WebGL workers.
- **Lead Capture & Anti-Bot Protection**: Honeypot-guarded form pipelines with timeout abort controllers and fallback mechanisms.
- **RFC 9116 Compliant**: Standardized security disclosure contact policy at `/.well-known/security.txt`.

### 4. Fault-Tolerant Reliability
- **Global Error Boundary**: Isolates runtime errors in 3D WebGL contexts or lazy route chunks without crashing the application shell.
- **Automated CI Workflow**: GitHub Actions pipeline validating lint standards (`oxlint`) and production bundle builds on every commit.

---

## 🗺️ Application Routes

| Route | View | Description |
|---|---|---|
| `/` | **Home** | Hero introduction, service marquee, founder spotlight, and testimonials. |
| `/about` | **About** | Agency story, core growth principles, and creative direction. |
| `/services` | **Services** | Full catalog of digital growth capabilities with expandable FAQs. |
| `/services/:slug` | **Service Detail** | Deep-dive pages for SEO, Web Design, and Digital Marketing packages. |
| `/pricing` | **Pricing** | Tiered packages, feature comparison tables, and on-demand services. |
| `/work` | **Approach** | 5-stage discovery-to-growth framework and discipline showcases. |
| `/contact` | **Contact** | Interactive project inquiry form and location map integration. |
| `/privacy-policy` | **Privacy Policy** | DPDP & GDPR compliant data protection and rights policy. |
| `/terms` | **Terms & Conditions** | Master service agreements, deliverables, and IP terms. |
| `/refund-policy` | **Refund Policy** | Transparent retainer cancellation rules and milestone terms. |

---

## 🛠️ Technology Stack

```
Frontend Core        ───  React 19.2  ·  Vite 8.1  ·  React Router 7
Styling & UI         ───  Tailwind CSS 3.4  ·  Lucide Icons  ·  PostCSS
Animation & 3D       ───  Framer Motion  ·  Three.js  ·  @react-three/fiber
SEO & Metadata       ───  react-helmet-async  ·  Schema.org JSON-LD
Quality & CI/CD      ───  oxlint  ·  GitHub Actions  ·  Vercel Edge Network
```

---

## 🚀 Getting Started

### Prerequisites
- **Node.js**: `20.19.0` or higher
- **Package Manager**: `npm`

### Installation & Local Run

```bash
# 1. Clone repository
git clone https://github.com/sanskritigupta312-jpg/MarketMinds.git

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev

# 4. Verify lint rules
npm run lint

# 5. Build production bundle
npm run build
```

---

## 🏢 Studio Information

- **Agency**: MarketMinds
- **Creative Director & Founder**: Dhruv Verma
- **Location**: Lucknow, UP, India

---

Crafted with intention for **MarketMinds**.
