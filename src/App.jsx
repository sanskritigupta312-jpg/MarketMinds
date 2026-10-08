import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';

const About        = lazy(() => import('./pages/About'));
const Services     = lazy(() => import('./pages/Services'));
const ServiceDetail = lazy(() => import('./pages/ServiceDetail'));
const Pricing      = lazy(() => import('./pages/Pricing'));
const Work         = lazy(() => import('./pages/Work'));
const Contact      = lazy(() => import('./pages/Contact'));
const NotFound     = lazy(() => import('./pages/NotFound'));
const PrivacyPolicy = lazy(() => import('./pages/legal/PrivacyPolicy'));
const Terms        = lazy(() => import('./pages/legal/Terms'));
const RefundPolicy = lazy(() => import('./pages/legal/RefundPolicy'));

export default function App() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-paper dark:bg-ink" />}>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/"                              element={<Home />} />
          <Route path="/about"                         element={<About />} />
          <Route path="/services"                      element={<Services />} />
          <Route path="/services/:slug"                element={<ServiceDetail />} />
          <Route path="/pricing"                       element={<Pricing />} />
          <Route path="/work"                          element={<Work />} />
          <Route path="/contact"                       element={<Contact />} />
          <Route path="/privacy-policy"                element={<PrivacyPolicy />} />
          <Route path="/terms"                         element={<Terms />} />
          <Route path="/refund-policy"                 element={<RefundPolicy />} />
          <Route path="*"                              element={<NotFound />} />
        </Route>
      </Routes>
    </Suspense>
  );
}
