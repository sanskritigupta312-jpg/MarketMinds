import Hero from '../components/sections/Hero';
import MarqueeStrip from '../components/sections/MarqueeStrip';
import ServicesGrid from '../components/sections/ServicesGrid';
import FounderSpotlight from '../components/sections/FounderSpotlight';
import WhyUs from '../components/sections/WhyUs';
import Testimonials from '../components/sections/Testimonials';
import CTASection from '../components/sections/CTASection';
import PageTransition from '../components/layout/PageTransition';

export default function Home() {
  return (
    <PageTransition>
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
