import React from 'react';
import { Link } from 'react-router-dom';
import { TrendingUp, CheckCircle, ArrowRight, Search, Mail, Target, BarChart, Megaphone, Zap } from 'lucide-react';

const DigitalMarketing = () => {
  const features = [
    {
      icon: Search,
      title: 'Search Engine Marketing',
      description: 'Strategic SEO and SEM campaigns to increase your online visibility and rankings.'
    },
    {
      icon: Target,
      title: 'Pay-Per-Click Advertising',
      description: 'Targeted PPC campaigns on Google, Facebook, and other platforms for maximum ROI.'
    },
    {
      icon: Mail,
      title: 'Email Marketing',
      description: 'Automated email campaigns that nurture leads and drive customer retention.'
    },
    {
      icon: Megaphone,
      title: 'Content Marketing',
      description: 'Strategic content creation and distribution to attract and engage your audience.'
    },
    {
      icon: Zap,
      title: 'Marketing Automation',
      description: 'Automated workflows that nurture leads and convert prospects into customers.'
    },
    {
      icon: BarChart,
      title: 'Performance Analytics',
      description: 'Comprehensive tracking and reporting to measure and optimize campaign performance.'
    }
  ];

  const packages = [
    {
      name: 'Digital Starter',
      price: '₦100,000',
      duration: 'Monthly',
      features: [
        'Basic SEO optimization',
        'Google Ads management',
        'Email marketing setup',
        'Social media advertising',
        'Monthly performance reports',
        'Basic analytics tracking'
      ]
    },
    {
      name: 'Growth Marketing',
      price: '₦250,000',
      duration: 'Monthly',
      features: [
        'Advanced SEO strategy',
        'Multi-platform PPC campaigns',
        'Email automation sequences',
        'Content marketing strategy',
        'Conversion optimization',
        'Advanced analytics & reporting',
        'Monthly strategy calls',
        'Competitor analysis'
      ],
      popular: true
    },
    {
      name: 'Enterprise Marketing',
      price: 'Custom Quote',
      duration: 'Monthly',
      features: [
        'Comprehensive digital strategy',
        'Advanced automation setup',
        'Multi-channel campaigns',
        'Custom integrations',
        'Dedicated account manager',
        'Weekly performance reviews',
        'Priority support',
        'Advanced attribution modeling'
      ]
    }
  ];

  const marketingChannels = [
    'Google Ads', 'Facebook Ads', 'Instagram Ads', 'LinkedIn Ads', 'YouTube Ads',
    'Email Marketing', 'SEO', 'Content Marketing', 'Affiliate Marketing', 'Influencer Marketing'
  ];

  const marketingServices = [
    {
      category: 'Paid Advertising',
      services: ['Google Ads', 'Facebook Ads', 'Instagram Ads', 'LinkedIn Ads', 'YouTube Ads'],
      icon: Target
    },
    {
      category: 'Organic Marketing',
      services: ['SEO', 'Content Marketing', 'Social Media', 'Email Marketing'],
      icon: TrendingUp
    },
    {
      category: 'Analytics & Optimization',
      services: ['Conversion Tracking', 'A/B Testing', 'Performance Analysis', 'ROI Optimization'],
      icon: BarChart
    }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="bg-skyblue/10 w-20 h-20 rounded-xl flex items-center justify-center mx-auto mb-6">
            <TrendingUp className="h-10 w-10 text-skyblue" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-navy mb-6">
            Digital Marketing
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Data-driven marketing campaigns that deliver measurable results and ROI. 
            We help businesses grow through strategic digital marketing across all channels.
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

        {/* Marketing Services Categories */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-navy text-center mb-12">
            Our Marketing Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {marketingServices.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 group">
                  <div className="bg-skyblue/10 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:bg-skyblue/20 transition-colors duration-300">
                    <IconComponent className="h-8 w-8 text-skyblue" />
                  </div>
                  <h3 className="text-xl font-semibold text-navy mb-4">
                    {service.category}
                  </h3>
                  <ul className="space-y-2">
                    {service.services.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center text-gray-600">
                        <CheckCircle className="h-4 w-4 text-skyblue mr-2 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>

        {/* Marketing Channels Section */}
        <div className="mb-20 bg-gray-50 rounded-2xl p-8 md:p-12">
          <h2 className="text-3xl font-bold text-navy text-center mb-8">
            Marketing Channels We Master
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {marketingChannels.map((channel, index) => (
              <span
                key={index}
                className="bg-white px-6 py-3 rounded-xl text-navy font-medium shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300"
              >
                {channel}
              </span>
            ))}
          </div>
        </div>

        {/* Features Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-navy text-center mb-12">
            What We Deliver
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

        {/* Pricing Section */}
        <div id="pricing" className="mb-20">
          <h2 className="text-3xl font-bold text-navy text-center mb-12">
            Digital Marketing Packages
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
            Our Marketing Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {[
              { step: '01', title: 'Audit', description: 'Analyze current marketing performance' },
              { step: '02', title: 'Strategy', description: 'Develop comprehensive marketing plan' },
              { step: '03', title: 'Execute', description: 'Launch campaigns across channels' },
              { step: '04', title: 'Monitor', description: 'Track performance and metrics' },
              { step: '05', title: 'Optimize', description: 'Continuously improve results' }
            ].map((process, index) => (
              <div key={index} className="text-center group hover:scale-105 transition-transform duration-300">
                <div className="bg-skyblue/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-skyblue/20 transition-colors duration-300">
                  <span className="text-xl font-bold text-skyblue">{process.step}</span>
                </div>
                <h3 className="text-lg font-semibold text-navy mb-2">{process.title}</h3>
                <p className="text-gray-600 text-sm">{process.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Results Section */}
        <div className="mb-20 bg-navy rounded-2xl p-8 md:p-12 text-white">
          <h2 className="text-3xl font-bold text-center mb-12">
            Marketing Results That Matter
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { stat: '350%', label: 'Average ROI', description: 'Return on marketing investment' },
              { stat: '180%', label: 'Lead Increase', description: 'More qualified leads generated' },
              { stat: '65%', label: 'Cost Reduction', description: 'Lower cost per acquisition' },
              { stat: '24/7', label: 'Campaign Monitoring', description: 'Continuous optimization' }
            ].map((result, index) => (
              <div key={index} className="text-center group hover:scale-105 transition-transform duration-300">
                <div className="text-3xl font-bold text-skyblue mb-2">{result.stat}</div>
                <h3 className="text-lg font-semibold mb-2">{result.label}</h3>
                <p className="text-gray-300 text-sm">{result.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-skyblue to-cyan-400 rounded-2xl p-8 md:p-12 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Accelerate Your Growth?
          </h2>
          <p className="text-xl text-cyan-100 mb-8 max-w-2xl mx-auto">
            Let's create a data-driven marketing strategy that delivers real results for your business. 
            Contact us today for a free marketing audit and strategy consultation.
          </p>
          <Link
            to="/contact"
            className="bg-white text-skyblue px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 hover:scale-105 transition-all duration-300 inline-flex items-center shadow-lg hover:shadow-xl"
          >
            Get Free Marketing Audit
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DigitalMarketing;