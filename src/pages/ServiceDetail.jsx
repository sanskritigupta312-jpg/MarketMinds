import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, CheckCircle2, ArrowUpRight, ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PageTransition from '../components/layout/PageTransition';
import CTASection from '../components/sections/CTASection';
import RevealOnScroll from '../components/ui/RevealOnScroll';
import { webServices } from '../data/webServices';
import { serviceIcons } from '../data/serviceIcons';
import PricingCard from '../components/ui/PricingCard';

function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-charcoal/10 dark:border-ivory/10">
      <button
        onClick={() => setOpen(v => !v)}
        className="flex w-full items-center justify-between py-5 text-left"
      >
        <span className="font-display text-base text-charcoal dark:text-ivory sm:text-lg">{q}</span>
        {open ? (
          <ChevronUp size={18} className="shrink-0 text-gold-500" />
        ) : (
          <ChevronDown size={18} className="shrink-0 text-charcoal-muted dark:text-ivory-muted" />
        )}
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-sm leading-relaxed text-charcoal-muted dark:text-ivory-muted sm:text-base">
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function ServiceDetail() {
  const { slug } = useParams();
  const service = webServices.find(s => s.id === slug);

  if (!service) return <Navigate to="/services" replace />;

  const Icon = serviceIcons[service.icon] || serviceIcons.Sparkles;

  return (
    <PageTransition>
      {/* ── Hero ── */}
      <section className="relative overflow-hidden pt-36 pb-16 sm:pt-44 sm:pb-20">
        <div className="pointer-events-none absolute -top-24 right-0 h-96 w-96 rounded-full bg-gold-500/10 blur-[140px]" />
        <div className="section-pad relative">
          {/* Back link */}
          <Link
            to="/services"
            className="mb-8 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest text-charcoal-muted dark:text-ivory-muted hover:text-gold-500 transition-colors"
          >
            <ArrowLeft size={14} />
            All Services
          </Link>

          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="eyebrow mb-6 flex items-center gap-3"
          >
            <span className="h-px w-8 bg-gold-500" />
            {service.title}
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="text-display-lg font-display font-medium text-balance text-charcoal dark:text-ivory max-w-3xl"
          >
            {service.tagline}
          </motion.h1>

          {service.startingPrice && (
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.08 }}
              className="mt-6 inline-block rounded-xl border border-gold-500/30 bg-gold-500/10 px-5 py-2 font-mono text-sm uppercase tracking-widest text-gold-500"
            >
              <strong>{service.startingPrice}</strong>
            </motion.div>
          )}

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-6 max-w-2xl text-base leading-relaxed text-charcoal-muted dark:text-ivory-muted sm:text-lg whitespace-pre-line"
          >
            {service.overview}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mt-8 flex flex-wrap gap-4"
          >
            <Link to="/contact" className="btn-primary">
              Start a Project
              <ArrowUpRight size={15} />
            </Link>
            <Link to="/pricing" className="btn-outline">
              View Pricing
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── Hero Image ── */}
      <div className="section-pad mb-16">
        <RevealOnScroll>
          <div className="overflow-hidden rounded-2xl border border-charcoal/10 dark:border-ivory/10 h-72 sm:h-96">
            <img
              src={service.image}
              alt={service.title}
              className="h-full w-full object-cover"
            />
          </div>
        </RevealOnScroll>
      </div>

      {/* ── Service Types Grid ── */}
      <section className="section-pad py-12 sm:py-20">
        <RevealOnScroll>
          <div className="mb-12 flex items-center gap-4">
            <span className="flex h-12 w-12 items-center justify-center rounded-full border border-charcoal/15 dark:border-ivory/15 text-gold-500">
              <Icon size={20} strokeWidth={1.75} />
            </span>
            <div>
              <p className="eyebrow">What We Offer</p>
              <h2 className="font-display text-2xl font-medium text-charcoal dark:text-ivory sm:text-3xl">
                Types of {service.title}
              </h2>
            </div>
          </div>
        </RevealOnScroll>

        <div className={`grid grid-cols-1 gap-6 sm:grid-cols-2 ${service.types.length === 4 ? 'lg:grid-cols-4' : 'lg:grid-cols-3'}`}>
          {service.types.map((type, i) => (
            <PricingCard
              key={type.title}
              delay={i * 0.08}
              plan={{
                name: type.title,
                price: type.price,
                popular: type.popular || type.title.includes('Full SEO') || type.title.includes('SMO') || type.title.includes('Dynamic'),
                features: type.features || [],
              }}
            />
          ))}
        </div>
      </section>

      {/* ── Deliverables ── */}
      <section className="section-pad py-12 sm:py-16">
        <RevealOnScroll>
          <div className="rounded-2xl border border-gold-500/20 bg-ink px-8 py-12 sm:px-16">
            <p className="eyebrow mb-4 !text-gold-400 flex items-center gap-3">
              <span className="h-px w-8 bg-gold-500" />
              What's Included
            </p>
            <h2 className="font-display text-2xl font-medium text-ivory mb-8 sm:text-3xl">
              Every {service.title} engagement includes:
            </h2>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {service.deliverables.map((d, i) => (
                <motion.div
                  key={d}
                  initial={{ opacity: 0, x: -8 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05, duration: 0.4 }}
                  className="flex items-center gap-3 text-sm text-ivory"
                >
                  <span className="h-2 w-2 shrink-0 rounded-full bg-gold-500" />
                  {d}
                </motion.div>
              ))}
            </div>
          </div>
        </RevealOnScroll>
      </section>

      {/* ── FAQ ── */}
      <section className="section-pad py-12 sm:py-20">
        <RevealOnScroll>
          <p className="eyebrow mb-4 flex items-center gap-3">
            <span className="h-px w-8 bg-gold-500" />
            Common Questions
          </p>
          <h2 className="font-display text-2xl font-medium text-charcoal dark:text-ivory mb-8 sm:text-3xl">
            {service.title} FAQs
          </h2>
        </RevealOnScroll>
        <div className="max-w-3xl">
          {service.faqs.map(faq => (
            <RevealOnScroll key={faq.q} delay={0.05}>
              <FAQItem q={faq.q} a={faq.a} />
            </RevealOnScroll>
          ))}
        </div>
      </section>

      <CTASection />
    </PageTransition>
  );
}
