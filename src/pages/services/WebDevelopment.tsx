import React from 'react';
import { Link } from 'react-router-dom';
import { Globe, CheckCircle, ArrowRight, Code, Smartphone, Search, Shield, Zap, Users } from 'lucide-react';

const WebDevelopment = () => {
  const features = [
    {
      icon: Code,
      title: 'Custom Development',
      description: 'Tailored solutions built with modern technologies like React, Node.js, and TypeScript.'
    },
    {
      icon: Smartphone,
      title: 'Responsive Design',
      description: 'Mobile-first approach ensuring perfect display across all devices and screen sizes.'
    },
    {
      icon: Search,
      title: 'SEO Optimized',
      description: 'Built-in SEO best practices to help your website rank higher in search results.'
    },
    {
      icon: Shield,
      title: 'Security First',
      description: 'Robust security measures including SSL certificates and secure coding practices.'
    },
    {
      icon: Zap,
      title: 'Fast Performance',
      description: 'Optimized for speed with lazy loading, image compression, and efficient code.'
    },
    {
      icon: Users,
      title: 'User-Friendly CMS',
      description: 'Easy-to-use content management system for updating your website content.'
    }
  ];

  const packages = [
    {
      name: 'Starter Website',
      price: '₦150,000',
      duration: '2-3 weeks',
      features: [
        'Up to 5 pages',
        'Responsive design',
        'Basic SEO setup',
        'Contact form',
        'Social media integration',
        '3 months support'
      ]
    },
    {
      name: 'Business Website',
      price: '₦300,000',
      duration: '3-4 weeks',
      features: [
        'Up to 10 pages',
        'Advanced responsive design',
        'Complete SEO optimization',
        'Blog functionality',
        'Analytics integration',
        'E-commerce ready',
        '6 months support'
      ],
      popular: true
    },
    {
      name: 'Enterprise Solution',
      price: 'Custom Quote',
      duration: '4-8 weeks',
      features: [
        'Unlimited pages',
        'Custom functionality',
        'Advanced integrations',
        'Multi-language support',
        'Custom admin panel',
        'Priority support',
        '12 months support'
      ]
    }
  ];

  const technologies = [
    'React', 'TypeScript', 'Node.js', 'Next.js', 'Tailwind CSS', 
    'Supabase', 'MongoDB', 'PostgreSQL', 'AWS', 'Vercel'
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="bg-skyblue/10 w-20 h-20 rounded-xl flex items-center justify-center mx-auto mb-6">
            <Globe className="h-10 w-10 text-skyblue" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-navy mb-6">
            Website Development
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Custom, responsive websites built with modern technologies for optimal performance. 
            We create digital experiences that engage users and drive business growth.
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

        {/* Technologies Section */}
        <div className="mb-20 bg-gray-50 rounded-2xl p-8 md:p-12">
          <h2 className="text-3xl font-bold text-navy text-center mb-8">
            Technologies We Use
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {technologies.map((tech, index) => (
              <span
                key={index}
                className="bg-white px-6 py-3 rounded-xl text-navy font-medium shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Pricing Section */}
        <div id="pricing" className="mb-20">
          <h2 className="text-3xl font-bold text-navy text-center mb-12">
            Website Development Packages
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
            Our Development Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Discovery', description: 'We understand your business goals and requirements' },
              { step: '02', title: 'Design', description: 'Create wireframes and visual designs for approval' },
              { step: '03', title: 'Development', description: 'Build your website using modern technologies' },
              { step: '04', title: 'Launch', description: 'Deploy your website and provide ongoing support' }
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

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-skyblue to-cyan-400 rounded-2xl p-8 md:p-12 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Build Your Website?
          </h2>
          <p className="text-xl text-cyan-100 mb-8 max-w-2xl mx-auto">
            Let's create a powerful online presence for your business. 
            Contact us today for a free consultation and custom quote.
          </p>
          <Link
            to="/contact"
            className="bg-white text-skyblue px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 hover:scale-105 transition-all duration-300 inline-flex items-center shadow-lg hover:shadow-xl"
          >
            Start Your Project
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default WebDevelopment;