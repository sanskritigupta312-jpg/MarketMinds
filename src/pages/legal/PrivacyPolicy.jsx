import PageTransition from '../../components/layout/PageTransition';
import PageHero from '../../components/sections/PageHero';
import Seo from '../../components/Seo';
import { brand } from '../../data/content';
import { ShieldCheck, Lock, Eye, Mail } from 'lucide-react';

export default function PrivacyPolicy() {
  return (
    <PageTransition>
      <Seo
        title="Privacy Policy"
        description={`Privacy Policy for ${brand.name}. Learn how we handle and protect your personal information and project data.`}
        path="/privacy-policy"
      />
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        description="We respect your privacy and handle your personal data with clarity, honesty, and strict security."
      />

      <section className="section-pad py-16 sm:py-24">
        <div className="mx-auto max-w-3xl">
          <div className="card mb-12 p-8 border border-gold-500/20 bg-paper-soft dark:bg-ink-soft">
            <div className="flex items-center gap-3 text-gold-500 mb-2">
              <ShieldCheck size={20} />
              <span className="font-mono text-xs uppercase tracking-widest2">Last Updated: October 2026</span>
            </div>
            <p className="text-sm text-charcoal-muted dark:text-ivory-muted leading-relaxed">
              This Privacy Policy explains how <strong>{brand.name}</strong> (&ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;) collects, uses, and safeguards information when you visit our website or interact with our services.
            </p>
          </div>

          <div className="space-y-12 text-charcoal dark:text-ivory">
            {/* 1. Information We Collect */}
            <div className="space-y-4">
              <h2 className="font-display text-2xl text-charcoal dark:text-ivory flex items-center gap-3">
                <span className="text-gold-500 font-mono text-lg">01.</span> Information We Collect
              </h2>
              <p className="text-sm leading-relaxed text-charcoal-muted dark:text-ivory-muted">
                We only collect information necessary to communicate with you about your projects and provide growth and digital marketing services:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-sm text-charcoal-muted dark:text-ivory-muted">
                <li><strong>Direct Inquiries:</strong> When you submit our contact form, we collect your name, email address, phone number (if provided), company name, service interest, and project description.</li>
                <li><strong>Technical &amp; Usage Data:</strong> Anonymized analytical data including browser type, device information, operating system, referring URLs, and page visit duration to optimize website performance.</li>
                <li><strong>Client Communications:</strong> Emails, briefing notes, and strategy documentation exchanged during the course of a project.</li>
              </ul>
            </div>

            {/* 2. How We Use Your Information */}
            <div className="space-y-4">
              <h2 className="font-display text-2xl text-charcoal dark:text-ivory flex items-center gap-3">
                <span className="text-gold-500 font-mono text-lg">02.</span> How We Use Your Information
              </h2>
              <p className="text-sm leading-relaxed text-charcoal-muted dark:text-ivory-muted">
                Your data is used strictly for legitimate business and client service purposes:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-sm text-charcoal-muted dark:text-ivory-muted">
                <li>To respond to your inquiries and provide proposals or audit reports.</li>
                <li>To deliver requested brand strategy, web design, SEO, and performance marketing services.</li>
                <li>To send invoices, project updates, and operational communications.</li>
                <li>To protect our website and services against spam, abuse, and security vulnerabilities.</li>
              </ul>
              <p className="text-sm leading-relaxed text-charcoal-muted dark:text-ivory-muted font-semibold">
                We will never sell, rent, or lease your personal information to third parties.
              </p>
            </div>

            {/* 3. Third-Party Processors */}
            <div className="space-y-4">
              <h2 className="font-display text-2xl text-charcoal dark:text-ivory flex items-center gap-3">
                <span className="text-gold-500 font-mono text-lg">03.</span> Third-Party Service Providers
              </h2>
              <p className="text-sm leading-relaxed text-charcoal-muted dark:text-ivory-muted">
                We rely on trusted third-party providers to operate our website and services securely:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-sm text-charcoal-muted dark:text-ivory-muted">
                <li><strong>Web3Forms:</strong> Encrypted form processing service used to deliver website inquiry emails directly to our secure inbox.</li>
                <li><strong>Hosting &amp; CDN:</strong> Vercel and global content delivery networks for fast, TLS-encrypted web delivery.</li>
                <li><strong>Analytics:</strong> Aggregated privacy-conscious traffic analytics for monitoring uptime and site speed.</li>
              </ul>
            </div>

            {/* 4. Data Security */}
            <div className="space-y-4">
              <h2 className="font-display text-2xl text-charcoal dark:text-ivory flex items-center gap-3">
                <span className="text-gold-500 font-mono text-lg">04.</span> Data Security &amp; Retention
              </h2>
              <p className="text-sm leading-relaxed text-charcoal-muted dark:text-ivory-muted">
                We employ standard HTTPS/TLS encryption, secure email protocols, and access controls to protect all incoming data. Inquiries are retained only as long as necessary to fulfill project requirements or comply with legal and tax accounting obligations.
              </p>
            </div>

            {/* 5. Your Rights */}
            <div className="space-y-4">
              <h2 className="font-display text-2xl text-charcoal dark:text-ivory flex items-center gap-3">
                <span className="text-gold-500 font-mono text-lg">05.</span> Your Rights &amp; Choices
              </h2>
              <p className="text-sm leading-relaxed text-charcoal-muted dark:text-ivory-muted">
                Depending on your jurisdiction (including DPDP Act, GDPR, and other applicable privacy laws), you have the right to request access to the personal data we hold about you, request corrections, or request deletion of your information.
              </p>
            </div>

            {/* 6. Contact Box */}
            <div className="card p-8 bg-paper-raised dark:bg-ink-raised border border-gold-500/20 rounded-xl space-y-4">
              <h3 className="font-display text-xl text-charcoal dark:text-ivory flex items-center gap-2">
                <Mail size={18} className="text-gold-500" />
                Contact &amp; Privacy Officer
              </h3>
              <p className="text-sm text-charcoal-muted dark:text-ivory-muted leading-relaxed">
                If you have any questions about this Privacy Policy or wish to exercise your data rights, please contact our team directly:
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
