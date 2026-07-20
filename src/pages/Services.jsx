import PageHero from '../components/sections/PageHero';
import ServicesCardGrid from '../components/sections/ServicesCardGrid';
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
        title="Everything your brand needs. One team accountable for all of it."
        description="Every service below can stand alone, but they're built to compound together — brand work makes performance marketing cheaper, and performance data makes the brand work sharper."
      />

      {/* 6 Service Cards — webvoom-style with individual detail pages */}
      <ServicesCardGrid showHeading={false} />

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
