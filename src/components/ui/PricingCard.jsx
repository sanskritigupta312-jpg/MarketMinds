import { Check, X, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import RevealOnScroll from './RevealOnScroll';

export default function PricingCard({ plan, delay = 0 }) {
  const { name, price, popular, features } = plan;

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

        <div className="flex flex-col gap-1 items-center text-center pb-5 border-b border-charcoal/10 dark:border-ivory/10">
          <h3 className="font-display text-2xl text-charcoal dark:text-ivory mb-3">{name}</h3>
          <div className="flex items-baseline justify-center gap-2">
            <span className="font-display text-4xl text-charcoal dark:text-ivory">{price}</span>
          </div>
        </div>

        <ul className="flex flex-1 flex-col gap-3">
          {features.map((f, idx) => {
            const isExcluded = f.trim().startsWith('✘');
            const label = isExcluded ? f.replace('✘', '').trim() : f;
            return (
              <li
                key={idx}
                className={`flex items-start gap-2.5 text-sm leading-snug border-b border-charcoal/5 dark:border-ivory/5 pb-3 last:border-0 ${
                  !isExcluded
                    ? 'text-charcoal dark:text-ivory'
                    : 'text-charcoal-muted/75 dark:text-ivory-muted/50'
                }`}
              >
                {!isExcluded ? (
                  <Check size={16} className="mt-0.5 shrink-0 text-gold-500" strokeWidth={2.5} />
                ) : (
                  <X size={16} className="mt-0.5 shrink-0 opacity-50" strokeWidth={2.5} />
                )}
                <span className="flex-1 text-center font-medium">{label}</span>
              </li>
            );
          })}
        </ul>

        <div className="mt-auto pt-4">
          <a
            href="tel:+918707858634"
            className={popular ? 'btn-primary w-full justify-center' : 'btn-outline w-full justify-center'}
          >
            Call Now
          </a>
        </div>
      </div>
    </RevealOnScroll>
  );
}
