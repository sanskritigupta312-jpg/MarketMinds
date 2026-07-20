import { useEffect, lazy, Suspense } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import FloatingButtons from './FloatingButtons';
import AscentRail from './AscentRail';

const BackgroundCanvas = lazy(() => import('../three/BackgroundCanvas'));

export default function Layout() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [location.pathname]);

  return (
    <div className="relative flex min-h-screen flex-col overflow-x-clip bg-paper/93 text-charcoal dark:bg-ink/93 dark:text-ivory">
      <Suspense fallback={null}>
        <BackgroundCanvas />
      </Suspense>
      <div className="relative z-10 flex min-h-screen flex-col">
        <Navbar />
        <AscentRail />
        <main className="flex-1">
          <Outlet />
        </main>
        <Footer />
        <FloatingButtons />
      </div>
    </div>
  );
}