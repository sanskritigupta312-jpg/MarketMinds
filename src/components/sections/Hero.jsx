import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRight, ArrowDown } from 'lucide-react';
import HeroMark from './HeroMark';
import MagneticButton from '../ui/MagneticButton';
import { heroContent } from '../../data/content';

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.09, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 sm:pt-40">
      {/* backdrop texture */}
      <div className="pointer-events-none absolute inset-0 bg-noise opacity-[0.03] dark:opacity-[0.06]" />
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[560px] w-[560px] -translate-x-1/2 rounded-full bg-gold-500/10 blur-[140px]" />

      <div className="section-pad relative grid grid-cols-1 items-center gap-16 pb-20 lg:grid-cols-[1.15fr_0.85fr] lg:gap-8 lg:pb-28">
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.span variants={item} className="eyebrow mb-6 flex items-center gap-3">
            <span className="h-px w-8 bg-gold-500" />
            {heroContent.eyebrow}
          </motion.span>

          <h1 className="text-display-xl font-display font-medium text-charcoal dark:text-ivory">
            <motion.span variants={item} className="block text-balance">
              {heroContent.headlineTop}
            </motion.span>
            <motion.span variants={item} className="block italic gold-text text-balance">
              {heroContent.headlineGold}
            </motion.span>
            <motion.span variants={item} className="block text-balance">
              {heroContent.headlineBottom}
            </motion.span>
          </h1>

          <motion.p
            variants={item}
            className="mt-8 max-w-lg text-base leading-relaxed text-charcoal-muted dark:text-ivory-muted sm:text-lg"
          >
            {heroContent.sub}
          </motion.p>

          <motion.div variants={item} className="mt-10 flex flex-wrap items-center gap-5">
            <MagneticButton>
              <Link to={heroContent.ctaPrimary.to} className="btn-primary">
                {heroContent.ctaPrimary.label}
                <ArrowUpRight size={16} />
              </Link>
            </MagneticButton>
            <Link to={heroContent.ctaSecondary.to} className="btn-outline">
              {heroContent.ctaSecondary.label}
            </Link>
          </motion.div>

          <motion.div variants={item} className="mt-16 hidden items-center gap-3 text-charcoal-muted dark:text-ivory-muted sm:flex">
            <ArrowDown size={14} className="animate-bounce text-gold-500" />
            <span className="font-mono text-[11px] uppercase tracking-widest2">Scroll to explore</span>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
        >
          <HeroMark />
        </motion.div>
      </div>
    </section>
  );
}
