import { Helmet } from 'react-helmet-async';
import { brand } from '../data/content';
import { SITE_URL, OG_IMAGE } from '../config/site';

const DEFAULT_OG_IMAGE = OG_IMAGE;

/**
 * Drop this at the top of every page component to control that page's
 * <title>, meta description, canonical URL and social preview.
 *
 *   <Seo
 *     title="Services — MarketMinds"
 *     description="What we do, one line."
 *     path="/services"
 *   />
 */
export default function Seo({ title, description, path = '/', image = DEFAULT_OG_IMAGE, noindex = false }) {
  const fullTitle = title ? `${title} — ${brand.name}` : `${brand.name} — ${brand.tagline}`;
  const url = `${SITE_URL}${path}`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      {noindex && <meta name="robots" content="noindex, nofollow" />}

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content={brand.name} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
}