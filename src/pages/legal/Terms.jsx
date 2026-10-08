import PageTransition from '../../components/layout/PageTransition';
import PageHero from '../../components/sections/PageHero';
import Seo from '../../components/Seo';
import { brand } from '../../data/content';
import { FileText, CheckCircle2, ShieldCheck, Mail } from 'lucide-react';

export default function Terms() {
  return (
    <PageTransition>
      <Seo
        title="Terms & Conditions"
        description={`Terms and Conditions for ${brand.name} services, client agreements, and website usage.`}
        path="/terms"
      />
      <PageHero
        eyebrow="Legal"
        title="Terms & Conditions"
        description="Clear, transparent terms governing our client relationships, deliverables, and service engagements."
      />

      <section className="section-pad py-16 sm:py-24">
        <div className="mx-auto max-w-3xl">
          <div className="card mb-12 p-8 border border-gold-500/20 bg-paper-soft dark:bg-ink-soft">
            <div className="flex items-center gap-3 text-gold-500 mb-2">
              <FileText size={20} />
              <span className="font-mono text-xs uppercase tracking-widest2">Last Updated: October 2026</span>
            </div>
            <p className="text-sm text-charcoal-muted dark:text-ivory-muted leading-relaxed">
              These Terms &amp; Conditions (&ldquo;Terms&rdquo;) govern your use of the website and services provided by <strong>{brand.name}</strong> (&ldquo;Agency&rdquo;, &ldquo;we&rdquo;, or &ldquo;our&rdquo;). By accessing our website or engaging our services, you agree to comply with these terms.
            </p>
          </div>

          <div className="space-y-12 text-charcoal dark:text-ivory">
            {/* 1. Services & Scope */}
            <div className="space-y-4">
              <h2 className="font-display text-2xl text-charcoal dark:text-ivory flex items-center gap-3">
                <span className="text-gold-500 font-mono text-lg">01.</span> Engagement &amp; Scope of Work
              </h2>
              <p className="text-sm leading-relaxed text-charcoal-muted dark:text-ivory-muted">
                Each project or monthly retainer is defined by a clear Scope of Work (SOW), proposal, or written agreement. Any deliverables or services outside the agreed scope will require a written addendum or separate estimate.
              </p>
            </div>

            {/* 2. Intellectual Property */}
            <div className="space-y-4">
              <h2 className="font-display text-2xl text-charcoal dark:text-ivory flex items-center gap-3">
                <span className="text-gold-500 font-mono text-lg">02.</span> Intellectual Property Rights
              </h2>
              <p className="text-sm leading-relaxed text-charcoal-muted dark:text-ivory-muted">
                Upon complete payment of all agreed project fees:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-sm text-charcoal-muted dark:text-ivory-muted">
                <li><strong>Deliverables:</strong> Full ownership of custom graphic assets, brand identities, custom website code, and content created specifically for your brand transfers to you.</li>
                <li><strong>Agency Portfolio:</strong> MarketMinds reserves the right to showcase approved project work, case studies, and performance statistics in our public portfolio and marketing materials unless protected under an explicit Non-Disclosure Agreement (NDA).</li>
                <li><strong>Pre-existing Materials:</strong> General templates, internal toolsets, and open-source frameworks remain subject to their respective licenses.</li>
              </ul>
            </div>

            {/* 3. Client Responsibilities */}
            <div className="space-y-4">
              <h2 className="font-display text-2xl text-charcoal dark:text-ivory flex items-center gap-3">
                <span className="text-gold-500 font-mono text-lg">03.</span> Client Collaboration &amp; Approvals
              </h2>
              <p className="text-sm leading-relaxed text-charcoal-muted dark:text-ivory-muted">
                Timely delivery of feedback, creative assets, ad account access, and sign-offs is essential to maintaining project schedules. Delays caused by pending client feedback may adjust agreed milestone timelines.
              </p>
            </div>

            {/* 4. Payment Terms */}
            <div className="space-y-4">
              <h2 className="font-display text-2xl text-charcoal dark:text-ivory flex items-center gap-3">
                <span className="text-gold-500 font-mono text-lg">04.</span> Invoicing &amp; Payment Terms
              </h2>
              <ul className="list-disc pl-6 space-y-2 text-sm text-charcoal-muted dark:text-ivory-muted">
                <li><strong>Fixed-scope projects:</strong> Typically require an upfront deposit (e.g. 50%) prior to project kickoff, with remaining balances due upon milestone delivery or final launch.</li>
                <li><strong>Monthly retainers:</strong> Invoiced at the start of each service cycle. Ad spend budgets (e.g. Meta, Google) are paid directly to ad platforms by the client unless otherwise contracted.</li>
                <li><strong>Late Payments:</strong> Invoices outstanding past the due date may result in a temporary pause on active campaign management and deliverable handoffs.</li>
              </ul>
            </div>

            {/* 5. Limitation of Liability */}
            <div className="space-y-4">
              <h2 className="font-display text-2xl text-charcoal dark:text-ivory flex items-center gap-3">
                <span className="text-gold-500 font-mono text-lg">05.</span> Warranties &amp; Limitation of Liability
              </h2>
              <p className="text-sm leading-relaxed text-charcoal-muted dark:text-ivory-muted">
                While we apply the highest standard of strategic rigor and conversion optimization, digital marketing performance depends on external factors (such as platform algorithm changes, ad network policies, third-party hosting, and competitive market conditions). To the maximum extent permitted by law, our total liability for any claim arising from our services is limited to the fees paid by the client for the specific service in question.
              </p>
            </div>

            {/* 6. Contact Box */}
            <div className="card p-8 bg-paper-raised dark:bg-ink-raised border border-gold-500/20 rounded-xl space-y-4">
              <h3 className="font-display text-xl text-charcoal dark:text-ivory flex items-center gap-2">
                <Mail size={18} className="text-gold-500" />
                Questions Regarding Terms
              </h3>
              <p className="text-sm text-charcoal-muted dark:text-ivory-muted leading-relaxed">
                For inquiries regarding contracts, master service agreements, or NDAs, reach out to our team:
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
