import React from 'react';
import { Link } from 'react-router-dom';
import { Search, CheckCircle, ArrowRight, MapPin, Star, Camera, Users, TrendingUp, Shield } from 'lucide-react';

const GMBOptimization = () => {
  const features = [
    {
      icon: MapPin,
      title: 'Profile Setup & Optimization',
      description: 'Complete GMB profile setup with accurate business information and optimization.'
    },
    {
      icon: Star,
      title: 'Review Management',
      description: 'Strategic review acquisition and professional response management.'
    },
    {
      icon: Camera,
      title: 'Photo & Video Optimization',
      description: 'High-quality visual content that showcases your business effectively.'
    },
    {
      icon: TrendingUp,
      title: 'Local SEO Strategy',
      description: 'Comprehensive local SEO to improve your search rankings and visibility.'
    },
    {
      icon: Users,
      title: 'Customer Engagement',
      description: 'Active management of customer questions, messages, and interactions.'
    },
    {
      icon: Shield,
      title: 'Reputation Monitoring',
      description: 'Continuous monitoring and protection of your online reputation.'
    }
  ];

  const packages = [
    {
      name: 'GMB Setup',
      price: '₦50,000',
      duration: '1 week',
      features: [
        'Complete profile setup',
        'Business information optimization',
        'Category selection',
        'Basic photo upload',
        'Initial review strategy',
        '1 month monitoring'
      ]
    },
    {
      name: 'Complete GMB Management',
      price: '₦100,000',
      duration: 'Monthly',
      features: [
        'Full profile optimization',
        'Regular content posting',
        'Review management',
        'Photo & video updates',
        'Customer Q&A management',
        'Monthly performance reports',
        'Local citation building'
      ],
      popular: true
    },
    {
      name: 'Enterprise Local SEO',
      price: '₦200,000',
      duration: 'Monthly',
      features: [
        'Multi-location management',
        'Advanced local SEO',
        'Competitor analysis',
        'Local advertising setup',
        'Advanced analytics',
        'Priority support',
        'Quarterly strategy reviews'
      ]
    }
  ];

  const gmbBenefits = [
    'Increased local visibility',
    'Higher search rankings',
    'More customer calls',
    'Improved online reputation',
    'Better customer trust',
    'Increased foot traffic'
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="bg-skyblue/10 w-20 h-20 rounded-xl flex items-center justify-center mx-auto mb-6">
            <Search className="h-10 w-10 text-skyblue" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-navy mb-6">
            GMB Optimization
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Google My Business optimization to improve local search visibility and rankings. 
            Get found by customers in your area and grow your local business.
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

        {/* Why GMB Matters Section */}
        <div className="mb-20 bg-gray-50 rounded-2xl p-8 md:p-12">
          <h2 className="text-3xl font-bold text-navy text-center mb-8">
            Why Google My Business Matters
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {[
              { stat: '46%', label: 'of Google searches are local', description: 'People are actively looking for local businesses' },
              { stat: '76%', label: 'of local searches result in visits', description: 'Local searches drive real foot traffic' },
              { stat: '28%', label: 'of local searches lead to purchases', description: 'Local visibility converts to sales' }
            ].map((stat, index) => (
              <div key={index} className="text-center group hover:scale-105 transition-transform duration-300">
                <div className="text-4xl font-bold text-skyblue mb-2">{stat.stat}</div>
                <h3 className="text-xl font-semibold text-navy mb-2">{stat.label}</h3>
                <p className="text-gray-600">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Features Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-navy text-center mb-12">
            Our GMB Optimization Services
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

        {/* Benefits Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-navy text-center mb-12">
            Benefits of GMB Optimization
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {gmbBenefits.map((benefit, index) => (
              <div key={index} className="flex items-center bg-white p-6 rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
                <CheckCircle className="h-6 w-6 text-skyblue mr-4 flex-shrink-0" />
                <span className="text-gray-700 font-medium">{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Pricing Section */}
        <div id="pricing" className="mb-20">
          <h2 className="text-3xl font-bold text-navy text-center mb-12">
            GMB Optimization Packages
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

        {/* Process Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-navy text-center mb-12">
            Our GMB Optimization Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Audit', description: 'Analyze your current GMB profile and local presence' },
              { step: '02', title: 'Optimize', description: 'Complete profile optimization with accurate information' },
              { step: '03', title: 'Enhance', description: 'Add photos, posts, and engaging content regularly' },
              { step: '04', title: 'Monitor', description: 'Track performance and continuously improve results' }
            ].map((process, index) => (
              <div key={index} className="text-center group hover:scale-105 transition-transform duration-300">
                <div className="bg-skyblue/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-skyblue/20 transition-colors duration-300">
                  <span className="text-2xl font-bold text-skyblue">{process.step}</span>
                </div>
                <h3 className="text-xl font-semibold text-navy mb-2">{process.title}</h3>
                <p className="text-gray-600">{process.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Local Success Section */}
        <div className="mb-20 bg-navy rounded-2xl p-8 md:p-12 text-white">
          <h2 className="text-3xl font-bold text-center mb-12">
            Local Business Success Stories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { stat: '250%', label: 'Increase in Local Calls', description: 'More customers calling directly' },
              { stat: '180%', label: 'More Profile Views', description: 'Higher visibility in local searches' },
              { stat: '4.8★', label: 'Average Review Rating', description: 'Improved customer satisfaction' }
            ].map((success, index) => (
              <div key={index} className="text-center group hover:scale-105 transition-transform duration-300">
                <div className="text-4xl font-bold text-skyblue mb-2">{success.stat}</div>
                <h3 className="text-xl font-semibold mb-2">{success.label}</h3>
                <p className="text-gray-300">{success.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-skyblue to-cyan-400 rounded-2xl p-8 md:p-12 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Dominate Local Search?
          </h2>
          <p className="text-xl text-cyan-100 mb-8 max-w-2xl mx-auto">
            Let's optimize your Google My Business profile and get you found by more local customers. 
            Contact us today for a free GMB audit.
          </p>
          <Link
            to="/contact"
            className="bg-white text-skyblue px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 hover:scale-105 transition-all duration-300 inline-flex items-center shadow-lg hover:shadow-xl"
          >
            Get Free GMB Audit
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default GMBOptimization;