import { Link } from 'react-router-dom';
import { ArrowUpRight, Phone } from 'lucide-react';
import { motion } from 'framer-motion';
import RevealOnScroll from '../ui/RevealOnScroll';
import SectionHeading from '../ui/SectionHeading';
import { webServices } from '../../data/webServices';
import { serviceIcons } from '../../data/serviceIcons';

const ACCENT_COLORS = [
  'from-violet-500/20 to-purple-500/5 border-violet-500/20',
  'from-emerald-500/20 to-teal-500/5 border-emerald-500/20',
  'from-blue-500/20 to-cyan-500/5 border-blue-500/20',
  'from-amber-500/20 to-orange-500/5 border-amber-500/20',
];

const ICON_COLORS = [
  'text-violet-400',
  'text-emerald-400',
  'text-blue-400',
  'text-amber-400',
];

export default function ServicesCardGrid({ showHeading = true }) {
  return (
    <section className="section-pad py-16 sm:py-24">
      {showHeading && (
        <div className="mb-16 flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end">
          <SectionHeading
            eyebrow="Our Services"
            title="Everything your business needs to grow online."
            description="From a stunning website to aggressive digital marketing — four core services, one expert team."
          />
        </div>
      )}

      {/* Stats bar */}
      <RevealOnScroll>
        <div className="mb-16 grid grid-cols-3 gap-4 rounded-2xl border border-charcoal/10 dark:border-ivory/10 bg-paper-raised dark:bg-ink-soft px-6 py-8 sm:px-12 sm:grid-cols-3">
          {[
            { value: '40+', label: 'Categories' },
            { value: '1200+', label: 'Website Themes' },
            { value: '2500+', label: 'Happy Customers' },
          ].map((stat) => (
            <div key={stat.label} className="flex flex-col items-center gap-1 text-center">
              <span className="font-display text-3xl sm:text-4xl font-bold bg-gradient-to-r from-gold-600 to-gold-500 dark:from-gold-400 dark:to-yellow-300 bg-clip-text text-transparent">
                {stat.value}
              </span>
              <span className="text-xs sm:text-sm font-mono uppercase tracking-widest text-charcoal-muted dark:text-ivory-muted">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </RevealOnScroll>

      {/* Service cards — large hero-style layout */}
      <div className="flex flex-col gap-8">
        {webServices.map((service, i) => {
          const Icon = serviceIcons[service.icon] || serviceIcons.Sparkles;
          const accent = ACCENT_COLORS[i % ACCENT_COLORS.length];
          const iconColor = ICON_COLORS[i % ICON_COLORS.length];
          const isEven = i % 2 === 0;

          return (
            <RevealOnScroll key={service.id} delay={i * 0.06}>
              <motion.div
                whileHover={{ y: -3 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className={`group relative overflow-hidden rounded-3xl border bg-gradient-to-br ${accent} backdrop-blur-sm transition-all duration-500 hover:shadow-2xl hover:shadow-gold-500/10`}
              >
                {/* Background glow */}
                <div className={`pointer-events-none absolute ${isEven ? '-top-20 -right-20' : '-top-20 -left-20'} h-64 w-64 rounded-full bg-gold-500/5 blur-3xl transition-all duration-700 group-hover:bg-gold-500/10`} />

                <div className={`relative flex flex-col gap-6 p-7 sm:p-10 lg:flex-row lg:items-center lg:gap-12 ${isEven ? '' : 'lg:flex-row-reverse'}`}>
                  
                  {/* Image */}
                  <div className="relative lg:w-2/5 shrink-0">
                    <div className="overflow-hidden rounded-2xl border border-white/10 aspect-video lg:aspect-[4/3] shadow-xl">
                      <img
                        src={service.image}
                        alt={service.title}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-ink/40 via-transparent to-transparent" />
                    </div>
                    {/* Price badge on image */}
                    <div className="absolute -bottom-3 left-4 rounded-xl bg-gold-gradient px-4 py-2 font-mono text-[11px] uppercase tracking-widest text-ink font-bold shadow-lg">
                      {service.startingPrice}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex flex-1 flex-col gap-5 pt-4 lg:pt-0">
                    {/* Icon + eyebrow */}
                    <div className="flex items-center gap-3">
                      <div className={`flex h-11 w-11 items-center justify-center rounded-full border border-charcoal/15 dark:border-ivory/15 bg-paper-raised dark:bg-ink-soft ${iconColor}`}>
                        <Icon size={20} strokeWidth={1.75} />
                      </div>
                      <span className="font-mono text-[11px] uppercase tracking-widest text-charcoal-muted dark:text-ivory-muted">
                        MarketMinds Service
                      </span>
                    </div>

                    <h3 className="font-display text-3xl font-semibold text-charcoal dark:text-ivory sm:text-4xl">
                      {service.title}
                    </h3>

                    <p className="text-base leading-relaxed text-charcoal-muted dark:text-ivory-muted max-w-prose">
                      {service.short}
                    </p>

                    {/* Sub-service price chips */}
                    <div className="flex flex-wrap gap-2">
                      {service.types.slice(0, 3).map((type) => (
                        <span
                          key={type.title}
                          className="inline-flex items-center gap-1.5 rounded-full border border-charcoal/10 dark:border-ivory/10 bg-paper-raised dark:bg-ink-soft px-3 py-1.5 text-[12px] font-mono text-charcoal-muted dark:text-ivory-muted"
                        >
                          <span className="h-1.5 w-1.5 rounded-full bg-gold-500" />
                          {type.title}
                          {type.price && <span className="text-gold-500 font-semibold ml-1">{type.price}</span>}
                        </span>
                      ))}
                      {service.types.length > 3 && (
                        <span className="inline-flex items-center rounded-full border border-charcoal/10 dark:border-ivory/10 px-3 py-1.5 text-[12px] font-mono text-charcoal-muted dark:text-ivory-muted">
                          +{service.types.length - 3} more
                        </span>
                      )}
                    </div>

                    {/* CTA row */}
                    <div className="flex flex-wrap items-center gap-3 pt-2">
                      <Link
                        to={service.slug}
                        className="inline-flex items-center gap-2 rounded-xl bg-gold-gradient px-5 py-3 font-mono text-[12px] uppercase tracking-widest text-ink font-bold shadow-md transition-all duration-300 hover:shadow-gold-500/30 hover:shadow-lg hover:scale-[1.03]"
                      >
                        View Details
                        <ArrowUpRight size={14} />
                      </Link>
                      <a
                        href="tel:+918707858634"
                        className="inline-flex items-center gap-2 rounded-xl border border-charcoal/15 dark:border-ivory/15 px-5 py-3 font-mono text-[12px] uppercase tracking-widest text-charcoal-muted dark:text-ivory-muted transition-all duration-300 hover:border-gold-500/50 hover:text-gold-500"
                      >
                        <Phone size={13} />
                        +91 870 785 8634
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            </RevealOnScroll>
          );
        })}
      </div>

      {/* Bottom CTA banner */}
      <RevealOnScroll>
        <div className="mt-16 rounded-2xl border border-gold-500/20 bg-gradient-to-r from-gold-500/10 via-amber-500/5 to-gold-500/10 px-8 py-10 text-center">
          <p className="font-display text-2xl font-medium text-charcoal dark:text-ivory mb-2">
            Want to discuss your project?
          </p>
          <p className="text-charcoal-muted dark:text-ivory-muted mb-6">
            Feel free to call us. We are always ready to help you.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="tel:+918707858634"
              className="inline-flex items-center gap-2 rounded-xl bg-gold-gradient px-6 py-3 font-mono text-[12px] uppercase tracking-widest text-ink font-bold shadow-md hover:shadow-gold-500/30 transition-all"
            >
              <Phone size={14} />
              Call Now — +91 870 785 8634
            </a>
            <a
              href="https://wa.me/918707858634?text=Hello%2C%20I%20am%20interested%20in%20your%20services."
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-charcoal/15 dark:border-ivory/15 px-6 py-3 font-mono text-[12px] uppercase tracking-widest text-charcoal dark:text-ivory hover:border-gold-500/50 transition-all"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
}
