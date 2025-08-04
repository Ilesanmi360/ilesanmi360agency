import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Globe, Palette, Zap, Search, Share2, TrendingUp, CheckCircle, Star, Users, Award, Target } from 'lucide-react';

const Home = () => {
  const services = [
    {
      icon: Globe,
      title: 'Website Development',
      description: 'Custom, responsive websites built with modern technologies for optimal performance.',
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Beautiful, user-centered designs that enhance user experience and drive conversions.',
    },
    {
      icon: Zap,
      title: 'Funnel Building',
      description: 'Strategic sales funnels designed to convert visitors into loyal customers.',
    },
    {
      icon: Search,
      title: 'GMB Optimization',
      description: 'Google My Business optimization to improve local search visibility and rankings.',
    },
    {
      icon: Share2,
      title: 'Social Media Management',
      description: 'Comprehensive social media strategies to build brand awareness and engagement.',
    },
    {
      icon: TrendingUp,
      title: 'Digital Marketing',
      description: 'Data-driven marketing campaigns that deliver measurable results and ROI.',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-blue-50/30"></div>
        <div className="absolute top-20 left-10 w-72 h-72 bg-skyblue/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-navy/5 rounded-full blur-3xl"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Content Side */}
            <div className="space-y-8">
              {/* Trust Badge */}
              <div className="flex items-center space-x-3">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full border-2 border-white shadow-sm"></div>
                  <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-green-600 rounded-full border-2 border-white shadow-sm"></div>
                  <div className="w-8 h-8 bg-gradient-to-r from-purple-400 to-purple-600 rounded-full border-2 border-white shadow-sm"></div>
                  <div className="w-8 h-8 bg-gradient-to-r from-pink-400 to-pink-600 rounded-full border-2 border-white shadow-sm"></div>
                </div>
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <span className="text-sm text-gray-600 font-medium">50+ Happy Clients</span>
              </div>

              {/* Main Headline */}
              <div className="space-y-6">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-navy leading-[0.9] tracking-tight">
                  Digital Solutions.
                  <span className="block text-skyblue">Full Circle.</span>
                </h1>
                
                <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-2xl">
                  We are a team of creative experts building high-performance websites, 
                  funnels, and digital brands that convert.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link
                  to="/contact"
                  className="group bg-skyblue hover:bg-skyblue/90 text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center"
                >
                  Get a Free Quote
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
                <Link
                  to="/portfolio"
                  className="group border-2 border-navy text-navy hover:bg-navy hover:text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 hover:scale-105 flex items-center justify-center"
                >
                  See Our Work
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-100">
                <div className="text-center">
                  <div className="text-3xl font-bold text-navy">100+</div>
                  <div className="text-sm text-gray-600">Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-navy">50+</div>
                  <div className="text-sm text-gray-600">Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-navy">300%</div>
                  <div className="text-sm text-gray-600">Avg ROI</div>
                </div>
              </div>
            </div>

            {/* Visual Side */}
            <div className="relative">
              {/* Main Hero Image */}
              <div className="relative">
                <div className="bg-white rounded-3xl shadow-2xl overflow-hidden transform rotate-2 hover:rotate-0 transition-transform duration-500">
                  <img
                    src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="Professional working on digital solutions"
                    className="w-full h-auto object-cover"
                  />
                </div>
                
                {/* Floating Cards */}
                <div className="absolute -top-6 -left-6 bg-white rounded-2xl shadow-xl p-4 animate-pulse">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-gray-900">Project Complete</div>
                      <div className="text-xs text-gray-500">42% increase in conversions</div>
                    </div>
                  </div>
                </div>

                <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-4 animate-pulse delay-1000">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-skyblue/10 rounded-full flex items-center justify-center">
                      <TrendingUp className="w-6 h-6 text-skyblue" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-gray-900">Growth Metrics</div>
                      <div className="text-xs text-gray-500">500+ leads generated</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center bg-skyblue/10 text-skyblue px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Target className="w-4 h-4 mr-2" />
              What We Do
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-navy mb-6 leading-tight">
              Services That Drive
              <span className="block text-skyblue">Real Results</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We offer a complete range of digital services designed to help your business 
              succeed online. Every solution is tailored to your unique needs.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div
                  key={index}
                  className="group bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100"
                >
                  <div className="bg-gradient-to-br from-skyblue/10 to-navy/5 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="h-8 w-8 text-skyblue" />
                  </div>
                  <h3 className="text-xl font-bold text-navy mb-4 group-hover:text-skyblue transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="mt-6 flex items-center text-skyblue font-medium group-hover:translate-x-2 transition-transform duration-300">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </div>
                </div>
              );
            })}
          </div>

          {/* View All Services CTA */}
          <div className="text-center mt-16">
            <Link
              to="/services"
              className="inline-flex items-center bg-navy text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-navy/90 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              View All Services
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Content */}
            <div className="space-y-8">
              <div className="inline-flex items-center bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium">
                <Award className="w-4 h-4 mr-2" />
                Proven Results
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold text-navy leading-tight">
                Numbers That
                <span className="block text-skyblue">Speak Volumes</span>
              </h2>
              
              <p className="text-xl text-gray-600 leading-relaxed">
                We measure our success by the growth and achievements of our clients. 
                Here's what we've accomplished together.
              </p>

              <div className="grid grid-cols-2 gap-8">
                {[
                  { number: '100+', label: 'Projects Completed', description: 'Successful digital transformations' },
                  { number: '50+', label: 'Happy Clients', description: 'Businesses we\'ve helped grow' },
                  { number: '300%', label: 'Average ROI', description: 'Return on digital investment' },
                  { number: '24/7', label: 'Support', description: 'Always here when you need us' }
                ].map((stat, index) => (
                  <div key={index} className="group">
                    <div className="text-3xl font-bold text-skyblue mb-2 group-hover:scale-110 transition-transform duration-300">
                      {stat.number}
                    </div>
                    <h3 className="font-semibold text-navy mb-1">{stat.label}</h3>
                    <p className="text-sm text-gray-600">{stat.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Visual */}
            <div className="relative">
              <div className="bg-gradient-to-br from-navy to-blue-900 rounded-3xl p-12 text-white text-center shadow-2xl">
                <Users className="w-16 h-16 text-skyblue mx-auto mb-6" />
                <h3 className="text-2xl font-bold mb-4">Join Our Success Stories</h3>
                <p className="text-blue-100 mb-8 leading-relaxed">
                  Ready to be our next success story? Let's discuss how we can help 
                  transform your digital presence.
                </p>
                <Link
                  to="/contact"
                  className="bg-skyblue hover:bg-skyblue/90 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 inline-flex items-center"
                >
                  Start Your Project
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-32 bg-gradient-to-br from-gray-50 to-blue-50/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-navy mb-6 leading-tight">
            Ready to Transform Your
            <span className="block text-skyblue">Digital Presence?</span>
          </h2>
          <p className="text-xl text-gray-600 mb-12 leading-relaxed max-w-2xl mx-auto">
            Let's discuss how we can help transform your digital presence and 
            create connections that drive real results for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-skyblue hover:bg-skyblue/90 text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl inline-flex items-center justify-center"
            >
              Get a Free Quote
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/portfolio"
              className="border-2 border-navy text-navy hover:bg-navy hover:text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 hover:scale-105 inline-flex items-center justify-center"
            >
              See Our Work
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;