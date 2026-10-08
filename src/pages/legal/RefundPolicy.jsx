import PageTransition from '../../components/layout/PageTransition';
import PageHero from '../../components/sections/PageHero';
import Seo from '../../components/Seo';
import { brand } from '../../data/content';
import { RotateCcw, CheckCircle2, ShieldCheck, Mail } from 'lucide-react';

export default function RefundPolicy() {
  return (
    <PageTransition>
      <Seo
        title="Refund & Cancellation Policy"
        description={`Refund and cancellation policy for ${brand.name} services, projects, and retainers.`}
        path="/refund-policy"
      />
      <PageHero
        eyebrow="Legal"
        title="Refund & Cancellation Policy"
        description="Our policy on milestone deliverables, monthly retainers, and cancellations."
      />

      <section className="section-pad py-16 sm:py-24">
        <div className="mx-auto max-w-3xl">
          <div className="card mb-12 p-8 border border-gold-500/20 bg-paper-soft dark:bg-ink-soft">
            <div className="flex items-center gap-3 text-gold-500 mb-2">
              <RotateCcw size={20} />
              <span className="font-mono text-xs uppercase tracking-widest2">Last Updated: October 2026</span>
            </div>
            <p className="text-sm text-charcoal-muted dark:text-ivory-muted leading-relaxed">
              At <strong>{brand.name}</strong>, we build relationships around accountability and measurable outcomes. Because our services involve dedicated consulting hours, custom engineering, and strategic research, this policy outlines how cancellations and refunds are handled.
            </p>
          </div>

          <div className="space-y-12 text-charcoal dark:text-ivory">
            {/* 1. Monthly Retainers */}
            <div className="space-y-4">
              <h2 className="font-display text-2xl text-charcoal dark:text-ivory flex items-center gap-3">
                <span className="text-gold-500 font-mono text-lg">01.</span> Monthly Retainers &amp; No-Lock-in Contracts
              </h2>
              <p className="text-sm leading-relaxed text-charcoal-muted dark:text-ivory-muted">
                We believe in earning our clients&rsquo; trust every single month. We do not trap clients into rigid multi-year lock-in contracts.
              </p>
              <ul className="list-disc pl-6 space-y-2 text-sm text-charcoal-muted dark:text-ivory-muted">
                <li><strong>Cancellation:</strong> You may cancel your monthly retainer agreement at any time by providing written notice prior to the start of the next billing cycle.</li>
                <li><strong>Active Month:</strong> Fees already paid for the current active billing period are non-refundable, as agency resources and campaign management are allocated from day one. Services will continue through the end of the paid period.</li>
              </ul>
            </div>

            {/* 2. Fixed-Scope Projects */}
            <div className="space-y-4">
              <h2 className="font-display text-2xl text-charcoal dark:text-ivory flex items-center gap-3">
                <span className="text-gold-500 font-mono text-lg">02.</span> Fixed-Scope &amp; Milestone Projects
              </h2>
              <p className="text-sm leading-relaxed text-charcoal-muted dark:text-ivory-muted">
                For fixed-scope projects (such as website design &amp; development or comprehensive brand identity systems):
              </p>
              <ul className="list-disc pl-6 space-y-2 text-sm text-charcoal-muted dark:text-ivory-muted">
                <li><strong>Kickoff Deposit:</strong> Upfront deposits cover initial discovery, architectural planning, and resource reservation, and are non-refundable once work commences.</li>
                <li><strong>Milestone Sign-Off:</strong> Projects are billed against defined milestone deliveries. Once a milestone is reviewed, approved, and delivered, associated fees are non-refundable.</li>
                <li><strong>Early Project Termination:</strong> If a project is cancelled before completion, the client will only be invoiced for completed work hours and delivered assets up to the cancellation notice date.</li>
              </ul>
            </div>

            {/* 3. Non-Refundable Expenses */}
            <div className="space-y-4">
              <h2 className="font-display text-2xl text-charcoal dark:text-ivory flex items-center gap-3">
                <span className="text-gold-500 font-mono text-lg">03.</span> Third-Party &amp; Direct Ad Spend
              </h2>
              <p className="text-sm leading-relaxed text-charcoal-muted dark:text-ivory-muted">
                Direct advertising spends disbursed to third-party ad networks (Meta Ads, Google Ads, LinkedIn Ads, etc.), domain registrations, premium third-party font/asset licenses, and hosting fees are paid directly to those platforms and are strictly non-refundable by MarketMinds.
              </p>
            </div>

            {/* 4. Revision & Satisfaction */}
            <div className="space-y-4">
              <h2 className="font-display text-2xl text-charcoal dark:text-ivory flex items-center gap-3">
                <span className="text-gold-500 font-mono text-lg">04.</span> Feedback &amp; Revisions
              </h2>
              <p className="text-sm leading-relaxed text-charcoal-muted dark:text-ivory-muted">
                We work collaboratively at every step. If you are not satisfied with a draft deliverable, we include structured feedback and revision rounds in every scope to ensure the final output aligns with your strategic goals before final sign-off.
              </p>
            </div>

            {/* 5. Contact Box */}
            <div className="card p-8 bg-paper-raised dark:bg-ink-raised border border-gold-500/20 rounded-xl space-y-4">
              <h3 className="font-display text-xl text-charcoal dark:text-ivory flex items-center gap-2">
                <Mail size={18} className="text-gold-500" />
                Billing Inquiries
              </h3>
              <p className="text-sm text-charcoal-muted dark:text-ivory-muted leading-relaxed">
                If you have questions regarding an invoice or wish to adjust your service plan, reach out directly:
              </p>
              <div className="text-sm space-y-1 text-charcoal dark:text-ivory">
                <p><strong>{brand.name}</strong></p>
                <p>Email: <a href={`mailto:${brand.email}`} className="text-gold-500 hover:underline">{brand.email}</a></p>
                <p>Phone: <a href={`tel:${brand.phoneHref}`} className="text-gold-500 hover:underline">{brand.phoneDisplay}</a></p>
                <p>Address: {brand.address}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
