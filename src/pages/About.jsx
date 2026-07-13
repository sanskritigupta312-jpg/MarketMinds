import { Heart, Eye, ShieldCheck, Zap } from "lucide-react";
import PageHero from "../components/sections/PageHero";
import FounderSpotlight from "../components/sections/FounderSpotlight";
import CTASection from "../components/sections/CTASection";
import RevealOnScroll from "../components/ui/RevealOnScroll";
import SectionHeading from "../components/ui/SectionHeading";
import PageTransition from "../components/layout/PageTransition";
import Seo from "../components/Seo";

const values = [
  {
    icon: Eye,
    title: "Clarity over noise",
    desc: "If a strategy needs three slides of jargon to explain, it isn\u2019t ready. We keep thinking sharp enough to say out loud in one sentence.",
  },
  {
    icon: ShieldCheck,
    title: "Honesty over comfort",
    desc: "We\u2019ll tell a client when their idea won\u2019t work before we take the budget for it. Short-term awkward beats long-term wasted spend.",
  },
  {
    icon: Zap,
    title: "Craft over shortcuts",
    desc: "Templates and stock strategy are how brands start looking like everyone else. We build from the brief, every time.",
  },
  {
    icon: Heart,
    title: "Ownership over excuses",
    desc: "Every account has a senior person who treats the outcome like it\u2019s their own business, not a client project on a list.",
  },
];

export default function About() {
  return (
    <PageTransition>
      <Seo
        title="About Us"
        description="MarketMinds is a small studio built to think like a growth team — led by founder Dhruv Verma, judged on outcomes, not activity."
        path="/about"
      />
      <PageHero
        eyebrow="About MarketMinds"
        title="A small studio, built to think like a growth team."
        description="MarketMinds exists because most marketing work is judged on activity — posts published, ads launched — instead of outcomes. We built the studio around the opposite standard."
      />
      <FounderSpotlight />
      <section className="section-pad py-24 sm:py-32">
        <SectionHeading
          eyebrow="What we believe"
          title="The principles behind every brief."
          className="mb-16 sm:mb-20"
        />
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {values.map((v, i) => (
            <RevealOnScroll key={v.title} delay={i * 0.08}>
              <div className="card flex h-full gap-5 p-8">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-gold-500/30 text-gold-500">
                  <v.icon size={19} strokeWidth={1.75} />
                </span>
                <div className="flex flex-col gap-2">
                  <h3 className="font-display text-lg text-charcoal dark:text-ivory">
                    {v.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-charcoal-muted dark:text-ivory-muted">
                    {v.desc}
                  </p>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </section>
      <CTASection />
    </PageTransition>
  );
}
