// ─────────────────────────────────────────────────────────────
// PRICING CONTENT
// Mirrors the plan structure and price points of our web-design
// packages so it's easy to keep this in sync as pricing changes.
// Edit tier names, prices and feature rows here — the Pricing page
// and PricingTabs component just render whatever's in this file.
// ─────────────────────────────────────────────────────────────

export const pricingIntro = {
  eyebrow: 'Pricing',
  title: 'Straightforward packages. No surprise invoices.',
  description:
    "Pick a track below and see exactly what's included, tier by tier. Need something that doesn't fit a box — a multi-region launch, a migration, a bespoke integration? Skip straight to a call and we'll scope it properly.",
};

// Each category becomes a tab. `plans` is always left-to-right,
// cheapest to most capable — PricingTabs highlights `popular: true`.
export const pricingCategories = [
  {
    id: 'wordpress',
    label: 'Website Design',
    tagline: 'Dynamic, CMS-editable sites — our most-booked starting point.',
    plans: [
      {
        name: 'Basic',
        price: '₹9,999',
        cadence: 'one-time',
        pages: 'Up to 3 pages',
        support: '1-time setup support',
        popular: false,
        features: [
          { label: 'Custom WordPress design', included: true },
          { label: 'Dynamic, CMS-editable site', included: true },
          { label: 'Free domain', included: false },
          { label: 'Free hosting (1 yr)', included: false },
          { label: 'Free SSL certificate', included: true },
          { label: 'Basic on-page SEO', included: false },
          { label: 'Content editing after handover', included: true },
          { label: 'Contact form', included: true },
          { label: 'Chat support during build', included: true },
          { label: 'Google & Bing indexing', included: true },
        ],
      },
      {
        name: 'Advance',
        price: '₹14,999',
        cadence: 'one-time',
        pages: 'Up to 6 pages',
        support: '6 months support',
        popular: true,
        features: [
          { label: 'Advanced WordPress design', included: true },
          { label: 'Dynamic, CMS-editable site', included: true },
          { label: 'Free domain', included: true },
          { label: 'Free hosting (1 yr)', included: true },
          { label: 'Free SSL certificate', included: true },
          { label: 'Basic on-page SEO', included: false },
          { label: 'Content editing after handover', included: true },
          { label: 'Contact form', included: true },
          { label: 'Chat support during build', included: true },
          { label: 'Google & Bing indexing', included: true },
        ],
      },
      {
        name: 'Premium',
        price: '₹19,999',
        cadence: 'one-time',
        pages: 'Up to 10 pages',
        support: '1 year support',
        popular: false,
        features: [
          { label: 'Advanced WordPress design', included: true },
          { label: 'Dynamic, CMS-editable site', included: true },
          { label: 'Free domain', included: true },
          { label: 'Free hosting (1 yr)', included: true },
          { label: 'Free SSL certificate', included: true },
          { label: 'Basic on-page SEO', included: true },
          { label: 'Content editing after handover', included: true },
          { label: 'Contact form', included: true },
          { label: 'Chat support during build', included: true },
          { label: 'Google & Bing indexing', included: true },
        ],
      },
      {
        name: 'Ultimate',
        price: '₹29,999',
        cadence: 'one-time',
        pages: 'Up to 15 pages',
        support: '1 year support',
        popular: false,
        features: [
          { label: 'Advanced WordPress design', included: true },
          { label: 'Dynamic, CMS-editable site', included: true },
          { label: 'Free domain', included: true },
          { label: 'Free hosting (1 yr)', included: true },
          { label: 'Free SSL certificate', included: true },
          { label: 'Basic on-page SEO', included: true },
          { label: 'Content editing after handover', included: true },
          { label: 'Contact form', included: true },
          { label: 'Chat support during build', included: true },
          { label: 'Google & Bing indexing', included: true },
        ],
      },
    ],
  },
  {
    id: 'static',
    label: 'Static Website',
    tagline: 'Fast, single-purpose sites — landing pages and lightweight brochures.',
    plans: [
      {
        name: 'Bronze',
        price: '₹7,999',
        cadence: 'one-time',
        pages: 'Single page',
        support: '1-time setup support',
        popular: false,
        features: [
          { label: 'Free domain', included: false },
          { label: 'Free hosting', included: false },
          { label: 'Free SSL certificate', included: true },
          { label: 'Responsive & mobile-friendly', included: true },
          { label: 'Content editing after handover', included: false },
          { label: 'Contact form', included: false },
          { label: 'Live chat widget', included: false },
          { label: 'WhatsApp & call button', included: true },
          { label: 'Google & Bing indexing', included: true },
        ],
      },
      {
        name: 'Silver',
        price: '₹9,999',
        cadence: 'one-time',
        pages: 'Up to 3 pages',
        support: '3 months support',
        popular: true,
        features: [
          { label: 'Free domain', included: true },
          { label: 'Free hosting', included: true },
          { label: 'Free SSL certificate', included: true },
          { label: 'Responsive & mobile-friendly', included: true },
          { label: 'Content editing after handover', included: false },
          { label: 'Contact form', included: true },
          { label: 'Live chat widget', included: true },
          { label: 'WhatsApp & call button', included: true },
          { label: 'Google & Bing indexing', included: true },
        ],
      },
      {
        name: 'Gold',
        price: '₹14,999',
        cadence: 'one-time',
        pages: 'Up to 7 pages',
        support: '6 months support',
        popular: false,
        features: [
          { label: 'Free domain', included: true },
          { label: 'Free hosting', included: true },
          { label: 'Free SSL certificate', included: true },
          { label: 'Basic on-page SEO', included: true },
          { label: 'Responsive & mobile-friendly', included: true },
          { label: 'Content editing after handover', included: true },
          { label: 'Contact form', included: true },
          { label: 'Live chat widget', included: true },
          { label: 'WhatsApp & call button', included: true },
          { label: 'Google & Bing indexing', included: true },
        ],
      },
      {
        name: 'Platinum',
        price: '₹19,999',
        cadence: 'one-time',
        pages: 'Up to 12 pages',
        support: '1 year support',
        popular: false,
        features: [
          { label: 'Free domain', included: true },
          { label: 'Free hosting', included: true },
          { label: 'Free SSL certificate', included: true },
          { label: 'Basic on-page SEO', included: true },
          { label: 'Responsive & mobile-friendly', included: true },
          { label: 'Content editing after handover', included: true },
          { label: 'Contact form', included: true },
          { label: 'Live chat widget', included: true },
          { label: 'WhatsApp & call button', included: true },
          { label: 'Google & Bing indexing', included: true },
        ],
      },
    ],
  },
  {
    id: 'webapp',
    label: 'Custom Web App',
    tagline: 'PHP / database-backed builds for teams outgrowing a template.',
    plans: [
      {
        name: 'Basic',
        price: '₹49,999',
        cadence: 'one-time',
        pages: '5 pages',
        support: '1 year support',
        popular: false,
        features: [
          { label: 'Suited to blogs & small businesses', included: true },
          { label: 'Free domain, hosting & SSL', included: true },
          { label: 'On-page SEO', included: true },
          { label: 'Free business email', included: true },
          { label: 'PHP & database backend', included: true },
          { label: 'Custom admin panel', included: true },
          { label: 'Analytics integration', included: true },
          { label: 'Video integration', included: false },
        ],
      },
      {
        name: 'Advance',
        price: '₹99,999',
        cadence: 'one-time',
        pages: '10 pages',
        support: '1 year support',
        popular: true,
        features: [
          { label: 'Suited to medium-sized businesses', included: true },
          { label: 'Free domain, hosting & SSL', included: true },
          { label: 'On-page SEO', included: true },
          { label: 'Free business email', included: true },
          { label: 'PHP & database backend', included: true },
          { label: 'Custom admin panel', included: true },
          { label: 'Analytics integration', included: true },
          { label: 'Video integration', included: true },
        ],
      },
      {
        name: 'Premium',
        price: '₹1,99,999',
        cadence: 'one-time',
        pages: '20 pages',
        support: '1 year support',
        popular: false,
        features: [
          { label: 'Suited to larger businesses', included: true },
          { label: 'Free domain, hosting & SSL', included: true },
          { label: 'On-page SEO', included: true },
          { label: 'Free business email', included: true },
          { label: 'PHP & database backend', included: true },
          { label: 'Custom admin panel', included: true },
          { label: 'Analytics integration', included: true },
          { label: 'Video integration', included: true },
        ],
      },
      {
        name: 'Ultimate',
        price: '₹4,99,999',
        cadence: 'one-time',
        pages: '30 pages',
        support: '1 year support',
        popular: false,
        features: [
          { label: 'Suited to large companies & e-commerce', included: true },
          { label: 'Free domain, hosting & SSL', included: true },
          { label: 'On-page SEO', included: true },
          { label: 'Free business email', included: true },
          { label: 'PHP & database backend', included: true },
          { label: 'Custom admin panel', included: true },
          { label: 'Analytics integration', included: true },
          { label: 'Video integration', included: true },
        ],
      },
    ],
  },
];

// PLACEHOLDER — confirm this still matches current tax rules before launch.
export const pricingFootnote = 'All packages are exclusive of GST (18%). Final invoice = package price + GST.';

// Services we do on a scoped, quoted basis rather than a fixed shelf price —
// shown below the tiered plans instead of forcing them into a table.
export const onDemandServices = [
  {
    id: 'app-development',
    icon: 'Smartphone',
    title: 'App Development',
    desc: 'Native and cross-platform mobile apps for iOS and Android, from first wireframe through to app-store submission.',
  },
  {
    id: 'software-development',
    icon: 'Code2',
    title: 'Software Development',
    desc: 'Custom internal tools, dashboards and business software built around how your team actually works, not a generic template.',
  },
  {
    id: 'whatsapp-sms-marketing',
    icon: 'MessageCircle',
    title: 'WhatsApp & SMS Marketing',
    desc: 'Bulk and automated WhatsApp / SMS campaigns for announcements, offers and order updates, set up and handed over to your team.',
  },
];

export const pricingFaqs = [
  {
    q: 'Is this the full and final price?',
    a: 'The tier price covers everything listed on the card. Add-ons like extra pages beyond the tier limit, custom illustration, or paid stock media are quoted separately before we start, never after.',
  },
  {
    q: 'What if my project doesn\u2019t fit one of these tiers?',
    a: "That's common, and it's fine — these tiers cover the shapes of work we see most often. Tell us what you need and we'll either point you to the closest tier plus add-ons, or put together a custom quote.",
  },
  {
    q: 'Can I upgrade a tier later?',
    a: "Yes. Most clients start on Basic or Advance and upgrade once the site is live and paying for itself. We'll only ever charge the difference, not a fresh full price.",
  },
  {
    q: 'Do the support windows renew?',
    a: "The support window covers bug fixes and small tweaks after handover. Once it ends, ongoing edits and monitoring move to a simple monthly maintenance retainer — ask us for current rates.",
  },
];
