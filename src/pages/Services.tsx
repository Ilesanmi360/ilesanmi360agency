import React from 'react';
import { Globe, Palette, Zap, Search, Share2, TrendingUp, CheckCircle } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Globe,
      title: 'Website Development',
      description: 'Custom, responsive websites built with modern technologies for optimal performance and user experience.',
      features: [
        'Responsive Design',
        'SEO Optimization',
        'Fast Loading Speed',
        'Content Management System',
        'E-commerce Integration',
        'Mobile-First Approach'
      ]
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Beautiful, user-centered designs that enhance user experience and drive conversions.',
      features: [
        'User Research & Analysis',
        'Wireframing & Prototyping',
        'Visual Design',
        'Usability Testing',
        'Brand Identity Design',
        'Design System Creation'
      ]
    },
    {
      icon: Zap,
      title: 'Funnel Building',
      description: 'Strategic sales funnels designed to convert visitors into loyal customers.',
      features: [
        'Landing Page Design',
        'Lead Magnet Creation',
        'Email Automation',
        'Conversion Optimization',
        'A/B Testing',
        'Analytics & Tracking'
      ]
    },
    {
      icon: Search,
      title: 'GMB Optimization',
      description: 'Google My Business optimization to improve local search visibility and rankings.',
      features: [
        'Profile Setup & Optimization',
        'Local SEO Strategy',
        'Review Management',
        'Photo & Video Optimization',
        'Local Citation Building',
        'Performance Monitoring'
      ]
    },
    {
      icon: Share2,
      title: 'Social Media Management',
      description: 'Comprehensive social media strategies to build brand awareness and engagement.',
      features: [
        'Content Strategy & Planning',
        'Social Media Posting',
        'Community Management',
        'Influencer Partnerships',
        'Social Media Advertising',
        'Analytics & Reporting'
      ]
    },
    {
      icon: TrendingUp,
      title: 'Digital Marketing',
      description: 'Data-driven marketing campaigns that deliver measurable results and ROI.',
      features: [
        'Search Engine Marketing',
        'Pay-Per-Click Advertising',
        'Email Marketing',
        'Content Marketing',
        'Marketing Automation',
        'Performance Analytics'
      ]
    }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-navy mb-6">
            Our Services
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We offer a complete range of digital services designed to help your business 
            succeed online. Each service is tailored to meet your specific needs and goals.
          </p>
        </div>

        {/* Services Grid */}
        <div className="space-y-16">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            const isEven = index % 2 === 0;
            
            return (
              <div
                key={index}
                className={`flex flex-col lg:flex-row items-center gap-12 ${
                  isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Content */}
                <div className="flex-1">
                  <div className="flex items-center mb-6">
                    <div className="bg-skyblue/10 w-16 h-16 rounded-xl flex items-center justify-center mr-4">
                      <IconComponent className="h-8 w-8 text-skyblue" />
                    </div>
                    <h2 className="text-3xl font-bold text-navy">
                      {service.title}
                    </h2>
                  </div>
                  
                  <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-skyblue mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Visual */}
                <div className="flex-1">
                  <div className="bg-gradient-to-br from-navy to-blue-900 rounded-2xl p-12 text-white text-center hover:scale-105 transition-transform duration-300">
                    <IconComponent className="h-24 w-24 text-skyblue mx-auto mb-6" />
                    <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                    <p className="text-gray-300">
                      Professional {service.title.toLowerCase()} services tailored to your business needs.
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="mt-20 bg-gradient-to-r from-skyblue to-cyan-400 rounded-2xl p-12 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-cyan-100 mb-8 max-w-2xl mx-auto">
            Let's discuss which services are right for your business. 
            Contact us today for a free consultation and custom quote.
          </p>
          <a
            href="/contact"
            className="bg-white text-skyblue px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 hover:scale-105 transition-all duration-300 inline-block shadow-lg hover:shadow-xl"
          >
            Get a Free Quote
          </a>
        </div>
      </div>
    </div>
  );
};

export default Services;