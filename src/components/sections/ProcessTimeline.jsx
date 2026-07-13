import RevealOnScroll from '../ui/RevealOnScroll';
import SectionHeading from '../ui/SectionHeading';
import { process } from '../../data/content';

export default function ProcessTimeline() {
  return (
    <section className="section-pad py-24 sm:py-32">
      <SectionHeading
        eyebrow="How we work"
        title="Five stages. No skipped steps."
        description="Every engagement moves through the same disciplined sequence — it's slower on day one and faster for every day after."
        className="mb-16 sm:mb-20"
      />

      <div className="relative">
        <div className="absolute left-[27px] top-2 bottom-2 hidden w-px bg-gradient-to-b from-gold-500/60 via-charcoal/15 to-transparent dark:via-ivory/15 sm:block" />

        <div className="flex flex-col">
          {process.map((step, i) => (
            <RevealOnScroll key={step.number} delay={i * 0.08}>
              <div className="group flex gap-6 border-b border-charcoal/10 dark:border-ivory/10 py-8 last:border-none sm:gap-10">
                <div className="relative flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-charcoal/15 dark:border-ivory/15 bg-paper dark:bg-ink font-mono text-sm text-gold-500 transition-colors duration-500 group-hover:border-gold-500 group-hover:bg-gold-500/10">
                  {step.number}
                </div>
                <div className="flex flex-1 flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between sm:gap-10">
                  <h3 className="font-display text-2xl text-charcoal dark:text-ivory sm:w-56 sm:shrink-0">
                    {step.title}
                  </h3>
                  <p className="max-w-xl text-sm leading-relaxed text-charcoal-muted dark:text-ivory-muted sm:text-base">
                    {step.desc}
                  </p>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
