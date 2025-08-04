import React from 'react';
import { Target, Eye, Heart, Users, Award, Clock } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Target,
      title: 'Excellence',
      description: 'We strive for excellence in every project, delivering high-quality solutions that exceed expectations.'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'We work closely with our clients as partners, ensuring their vision becomes reality.'
    },
    {
      icon: Heart,
      title: 'Integrity',
      description: 'We conduct business with honesty, transparency, and ethical practices in all our interactions.'
    },
    {
      icon: Award,
      title: 'Innovation',
      description: 'We embrace cutting-edge technologies and creative solutions to stay ahead of the curve.'
    }
  ];

  const stats = [
    { number: '100+', label: 'Projects Completed' },
    { number: '50+', label: 'Happy Clients' },
    { number: '3+', label: 'Years Experience' },
    { number: '24/7', label: 'Support Available' }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-navy mb-6">
            About Iles360
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Digital Solutions. Full Circle. We're passionate about helping businesses 
            thrive in the digital world through innovative solutions and exceptional service.
          </p>
        </div>

        {/* Company Story */}
        <div className="mb-20">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 hover:shadow-xl transition-shadow duration-300">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-navy mb-6">Our Story</h2>
                <div className="space-y-4 text-gray-600 leading-relaxed">
                  <p>
                    Founded with roots in Ilorin, Kwara State, Iles360 emerged from a simple 
                    yet powerful vision: to provide comprehensive digital solutions that help 
                    businesses succeed in an increasingly digital world. The name "Iles360" 
                    reflects our founder's heritage and our commitment to 360-degree digital excellence.
                  </p>
                  <p>
                    What started as a small team of passionate developers and designers 
                    has grown into a full-service digital agency. We've had the privilege 
                    of working with businesses of all sizes, from startups to established 
                    enterprises, helping them achieve their digital goals.
                  </p>
                  <p>
                    From our base in Tanke, Ilorin, we serve clients across Nigeria and beyond, 
                    bringing world-class digital solutions with a personal touch. Our "Full Circle" 
                    approach means we handle every aspect of your digital presence, ensuring 
                    seamless integration and maximum impact.
                  </p>
                </div>
              </div>
              <div className="bg-gradient-to-br from-navy to-blue-900 rounded-xl p-8 text-white text-center">
                <Clock className="h-16 w-16 text-skyblue mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-4">Since 2022</h3>
                <p className="text-gray-300">
                  Delivering exceptional digital solutions and building lasting 
                  partnerships with our clients.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Mission, Vision, Values */}
        <div className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {/* Mission */}
            <div className="bg-gradient-to-br from-skyblue to-cyan-400 rounded-2xl p-8 text-white hover:scale-105 transition-transform duration-300">
              <Target className="h-12 w-12 text-white mb-6" />
              <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
              <p className="text-cyan-100 leading-relaxed">
                To empower businesses with innovative digital solutions that drive growth, 
                enhance customer experiences, and create lasting competitive advantages 
                in the digital marketplace.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-navy rounded-2xl p-8 text-white hover:scale-105 transition-transform duration-300">
              <Eye className="h-12 w-12 text-skyblue mb-6" />
              <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
              <p className="text-gray-300 leading-relaxed">
                To be the leading digital agency that transforms businesses through 
                cutting-edge technology, creative design, and strategic thinking, 
                making digital success accessible to all.
              </p>
            </div>
          </div>

          {/* Values */}
          <div>
            <h2 className="text-3xl font-bold text-navy text-center mb-12">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => {
                const IconComponent = value.icon;
                return (
                  <div key={index} className="text-center group hover:scale-105 transition-transform duration-300">
                    <div className="bg-skyblue/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-skyblue/20 transition-colors duration-300">
                      <IconComponent className="h-8 w-8 text-skyblue" />
                    </div>
                    <h3 className="text-xl font-semibold text-navy mb-3">
                      {value.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="mb-20 bg-gray-50 rounded-2xl p-8 md:p-12 hover:shadow-lg transition-shadow duration-300">
          <h2 className="text-3xl font-bold text-navy text-center mb-12">
            Our Impact in Numbers
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

        {/* Meet the Team Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-navy text-center mb-12">
            Meet the Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl hover:scale-105 transition-all duration-300 group">
              <div className="aspect-square overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt="John Ilesanmi"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-navy mb-2">
                  John Ilesanmi
                </h3>
                <p className="text-skyblue font-medium mb-4">
                  Founder & CEO
                </p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Visionary leader with 5+ years of experience in digital marketing and business development. 
                  Passionate about helping businesses grow through innovative digital solutions.
                </p>
              </div>
            </div>

            {/* Team Member 2 */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl hover:scale-105 transition-all duration-300 group">
              <div className="aspect-square overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt="Sarah Johnson"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-navy mb-2">
                  Sarah Johnson
                </h3>
                <p className="text-skyblue font-medium mb-4">
                  Lead Developer
                </p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Full-stack developer specializing in modern web technologies. Expert in React, Node.js, 
                  and cloud architecture with a passion for creating scalable solutions.
                </p>
              </div>
            </div>

            {/* Team Member 3 */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl hover:scale-105 transition-all duration-300 group">
              <div className="aspect-square overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/3778876/pexels-photo-3778876.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt="Michael Chen"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-navy mb-2">
                  Michael Chen
                </h3>
                <p className="text-skyblue font-medium mb-4">
                  UI/UX Designer
                </p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Creative designer with an eye for detail and user-centered design. Specializes in creating 
                  beautiful, functional interfaces that drive conversions.
                </p>
              </div>
            </div>

            {/* Team Member 4 */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl hover:scale-105 transition-all duration-300 group">
              <div className="aspect-square overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt="Emily Rodriguez"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-navy mb-2">
                  Emily Rodriguez
                </h3>
                <p className="text-skyblue font-medium mb-4">
                  Digital Marketing Specialist
                </p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Data-driven marketer with expertise in SEO, social media, and paid advertising. 
                  Focused on delivering measurable results and ROI for clients.
                </p>
              </div>
            </div>

            {/* Team Member 5 */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl hover:scale-105 transition-all duration-300 group">
              <div className="aspect-square overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt="David Okafor"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-navy mb-2">
                  David Okafor
                </h3>
                <p className="text-skyblue font-medium mb-4">
                  Content Strategist
                </p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Creative content strategist with expertise in storytelling and brand messaging. 
                  Helps businesses connect with their audience through compelling content.
                </p>
              </div>
            </div>

            {/* Team Member 6 */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl hover:scale-105 transition-all duration-300 group">
              <div className="aspect-square overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt="Aisha Mohammed"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-navy mb-2">
                  Aisha Mohammed
                </h3>
                <p className="text-skyblue font-medium mb-4">
                  Project Manager
                </p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Experienced project manager ensuring smooth delivery of client projects. 
                  Expert in agile methodologies and client relationship management.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;