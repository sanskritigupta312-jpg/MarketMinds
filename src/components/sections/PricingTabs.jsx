import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PricingCard from '../ui/PricingCard';
import { pricingCategories, pricingFootnote } from '../../data/pricing';

export default function PricingTabs() {
  const [activeId, setActiveId] = useState(pricingCategories[0].id);
  const active = pricingCategories.find((c) => c.id === activeId);

  return (
    <section className="section-pad py-4 sm:py-8">
      {/* Tab switcher */}
      <div className="mb-4 flex flex-wrap gap-2 sm:mb-6">
        {pricingCategories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveId(cat.id)}
            aria-pressed={activeId === cat.id}
            className={`rounded-full border px-5 py-2.5 font-mono text-[11px] uppercase tracking-widest2 transition-all duration-300 ease-signature ${
              activeId === cat.id
                ? 'border-gold-500 bg-gold-gradient text-ink'
                : 'border-charcoal/15 text-charcoal-muted hover:border-gold-500/50 hover:text-gold-600 dark:border-ivory/15 dark:text-ivory-muted dark:hover:text-gold-300'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      <p className="mb-10 max-w-lg text-sm text-charcoal-muted dark:text-ivory-muted sm:mb-14">
        {active.tagline}
      </p>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeId}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {active.plans.map((plan, i) => (
            <PricingCard key={plan.name} plan={plan} delay={i * 0.06} />
          ))}
        </motion.div>
      </AnimatePresence>

      <p className="mt-10 font-mono text-[11px] uppercase tracking-widest2 text-charcoal-muted/70 dark:text-ivory-muted/60">
        {pricingFootnote}
      </p>
    </section>
  );
}
