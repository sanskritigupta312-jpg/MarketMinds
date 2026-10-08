# MarketMinds — Agency Website

A production-grade, hardened marketing website for **MarketMinds**, a digital growth agency led by **Dhruv Verma**. Built with React 19, Vite, Tailwind CSS, Framer Motion, and Three.js WebGL.

---

## ✨ What's inside

- **11 Routes** — Home, About, Services, 3 Individual Service Pages (`/services/:slug`), Pricing, Approach (`/work`), Contact, and 3 Legal Policies (`/privacy-policy`, `/terms`, `/refund-policy`).
- **Liquid Gold 3D Ambient Canvas** — GPU-accelerated wireframe terrain built on Three.js & `@react-three/fiber`, respecting `prefers-reduced-motion` and hardware concurrency limits.
- **Dark / light mode** — toggle in the navbar, persisted to `localStorage`, respects system preference on first visit, no flash-of-wrong-theme on load.
- **Enterprise Security** — Strict CSP (Content-Security-Policy), HSTS, `nosniff`, `SAMEORIGIN` framing restrictions, and RFC 9116 `/.well-known/security.txt`.
- **Working Lead Capture** — Web3Forms integration with anti-bot honeypot field, timeout abort controller, and resilient `mailto:` fallback.
- **Compliance & Legal** — Privacy Policy (DPDP & GDPR compliant), Terms & Conditions (MSA), and Refund & Cancellation Policy.

---

## 🎨 Design system

- **Colors** — near-black "ink" (`#0B0B0D`) + warm "paper" (`#FAF6EC`) backgrounds with brand gold accents (`#C9A227`).
- **Typography** — Fraunces (display) + Inter (body) + Space Mono (technical labels).
- **Responsive Layouts** — Mobile-first navigation, sticky table of contents, and accessible keyboard focus outlines.

---

## 🚀 Getting started

Requires **Node.js 20+** (`>=20.19.0` recommended).

```bash
npm install
npm run dev
```

### Build for production

```bash
npm run build      # outputs to /dist
npm run lint       # oxlint fast verification
npm run preview    # preview production build locally
```

---

## 🔒 Security & Deployment

- **Hosting**: Configured for Vercel with single-page app rewrites and cache-control headers in `vercel.json`.
- **Custom Domain Switch**: Update `VITE_SITE_URL` in environment variables or `.env.local` to point canonical URLs and social previews to your production custom domain.

---

Built with intention for **MarketMinds**, led by **Dhruv Verma**.
