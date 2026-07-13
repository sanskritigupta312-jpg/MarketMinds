import { motion } from 'framer-motion';
import { ArrowUp } from 'lucide-react';
import { useScrollProgress } from '../../hooks/useScrollProgress';

export default function AscentRail() {
  const progress = useScrollProgress();
  const trackHeight = 160; // px

  return (
    <div
      className="hidden xl:flex fixed right-8 top-1/2 -translate-y-1/2 z-40 flex-col items-center gap-3 pointer-events-none"
      aria-hidden="true"
    >
      <span className="font-mono text-[10px] text-charcoal-muted dark:text-ivory-muted tabular-nums">
        {String(Math.round(progress * 100)).padStart(2, '0')}
      </span>

      <div
        className="relative w-px rounded-full bg-charcoal/10 dark:bg-ivory/10"
        style={{ height: trackHeight }}
      >
        <motion.div
          className="absolute bottom-0 left-0 w-px rounded-full bg-gold-gradient"
          style={{ height: `${progress * 100}%` }}
          transition={{ type: 'tween', ease: 'linear', duration: 0.1 }}
        />
        <motion.div
          className="absolute left-1/2 -translate-x-1/2 text-gold-500"
          style={{ bottom: `calc(${progress * 100}% - 7px)` }}
          transition={{ type: 'tween', ease: 'linear', duration: 0.1 }}
        >
          <ArrowUp size={14} strokeWidth={2.5} />
        </motion.div>
      </div>

      <span className="font-mono text-[10px] text-charcoal-muted dark:text-ivory-muted">100</span>
    </div>
  );
}
