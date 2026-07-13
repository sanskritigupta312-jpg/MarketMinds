import { motion, useReducedMotion } from 'framer-motion';

/**
 * Wraps children and animates them in on scroll.
 * direction: 'up' | 'down' | 'left' | 'right' | 'none'
 */
export default function RevealOnScroll({
  children,
  direction = 'up',
  delay = 0,
  duration = 0.7,
  distance = 28,
  className = '',
  once = true,
  amount = 0.2,
  as: Component = motion.div,
}) {
  const prefersReduced = useReducedMotion();

  const offsets = {
    up: { y: distance },
    down: { y: -distance },
    left: { x: distance },
    right: { x: -distance },
    none: {},
  };

  const initial = prefersReduced
    ? { opacity: 0 }
    : { opacity: 0, ...offsets[direction] };

  const animate = prefersReduced
    ? { opacity: 1 }
    : { opacity: 1, x: 0, y: 0 };

  return (
    <Component
      initial={initial}
      whileInView={animate}
      viewport={{ once, amount }}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </Component>
  );
}
