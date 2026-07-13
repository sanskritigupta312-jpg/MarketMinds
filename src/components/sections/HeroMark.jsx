import { motion, useReducedMotion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { process } from '../../data/content';

// The hero's signature visual — styled like a real page pulled from a
// project brief, previewing the five-stage process (see /work for the
// full breakdown). Numbering here is honest: it's a real sequence, not
// decoration, and it's the one place the hero backs up "earned, not
// bought" with something concrete instead of an abstract graphic.
export default function HeroMark() {
  const prefersReduced = useReducedMotion();

  return (
    <div className="relative mx-auto w-full max-w-sm">
      {/* second sheet peeking out behind — a physical-page cue, not a glow */}
      <div
        aria-hidden="true"
        className="absolute inset-0 rounded-2xl border border-charcoal/10 bg-paper-raised/70 dark:border-ivory/10 dark:bg-ink-raised/70"
        style={{ transform: 'rotate(-4deg) translateY(8px)' }}
      />

      <motion.div
        initial={prefersReduced ? { opacity: 0 } : { opacity: 0, rotate: -3, y: 18 }}
        animate={prefersReduced ? { opacity: 1 } : { opacity: 1, rotate: -1.25, y: 0 }}
        whileHover={prefersReduced ? {} : { rotate: 0, y: -2 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.35 }}
        className="card relative flex flex-col gap-6 p-6 sm:p-7"
      >
        <div className="flex items-center justify-between">
          <span className="eyebrow flex items-center gap-2">
            <span className="h-px w-5 bg-gold-500" />
            Our approach
          </span>
          <span className="font-mono text-[10px] uppercase tracking-widest2 text-charcoal-muted dark:text-ivory-muted">
            5 stages
          </span>
        </div>

        <div className="relative flex flex-col">
          <div className="absolute left-[13px] top-2 bottom-2 w-px bg-gradient-to-b from-gold-500/70 via-charcoal/15 to-transparent dark:via-ivory/15" />
          {process.map((step, i) => (
            <motion.div
              key={step.number}
              initial={prefersReduced ? { opacity: 0 } : { opacity: 0, x: -8 }}
              animate={prefersReduced ? { opacity: 1 } : { opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.6 + i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="relative flex items-center gap-4 py-2.5"
            >
              <span
                className={`relative z-10 flex h-[26px] w-[26px] shrink-0 items-center justify-center rounded-full font-mono text-[10px] ${
                  i === 0
                    ? 'bg-gold-gradient text-ink shadow-gold'
                    : 'border border-charcoal/15 bg-paper text-charcoal-muted dark:border-ivory/15 dark:bg-ink dark:text-ivory-muted'
                }`}
              >
                {step.number}
              </span>
              <span className="font-display text-base text-charcoal dark:text-ivory">{step.title}</span>
            </motion.div>
          ))}
        </div>

        <Link
          to="/work"
          className="group flex items-center justify-between border-t border-charcoal/10 pt-5 dark:border-ivory/10"
        >
          <span className="font-mono text-[11px] uppercase tracking-widest2 text-charcoal dark:text-ivory transition-colors duration-300 group-hover:text-gold-600 dark:group-hover:text-gold-400">
            See the full breakdown
          </span>
          <ArrowUpRight
            size={15}
            className="text-gold-500 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </Link>
      </motion.div>
    </div>
  );
}