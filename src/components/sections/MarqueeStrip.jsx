import { heroContent } from '../../data/content';

export default function MarqueeStrip() {
  const track = [...heroContent.marquee, ...heroContent.marquee];

  return (
    <div className="relative border-y border-charcoal/10 dark:border-ivory/10 bg-paper-soft/60 dark:bg-ink-soft/60 py-5">
      <div className="mask-fade-x overflow-hidden">
        <div className="flex w-max animate-marquee items-center">
          {track.map((label, i) => (
            <span key={i} className="flex items-center gap-10 whitespace-nowrap pr-10">
              <span className="font-mono text-xs uppercase tracking-widest2 text-charcoal-muted dark:text-ivory-muted">
                {label}
              </span>
              <span className="h-1 w-1 rounded-full bg-gold-500" />
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
