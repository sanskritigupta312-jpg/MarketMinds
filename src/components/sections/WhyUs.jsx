import RevealOnScroll from '../ui/RevealOnScroll';
import SectionHeading from '../ui/SectionHeading';
import { differentiators } from '../../data/content';

export default function WhyUs() {
  return (
    <section className="bg-ink/95 text-ivory">
      <div className="section-pad py-24 sm:py-32">
        <SectionHeading
          eyebrow="Why MarketMinds"
          title="Opinionated, on purpose."
          description="We'd rather tell you the truth and lose the project than tell you what you want to hear and lose your trust."
          className="mb-16 sm:mb-20"
          invert
        />

        <div className="grid grid-cols-1 gap-x-12 gap-y-12 sm:grid-cols-2">
          {differentiators.map((d, i) => (
            <RevealOnScroll key={d.title} delay={i * 0.08}>
              <div className="flex gap-6 border-t border-ivory/10 pt-6">
                <span className="font-mono text-sm text-gold-400">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div className="flex flex-col gap-2">
                  <h3 className="font-display text-xl text-ivory">{d.title}</h3>
                  <p className="max-w-md text-sm leading-relaxed text-ivory-muted">{d.desc}</p>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
