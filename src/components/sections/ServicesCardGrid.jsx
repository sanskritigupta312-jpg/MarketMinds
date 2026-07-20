import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import RevealOnScroll from '../ui/RevealOnScroll';
import SectionHeading from '../ui/SectionHeading';
import { webServices } from '../../data/webServices';

export default function ServicesCardGrid({ showHeading = true }) {
  return (
    <section className="section-pad py-16 sm:py-24">
      {showHeading && (
        <div className="mb-14 flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end">
          <SectionHeading
            eyebrow="Our Services"
            title="Everything your business needs to grow online."
            description="From a stunning website to aggressive digital marketing — six core services, one expert team."
          />
        </div>
      )}

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {webServices.map((service, i) => (
          <RevealOnScroll key={service.id} delay={(i % 3) * 0.08}>
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="group flex flex-col overflow-hidden rounded-2xl border border-charcoal/10 dark:border-ivory/10 bg-paper-raised dark:bg-ink-soft shadow-sm hover:shadow-xl hover:shadow-gold-500/5 hover:border-gold-500/30 transition-all duration-500"
            >
              {/* Card image */}
              <div className="relative h-52 overflow-hidden bg-ink">
                <img
                  src={service.image}
                  alt={service.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent" />
              </div>

              {/* Card body */}
              <div className="flex flex-1 flex-col gap-4 p-6">
                <h3 className="font-display text-xl font-medium text-charcoal dark:text-ivory">
                  {service.title}
                </h3>
                <p className="flex-1 text-sm leading-relaxed text-charcoal-muted dark:text-ivory-muted">
                  {service.short}
                </p>

                {/* CTA button */}
                <Link
                  to={service.slug}
                  className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-xl border border-gold-500 px-5 py-3 font-mono text-[12px] uppercase tracking-widest text-gold-500 transition-all duration-300 hover:bg-gold-500 hover:text-ink"
                >
                  <strong>{service.title}</strong>
                  <ArrowUpRight size={14} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </div>
            </motion.div>
          </RevealOnScroll>
        ))}
      </div>
    </section>
  );
}
