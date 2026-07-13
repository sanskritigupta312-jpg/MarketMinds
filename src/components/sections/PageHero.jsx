import { motion } from 'framer-motion';

export default function PageHero({ eyebrow, title, description }) {
  return (
    <section className="relative overflow-hidden pt-40 pb-20 sm:pt-48 sm:pb-24">
      <div className="pointer-events-none absolute -top-24 right-0 h-80 w-80 rounded-full bg-gold-500/10 blur-[120px]" />
      <div className="section-pad relative max-w-3xl">
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="eyebrow mb-6 flex items-center gap-3"
        >
          <span className="h-px w-8 bg-gold-500" />
          {eyebrow}
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
          className="text-display-lg font-display font-medium text-balance text-charcoal dark:text-ivory"
        >
          {title}
        </motion.h1>
        {description && (
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 max-w-xl text-base leading-relaxed text-charcoal-muted dark:text-ivory-muted sm:text-lg"
          >
            {description}
          </motion.p>
        )}
      </div>
    </section>
  );
}
