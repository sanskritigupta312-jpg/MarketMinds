import { Component } from 'react';

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    // TODO: send this to Sentry (or similar) once you've wired one up.
    console.error('MarketMinds — uncaught error:', error, info);
  }

  render() {
    if (!this.state.hasError) return this.props.children;

    return (
      <div className="flex min-h-screen flex-col items-center justify-center gap-6 bg-paper px-6 text-center dark:bg-ink">
        <span className="font-mono text-[11px] uppercase tracking-widest2 text-gold-600 dark:text-gold-400">
          Something broke
        </span>
        <h1 className="font-display text-3xl text-charcoal dark:text-ivory sm:text-4xl">
          This page hit a snag.
        </h1>
        <p className="max-w-sm text-sm leading-relaxed text-charcoal-muted dark:text-ivory-muted">
          Refreshing usually fixes it. If it keeps happening, reach out and we'll take a look.
        </p>
        <button
          onClick={() => window.location.assign('/')}
          className="btn-primary"
        >
          Back to home
        </button>
      </div>
    );
  }
}
