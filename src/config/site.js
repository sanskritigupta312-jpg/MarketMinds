// SINGLE SOURCE OF TRUTH FOR THE SITE URL
// To switch domains: set VITE_SITE_URL in .env.production + Vercel dashboard.
// Do NOT hardcode the URL anywhere else in the codebase.

export const SITE_URL =
  (import.meta.env.VITE_SITE_URL || 'https://market-minds-phi.vercel.app').replace(/\/$/, '');

export const OG_IMAGE = SITE_URL + '/og-image.png';
