import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

// Lazy load components for better performance
const Home = React.lazy(() => import('./pages/Home'));
const Services = React.lazy(() => import('./pages/Services'));
const About = React.lazy(() => import('./pages/About'));
const Contact = React.lazy(() => import('./pages/Contact'));
const Portfolio = React.lazy(() => import('./pages/Portfolio'));
const Testimonials = React.lazy(() => import('./pages/Testimonials'));
const WebDevelopment = React.lazy(() => import('./pages/services/WebDevelopment'));
const UIUXDesign = React.lazy(() => import('./pages/services/UIUXDesign'));
const FunnelBuilding = React.lazy(() => import('./pages/services/FunnelBuilding'));
const GMBOptimization = React.lazy(() => import('./pages/services/GMBOptimization'));
const SocialMediaManagement = React.lazy(() => import('./pages/services/SocialMediaManagement'));
const DigitalMarketing = React.lazy(() => import('./pages/services/DigitalMarketing'));

// Loading component
const LoadingSpinner = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-skyblue"></div>
  </div>
);

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Header />
        <main role="main">
          <Suspense fallback={<LoadingSpinner />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/services" element={<Services />} />
              <Route path="/services/web-development" element={<WebDevelopment />} />
              <Route path="/services/ui-ux-design" element={<UIUXDesign />} />
              <Route path="/services/funnel-building" element={<FunnelBuilding />} />
              <Route path="/services/gmb-optimization" element={<GMBOptimization />} />
              <Route path="/services/social-media-management" element={<SocialMediaManagement />} />
              <Route path="/services/digital-marketing" element={<DigitalMarketing />} />
              <Route path="/about" element={<About />} />
              <Route path="/testimonials" element={<Testimonials />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
