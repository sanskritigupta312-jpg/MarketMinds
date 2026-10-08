import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ShieldCheck,
  Mail,
  ArrowLeft,
  ArrowUpRight,
  FileText,
  RotateCcw,
  CheckCircle2,
  Server,
} from 'lucide-react';
import PageTransition from '../../components/layout/PageTransition';
import Seo from '../../components/Seo';
import { brand } from '../../data/content';

const sections = [
  { id: 'collection', number: '01', title: 'Information We Collect' },
  { id: 'usage', number: '02', title: 'How We Use Your Data' },
  { id: 'processors', number: '03', title: 'Third-Party Processors' },
  { id: 'security', number: '04', title: 'Data Security & Storage' },
  { id: 'cookies', number: '05', title: 'Cookies & Tracking' },
  { id: 'rights', number: '06', title: 'Your Legal Rights' },
  { id: 'grievance', number: '07', title: 'Contact & Grievance' },
];

export default function PrivacyPolicy() {
  const [activeSection, setActiveSection] = useState('collection');

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
        title="Privacy Policy"
        description={`Privacy Policy for ${brand.name}. Learn how we protect your personal data, client briefs, and information with complete transparency.`}
        path="/privacy-policy"
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
              Active Policy
            </span>
          </div>

          <h1 className="text-display-md sm:text-display-lg font-display font-medium text-charcoal dark:text-ivory max-w-3xl">
            Privacy Policy
          </h1>

          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-charcoal-muted dark:text-ivory-muted sm:text-base">
            We value your trust above all else. This policy explains with complete clarity how{' '}
            <strong>{brand.name}</strong> collects, uses, and safeguards your project requirements and personal information.
          </p>

          {/* Quick Metadata Pill Bar */}
          <div className="mt-8 flex flex-wrap items-center gap-4 sm:gap-6 text-xs text-charcoal-muted dark:text-ivory-muted">
            <div className="flex items-center gap-2">
              <ShieldCheck size={15} className="text-gold-500 shrink-0" />
              <span>Last updated: <strong>October 2026</strong></span>
            </div>
            <span className="hidden sm:inline text-charcoal/20 dark:text-ivory/20">•</span>
            <div>Applies to: <strong>Global Visitors &amp; Clients</strong></div>
            <span className="hidden sm:inline text-charcoal/20 dark:text-ivory/20">•</span>
            <div>Version: <strong>2.1 (DPDP &amp; GDPR Compliant)</strong></div>
          </div>
        </div>
      </section>

      {/* ── Main Layout (Sidebar + Content) ── */}
      <section className="section-pad py-12 sm:py-20 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[260px_1fr]">
          {/* Sticky Sidebar Navigation (Desktop) / Horizontal pills (Mobile) */}
          <aside className="lg:sticky lg:top-28 lg:h-fit">
            <div className="card p-5 sm:p-6 border border-charcoal/10 dark:border-ivory/10">
              <p className="font-mono text-[10px] uppercase tracking-widest2 text-charcoal-muted dark:text-ivory-muted mb-4">
                Table of Contents
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
                  Have questions about your data?
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
            <article id="collection" className="scroll-mt-32 space-y-4">
              <div className="flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gold-500/10 font-mono text-xs font-semibold text-gold-500 border border-gold-500/20">
                  01
                </span>
                <h2 className="font-display text-xl sm:text-2xl font-medium text-charcoal dark:text-ivory">
                  Information We Collect
                </h2>
              </div>
              <p className="text-sm leading-relaxed text-charcoal-muted dark:text-ivory-muted">
                We collect minimal information necessary to evaluate growth proposals, communicate regarding engagements, and deliver strategic services. We never collect data we do not require.
              </p>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 pt-2">
                <div className="card p-5 border border-charcoal/10 dark:border-ivory/10 space-y-2">
                  <div className="flex items-center gap-2 text-gold-500 text-xs font-semibold uppercase font-mono">
                    <CheckCircle2 size={14} />
                    Direct Contact Data
                  </div>
                  <p className="text-xs leading-relaxed text-charcoal-muted dark:text-ivory-muted">
                    Full name, business email, contact number, company name, monthly growth budget range, and project briefs entered in our inquiry form.
                  </p>
                </div>
                <div className="card p-5 border border-charcoal/10 dark:border-ivory/10 space-y-2">
                  <div className="flex items-center gap-2 text-gold-500 text-xs font-semibold uppercase font-mono">
                    <Server size={14} />
                    Technical Usage
                  </div>
                  <p className="text-xs leading-relaxed text-charcoal-muted dark:text-ivory-muted">
                    Anonymized telemetry such as browser version, operating system, referrer URL, and screen resolution to ensure responsive rendering.
                  </p>
                </div>
              </div>
            </article>

            {/* Section 02 */}
            <article id="usage" className="scroll-mt-32 space-y-4">
              <div className="flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gold-500/10 font-mono text-xs font-semibold text-gold-500 border border-gold-500/20">
                  02
                </span>
                <h2 className="font-display text-xl sm:text-2xl font-medium text-charcoal dark:text-ivory">
                  How We Use Your Data
                </h2>
              </div>
              <p className="text-sm leading-relaxed text-charcoal-muted dark:text-ivory-muted">
                All collected information is processed solely for legitimate commercial requirements, including:
              </p>
              <ul className="space-y-2.5 text-sm text-charcoal-muted dark:text-ivory-muted pl-1">
                <li className="flex items-start gap-2.5">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-gold-500 shrink-0" />
                  <span><strong>Audit &amp; Proposals:</strong> Reviewing your current digital footprint and formulating tailored SEO, ad campaigns, or web architecture proposals.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-gold-500 shrink-0" />
                  <span><strong>Service Execution:</strong> Coordinating strategy workshops, sharing design prototypes, and granting access to collaborative dashboards.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-gold-500 shrink-0" />
                  <span><strong>Invoicing &amp; Tax Compliance:</strong> Issuing formal invoices, statements of work, and maintaining statutory accounting records.</span>
                </li>
              </ul>
              <div className="p-4 rounded-xl bg-gold-500/10 border border-gold-500/20 text-xs text-charcoal dark:text-ivory leading-relaxed">
                <strong>Zero Data Selling:</strong> We do not sell, rent, monetize, or trade your contact records or client assets to any third-party marketing firms or data brokers under any circumstance.
              </div>
            </article>

            {/* Section 03 */}
            <article id="processors" className="scroll-mt-32 space-y-4">
              <div className="flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gold-500/10 font-mono text-xs font-semibold text-gold-500 border border-gold-500/20">
                  03
                </span>
                <h2 className="font-display text-xl sm:text-2xl font-medium text-charcoal dark:text-ivory">
                  Third-Party Processors
                </h2>
              </div>
              <p className="text-sm leading-relaxed text-charcoal-muted dark:text-ivory-muted">
                To guarantee top-tier uptime and enterprise-grade security, we work with vetted external infrastructure partners:
              </p>

              <div className="space-y-3 pt-1">
                <div className="card p-4 border border-charcoal/10 dark:border-ivory/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div>
                    <h3 className="text-sm font-semibold text-charcoal dark:text-ivory">Web3Forms</h3>
                    <p className="text-xs text-charcoal-muted dark:text-ivory-muted">Form submission encryption relay to dispatch enquiries directly to our official inbox.</p>
                  </div>
                  <span className="shrink-0 text-xs font-mono text-gold-600 dark:text-gold-400">TLS 1.3 Encrypted</span>
                </div>
                <div className="card p-4 border border-charcoal/10 dark:border-ivory/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div>
                    <h3 className="text-sm font-semibold text-charcoal dark:text-ivory">Vercel Inc.</h3>
                    <p className="text-xs text-charcoal-muted dark:text-ivory-muted">Global edge CDN hosting with DDoS mitigation, automatic HTTPS, and ISO 27001 certified data centers.</p>
                  </div>
                  <span className="shrink-0 text-xs font-mono text-gold-600 dark:text-gold-400">SOC 2 Compliant</span>
                </div>
              </div>
            </article>

            {/* Section 04 */}
            <article id="security" className="scroll-mt-32 space-y-4">
              <div className="flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gold-500/10 font-mono text-xs font-semibold text-gold-500 border border-gold-500/20">
                  04
                </span>
                <h2 className="font-display text-xl sm:text-2xl font-medium text-charcoal dark:text-ivory">
                  Data Security &amp; Storage
                </h2>
              </div>
              <p className="text-sm leading-relaxed text-charcoal-muted dark:text-ivory-muted">
                All communications sent across this website are protected via modern transport layer security (HTTPS/TLS). Access to client accounts, ad accounts, and briefing materials is strictly limited to active team members bound by non-disclosure agreements.
              </p>
              <p className="text-sm leading-relaxed text-charcoal-muted dark:text-ivory-muted">
                Inquiries that do not convert into active client engagements are routinely purged from our working pipelines within 12 months.
              </p>
            </article>

            {/* Section 05 */}
            <article id="cookies" className="scroll-mt-32 space-y-4">
              <div className="flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gold-500/10 font-mono text-xs font-semibold text-gold-500 border border-gold-500/20">
                  05
                </span>
                <h2 className="font-display text-xl sm:text-2xl font-medium text-charcoal dark:text-ivory">
                  Cookies &amp; Tracking Technologies
                </h2>
              </div>
              <p className="text-sm leading-relaxed text-charcoal-muted dark:text-ivory-muted">
                We use essential session tokens and privacy-focused performance cookies to remember your theme preferences (dark/light mode) and measure page load speed. You may adjust your browser settings at any time to reject non-essential cookies.
              </p>
            </article>

            {/* Section 06 */}
            <article id="rights" className="scroll-mt-32 space-y-4">
              <div className="flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gold-500/10 font-mono text-xs font-semibold text-gold-500 border border-gold-500/20">
                  06
                </span>
                <h2 className="font-display text-xl sm:text-2xl font-medium text-charcoal dark:text-ivory">
                  Your Legal Rights
                </h2>
              </div>
              <p className="text-sm leading-relaxed text-charcoal-muted dark:text-ivory-muted">
                Under relevant data protection legislation (including India&rsquo;s Digital Personal Data Protection Act and international privacy frameworks), you possess the right to:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
                <div className="card p-4 border border-charcoal/10 dark:border-ivory/10 text-center sm:text-left">
                  <h3 className="text-xs font-bold font-mono text-gold-500 uppercase mb-1">Right to Access</h3>
                  <p className="text-xs text-charcoal-muted dark:text-ivory-muted">Request a copy of the personal details stored with us.</p>
                </div>
                <div className="card p-4 border border-charcoal/10 dark:border-ivory/10 text-center sm:text-left">
                  <h3 className="text-xs font-bold font-mono text-gold-500 uppercase mb-1">Right to Rectify</h3>
                  <p className="text-xs text-charcoal-muted dark:text-ivory-muted">Update or correct outdated or incomplete contact records.</p>
                </div>
                <div className="card p-4 border border-charcoal/10 dark:border-ivory/10 text-center sm:text-left">
                  <h3 className="text-xs font-bold font-mono text-gold-500 uppercase mb-1">Right to Erasure</h3>
                  <p className="text-xs text-charcoal-muted dark:text-ivory-muted">Request complete deletion of your records from our systems.</p>
                </div>
              </div>
            </article>

            {/* Section 07 */}
            <article id="grievance" className="scroll-mt-32 space-y-4">
              <div className="flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gold-500/10 font-mono text-xs font-semibold text-gold-500 border border-gold-500/20">
                  07
                </span>
                <h2 className="font-display text-xl sm:text-2xl font-medium text-charcoal dark:text-ivory">
                  Grievance Redressal &amp; Contact
                </h2>
              </div>
              <div className="card p-6 sm:p-8 bg-paper-soft dark:bg-ink-soft border border-gold-500/30 rounded-2xl space-y-4">
                <p className="text-sm text-charcoal-muted dark:text-ivory-muted leading-relaxed">
                  For privacy inquiries, rights enforcement requests, or grievance redressal, please reach our designated Data &amp; Privacy Officer directly:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-charcoal dark:text-ivory pt-2">
                  <div>
                    <span className="font-mono text-[10px] uppercase tracking-widest text-charcoal-muted dark:text-ivory-muted block mb-1">
                      Agency Name
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
                      Phone Number
                    </span>
                    <a href={`tel:${brand.phoneHref}`} className="text-gold-600 dark:text-gold-400 hover:underline">
                      {brand.phoneDisplay}
                    </a>
                  </div>
                  <div>
                    <span className="font-mono text-[10px] uppercase tracking-widest text-charcoal-muted dark:text-ivory-muted block mb-1">
                      Location
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
                      <p className="text-xs text-charcoal-muted dark:text-ivory-muted">Retainer rules, milestone payments &amp; ads</p>
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
