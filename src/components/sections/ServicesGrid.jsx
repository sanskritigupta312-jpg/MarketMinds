import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import RevealOnScroll from '../ui/RevealOnScroll';
import SectionHeading from '../ui/SectionHeading';
import { services as allServices } from '../../data/content';
import { serviceIcons } from '../../data/serviceIcons';

export default function ServicesGrid({ limit, showHeading = true, showCta = true }) {
  const list = limit ? allServices.slice(0, limit) : allServices;

  return (
    <section className="section-pad py-24 sm:py-32">
      {showHeading && (
        <div className="mb-16 flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end">
          <SectionHeading
            eyebrow="What we do"
            title="Full-service digital marketing, done right."
            description="Nine disciplines, one senior team — from SEO and paid advertising to social media marketing, lead generation and web development in Lucknow and beyond."
          />
          {showCta && (
            <RevealOnScroll delay={0.15}>
              <Link
                to="/services"
                className="btn-outline shrink-0"
              >
                All services
                <ArrowUpRight size={15} />
              </Link>
            </RevealOnScroll>
          )}
        </div>
      )}

      <div className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-charcoal/10 dark:border-ivory/10 bg-charcoal/10 dark:bg-ivory/10 sm:grid-cols-2 lg:grid-cols-3">
        {list.map((service, i) => {
          const Icon = serviceIcons[service.icon] || serviceIcons.Sparkles;
          return (
            <RevealOnScroll key={service.id} delay={(i % 3) * 0.08} className="h-full">
              <Link
                to="/services"
                className="group relative flex h-full flex-col gap-6 bg-paper-raised dark:bg-ink-soft p-8 transition-colors duration-500 hover:bg-paper-soft dark:hover:bg-ink-raised sm:p-10"
              >
                <div className="flex items-center justify-between">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full border border-charcoal/15 dark:border-ivory/15 text-gold-500 transition-colors duration-500 group-hover:border-gold-500 group-hover:bg-gold-500/10">
                    <Icon size={20} strokeWidth={1.75} />
                  </span>
                  <span className="font-mono text-xs text-charcoal-muted dark:text-ivory-muted">
                    {service.number}
                  </span>
                </div>

                <div className="flex flex-1 flex-col gap-3">
                  <h3 className="font-display text-xl text-charcoal dark:text-ivory">
                    {service.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-charcoal-muted dark:text-ivory-muted">
                    {service.short}
                  </p>
                </div>

                <span className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest2 text-charcoal/50 dark:text-ivory/50 transition-colors duration-500 group-hover:text-gold-500">
                  Learn more
                  <ArrowUpRight size={13} className="transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </span>
              </Link>
            </RevealOnScroll>
          );
        })}
      </div>
    </section>
  );
}
