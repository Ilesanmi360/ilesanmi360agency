import React from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, ArrowRight, Globe, Zap, Search, Users, Target, TrendingUp } from 'lucide-react';

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: 'Shoplink Africa Website',
      client: 'Shoplink Africa',
      services: ['Web Development', 'UI/UX', 'SEO'],
      tools: ['Next.js', 'Tailwind CSS', 'Supabase'],
      description: 'Complete website redesign focused on performance optimization, resulting in a 42% increase in user engagement and improved conversion rates.',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600',
      icon: Globe,
      results: '42% increase in engagement'
    },
    {
      id: 2,
      title: 'The Digital Plug Funnel System',
      client: 'The Digital Plug',
      services: ['Funnel Building', 'Copywriting', 'Automation'],
      tools: ['Figma', 'Zapier', 'Mailchimp'],
      description: 'Strategic conversion funnel design with automated email sequences and lead nurturing system that generated exceptional results.',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600',
      icon: Zap,
      results: '500+ leads in 30 days'
    },
    {
      id: 3,
      title: 'GMB for Café Spot Ilorin',
      client: 'Café Spot',
      services: ['GMB Setup', 'Local SEO'],
      tools: ['GMB', 'Canva', 'Maps'],
      description: 'Complete Google My Business optimization with local SEO strategy, professional photography, and review management system.',
      image: 'https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=600',
      icon: Search,
      results: '75% increase in foot traffic'
    }
  ];

  const getServiceIcon = (service: string) => {
    switch (service) {
      case 'Web Development':
        return Globe;
      case 'UI/UX':
        return Target;
      case 'SEO':
        return TrendingUp;
      case 'Funnel Building':
        return Zap;
      case 'Copywriting':
        return Users;
      case 'Automation':
        return Target;
      case 'GMB Setup':
        return Search;
      case 'Local SEO':
        return Search;
      default:
        return Globe;
    }
  };

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-navy mb-6">
            Our Work
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how we've helped businesses transform their digital presence 
            and achieve remarkable results. Each project showcases our commitment 
            to delivering exceptional digital solutions.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-20">
          {projects.map((project) => {
            const IconComponent = project.icon;
            return (
              <div
                key={project.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl hover:scale-105 transition-all duration-300 group"
              >
                {/* Project Image */}
                <div className="aspect-video overflow-hidden relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-navy/20 group-hover:bg-navy/10 transition-colors duration-300"></div>
                  <div className="absolute top-4 left-4">
                    <div className="bg-white/90 backdrop-blur-sm w-12 h-12 rounded-xl flex items-center justify-center">
                      <IconComponent className="h-6 w-6 text-skyblue" />
                    </div>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-8">
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-navy mb-2">
                      {project.title}
                    </h3>
                    <p className="text-skyblue font-medium mb-3">
                      Client: {project.client}
                    </p>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      {project.description}
                    </p>
                  </div>

                  {/* Services */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-800 mb-2">Services:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.services.map((service, index) => {
                        const ServiceIcon = getServiceIcon(service);
                        return (
                          <span
                            key={index}
                            className="inline-flex items-center bg-skyblue/10 text-skyblue px-3 py-1 rounded-full text-sm font-medium"
                          >
                            <ServiceIcon className="h-3 w-3 mr-1" />
                            {service}
                          </span>
                        );
                      })}
                    </div>
                  </div>

                  {/* Tools */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-800 mb-2">Tools Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tools.map((tool, index) => (
                        <span
                          key={index}
                          className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Results */}
                  <div className="bg-gradient-to-r from-skyblue/10 to-cyan-50 rounded-xl p-4 mb-6">
                    <div className="flex items-center">
                      <TrendingUp className="h-5 w-5 text-skyblue mr-2" />
                      <span className="font-semibold text-navy">{project.results}</span>
                    </div>
                  </div>

                  {/* View Project Button */}
                  <button className="w-full bg-navy text-white py-3 px-6 rounded-xl font-semibold hover:bg-navy/90 hover:scale-105 transition-all duration-300 flex items-center justify-center group-hover:shadow-lg">
                    View Project Details
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Stats Section */}
        <div className="bg-navy rounded-2xl p-8 md:p-12 text-white mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">
            Project Success Metrics
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { stat: '500+', label: 'Leads Generated', description: 'Through strategic funnel optimization' },
              { stat: '75%', label: 'Traffic Increase', description: 'Average local business growth' },
              { stat: '42%', label: 'Engagement Boost', description: 'Website performance improvement' }
            ].map((metric, index) => (
              <div key={index} className="text-center group hover:scale-105 transition-transform duration-300">
                <div className="text-4xl font-bold text-skyblue mb-2">{metric.stat}</div>
                <h3 className="text-xl font-semibold mb-2">{metric.label}</h3>
                <p className="text-gray-300">{metric.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-skyblue to-cyan-400 rounded-2xl p-8 md:p-12 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Be Our Next Success Story?
          </h2>
          <p className="text-xl text-cyan-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help transform your digital presence and 
            achieve remarkable results for your business.
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

export default Portfolio;