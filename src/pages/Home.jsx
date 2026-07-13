import Hero from "../components/sections/Hero";
import MarqueeStrip from "../components/sections/MarqueeStrip";
import ServicesGrid from "../components/sections/ServicesGrid";
import FounderSpotlight from "../components/sections/FounderSpotlight";
import WhyUs from "../components/sections/WhyUs";
import Testimonials from "../components/sections/Testimonials";
import CTASection from "../components/sections/CTASection";
import PageTransition from "../components/layout/PageTransition";
import Seo from "../components/Seo";

export default function Home() {
  return (
    <PageTransition>
      <Seo
        title="Digital Marketing & Growth Agency"
        description="MarketMinds is a full-service digital agency crafting brand, web and performance marketing strategies that turn attention into growth. Led by Dhruv Verma."
        path="/"
      />
      <Hero />
      <MarqueeStrip />
      <ServicesGrid limit={6} />
      <FounderSpotlight />
      <WhyUs />
      <Testimonials />
      <CTASection />
    </PageTransition>
  );
}
