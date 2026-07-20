import PageHero from '../components/sections/PageHero';
import PricingTabs from '../components/sections/PricingTabs';
import OnDemandServices from '../components/sections/OnDemandServices';
import CTASection from '../components/sections/CTASection';
import SectionHeading from '../components/ui/SectionHeading';
import Accordion from '../components/ui/Accordion';
import RevealOnScroll from '../components/ui/RevealOnScroll';
import PageTransition from '../components/layout/PageTransition';
import { pricingIntro, pricingFaqs } from '../data/pricing';

export default function Pricing() {
  return (
    <PageTransition>
      <PageHero
        eyebrow={pricingIntro.eyebrow}
        title={pricingIntro.title}
        description={pricingIntro.description}
      />

      <PricingTabs />

      <OnDemandServices />

      <section className="section-pad py-24 sm:py-32">
        <SectionHeading eyebrow="Questions" title="Before you pick a tier." className="mb-14" />
        <RevealOnScroll>
          <Accordion items={pricingFaqs} />
        </RevealOnScroll>
      </section>

      <CTASection />
    </PageTransition>
  );
}
