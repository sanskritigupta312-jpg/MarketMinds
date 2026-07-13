import { ArrowUpRight } from 'lucide-react';
import RevealOnScroll from '../ui/RevealOnScroll';
import dhruvPhoto from '../../assets/images/dhruv-verma.png';
import { brand, founderBio } from '../../data/content';

export default function FounderSpotlight() {
  return (
    <section className="section-pad py-24 sm:py-32">
      <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
        <RevealOnScroll direction="right">
          <div className="relative mx-auto max-w-sm">
            <div className="absolute -inset-3 rounded-[2rem] border border-gold-500/25" />
            <div className="relative overflow-hidden rounded-[1.75rem] bg-ink shadow-card">
              <div className="pointer-events-none absolute inset-0 bg-gold-500/10 mix-blend-overlay" />
              <img
                src={dhruvPhoto}
                alt="Dhruv Verma, Founder & Creative Director of MarketMinds"
                className="relative aspect-[4/5] w-full object-cover object-top"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink via-ink/70 to-transparent p-6">
                <p className="font-display text-lg text-ivory">{founderBio.name}</p>
                <p className="font-mono text-[11px] uppercase tracking-widest2 text-gold-400">
                  {founderBio.role}
                </p>
              </div>
            </div>
          </div>
        </RevealOnScroll>

        <div className="flex flex-col gap-6">
          <span className="eyebrow flex items-center gap-3">
            <span className="h-px w-8 bg-gold-500" />
            Meet the founder
          </span>
          <RevealOnScroll delay={0.05}>
            <h2 className="text-display-md font-display font-medium text-balance text-charcoal dark:text-ivory">
              Built by someone who’s shipped the work himself.
            </h2>
          </RevealOnScroll>

          {founderBio.paragraphs.map((p, i) => (
            <RevealOnScroll key={i} delay={0.1 + i * 0.05}>
              <p className="max-w-xl text-base leading-relaxed text-charcoal-muted dark:text-ivory-muted">
                {p}
              </p>
            </RevealOnScroll>
          ))}

          <RevealOnScroll delay={0.2}>
            <a
              href={brand.founderPortfolio}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline mt-2 w-fit"
            >
              {founderBio.portfolioLabel}
              <ArrowUpRight size={15} />
            </a>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
