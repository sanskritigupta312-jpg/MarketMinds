import PageHero from "../components/sections/PageHero";
import ProcessTimeline from "../components/sections/ProcessTimeline";
import WorkShowcase from "../components/sections/WorkShowcase";
import CTASection from "../components/sections/CTASection";
import PageTransition from "../components/layout/PageTransition";
import Seo from "../components/Seo";

export default function Work() {
  return (
    <PageTransition>
      // Work.jsx
      <Seo
        title="Our Approach"
        description="Discover, Strategy, Build, Launch, Grow — the exact five-stage sequence every MarketMinds engagement follows, no black boxes."
        path="/work"
      />
      <PageHero
        eyebrow="Our approach"
        title="How the work actually gets made."
        description="No black boxes. Here's the exact sequence every MarketMinds engagement follows, and what each discipline looks like once it's live."
      />
      <ProcessTimeline />
      <WorkShowcase />
      <CTASection />
    </PageTransition>
  );
}
