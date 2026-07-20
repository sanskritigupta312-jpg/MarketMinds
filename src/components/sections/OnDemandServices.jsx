import { ArrowUpRight } from 'lucide-react';
import RevealOnScroll from '../ui/RevealOnScroll';
import SectionHeading from '../ui/SectionHeading';
import { onDemandServices } from '../../data/pricing';
import { brand } from '../../data/content';
import { serviceIcons } from '../../data/serviceIcons';

export default function OnDemandServices() {
  return (
    <section className="section-pad py-20 sm:py-28">
      <SectionHeading
        eyebrow="Scoped on request"
        title="A few things worth a proper conversation."
        description="These don't fit neatly into a fixed-price shelf — the scope swings too much project to project. Tell us what you're building and we'll come back with a number within a day."
        className="mb-14"
      />

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
        {onDemandServices.map((s, i) => {
          const Icon = serviceIcons[s.icon];
          return (
            <RevealOnScroll key={s.id} delay={i * 0.08} className="h-full">
              <div className="card flex h-full flex-col gap-5 p-7 sm:p-8">
                <span className="flex h-12 w-12 items-center justify-center rounded-full border border-charcoal/15 text-gold-500 dark:border-ivory/15">
                  <Icon size={20} strokeWidth={1.75} />
                </span>
                <div className="flex flex-1 flex-col gap-2">
                  <h3 className="font-display text-lg text-charcoal dark:text-ivory">{s.title}</h3>
                  <p className="text-sm leading-relaxed text-charcoal-muted dark:text-ivory-muted">
                    {s.desc}
                  </p>
                </div>
                <a
                  href={`https://wa.me/${brand.whatsappNumber}?text=${encodeURIComponent(
                    `Hi MarketMinds — I'd like a quote for ${s.title}.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest2 text-charcoal/60 transition-colors duration-300 hover:text-gold-500 dark:text-ivory/60"
                >
                  Get a quote
                  <ArrowUpRight size={13} />
                </a>
              </div>
            </RevealOnScroll>
          );
        })}
      </div>
    </section>
  );
}
