import RevealOnScroll from '../ui/RevealOnScroll';
import { services } from '../../data/content';
import { serviceIcons } from '../../data/serviceIcons';

export default function ServiceDetailList() {
  return (
    <section className="section-pad py-4 sm:py-8">
      <div className="flex flex-col">
        {services.map((service) => {
          const Icon = serviceIcons[service.icon] || serviceIcons.Sparkles;
          return (
            <RevealOnScroll key={service.id} delay={0.05}>
              <div
                id={service.id}
                className="grid scroll-mt-28 grid-cols-1 gap-8 border-b border-charcoal/10 dark:border-ivory/10 py-14 lg:grid-cols-[auto_1fr_1fr] lg:gap-16"
              >
                <div className="flex items-center gap-5 lg:flex-col lg:items-start lg:gap-6">
                  <span className="font-mono text-3xl text-gold-500/60">{service.number}</span>
                  <span className="flex h-14 w-14 items-center justify-center rounded-full border border-charcoal/15 dark:border-ivory/15 text-gold-500">
                    <Icon size={22} strokeWidth={1.75} />
                  </span>
                </div>

                <div className="flex flex-col gap-4">
                  <h3 className="font-display text-2xl text-charcoal dark:text-ivory sm:text-3xl">
                    {service.title}
                  </h3>
                  <p className="max-w-md text-sm leading-relaxed text-charcoal-muted dark:text-ivory-muted sm:text-base">
                    {service.long}
                  </p>
                </div>

                <div className="flex flex-col gap-3 lg:pt-1">
                  <span className="font-mono text-[11px] uppercase tracking-widest2 text-charcoal-muted dark:text-ivory-muted">
                    What's included
                  </span>
                  <ul className="flex flex-col gap-2.5">
                    {service.deliverables.map((d) => (
                      <li key={d} className="flex items-center gap-3 text-sm text-charcoal dark:text-ivory">
                        <span className="h-1 w-1 shrink-0 rounded-full bg-gold-500" />
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </RevealOnScroll>
          );
        })}
      </div>
    </section>
  );
}
