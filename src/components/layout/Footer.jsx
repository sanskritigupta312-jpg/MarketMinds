import { Link } from 'react-router-dom';
import { ArrowUpRight, Mail, MapPin, Phone } from 'lucide-react';
import Logo from '../ui/Logo';
import { brand, navLinks, services } from '../../data/content';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-ink text-ivory">
      <div className="section-pad py-20">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div className="flex flex-col gap-6">
            <Logo />
            <p className="max-w-xs text-sm leading-relaxed text-ivory-muted">
              A digital agency for brands who’d rather be remembered than just seen —
              strategy, design and performance marketing under one roof.
            </p>
            <div className="flex items-center gap-3 pt-2">
              {brand.socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-ivory/15 text-xs text-ivory-muted transition-colors duration-300 hover:border-gold-500 hover:text-gold-400"
                  aria-label={s.label}
                >
                  {s.label.slice(0, 1)}
                </a>
              ))}
            </div>
          </div>

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

          <div className="flex flex-col gap-4">
            <span className="eyebrow !text-gold-400">Services</span>
            <ul className="flex flex-col gap-3">
              {services.slice(0, 5).map((s) => (
                <li key={s.id}>
                  <Link
                    to="/services"
                    className="text-sm text-ivory-muted transition-colors duration-300 hover:text-gold-300"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

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

      <div className="hairline border-ivory/10">
        <div className="section-pad flex flex-col-reverse items-center gap-4 py-6 text-xs text-ivory-muted sm:flex-row sm:justify-between">
          <span>© {year} {brand.name}. All rights reserved.</span>
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
        </div>
      </div>
    </footer>
  );
}
