import PricingCard from '../ui/PricingCard';
import { pricingCategories, pricingFootnote } from '../../data/pricing';

export default function PricingTabs() {
  return (
    <div className="flex flex-col gap-24 py-8">
      {pricingCategories.map((cat, idx) => (
        <section key={cat.id} className="section-pad">
          <div className="mb-12 text-center">
            <h2 className="font-display text-4xl text-charcoal dark:text-ivory mb-4">
              {cat.label}
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-charcoal-muted dark:text-ivory-muted">
              {cat.tagline}
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {cat.plans.map((plan, i) => (
              <PricingCard key={plan.name} plan={plan} delay={i * 0.06} />
            ))}
          </div>
        </section>
      ))}

      <section className="section-pad">
        <p className="mt-10 font-mono text-[11px] uppercase tracking-widest2 text-center text-charcoal-muted/70 dark:text-ivory-muted/60">
          {pricingFootnote}
        </p>
      </section>
    </div>
  );
}
