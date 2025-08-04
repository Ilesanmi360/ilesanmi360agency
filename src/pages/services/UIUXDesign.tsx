import React from 'react';
import { Link } from 'react-router-dom';
import { Palette, CheckCircle, ArrowRight, Eye, Users, Smartphone, Layers, Zap, Target } from 'lucide-react';

const UIUXDesign = () => {
  const features = [
    {
      icon: Eye,
      title: 'User Research',
      description: 'In-depth analysis of your target audience to create user-centered designs.'
    },
    {
      icon: Layers,
      title: 'Wireframing & Prototyping',
      description: 'Interactive prototypes to visualize and test user flows before development.'
    },
    {
      icon: Palette,
      title: 'Visual Design',
      description: 'Beautiful, modern interfaces that align with your brand identity.'
    },
    {
      icon: Smartphone,
      title: 'Responsive Design',
      description: 'Designs that work perfectly across all devices and screen sizes.'
    },
    {
      icon: Target,
      title: 'Conversion Optimization',
      description: 'Strategic design elements that guide users toward desired actions.'
    },
    {
      icon: Zap,
      title: 'Usability Testing',
      description: 'Testing and refinement to ensure optimal user experience.'
    }
  ];

  const packages = [
    {
      name: 'UI Design',
      price: '₦80,000',
      duration: '1-2 weeks',
      features: [
        'Visual design mockups',
        'Brand-aligned interface',
        'Mobile responsive design',
        'Design system basics',
        '2 revision rounds',
        'Design handoff files'
      ]
    },
    {
      name: 'Complete UX/UI',
      price: '₦200,000',
      duration: '3-4 weeks',
      features: [
        'User research & analysis',
        'Wireframes & prototypes',
        'Complete visual design',
        'Comprehensive design system',
        'Usability testing',
        'Developer handoff',
        'Unlimited revisions'
      ],
      popular: true
    },
    {
      name: 'Enterprise Design',
      price: 'Custom Quote',
      duration: '4-8 weeks',
      features: [
        'Comprehensive UX audit',
        'Advanced user research',
        'Complex system design',
        'Multi-platform design',
        'Design team training',
        'Ongoing design support',
        'Priority consultation'
      ]
    }
  ];

  const designTools = [
    'Figma', 'Adobe XD', 'Sketch', 'InVision', 'Principle', 
    'Framer', 'Adobe Creative Suite', 'Miro', 'Hotjar', 'Maze'
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="bg-skyblue/10 w-20 h-20 rounded-xl flex items-center justify-center mx-auto mb-6">
            <Palette className="h-10 w-10 text-skyblue" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-navy mb-6">
            UI/UX Design
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Beautiful, user-centered designs that enhance user experience and drive conversions. 
            We create interfaces that users love and businesses profit from.
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

        {/* Features Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-navy text-center mb-12">
            Our Design Approach
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

        {/* Design Tools Section */}
        <div className="mb-20 bg-gray-50 rounded-2xl p-8 md:p-12">
          <h2 className="text-3xl font-bold text-navy text-center mb-8">
            Design Tools We Master
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {designTools.map((tool, index) => (
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
            UI/UX Design Packages
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

        {/* Design Process Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-navy text-center mb-12">
            Our Design Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {[
              { step: '01', title: 'Research', description: 'Understanding users and business goals' },
              { step: '02', title: 'Ideate', description: 'Brainstorming and concept development' },
              { step: '03', title: 'Design', description: 'Creating wireframes and visual designs' },
              { step: '04', title: 'Test', description: 'User testing and feedback collection' },
              { step: '05', title: 'Refine', description: 'Iterating based on insights and data' }
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

        {/* Benefits Section */}
        <div className="mb-20 bg-navy rounded-2xl p-8 md:p-12 text-white">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why Good Design Matters
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { stat: '200%', label: 'Increase in Conversions', description: 'Well-designed interfaces convert better' },
              { stat: '75%', label: 'Faster User Tasks', description: 'Intuitive design reduces completion time' },
              { stat: '90%', label: 'User Satisfaction', description: 'Beautiful design creates happy users' }
            ].map((benefit, index) => (
              <div key={index} className="text-center group hover:scale-105 transition-transform duration-300">
                <div className="text-4xl font-bold text-skyblue mb-2">{benefit.stat}</div>
                <h3 className="text-xl font-semibold mb-2">{benefit.label}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-skyblue to-cyan-400 rounded-2xl p-8 md:p-12 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your User Experience?
          </h2>
          <p className="text-xl text-cyan-100 mb-8 max-w-2xl mx-auto">
            Let's create designs that your users will love and your business will profit from. 
            Contact us today for a free design consultation.
          </p>
          <Link
            to="/contact"
            className="bg-white text-skyblue px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 hover:scale-105 transition-all duration-300 inline-flex items-center shadow-lg hover:shadow-xl"
          >
            Start Your Design Project
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UIUXDesign;