import { Quote } from 'lucide-react';
import RevealOnScroll from '../ui/RevealOnScroll';
import SectionHeading from '../ui/SectionHeading';
import { testimonials } from '../../data/content';

export default function Testimonials() {
  return (
    <section className="section-pad py-24 sm:py-32">
      <SectionHeading
        eyebrow="Kind words"
        title="What it's like to work with us."
        align="center"
        className="mb-16 sm:mb-20"
      />

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {testimonials.map((t, i) => (
          <RevealOnScroll key={i} delay={i * 0.1} className="h-full">
            <figure className="card flex h-full flex-col gap-6 p-8">
              <Quote className="text-gold-500/50" size={28} strokeWidth={1.5} />
              <blockquote className="flex-1 text-base leading-relaxed text-charcoal dark:text-ivory">
                “{t.quote}”
              </blockquote>
              <figcaption className="border-t border-charcoal/10 dark:border-ivory/10 pt-4">
                <p className="font-display text-base text-charcoal dark:text-ivory">{t.name}</p>
                <p className="text-xs text-charcoal-muted dark:text-ivory-muted">{t.company}</p>
              </figcaption>
            </figure>
          </RevealOnScroll>
        ))}
      </div>
    </section>
  );
}
