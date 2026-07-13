import { motion, useReducedMotion } from 'framer-motion';

export default function HeroMark() {
  const prefersReduced = useReducedMotion();

  const pathTransition = prefersReduced
    ? { duration: 0 }
    : { duration: 1.8, ease: [0.22, 1, 0.36, 1], delay: 0.4 };

  return (
    <div className="relative mx-auto flex h-[320px] w-[320px] items-center justify-center sm:h-[420px] sm:w-[420px]">
      {/* Ambient glow */}
      <div className="absolute inset-0 rounded-full bg-gold-500/20 blur-[90px]" />

      {/* Slow-spinning orbit ring */}
      <motion.div
        className="absolute inset-6 rounded-full border border-gold-500/20"
        animate={prefersReduced ? {} : { rotate: 360 }}
        transition={{ duration: 40, ease: 'linear', repeat: Infinity }}
      >
        <span className="absolute -top-1.5 left-1/2 h-3 w-3 -translate-x-1/2 rounded-full bg-gold-gradient shadow-gold" />
      </motion.div>

      <motion.div
        className="absolute inset-16 rounded-full border border-dashed border-charcoal/15 dark:border-ivory/15"
        animate={prefersReduced ? {} : { rotate: -360 }}
        transition={{ duration: 55, ease: 'linear', repeat: Infinity }}
      />

      <svg
        viewBox="0 0 200 200"
        className="relative h-3/5 w-3/5"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.circle
          cx="100"
          cy="100"
          r="72"
          stroke="url(#mm-gold)"
          strokeWidth="1.5"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={pathTransition}
        />
        <motion.path
          d="M56 118 L100 74 L124 98 L152 62"
          stroke="url(#mm-gold)"
          strokeWidth="6"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ ...pathTransition, delay: (pathTransition.delay || 0) + 0.3 }}
        />
        <motion.path
          d="M132 60 L154 60 L154 82"
          stroke="url(#mm-gold)"
          strokeWidth="6"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ ...pathTransition, delay: (pathTransition.delay || 0) + 0.9 }}
        />
        <defs>
          <linearGradient id="mm-gold" x1="0" y1="0" x2="200" y2="200" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#F3DFA0" />
            <stop offset="50%" stopColor="#C9A227" />
            <stop offset="100%" stopColor="#8B6F1F" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
