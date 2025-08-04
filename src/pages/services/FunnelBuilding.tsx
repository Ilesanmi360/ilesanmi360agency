import React from 'react';
import { Link } from 'react-router-dom';
import { Zap, CheckCircle, ArrowRight, Target, TrendingUp, Users, Mail, BarChart, Filter } from 'lucide-react';

const FunnelBuilding = () => {
  const features = [
    {
      icon: Target,
      title: 'Landing Page Design',
      description: 'High-converting landing pages optimized for your specific audience and goals.'
    },
    {
      icon: Mail,
      title: 'Email Automation',
      description: 'Automated email sequences that nurture leads and drive conversions.'
    },
    {
      icon: TrendingUp,
      title: 'Conversion Optimization',
      description: 'A/B testing and optimization to maximize your funnel performance.'
    },
    {
      icon: BarChart,
      title: 'Analytics & Tracking',
      description: 'Comprehensive tracking to measure and improve funnel performance.'
    },
    {
      icon: Users,
      title: 'Lead Magnets',
      description: 'Compelling lead magnets that attract and capture qualified prospects.'
    },
    {
      icon: Filter,
      title: 'Lead Qualification',
      description: 'Smart qualification systems to identify your best prospects.'
    }
  ];

  const packages = [
    {
      name: 'Basic Funnel',
      price: '₦120,000',
      duration: '2-3 weeks',
      features: [
        'Single landing page',
        'Lead capture form',
        'Basic email sequence (5 emails)',
        'Thank you page',
        'Basic analytics setup',
        '1 month optimization'
      ]
    },
    {
      name: 'Complete Funnel',
      price: '₦250,000',
      duration: '3-4 weeks',
      features: [
        'Multi-step funnel design',
        'Lead magnet creation',
        'Advanced email automation',
        'Sales page optimization',
        'A/B testing setup',
        'CRM integration',
        '3 months optimization'
      ],
      popular: true
    },
    {
      name: 'Enterprise Funnel',
      price: 'Custom Quote',
      duration: '4-6 weeks',
      features: [
        'Complex multi-channel funnel',
        'Advanced segmentation',
        'Custom integrations',
        'Advanced analytics dashboard',
        'Team training included',
        'Ongoing optimization',
        '6 months support'
      ]
    }
  ];

  const funnelTools = [
    'ClickFunnels', 'Leadpages', 'Unbounce', 'Mailchimp', 'ConvertKit', 
    'HubSpot', 'ActiveCampaign', 'Zapier', 'Google Analytics', 'Hotjar'
  ];

  const funnelSteps = [
    {
      step: 'Awareness',
      title: 'Attract Visitors',
      description: 'Drive targeted traffic through ads, content, and SEO',
      icon: Users
    },
    {
      step: 'Interest',
      title: 'Capture Leads',
      description: 'Convert visitors with compelling lead magnets',
      icon: Target
    },
    {
      step: 'Consideration',
      title: 'Nurture Prospects',
      description: 'Build trust through valuable email sequences',
      icon: Mail
    },
    {
      step: 'Conversion',
      title: 'Close Sales',
      description: 'Convert prospects into paying customers',
      icon: TrendingUp
    }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="bg-skyblue/10 w-20 h-20 rounded-xl flex items-center justify-center mx-auto mb-6">
            <Zap className="h-10 w-10 text-skyblue" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-navy mb-6">
            Funnel Building
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Strategic sales funnels designed to convert visitors into loyal customers. 
            We build automated systems that work 24/7 to grow your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-skyblue text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-skyblue/90 hover:scale-105 transition-all duration-300 inline-flex items-center justify-center shadow-lg hover:shadow-xl"
            >
              Get Free Quote
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <a
              href="#pricing"
              className="border-2 border-navy text-navy px-8 py-4 rounded-xl font-semibold text-lg hover:bg-navy hover:text-white hover:scale-105 transition-all duration-300"
            >
              View Pricing
            </a>
          </div>
        </div>

        {/* Funnel Process Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-navy text-center mb-12">
            How Our Funnels Work
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {funnelSteps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <div key={index} className="text-center group hover:scale-105 transition-transform duration-300">
                  <div className="bg-skyblue/10 w-20 h-20 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:bg-skyblue/20 transition-colors duration-300">
                    <IconComponent className="h-10 w-10 text-skyblue" />
                  </div>
                  <div className="bg-skyblue text-white px-4 py-2 rounded-full text-sm font-semibold mb-4 inline-block">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-semibold text-navy mb-4">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Features Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-navy text-center mb-12">
            What's Included in Our Funnels
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div
                  key={index}
                  className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 group"
                >
                  <div className="bg-skyblue/10 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:bg-skyblue/20 transition-colors duration-300">
                    <IconComponent className="h-8 w-8 text-skyblue" />
                  </div>
                  <h3 className="text-xl font-semibold text-navy mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Tools Section */}
        <div className="mb-20 bg-gray-50 rounded-2xl p-8 md:p-12">
          <h2 className="text-3xl font-bold text-navy text-center mb-8">
            Funnel Building Tools We Use
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {funnelTools.map((tool, index) => (
              <span
                key={index}
                className="bg-white px-6 py-3 rounded-xl text-navy font-medium shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>

        {/* Pricing Section */}
        <div id="pricing" className="mb-20">
          <h2 className="text-3xl font-bold text-navy text-center mb-12">
            Funnel Building Packages
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <div
                key={index}
                className={`bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl hover:scale-105 transition-all duration-300 relative ${
                  pkg.popular ? 'ring-2 ring-skyblue' : ''
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-skyblue text-white px-6 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-navy mb-2">{pkg.name}</h3>
                  <div className="text-3xl font-bold text-skyblue mb-2">{pkg.price}</div>
                  <p className="text-gray-600">{pkg.duration}</p>
                </div>
                <ul className="space-y-4 mb-8">
                  {pkg.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-skyblue mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className={`w-full py-3 px-6 rounded-xl font-semibold text-center transition-all duration-300 hover:scale-105 block ${
                    pkg.popular
                      ? 'bg-skyblue text-white hover:bg-skyblue/90 shadow-lg hover:shadow-xl'
                      : 'bg-gray-100 text-navy hover:bg-gray-200'
                  }`}
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Results Section */}
        <div className="mb-20 bg-navy rounded-2xl p-8 md:p-12 text-white">
          <h2 className="text-3xl font-bold text-center mb-12">
            Funnel Performance Results
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { stat: '300%', label: 'Average ROI Increase', description: 'Our funnels deliver exceptional returns' },
              { stat: '45%', label: 'Conversion Rate Improvement', description: 'Optimized funnels convert better' },
              { stat: '24/7', label: 'Automated Lead Generation', description: 'Your funnel works around the clock' }
            ].map((result, index) => (
              <div key={index} className="text-center group hover:scale-105 transition-transform duration-300">
                <div className="text-4xl font-bold text-skyblue mb-2">{result.stat}</div>
                <h3 className="text-xl font-semibold mb-2">{result.label}</h3>
                <p className="text-gray-300">{result.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-skyblue to-cyan-400 rounded-2xl p-8 md:p-12 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Build Your Sales Funnel?
          </h2>
          <p className="text-xl text-cyan-100 mb-8 max-w-2xl mx-auto">
            Let's create an automated system that converts visitors into customers 24/7. 
            Contact us today for a free funnel strategy consultation.
          </p>
          <Link
            to="/contact"
            className="bg-white text-skyblue px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 hover:scale-105 transition-all duration-300 inline-flex items-center shadow-lg hover:shadow-xl"
          >
            Build My Funnel
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FunnelBuilding;