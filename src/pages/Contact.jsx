import PageHero from "../components/sections/PageHero";
import ContactForm from "../components/sections/ContactForm";
import ContactInfo from "../components/sections/ContactInfo";
import RevealOnScroll from "../components/ui/RevealOnScroll";
import PageTransition from "../components/layout/PageTransition";
import Seo from "../components/Seo";

export default function Contact() {
  return (
    <PageTransition>
      <Seo
        title="Contact"
        description="Tell us about your project and where you're stuck. MarketMinds replies within one business day — no sales script."
        path="/contact"
      />
      <PageHero
        eyebrow="Contact"
        title="Let's talk about the work."
        description="Tell us a little about the project and where you're stuck — we'll come back with next steps, not a sales script."
      />
      <section className="section-pad pb-24 sm:pb-32">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.3fr_1fr]">
          <RevealOnScroll direction="right">
            <ContactForm />
          </RevealOnScroll>
          <ContactInfo />
        </div>

      </section>
    </PageTransition>
  );
}