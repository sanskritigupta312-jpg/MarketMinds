import { Link } from 'react-router-dom';
import { ArrowUpRight, ArrowUp, Mail, MapPin, Phone, MessageCircle } from 'lucide-react';
import Logo from '../ui/Logo';
import { brand, navLinks, services } from '../../data/content';

// Minimal inline SVG icons for socials (tree-shakeable, no extra dep)
function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
    </svg>
  );
}
function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}
function XIcon() {
  return (
    <svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.742l7.74-8.855L1.254 2.25H8.08l4.253 5.622L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

const socialIconMap = {
  'Instagram': InstagramIcon,
  'LinkedIn': LinkedInIcon,
  'Twitter / X': XIcon,
};

const legalLinks = [
  { label: 'Privacy Policy', to: '/privacy-policy' },
  { label: 'Terms & Conditions', to: '/terms' },
  { label: 'Refund Policy', to: '/refund-policy' },
];

export default function Footer() {
  const year = new Date().getFullYear();

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <footer className="relative bg-ink/95 text-ivory">
      <div className="section-pad py-20">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          {/* Brand column */}
          <div className="flex flex-col gap-6">
            <Logo />
            <p className="max-w-xs text-sm leading-relaxed text-ivory-muted">
              A digital agency for brands who'd rather be remembered than just seen —
              strategy, design and performance marketing under one roof.
            </p>
            {/* Social links with proper icons */}
            <div className="flex items-center gap-3 pt-2">
              {brand.socials.map((s) => {
                const Icon = socialIconMap[s.label];
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-ivory/15 text-ivory-muted transition-colors duration-300 hover:border-gold-500 hover:text-gold-400"
                    aria-label={`MarketMinds on ${s.label}`}
                  >
                    {Icon ? <Icon /> : s.label.slice(0, 1)}
                  </a>
                );
              })}
              {/* WhatsApp */}
              <a
                href={`https://wa.me/${brand.whatsappNumber}?text=${encodeURIComponent(brand.whatsappDefaultMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-ivory/15 text-ivory-muted transition-colors duration-300 hover:border-[#25D366] hover:text-[#25D366]"
                aria-label="Chat with MarketMinds on WhatsApp"
              >
                <MessageCircle size={15} />
              </a>
            </div>
          </div>

          {/* Navigate */}
          <div className="flex flex-col gap-4">
            <span className="eyebrow !text-gold-400">Navigate</span>
            <ul className="flex flex-col gap-3">
              {navLinks.map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="text-sm text-ivory-muted transition-colors duration-300 hover:text-gold-300"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="flex flex-col gap-4">
            <span className="eyebrow !text-gold-400">Services</span>
            <ul className="flex flex-col gap-3">
              {services.slice(0, 5).map((s) => (
                <li key={s.id}>
                  <Link
                    to={`/services/${s.id === 'web-design' ? 'website-design' : s.id === 'seo' ? 'seo-services' : s.id === 'performance-marketing' ? 'digital-marketing' : '/services'}`}
                    className="text-sm text-ivory-muted transition-colors duration-300 hover:text-gold-300"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-4">
            <span className="eyebrow !text-gold-400">Get in touch</span>
            <ul className="flex flex-col gap-3 text-sm text-ivory-muted">
              <li>
                <a href={`mailto:${brand.email}`} className="flex items-center gap-2 hover:text-gold-300 transition-colors">
                  <Mail size={14} className="text-gold-500" /> {brand.email}
                </a>
              </li>
              <li>
                <a href={`tel:${brand.phoneHref}`} className="flex items-center gap-2 hover:text-gold-300 transition-colors">
                  <Phone size={14} className="text-gold-500" /> {brand.phoneDisplay}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={14} className="mt-0.5 shrink-0 text-gold-500" /> {brand.address}
              </li>
              <li>
                <a
                  href={brand.gmbUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-gold-400 hover:text-gold-300 transition-colors"
                >
                  View on Google Maps <ArrowUpRight size={13} />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Legal strip */}
      <div className="hairline border-ivory/10">
        <div className="section-pad flex flex-col gap-4 py-6 text-xs text-ivory-muted sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-6">
            <span>© {year} {brand.name}. All rights reserved.</span>
            <div className="flex flex-wrap gap-4">
              {legalLinks.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  className="hover:text-gold-300 transition-colors"
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-4">
            <span>
              Designed &amp; built with intention · Led by{' '}
              <a
                href={brand.founderPortfolio}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold-400 hover:text-gold-300 transition-colors"
              >
                {brand.founder}
              </a>
            </span>
            {/* Back to top */}
            <button
              onClick={scrollToTop}
              aria-label="Back to top"
              className="flex h-8 w-8 items-center justify-center rounded-full border border-ivory/15 text-ivory-muted transition-colors duration-300 hover:border-gold-500 hover:text-gold-400"
            >
              <ArrowUp size={14} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
