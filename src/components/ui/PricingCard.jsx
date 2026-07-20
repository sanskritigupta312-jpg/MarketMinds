import { Check, X, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import RevealOnScroll from './RevealOnScroll';

export default function PricingCard({ plan, delay = 0 }) {
  const { name, price, cadence, pages, support, popular, features } = plan;

  return (
    <RevealOnScroll delay={delay} className="h-full">
      <div
        className={`card relative flex h-full flex-col gap-6 p-7 sm:p-8 ${
          popular ? 'border-gold-500/50 shadow-gold' : ''
        }`}
      >
        {popular && (
          <span className="absolute -top-3 left-7 rounded-full bg-gold-gradient px-3 py-1 font-mono text-[10px] uppercase tracking-widest2 text-ink">
            Most booked
          </span>
        )}

        <div className="flex flex-col gap-1">
          <h3 className="font-display text-xl text-charcoal dark:text-ivory">{name}</h3>
          <div className="flex items-baseline gap-2">
            <span className="font-display text-3xl text-charcoal dark:text-ivory">{price}</span>
            <span className="text-xs text-charcoal-muted dark:text-ivory-muted">{cadence}</span>
          </div>
        </div>

        <div className="flex flex-col gap-1 border-y border-charcoal/10 py-4 font-mono text-[11px] uppercase tracking-widest2 text-charcoal-muted dark:border-ivory/10 dark:text-ivory-muted">
          <span>{pages}</span>
          <span>{support}</span>
        </div>

        <ul className="flex flex-1 flex-col gap-3">
          {features.map((f) => (
            <li
              key={f.label}
              className={`flex items-start gap-2.5 text-sm leading-snug ${
                f.included
                  ? 'text-charcoal dark:text-ivory'
                  : 'text-charcoal-muted/60 dark:text-ivory-muted/50 line-through decoration-1'
              }`}
            >
              {f.included ? (
                <Check size={15} className="mt-0.5 shrink-0 text-gold-500" strokeWidth={2} />
              ) : (
                <X size={15} className="mt-0.5 shrink-0 opacity-50" strokeWidth={2} />
              )}
              {f.label}
            </li>
          ))}
        </ul>

        <Link
          to="/contact"
          className={popular ? 'btn-primary w-full' : 'btn-outline w-full'}
        >
          Get started
          <ArrowUpRight size={15} />
        </Link>
      </div>
    </RevealOnScroll>
  );
}
