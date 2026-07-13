import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import RevealOnScroll from '../ui/RevealOnScroll';
import MagneticButton from '../ui/MagneticButton';
import { brand } from '../../data/content';

export default function CTASection() {
  return (
    <section className="section-pad py-20 sm:py-28">
      <RevealOnScroll>
        <div className="relative overflow-hidden rounded-[2rem] border border-gold-500/20 bg-ink px-8 py-16 text-center sm:px-16 sm:py-24">
          <div className="pointer-events-none absolute -top-32 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-gold-500/25 blur-[110px]" />
          <span className="eyebrow relative mb-6 inline-flex items-center gap-3 !text-gold-400">
            <span className="h-px w-8 bg-gold-500" />
            Let's talk
            <span className="h-px w-8 bg-gold-500" />
          </span>
          <h2 className="relative text-display-md font-display font-medium text-balance text-ivory">
            Ready for marketing that actually{' '}
            <span className="italic gold-text">moves the number?</span>
          </h2>
          <p className="relative mx-auto mt-6 max-w-lg text-base leading-relaxed text-ivory-muted">
            Tell us where the business is today and where it needs to be. We'll tell you honestly
            whether we're the right team to get you there.
          </p>
          <div className="relative mt-10 flex flex-wrap items-center justify-center gap-5">
            <MagneticButton>
              <Link to="/contact" className="btn-primary">
                Book a strategy call
                <ArrowUpRight size={16} />
              </Link>
            </MagneticButton>
            <a
              href={`https://wa.me/${brand.whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost !text-ivory"
            >
              or message us on WhatsApp
            </a>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
}
