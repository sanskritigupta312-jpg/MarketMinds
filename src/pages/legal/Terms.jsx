import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  FileText,
  ShieldCheck,
  ArrowLeft,
  ArrowUpRight,
  RotateCcw,
  Briefcase,
  Layers,
  CreditCard,
} from 'lucide-react';
import PageTransition from '../../components/layout/PageTransition';
import Seo from '../../components/Seo';
import { brand } from '../../data/content';

const sections = [
  { id: 'scope', number: '01', title: 'Scope & Deliverables' },
  { id: 'ip', number: '02', title: 'Intellectual Property' },
  { id: 'collaboration', number: '03', title: 'Client Collaboration' },
  { id: 'payment', number: '04', title: 'Invoicing & Payments' },
  { id: 'liability', number: '05', title: 'Warranties & Liability' },
  { id: 'termination', number: '06', title: 'Termination Terms' },
  { id: 'governing', number: '07', title: 'Governing Law' },
  { id: 'contact', number: '08', title: 'Contract Inquiries' },
];

export default function Terms() {
  const [activeSection, setActiveSection] = useState('scope');

  function scrollToSection(id) {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -100;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  }

  return (
    <PageTransition>
      <Seo
        title="Terms & Conditions"
        description={`Terms and Conditions for ${brand.name}. Understand our engagement models, deliverables, IP rights, and service agreements.`}
        path="/terms"
      />

      {/* ── Page Header ── */}
      <section className="relative overflow-hidden pt-36 pb-14 sm:pt-44 sm:pb-20 border-b border-charcoal/10 dark:border-ivory/10">
        <div className="pointer-events-none absolute -top-24 right-0 h-96 w-96 rounded-full bg-gold-500/10 blur-[140px]" />
        <div className="section-pad max-w-6xl mx-auto">
          {/* Back Navigation */}
          <Link
            to="/"
            className="mb-6 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest text-charcoal-muted dark:text-ivory-muted hover:text-gold-500 transition-colors"
          >
            <ArrowLeft size={14} />
            Back to Home
          </Link>

          <div className="flex flex-wrap items-center gap-3 mb-5">
            <span className="eyebrow flex items-center gap-2">
              <span className="h-px w-6 bg-gold-500" />
              Legal &amp; Compliance
            </span>
            <span className="rounded-full bg-gold-500/10 border border-gold-500/30 px-3 py-0.5 font-mono text-[10px] uppercase tracking-widest text-gold-600 dark:text-gold-400">
              Client Agreement
            </span>
          </div>

          <h1 className="text-display-md sm:text-display-lg font-display font-medium text-charcoal dark:text-ivory max-w-3xl">
            Terms &amp; Conditions
          </h1>

          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-charcoal-muted dark:text-ivory-muted sm:text-base">
            These terms govern every client engagement, proposal, and deliverable produced by{' '}
            <strong>{brand.name}</strong>. We write our terms in plain language with no hidden gotchas.
          </p>

          {/* Quick Metadata Pill Bar */}
          <div className="mt-8 flex flex-wrap items-center gap-4 sm:gap-6 text-xs text-charcoal-muted dark:text-ivory-muted">
            <div className="flex items-center gap-2">
              <FileText size={15} className="text-gold-500 shrink-0" />
              <span>Effective: <strong>October 2026</strong></span>
            </div>
            <span className="hidden sm:inline text-charcoal/20 dark:text-ivory/20">•</span>
            <div>Standard: <strong>Master Services Agreement (MSA)</strong></div>
            <span className="hidden sm:inline text-charcoal/20 dark:text-ivory/20">•</span>
            <div>Status: <strong>Legally Binding</strong></div>
          </div>
        </div>
      </section>

      {/* ── Main Layout (Sidebar + Content) ── */}
      <section className="section-pad py-12 sm:py-20 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[260px_1fr]">
          {/* Sticky Sidebar Navigation */}
          <aside className="lg:sticky lg:top-28 lg:h-fit">
            <div className="card p-5 sm:p-6 border border-charcoal/10 dark:border-ivory/10">
              <p className="font-mono text-[10px] uppercase tracking-widest2 text-charcoal-muted dark:text-ivory-muted mb-4">
                Quick Navigation
              </p>
              <nav className="flex flex-row flex-wrap gap-2 lg:flex-col lg:gap-1.5">
                {sections.map((sec) => (
                  <button
                    key={sec.id}
                    onClick={() => scrollToSection(sec.id)}
                    className={`flex items-center gap-2 rounded-lg px-3 py-2 text-left text-xs transition-all duration-200 ${
                      activeSection === sec.id
                        ? 'bg-gold-500/15 text-gold-600 dark:text-gold-400 font-medium'
                        : 'text-charcoal-muted dark:text-ivory-muted hover:bg-charcoal/5 dark:hover:bg-ivory/5 hover:text-charcoal dark:hover:text-ivory'
                    }`}
                  >
                    <span className="font-mono text-[10px] opacity-60">{sec.number}</span>
                    <span className="truncate">{sec.title}</span>
                  </button>
                ))}
              </nav>

              <div className="mt-6 pt-6 border-t border-charcoal/10 dark:border-ivory/10 hidden lg:block">
                <p className="text-[11px] text-charcoal-muted dark:text-ivory-muted leading-relaxed">
                  Need a custom Master Services Agreement or NDA?
                </p>
                <Link
                  to="/contact"
                  className="mt-2 inline-flex items-center gap-1.5 text-xs text-gold-600 dark:text-gold-400 hover:underline"
                >
                  Request custom agreement <ArrowUpRight size={12} />
                </Link>
              </div>
            </div>
          </aside>

          {/* ── Detailed Terms Sections ── */}
          <div className="space-y-12 sm:space-y-16">
            {/* Section 01 */}
            <article id="scope" className="scroll-mt-32 space-y-4">
              <div className="flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gold-500/10 font-mono text-xs font-semibold text-gold-500 border border-gold-500/20">
                  01
                </span>
                <h2 className="font-display text-xl sm:text-2xl font-medium text-charcoal dark:text-ivory">
                  Scope &amp; Deliverables
                </h2>
              </div>
              <p className="text-sm leading-relaxed text-charcoal-muted dark:text-ivory-muted">
                Every client engagement begins with a defined Scope of Work (SOW) or written proposal that specifies deliverables, milestone dates, and investment tiers. Work outside the written scope will be estimated and billed as an addendum.
              </p>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 pt-2">
                <div className="card p-5 border border-charcoal/10 dark:border-ivory/10">
                  <div className="flex items-center gap-2 text-gold-500 text-xs font-semibold uppercase font-mono mb-2">
                    <Briefcase size={14} />
                    Fixed Milestone SOW
                  </div>
                  <p className="text-xs text-charcoal-muted dark:text-ivory-muted leading-relaxed">
                    Designed for website builds, brand identities, and standalone strategy sprints with fixed timelines and stage approvals.
                  </p>
                </div>
                <div className="card p-5 border border-charcoal/10 dark:border-ivory/10">
                  <div className="flex items-center gap-2 text-gold-500 text-xs font-semibold uppercase font-mono mb-2">
                    <Layers size={14} />
                    Monthly Growth Retainers
                  </div>
                  <p className="text-xs text-charcoal-muted dark:text-ivory-muted leading-relaxed">
                    Dedicated hours for ongoing SEO execution, performance marketing, content production, and conversion rate optimization.
                  </p>
                </div>
              </div>
            </article>

            {/* Section 02 */}
            <article id="ip" className="scroll-mt-32 space-y-4">
              <div className="flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gold-500/10 font-mono text-xs font-semibold text-gold-500 border border-gold-500/20">
                  02
                </span>
                <h2 className="font-display text-xl sm:text-2xl font-medium text-charcoal dark:text-ivory">
                  Intellectual Property &amp; Asset Ownership
                </h2>
              </div>
              <p className="text-sm leading-relaxed text-charcoal-muted dark:text-ivory-muted">
                Ownership of deliverables is cleanly structured upon payment completion:
              </p>
              <ul className="space-y-2.5 text-sm text-charcoal-muted dark:text-ivory-muted pl-1">
                <li className="flex items-start gap-2.5">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-gold-500 shrink-0" />
                  <span><strong>100% Client Ownership:</strong> Once final invoice balances are settled, you own all custom design files, brand marks, written copy, and proprietary website source code created for your project.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-gold-500 shrink-0" />
                  <span><strong>Agency Portfolio Rights:</strong> MarketMinds reserves the right to display approved final designs, anonymized campaign metrics, and case studies in our public studio portfolio, unless restricted under an active NDA.</span>
                </li>
              </ul>
            </article>

            {/* Section 03 */}
            <article id="collaboration" className="scroll-mt-32 space-y-4">
              <div className="flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gold-500/10 font-mono text-xs font-semibold text-gold-500 border border-gold-500/20">
                  03
                </span>
                <h2 className="font-display text-xl sm:text-2xl font-medium text-charcoal dark:text-ivory">
                  Client Collaboration &amp; Approvals
                </h2>
              </div>
              <p className="text-sm leading-relaxed text-charcoal-muted dark:text-ivory-muted">
                High-performance growth relies on two-way partnership. To keep projects on schedule:
              </p>
              <ul className="space-y-2 text-sm text-charcoal-muted dark:text-ivory-muted pl-4 list-disc">
                <li>You agree to provide necessary assets (logos, high-res photos, ad account credentials, product copy) in a timely manner.</li>
                <li>Design and copy drafts include designated review cycles. Feedback should be consolidated to avoid fragmented revisions.</li>
                <li>Delays in client review beyond 14 business days may result in rescheduling the delivery milestone.</li>
              </ul>
            </article>

            {/* Section 04 */}
            <article id="payment" className="scroll-mt-32 space-y-4">
              <div className="flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gold-500/10 font-mono text-xs font-semibold text-gold-500 border border-gold-500/20">
                  04
                </span>
                <h2 className="font-display text-xl sm:text-2xl font-medium text-charcoal dark:text-ivory">
                  Invoicing &amp; Payment Terms
                </h2>
              </div>
              <div className="space-y-3 pt-1">
                <div className="card p-4 border border-charcoal/10 dark:border-ivory/10 flex items-start gap-3">
                  <CreditCard size={18} className="text-gold-500 shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-sm font-semibold text-charcoal dark:text-ivory">Milestone Invoices</h3>
                    <p className="text-xs text-charcoal-muted dark:text-ivory-muted leading-relaxed">
                      Typically billed 50% upfront to reserve sprint capacity, with remaining balance due upon staged milestone approvals or final live launch.
                    </p>
                  </div>
                </div>
                <div className="card p-4 border border-charcoal/10 dark:border-ivory/10 flex items-start gap-3">
                  <RotateCcw size={18} className="text-gold-500 shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-sm font-semibold text-charcoal dark:text-ivory">Retainer Invoices</h3>
                    <p className="text-xs text-charcoal-muted dark:text-ivory-muted leading-relaxed">
                      Due at the beginning of each calendar service cycle. Payment terms are strictly net 7 days unless mutually agreed in writing.
                    </p>
                  </div>
                </div>
              </div>
            </article>

            {/* Section 05 */}
            <article id="liability" className="scroll-mt-32 space-y-4">
              <div className="flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gold-500/10 font-mono text-xs font-semibold text-gold-500 border border-gold-500/20">
                  05
                </span>
                <h2 className="font-display text-xl sm:text-2xl font-medium text-charcoal dark:text-ivory">
                  Warranties &amp; Limitation of Liability
                </h2>
              </div>
              <p className="text-sm leading-relaxed text-charcoal-muted dark:text-ivory-muted">
                We execute all strategy, design, and code with meticulous craft. However, digital marketing metrics (such as search ranking algorithms, ad auction costs, and platform policy shifts) are governed by external platforms (Google, Meta, Apple).
              </p>
              <div className="p-4 rounded-xl bg-gold-500/10 border border-gold-500/20 text-xs text-charcoal dark:text-ivory leading-relaxed">
                <strong>Liability Cap:</strong> To the maximum extent permitted under applicable law, MarketMinds&rsquo; total aggregate liability arising out of or related to any project engagement is strictly limited to the total fees received by the agency for that specific project or the immediately preceding month of retainer services.
              </div>
            </article>

            {/* Section 06 */}
            <article id="termination" className="scroll-mt-32 space-y-4">
              <div className="flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gold-500/10 font-mono text-xs font-semibold text-gold-500 border border-gold-500/20">
                  06
                </span>
                <h2 className="font-display text-xl sm:text-2xl font-medium text-charcoal dark:text-ivory">
                  Termination &amp; Offboarding
                </h2>
              </div>
              <p className="text-sm leading-relaxed text-charcoal-muted dark:text-ivory-muted">
                Either party may terminate a monthly retainer by providing written notice prior to the start of the subsequent billing cycle. Upon termination, all completed assets, credentials, and documentation are handed over in an orderly offboarding transition.
              </p>
            </article>

            {/* Section 07 */}
            <article id="governing" className="scroll-mt-32 space-y-4">
              <div className="flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gold-500/10 font-mono text-xs font-semibold text-gold-500 border border-gold-500/20">
                  07
                </span>
                <h2 className="font-display text-xl sm:text-2xl font-medium text-charcoal dark:text-ivory">
                  Governing Law &amp; Dispute Resolution
                </h2>
              </div>
              <p className="text-sm leading-relaxed text-charcoal-muted dark:text-ivory-muted">
                These terms are governed by and construed in accordance with the laws of India. Any disputes arising in connection with these terms shall first be addressed through good-faith mutual consultation, failing which the courts of India shall have jurisdiction.
              </p>
            </article>

            {/* Section 08 */}
            <article id="contact" className="scroll-mt-32 space-y-4">
              <div className="flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gold-500/10 font-mono text-xs font-semibold text-gold-500 border border-gold-500/20">
                  08
                </span>
                <h2 className="font-display text-xl sm:text-2xl font-medium text-charcoal dark:text-ivory">
                  Contract Inquiries &amp; Legal Notices
                </h2>
              </div>
              <div className="card p-6 sm:p-8 bg-paper-soft dark:bg-ink-soft border border-gold-500/30 rounded-2xl space-y-4">
                <p className="text-sm text-charcoal-muted dark:text-ivory-muted leading-relaxed">
                  For formal contract notices, statements of work, or billing queries:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-charcoal dark:text-ivory pt-2">
                  <div>
                    <span className="font-mono text-[10px] uppercase tracking-widest text-charcoal-muted dark:text-ivory-muted block mb-1">
                      Legal Entity
                    </span>
                    <strong className="text-base">{brand.name}</strong>
                  </div>
                  <div>
                    <span className="font-mono text-[10px] uppercase tracking-widest text-charcoal-muted dark:text-ivory-muted block mb-1">
                      Direct Email
                    </span>
                    <a href={`mailto:${brand.email}`} className="text-gold-600 dark:text-gold-400 hover:underline">
                      {brand.email}
                    </a>
                  </div>
                  <div>
                    <span className="font-mono text-[10px] uppercase tracking-widest text-charcoal-muted dark:text-ivory-muted block mb-1">
                      Phone
                    </span>
                    <a href={`tel:${brand.phoneHref}`} className="text-gold-600 dark:text-gold-400 hover:underline">
                      {brand.phoneDisplay}
                    </a>
                  </div>
                  <div>
                    <span className="font-mono text-[10px] uppercase tracking-widest text-charcoal-muted dark:text-ivory-muted block mb-1">
                      Operating Jurisdiction
                    </span>
                    <span>{brand.address}</span>
                  </div>
                </div>
              </div>
            </article>

            {/* ── Related Legal Links ── */}
            <div className="pt-10 border-t border-charcoal/10 dark:border-ivory/10">
              <p className="font-mono text-[11px] uppercase tracking-widest2 text-charcoal-muted dark:text-ivory-muted mb-4">
                Related Policies &amp; Agreements
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Link
                  to="/privacy-policy"
                  className="card p-5 border border-charcoal/10 dark:border-ivory/10 hover:border-gold-500/40 transition-all group flex items-center justify-between"
                >
                  <div className="flex items-center gap-3">
                    <ShieldCheck size={18} className="text-gold-500" />
                    <div>
                      <h3 className="text-sm font-medium text-charcoal dark:text-ivory group-hover:text-gold-500 transition-colors">
                        Privacy Policy
                      </h3>
                      <p className="text-xs text-charcoal-muted dark:text-ivory-muted">Data protection, rights &amp; cookies</p>
                    </div>
                  </div>
                  <ArrowUpRight size={15} className="text-charcoal-muted dark:text-ivory-muted group-hover:text-gold-500 transition-colors" />
                </Link>

                <Link
                  to="/refund-policy"
                  className="card p-5 border border-charcoal/10 dark:border-ivory/10 hover:border-gold-500/40 transition-all group flex items-center justify-between"
                >
                  <div className="flex items-center gap-3">
                    <RotateCcw size={18} className="text-gold-500" />
                    <div>
                      <h3 className="text-sm font-medium text-charcoal dark:text-ivory group-hover:text-gold-500 transition-colors">
                        Refund &amp; Cancellation Policy
                      </h3>
                      <p className="text-xs text-charcoal-muted dark:text-ivory-muted">Retainer rules, deposits &amp; ad spend</p>
                    </div>
                  </div>
                  <ArrowUpRight size={15} className="text-charcoal-muted dark:text-ivory-muted group-hover:text-gold-500 transition-colors" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
