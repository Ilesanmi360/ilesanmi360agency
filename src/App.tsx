import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import Testimonials from './pages/Testimonials';
import WebDevelopment from './pages/services/WebDevelopment';
import UIUXDesign from './pages/services/UIUXDesign';
import FunnelBuilding from './pages/services/FunnelBuilding';
import GMBOptimization from './pages/services/GMBOptimization';
import SocialMediaManagement from './pages/services/SocialMediaManagement';
import DigitalMarketing from './pages/services/DigitalMarketing';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Header />
        <main>
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
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
