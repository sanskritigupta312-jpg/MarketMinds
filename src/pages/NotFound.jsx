import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import PageTransition from "../components/layout/PageTransition";

export default function NotFound() {
  return (
    <PageTransition>
      <Seo
        title="Page Not Found"
        description="This page doesn't exist or has moved."
        path="/404"
        noindex
      />
      <section className="section-pad flex min-h-[70vh] flex-col items-center justify-center py-32 text-center">
        <span className="eyebrow mb-6">404</span>
        <h1 className="text-display-lg font-display font-medium text-charcoal dark:text-ivory">
          This page wandered off-brand.
        </h1>
        <p className="mt-6 max-w-md text-base leading-relaxed text-charcoal-muted dark:text-ivory-muted">
          The page you're looking for doesn't exist, or has moved. Let's get you
          back to solid ground.
        </p>
        <Link to="/" className="btn-primary mt-10">
          Back to home
          <ArrowUpRight size={16} />
        </Link>
      </section>
    </PageTransition>
  );
}
