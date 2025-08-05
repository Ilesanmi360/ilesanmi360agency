import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'About', href: '/about' },
    { name: 'Testimonials', href: '/testimonials' },
    { name: 'Contact', href: '/contact' },
  ];

  const servicePages = [
    { name: 'All Services', href: '/services' },
    { name: 'Website Development', href: '/services/web-development' },
    { name: 'UI/UX Design', href: '/services/ui-ux-design' },
    { name: 'Funnel Building', href: '/services/funnel-building' },
    { name: 'GMB Optimization', href: '/services/gmb-optimization' },
    { name: 'Social Media Management', href: '/services/social-media-management' },
    { name: 'Digital Marketing', href: '/services/digital-marketing' },
  ];

  const isActive = (path: string) => location.pathname === path;
  const isServicesActive = () => location.pathname.startsWith('/services');

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-gradient-to-r from-skyblue to-cyan-400 rounded-lg flex items-center justify-center mr-2">
                <span className="text-white font-bold text-lg">I</span>
              </div>
              <span className="text-2xl font-bold text-navy">Iles360</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-sm font-medium transition-all duration-300 hover:scale-105 ${
                  isActive(item.href)
                    ? 'text-skyblue border-b-2 border-skyblue'
                    : 'text-gray-700 hover:text-skyblue'
                }`}
              >
                {item.name}
              </Link>
            ))}
            
            {/* Services Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <Link
                to="/services"
                className={`text-sm font-medium transition-all duration-300 hover:scale-105 flex items-center ${
                  isServicesActive()
                    ? 'text-skyblue border-b-2 border-skyblue'
                    : 'text-gray-700 hover:text-skyblue'
                }`}
              >
                Services
                <ChevronDown className={`ml-1 h-4 w-4 transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`} />
              </Link>
              
              {/* Dropdown Menu */}
              {isServicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-xl border border-gray-100 py-2 z-50">
                  {servicePages.map((service) => (
                    <Link
                      key={service.name}
                      to={service.href}
                      className={`block px-4 py-3 text-sm transition-all duration-200 hover:bg-skyblue/10 hover:text-skyblue ${
                        isActive(service.href) ? 'text-skyblue bg-skyblue/5' : 'text-gray-700'
                      }`}
                      onClick={() => setIsServicesOpen(false)}
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link
              to="/contact"
              className="bg-skyblue text-white px-6 py-3 rounded-2xl font-semibold hover:bg-skyblue/90 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Work with us
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-gray-700" />
            ) : (
              <Menu className="h-6 w-6 text-gray-700" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`block px-3 py-2 text-base font-medium transition-colors duration-200 ${
                    isActive(item.href)
                      ? 'text-skyblue bg-skyblue/10 rounded-xl'
                      : 'text-gray-700 hover:text-skyblue hover:bg-gray-50 rounded-xl'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              
              {/* Mobile Services Section */}
              <div className="pt-2">
                <div className="px-3 py-2 text-base font-medium text-gray-900 bg-gray-50 rounded-xl mb-2">
                  Services
                </div>
                {servicePages.map((service) => (
                  <Link
                    key={service.name}
                    to={service.href}
                    className={`block px-6 py-2 text-sm transition-colors duration-200 ${
                      isActive(service.href)
                        ? 'text-skyblue bg-skyblue/10 rounded-xl'
                        : 'text-gray-600 hover:text-skyblue hover:bg-gray-50 rounded-xl'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
              
              <Link
                to="/contact"
                className="block px-3 py-2 mt-4 bg-skyblue text-white text-center rounded-xl font-medium hover:bg-skyblue/90 transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Get Free Quote
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;