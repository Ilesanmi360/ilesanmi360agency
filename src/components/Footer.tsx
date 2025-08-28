import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="inline-block mb-4">
              <img
                src="/Iles360.png"
                alt="Iles360 Logo - Digital Solutions Full Circle"
                className="h-12 w-auto hover:scale-105 transition-transform duration-300 brightness-0 invert"
              />
            </Link>
            <p className="text-gray-300 mb-4 max-w-md">
              Digital Solutions. Full Circle. We provide comprehensive digital services 
              to help your business thrive in the digital landscape.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-skyblue transition-all duration-300 hover:scale-110">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-skyblue transition-all duration-300 hover:scale-110">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-skyblue transition-all duration-300 hover:scale-110">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-skyblue transition-all duration-300 hover:scale-110">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-skyblue transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-gray-300 hover:text-skyblue transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-skyblue transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-skyblue transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/testimonials" className="text-gray-300 hover:text-skyblue transition-colors">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-skyblue transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-skyblue mt-0.5 mr-3 flex-shrink-0" />
                <p className="text-gray-300 text-sm">
                  Ilesanmi Junction, Unilorin Road,<br />
                  Tanke, Ilorin, Kwara State
                </p>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-skyblue mr-3" />
                <p className="text-gray-300 text-sm">+234 (0) 123 456 7890</p>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-skyblue mr-3" />
                <p className="text-gray-300 text-sm">info@iles360.com</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-300 text-sm">
            © 2025 Iles360. All rights reserved. Digital Solutions. Full Circle.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;