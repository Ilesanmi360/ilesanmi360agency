import React from 'react';
import { Link } from 'react-router-dom';
import { Star, Quote, ArrowRight, Users } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Femi Adebayo',
      role: 'CEO',
      company: 'Shoplink Africa',
      quote: 'Iles360 completely transformed our online presence. From our website to local visibility, the results were beyond our expectations.',
      rating: 5,
      project: 'Website Development & SEO'
    },
    {
      id: 2,
      name: 'Maryam Yusuf',
      role: 'Founder',
      company: 'The Digital Plug',
      quote: 'They built our funnel from scratch, optimized it for conversion, and set up our GMB. Highly recommended!',
      rating: 5,
      project: 'Funnel Building & GMB Setup'
    },
    {
      id: 3,
      name: 'Dr. Tobi Lawal',
      role: 'Brand Strategist',
      company: 'Bravedge Studio',
      quote: 'Their design and execution were flawless. The website they built is stunning and user-focused.',
      rating: 5,
      project: 'UI/UX Design & Development'
    }
  ];

  const stats = [
    { number: '50+', label: 'Happy Clients' },
    { number: '4.9★', label: 'Average Rating' },
    { number: '100%', label: 'Project Success Rate' },
    { number: '24/7', label: 'Support Available' }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-navy mb-6">
            What Our Clients Say
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say 
            about working with Iles360 and the results we've delivered together.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl hover:scale-105 transition-all duration-300 group relative"
            >
              {/* Quote Icon */}
              <div className="absolute -top-4 left-8">
                <div className="bg-skyblue w-8 h-8 rounded-full flex items-center justify-center">
                  <Quote className="h-4 w-4 text-white" />
                </div>
              </div>

              {/* Rating */}
              <div className="flex items-center mb-6 pt-4">
                {[...Array(testimonial.rating)].map((_, index) => (
                  <Star key={index} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-gray-700 leading-relaxed mb-6 italic">
                "{testimonial.quote}"
              </blockquote>

              {/* Project Type */}
              <div className="mb-6">
                <span className="bg-skyblue/10 text-skyblue px-3 py-1 rounded-full text-sm font-medium">
                  {testimonial.project}
                </span>
              </div>

              {/* Client Info */}
              <div className="flex items-center">
                <div className="w-12 h-12 bg-skyblue/10 rounded-full flex items-center justify-center mr-4">
                  <span className="text-skyblue font-bold text-lg">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <h4 className="font-semibold text-navy">{testimonial.name}</h4>
                  <p className="text-gray-600 text-sm">
                    {testimonial.role}, {testimonial.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Client Success Stats */}
        <div className="bg-gray-50 rounded-2xl p-8 md:p-12 mb-20">
          <h2 className="text-3xl font-bold text-navy text-center mb-12">
            Client Success by the Numbers
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group hover:scale-110 transition-transform duration-300">
                <div className="text-4xl md:text-5xl font-bold text-skyblue mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Testimonials Preview */}
        <div className="bg-navy rounded-2xl p-8 md:p-12 text-white text-center mb-20">
          <Users className="h-16 w-16 text-skyblue mx-auto mb-6" />
          <h2 className="text-3xl font-bold mb-6">
            Join Our Growing Family of Satisfied Clients
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            We've helped businesses across Nigeria and beyond achieve their digital goals. 
            From startups to established enterprises, our clients trust us to deliver results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/portfolio"
              className="bg-skyblue text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-skyblue/90 hover:scale-105 transition-all duration-300 inline-flex items-center justify-center shadow-lg hover:shadow-xl"
            >
              View Our Work
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-navy hover:scale-105 transition-all duration-300"
            >
              Start Your Project
            </Link>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-skyblue to-cyan-400 rounded-2xl p-8 md:p-12 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Write Your Success Story?
          </h2>
          <p className="text-xl text-cyan-100 mb-8 max-w-2xl mx-auto">
            Join our satisfied clients and experience the Iles360 difference. 
            Let's discuss how we can help transform your digital presence.
          </p>
          <Link
            to="/contact"
            className="bg-white text-skyblue px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 hover:scale-105 transition-all duration-300 inline-flex items-center shadow-lg hover:shadow-xl"
          >
            Get Your Free Quote
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;