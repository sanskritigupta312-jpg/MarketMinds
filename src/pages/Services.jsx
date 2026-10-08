import PageHero from '../components/sections/PageHero';
import ServicesCardGrid from '../components/sections/ServicesCardGrid';
import CTASection from '../components/sections/CTASection';
import SectionHeading from '../components/ui/SectionHeading';
import Accordion from '../components/ui/Accordion';
import RevealOnScroll from '../components/ui/RevealOnScroll';
import PageTransition from '../components/layout/PageTransition';
import Seo from '../components/Seo';
import { faqs } from '../data/content';

export default function Services() {
  return (
    <PageTransition>
      <Seo
        title="Services"
        description="Digital marketing, SEO, web design and brand strategy from MarketMinds — one team accountable for everything your brand needs to grow online."
        path="/services"
      />
      <PageHero
        eyebrow="Services"
        title="Everything your brand needs. One team accountable for all of it."
        description="Every service below can stand alone, but they're built to compound together — brand work makes performance marketing cheaper, and performance data makes the brand work sharper."
      />

      {/* 6 Service Cards */}
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
