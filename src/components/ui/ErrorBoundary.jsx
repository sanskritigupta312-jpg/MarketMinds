import { Component } from 'react';
import { AlertTriangle, RotateCcw, Home } from 'lucide-react';

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    // Log error internally without exposing sensitive details to end-users
    if (process.env.NODE_ENV === 'development') {
      console.error('Unhandled runtime error in component tree:', error, errorInfo);
    }
  }

  handleReset = () => {
    this.setState({ hasError: false, error: null });
    window.location.href = '/';
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center section-pad py-24 bg-paper dark:bg-ink text-charcoal dark:text-ivory">
          <div className="card max-w-md w-full p-8 text-center border border-gold-500/30 space-y-6">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gold-500/10 text-gold-500 mx-auto border border-gold-500/20">
              <AlertTriangle size={28} />
            </div>

            <div className="space-y-2">
              <h2 className="font-display text-2xl font-medium">Something went wrong</h2>
              <p className="text-sm text-charcoal-muted dark:text-ivory-muted leading-relaxed">
                An unexpected display error occurred. Please refresh or return to the homepage.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
              <button
                onClick={() => window.location.reload()}
                className="btn-primary text-xs px-5 py-3"
              >
                <RotateCcw size={14} />
                Refresh Page
              </button>
              <button
                onClick={this.handleReset}
                className="btn-outline text-xs px-5 py-3"
              >
                <Home size={14} />
                Return Home
              </button>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
