import PageHero from '../components/sections/PageHero';
import ServiceDetailList from '../components/sections/ServiceDetailList';
import CTASection from '../components/sections/CTASection';
import SectionHeading from '../components/ui/SectionHeading';
import Accordion from '../components/ui/Accordion';
import RevealOnScroll from '../components/ui/RevealOnScroll';
import PageTransition from '../components/layout/PageTransition';
import { faqs } from '../data/content';

export default function Services() {
  return (
    <PageTransition>
      <PageHero
        eyebrow="Services"
        title="Six disciplines. One accountable team."
        description="Every service below can stand alone, but they're built to compound together — brand work makes performance marketing cheaper, and performance data makes the brand work sharper."
      />

      <ServiceDetailList />

      <section className="section-pad py-24 sm:py-32">
        <SectionHeading eyebrow="Questions" title="Before you reach out." className="mb-14" />
        <RevealOnScroll>
          <Accordion items={faqs} />
        </RevealOnScroll>
      </section>

      <CTASection />
    </PageTransition>
  );
}
