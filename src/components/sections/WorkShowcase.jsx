import { Palette, Code2, Megaphone, PenTool } from 'lucide-react';
import RevealOnScroll from '../ui/RevealOnScroll';
import SectionHeading from '../ui/SectionHeading';

const tiles = [
  {
    icon: Palette,
    title: 'Brand systems',
    desc: 'Identity work that holds up from a business card to a billboard — built on a real positioning document, not a mood board.',
    pattern: 'circles',
  },
  {
    icon: Code2,
    title: 'Web experiences',
    desc: 'Interfaces engineered around one goal per page: get the right visitor to take one clear, well-earned action.',
    pattern: 'grid',
  },
  {
    icon: Megaphone,
    title: 'Performance campaigns',
    desc: 'Media plans that treat every rupee of spend as accountable to a number, reviewed and re-cut on a weekly rhythm.',
    pattern: 'waves',
  },
  {
    icon: PenTool,
    title: 'Content systems',
    desc: 'Editorial calendars and short-form video built to sound like one brand voice across every single platform.',
    pattern: 'diagonal',
  },
];

function TilePattern({ pattern }) {
  const common = 'absolute inset-0 opacity-[0.25]';
  if (pattern === 'circles') {
    return (
      <svg className={common} viewBox="0 0 200 200" fill="none">
        <circle cx="160" cy="40" r="70" stroke="url(#g1)" strokeWidth="1" />
        <circle cx="160" cy="40" r="100" stroke="url(#g1)" strokeWidth="1" />
        <defs>
          <linearGradient id="g1" x1="0" y1="0" x2="200" y2="200">
            <stop stopColor="#C9A227" />
            <stop offset="1" stopColor="#C9A227" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    );
  }
  if (pattern === 'grid') {
    return (
      <svg className={common} viewBox="0 0 200 200" fill="none">
        {[0, 1, 2, 3, 4].map((i) => (
          <line key={i} x1={i * 40} y1="0" x2={i * 40} y2="200" stroke="#C9A227" strokeWidth="0.75" />
        ))}
        {[0, 1, 2, 3, 4].map((i) => (
          <line key={`h${i}`} x1="0" y1={i * 40} x2="200" y2={i * 40} stroke="#C9A227" strokeWidth="0.75" />
        ))}
      </svg>
    );
  }
  if (pattern === 'waves') {
    return (
      <svg className={common} viewBox="0 0 200 200" fill="none">
        <path d="M0 60 Q 50 20 100 60 T 200 60" stroke="#C9A227" strokeWidth="1" />
        <path d="M0 100 Q 50 60 100 100 T 200 100" stroke="#C9A227" strokeWidth="1" />
        <path d="M0 140 Q 50 100 100 140 T 200 140" stroke="#C9A227" strokeWidth="1" />
      </svg>
    );
  }
  return (
    <svg className={common} viewBox="0 0 200 200" fill="none">
      {[-40, 0, 40, 80, 120, 160, 200, 240].map((x) => (
        <line key={x} x1={x} y1="0" x2={x - 80} y2="200" stroke="#C9A227" strokeWidth="0.75" />
      ))}
    </svg>
  );
}

export default function WorkShowcase() {
  return (
    <section className="section-pad py-24 sm:py-32">
      <SectionHeading
        eyebrow="What the work looks like"
        title="Four disciplines, one consistent standard."
        description="We're intentionally light on public case studies while client NDAs run their course — ask us in a call and we'll walk you through recent work directly."
        className="mb-16 sm:mb-20"
      />

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        {tiles.map((tile, i) => (
          <RevealOnScroll key={tile.title} delay={i * 0.08}>
            <div className="group relative overflow-hidden rounded-2xl border border-charcoal/10 dark:border-ivory/10 bg-ink p-10">
              <TilePattern pattern={tile.pattern} />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />
              <div className="relative flex flex-col gap-5">
                <span className="flex h-12 w-12 items-center justify-center rounded-full border border-gold-500/30 text-gold-400 transition-colors duration-500 group-hover:bg-gold-500/10">
                  <tile.icon size={20} strokeWidth={1.75} />
                </span>
                <h3 className="font-display text-2xl text-ivory">{tile.title}</h3>
                <p className="max-w-sm text-sm leading-relaxed text-ivory-muted">{tile.desc}</p>
              </div>
            </div>
          </RevealOnScroll>
        ))}
      </div>
    </section>
  );
}
