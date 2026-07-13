# MarketMinds — Agency Website

A production-ready marketing website for **MarketMinds**, a digital growth agency
led by **Dhruv Verma**. Built with React, Tailwind CSS and Framer Motion.

---

## ✨ What's inside

- **5 pages** — Home, About, Services, Approach (process/work), Contact — routed with React Router
- **Dark / light mode** — toggle in the navbar, persisted to `localStorage`, respects system preference on first visit, no flash-of-wrong-theme on load
- **Framer Motion throughout** — scroll reveals, a self-drawing hero mark, a magnetic CTA button, a scroll-progress "ascent rail," page transitions, an accordion FAQ
- **WhatsApp floating button** — bottom-right on every page, opens a pre-filled chat
- **Working contact form** — front-end only out of the box (opens a pre-filled email); see "Connecting the contact form" below to wire it to a real backend
- **All copy in one file** — `src/data/content.js` — so you can edit text without touching components
- **Accessible & responsive** — visible keyboard focus states, semantic headings, reduced-motion support, mobile nav, tested down to small phone widths

## 🎨 Design system

- **Colors** — near-black "ink" + warm "paper" (cream) backgrounds with a brand gold sampled from your logo, defined as CSS-friendly tokens in `tailwind.config.js`
- **Type** — [Fraunces](https://fonts.google.com/specimen/Fraunces) (display serif) + [Inter](https://fonts.google.com/specimen/Inter) (body) + [Space Mono](https://fonts.google.com/specimen/Space+Mono) (labels/eyebrows), loaded via Google Fonts in `index.html`
- **Signature element** — the "Ascent Rail," a scroll-progress indicator shaped like your logo's upward arrow, plus a self-drawing version of the arrow mark on the homepage hero

---

## 🚀 Getting started

Requires **Node.js 18+**.

```bash
npm install
npm run dev
```

Open the local URL that Vite prints (usually `http://localhost:5173`).

### Build for production

```bash
npm run build      # outputs to /dist
npm run preview    # preview the production build locally
```

Deploy the `/dist` folder to any static host — Vercel, Netlify, Cloudflare Pages, GitHub Pages, etc. Vercel is the easiest match since your portfolio is already hosted there.

---

## 📁 Folder structure

```
marketminds-website/
├── public/                      # Static files served as-is (favicons, etc.)
├── src/
│   ├── assets/
│   │   └── images/               # Logo + founder photo (background removed)
│   ├── components/
│   │   ├── layout/                # Navbar, Footer, WhatsApp button, theme toggle,
│   │   │                          # ascent rail, page transition, route Layout
│   │   ├── sections/               # Page building blocks (Hero, ServicesGrid,
│   │   │                          # ProcessTimeline, ContactForm, etc.)
│   │   └── ui/                     # Small reusable primitives (buttons, reveal
│   │                              # animation wrapper, accordion, logo, headings)
│   ├── context/
│   │   └── ThemeContext.jsx        # Dark/light mode state
│   ├── data/
│   │   ├── content.js              # ALL site copy — services, process, bio, FAQs…
│   │   └── serviceIcons.js         # Icon lookup for the services list
│   ├── hooks/
│   │   ├── useTheme.js
│   │   └── useScrollProgress.js
│   ├── pages/                      # One file per route
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Services.jsx
│   │   ├── Work.jsx
│   │   ├── Contact.jsx
│   │   └── NotFound.jsx
│   ├── App.jsx                     # Route definitions
│   ├── main.jsx                    # App entry point
│   └── index.css                   # Tailwind layers + global styles
├── index.html
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
└── package.json
```

---

## ✅ Before you launch — replace these placeholders

Everything below lives in **`src/data/content.js`** unless noted:

1. **Contact details** — `brand.email`, `brand.phoneDisplay` / `phoneHref`, and `brand.whatsappNumber` are placeholders. Update the WhatsApp number especially (currently `919876543210`) or the floating button will message a fake number.
2. **Testimonials** — the three quotes in `testimonials` are clearly marked sample copy. Swap in real client quotes (with permission) before launch.
3. **Social links** — `brand.socials` currently point to generic `instagram.com` / `linkedin.com` etc. Point them at your real profiles.
4. **GMB link** — already wired to your Google Business profile share link in `brand.gmbUrl`.
5. **Founder portfolio link** — already wired to `https://dhruv-portfolio-one-tau.vercel.app/`.

Search the file for `PLACEHOLDER` to find these quickly.

### Connecting the contact form

`src/components/sections/ContactForm.jsx` currently opens a pre-filled email on submit — it works with zero setup, but isn't a "real" backend. To capture submissions properly, either:

- Point it at a form service like **Formspree**, **Basin**, or **Web3Forms** (a few lines change in `handleSubmit`), or
- Wire it to your own API route / serverless function.

---

## 🛠 Tech stack

| Purpose | Library |
|---|---|
| Framework | React 19 + Vite |
| Styling | Tailwind CSS 3 |
| Animation | Framer Motion |
| Routing | React Router 7 |
| Icons | lucide-react |

---

Built for **MarketMinds**, led by **Dhruv Verma**.
