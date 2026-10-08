import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  RotateCcw,
  ShieldCheck,
  CheckCircle2,
  ArrowLeft,
  ArrowUpRight,
  FileText,
  Ban,
  Clock,
  Mail,
} from 'lucide-react';
import PageTransition from '../../components/layout/PageTransition';
import Seo from '../../components/Seo';
import { brand } from '../../data/content';

const sections = [
  { id: 'retainers', number: '01', title: 'Monthly Retainers' },
  { id: 'projects', number: '02', title: 'Milestone Projects' },
  { id: 'adspend', number: '03', title: 'Third-Party Ad Spend' },
  { id: 'revisions', number: '04', title: 'Revisions & Quality' },
  { id: 'cancellation', number: '05', title: 'Cancellation Steps' },
  { id: 'disputes', number: '06', title: 'Dispute Resolution' },
  { id: 'billing', number: '07', title: 'Billing Support' },
];

export default function RefundPolicy() {
  const [activeSection, setActiveSection] = useState('retainers');

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
        title="Refund & Cancellation Policy"
        description={`Refund and cancellation policy for ${brand.name}. Transparent guidelines for retainer cycles, project milestones, and media spend.`}
        path="/refund-policy"
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
              Transparent Terms
            </span>
          </div>

          <h1 className="text-display-md sm:text-display-lg font-display font-medium text-charcoal dark:text-ivory max-w-3xl">
            Refund &amp; Cancellation Policy
          </h1>

          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-charcoal-muted dark:text-ivory-muted sm:text-base">
            We judge ourselves on outcomes, not billable activity. Here is our straightforward policy on monthly retainers, fixed-scope deposits, and third-party media budgets.
          </p>

          {/* Quick Metadata Pill Bar */}
          <div className="mt-8 flex flex-wrap items-center gap-4 sm:gap-6 text-xs text-charcoal-muted dark:text-ivory-muted">
            <div className="flex items-center gap-2">
              <RotateCcw size={15} className="text-gold-500 shrink-0" />
              <span>Updated: <strong>October 2026</strong></span>
            </div>
            <span className="hidden sm:inline text-charcoal/20 dark:text-ivory/20">•</span>
            <div>Contract Model: <strong>No Multi-Year Lock-ins</strong></div>
            <span className="hidden sm:inline text-charcoal/20 dark:text-ivory/20">•</span>
            <div>Notice Period: <strong>Prior to next billing cycle</strong></div>
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
                Policy Sections
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
                  Questions about an upcoming invoice?
                </p>
                <a
                  href={`mailto:${brand.email}`}
                  className="mt-2 inline-flex items-center gap-1.5 text-xs text-gold-600 dark:text-gold-400 hover:underline"
                >
                  <Mail size={12} />
                  {brand.email}
                </a>
              </div>
            </div>
          </aside>

          {/* ── Detailed Policy Sections ── */}
          <div className="space-y-12 sm:space-y-16">
            {/* Section 01 */}
            <article id="retainers" className="scroll-mt-32 space-y-4">
              <div className="flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gold-500/10 font-mono text-xs font-semibold text-gold-500 border border-gold-500/20">
                  01
                </span>
                <h2 className="font-display text-xl sm:text-2xl font-medium text-charcoal dark:text-ivory">
                  Monthly Retainers &amp; No-Lock-in Promise
                </h2>
              </div>
              <p className="text-sm leading-relaxed text-charcoal-muted dark:text-ivory-muted">
                We believe in earning our clients&rsquo; trust each month through tangible performance. We do not lock brands into 6-month or 12-month punitive contracts.
              </p>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 pt-2">
                <div className="card p-5 border border-charcoal/10 dark:border-ivory/10 space-y-2">
                  <div className="flex items-center gap-2 text-gold-500 text-xs font-semibold uppercase font-mono">
                    <CheckCircle2 size={14} />
                    Cancel Anytime
                  </div>
                  <p className="text-xs text-charcoal-muted dark:text-ivory-muted leading-relaxed">
                    You may pause or terminate a retainer before the start of the next billing cycle without penalty.
                  </p>
                </div>
                <div className="card p-5 border border-charcoal/10 dark:border-ivory/10 space-y-2">
                  <div className="flex items-center gap-2 text-gold-500 text-xs font-semibold uppercase font-mono">
                    <Clock size={14} />
                    Active Month Coverage
                  </div>
                  <p className="text-xs text-charcoal-muted dark:text-ivory-muted leading-relaxed">
                    Fees already paid for the current active month are non-refundable, as studio time and team hours are already committed.
                  </p>
                </div>
              </div>
            </article>

            {/* Section 02 */}
            <article id="projects" className="scroll-mt-32 space-y-4">
              <div className="flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gold-500/10 font-mono text-xs font-semibold text-gold-500 border border-gold-500/20">
                  02
                </span>
                <h2 className="font-display text-xl sm:text-2xl font-medium text-charcoal dark:text-ivory">
                  Milestone Projects &amp; Upfront Deposits
                </h2>
              </div>
              <p className="text-sm leading-relaxed text-charcoal-muted dark:text-ivory-muted">
                For custom website builds, full brand identities, and standalone design sprints:
              </p>
              <ul className="space-y-2.5 text-sm text-charcoal-muted dark:text-ivory-muted pl-1">
                <li className="flex items-start gap-2.5">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-gold-500 shrink-0" />
                  <span><strong>Project Kickoff Deposit:</strong> Upfront deposits cover initial research, information architecture, wireframing, and team capacity reservation. Once work has commenced, kickoff deposits are non-refundable.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-gold-500 shrink-0" />
                  <span><strong>Milestone Invoices:</strong> Billed against deliverables (e.g. Design Approved, Staging Build Completed, Live Launch). Once a milestone is signed off, the associated stage payment is non-refundable.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-gold-500 shrink-0" />
                  <span><strong>Early Project Termination:</strong> If a project is cancelled mid-sprint, the client will only be billed for completed hours and assets delivered up to the cancellation date.</span>
                </li>
              </ul>
            </article>

            {/* Section 03 */}
            <article id="adspend" className="scroll-mt-32 space-y-4">
              <div className="flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gold-500/10 font-mono text-xs font-semibold text-gold-500 border border-gold-500/20">
                  03
                </span>
                <h2 className="font-display text-xl sm:text-2xl font-medium text-charcoal dark:text-ivory">
                  Third-Party &amp; Direct Ad Spend
                </h2>
              </div>
              <div className="card p-5 border border-charcoal/10 dark:border-ivory/10 flex items-start gap-3">
                <Ban size={20} className="text-gold-500 shrink-0 mt-0.5" />
                <div className="space-y-2">
                  <h3 className="text-sm font-semibold text-charcoal dark:text-ivory">Non-Refundable Media Disbursements</h3>
                  <p className="text-xs leading-relaxed text-charcoal-muted dark:text-ivory-muted">
                    Media spends paid directly to advertising networks (Google Ads, Meta Ads, LinkedIn Campaign Manager), custom domain registrations, and third-party SaaS licenses are paid directly to those respective vendors and cannot be refunded by MarketMinds under any circumstance.
                  </p>
                </div>
              </div>
            </article>

            {/* Section 04 */}
            <article id="revisions" className="scroll-mt-32 space-y-4">
              <div className="flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gold-500/10 font-mono text-xs font-semibold text-gold-500 border border-gold-500/20">
                  04
                </span>
                <h2 className="font-display text-xl sm:text-2xl font-medium text-charcoal dark:text-ivory">
                  Revisions &amp; Quality Guarantee
                </h2>
              </div>
              <p className="text-sm leading-relaxed text-charcoal-muted dark:text-ivory-muted">
                Instead of rigid disputes, we build revision rounds into every project milestone. If a concept or campaign draft does not meet your expectations, we collaborate closely during the revision stage to iterate until the deliverable aligns with your strategic objectives.
              </p>
            </article>

            {/* Section 05 */}
            <article id="cancellation" className="scroll-mt-32 space-y-4">
              <div className="flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gold-500/10 font-mono text-xs font-semibold text-gold-500 border border-gold-500/20">
                  05
                </span>
                <h2 className="font-display text-xl sm:text-2xl font-medium text-charcoal dark:text-ivory">
                  How to Request a Cancellation
                </h2>
              </div>
              <p className="text-sm leading-relaxed text-charcoal-muted dark:text-ivory-muted">
                To pause or cancel an active retainer or upcoming milestone:
              </p>
              <div className="space-y-2 text-xs text-charcoal dark:text-ivory">
                <div className="card p-4 border border-charcoal/10 dark:border-ivory/10 flex items-center gap-3">
                  <span className="font-mono text-gold-500 font-bold">Step 1</span>
                  <span>Send written notification to <a href={`mailto:${brand.email}`} className="text-gold-500 hover:underline">{brand.email}</a> prior to your next billing date.</span>
                </div>
                <div className="card p-4 border border-charcoal/10 dark:border-ivory/10 flex items-center gap-3">
                  <span className="font-mono text-gold-500 font-bold">Step 2</span>
                  <span>Our team acknowledges the request within 1 business day and prepares an orderly handover checklist.</span>
                </div>
                <div className="card p-4 border border-charcoal/10 dark:border-ivory/10 flex items-center gap-3">
                  <span className="font-mono text-gold-500 font-bold">Step 3</span>
                  <span>All finalized creatives, ad reports, and source files are packaged and delivered to your designated drive.</span>
                </div>
              </div>
            </article>

            {/* Section 06 */}
            <article id="disputes" className="scroll-mt-32 space-y-4">
              <div className="flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gold-500/10 font-mono text-xs font-semibold text-gold-500 border border-gold-500/20">
                  06
                </span>
                <h2 className="font-display text-xl sm:text-2xl font-medium text-charcoal dark:text-ivory">
                  Dispute Resolution
                </h2>
              </div>
              <p className="text-sm leading-relaxed text-charcoal-muted dark:text-ivory-muted">
                In the rare event of a disagreement regarding deliverables or billing, both parties agree to engage in constructive dialogue with agency leadership before taking formal legal steps. Our goal is always a fair resolution that respects both parties&rsquo; time and investment.
              </p>
            </article>

            {/* Section 07 */}
            <article id="billing" className="scroll-mt-32 space-y-4">
              <div className="flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gold-500/10 font-mono text-xs font-semibold text-gold-500 border border-gold-500/20">
                  07
                </span>
                <h2 className="font-display text-xl sm:text-2xl font-medium text-charcoal dark:text-ivory">
                  Billing &amp; Invoice Inquiries
                </h2>
              </div>
              <div className="card p-6 sm:p-8 bg-paper-soft dark:bg-ink-soft border border-gold-500/30 rounded-2xl space-y-4">
                <p className="text-sm text-charcoal-muted dark:text-ivory-muted leading-relaxed">
                  For questions about statements of work, invoices, or cancellation confirmations:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-charcoal dark:text-ivory pt-2">
                  <div>
                    <span className="font-mono text-[10px] uppercase tracking-widest text-charcoal-muted dark:text-ivory-muted block mb-1">
                      Billing Team
                    </span>
                    <strong className="text-base">{brand.name} Accounts</strong>
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
                      Operating Office
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
                      <p className="text-xs text-charcoal-muted dark:text-ivory-muted">Data protection, rights &amp; security</p>
                    </div>
                  </div>
                  <ArrowUpRight size={15} className="text-charcoal-muted dark:text-ivory-muted group-hover:text-gold-500 transition-colors" />
                </Link>

                <Link
                  to="/terms"
                  className="card p-5 border border-charcoal/10 dark:border-ivory/10 hover:border-gold-500/40 transition-all group flex items-center justify-between"
                >
                  <div className="flex items-center gap-3">
                    <FileText size={18} className="text-gold-500" />
                    <div>
                      <h3 className="text-sm font-medium text-charcoal dark:text-ivory group-hover:text-gold-500 transition-colors">
                        Terms &amp; Conditions
                      </h3>
                      <p className="text-xs text-charcoal-muted dark:text-ivory-muted">Client scopes, IP &amp; billing agreements</p>
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
