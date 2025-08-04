import React from 'react';
import { Link } from 'react-router-dom';
import { Share2, CheckCircle, ArrowRight, Calendar, Camera, TrendingUp, Users, MessageCircle, BarChart } from 'lucide-react';

const SocialMediaManagement = () => {
  const features = [
    {
      icon: Calendar,
      title: 'Content Strategy & Planning',
      description: 'Strategic content calendars tailored to your brand and audience engagement goals.'
    },
    {
      icon: Camera,
      title: 'Content Creation',
      description: 'High-quality visual content, graphics, and copy that resonates with your audience.'
    },
    {
      icon: MessageCircle,
      title: 'Community Management',
      description: 'Active engagement with your audience, responding to comments and messages promptly.'
    },
    {
      icon: TrendingUp,
      title: 'Growth Strategies',
      description: 'Proven tactics to increase followers, engagement, and brand awareness organically.'
    },
    {
      icon: BarChart,
      title: 'Analytics & Reporting',
      description: 'Detailed performance reports with insights and recommendations for improvement.'
    },
    {
      icon: Users,
      title: 'Influencer Partnerships',
      description: 'Strategic collaborations with relevant influencers to expand your reach.'
    }
  ];

  const packages = [
    {
      name: 'Social Starter',
      price: '₦80,000',
      duration: 'Monthly',
      features: [
        '2 social platforms',
        '12 posts per month',
        'Basic content creation',
        'Community management',
        'Monthly analytics report',
        'Hashtag research'
      ]
    },
    {
      name: 'Social Growth',
      price: '₦150,000',
      duration: 'Monthly',
      features: [
        '4 social platforms',
        '20 posts per month',
        'Advanced content creation',
        'Stories & reels',
        'Active community management',
        'Bi-weekly analytics',
        'Competitor analysis',
        'Growth optimization'
      ],
      popular: true
    },
    {
      name: 'Social Enterprise',
      price: '₦300,000',
      duration: 'Monthly',
      features: [
        'All major platforms',
        'Daily posting',
        'Premium content creation',
        'Video content',
        'Influencer partnerships',
        'Social advertising',
        'Weekly reports',
        'Dedicated account manager'
      ]
    }
  ];

  const platforms = [
    'Instagram', 'Facebook', 'Twitter', 'LinkedIn', 'TikTok', 
    'YouTube', 'Pinterest', 'WhatsApp Business', 'Snapchat', 'Threads'
  ];

  const contentTypes = [
    {
      type: 'Visual Content',
      description: 'Eye-catching graphics, photos, and infographics',
      icon: Camera
    },
    {
      type: 'Video Content',
      description: 'Engaging videos, reels, and stories',
      icon: TrendingUp
    },
    {
      type: 'Written Content',
      description: 'Compelling captions and copy',
      icon: MessageCircle
    },
    {
      type: 'Interactive Content',
      description: 'Polls, quizzes, and user-generated content',
      icon: Users
    }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="bg-skyblue/10 w-20 h-20 rounded-xl flex items-center justify-center mx-auto mb-6">
            <Share2 className="h-10 w-10 text-skyblue" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-navy mb-6">
            Social Media Management
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Comprehensive social media strategies to build brand awareness and engagement. 
            We manage your social presence so you can focus on running your business.
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

        {/* Platforms Section */}
        <div className="mb-20 bg-gray-50 rounded-2xl p-8 md:p-12">
          <h2 className="text-3xl font-bold text-navy text-center mb-8">
            Platforms We Manage
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {platforms.map((platform, index) => (
              <span
                key={index}
                className="bg-white px-6 py-3 rounded-xl text-navy font-medium shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300"
              >
                {platform}
              </span>
            ))}
          </div>
        </div>

        {/* Content Types Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-navy text-center mb-12">
            Content We Create
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contentTypes.map((content, index) => {
              const IconComponent = content.icon;
              return (
                <div key={index} className="text-center group hover:scale-105 transition-transform duration-300">
                  <div className="bg-skyblue/10 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:bg-skyblue/20 transition-colors duration-300">
                    <IconComponent className="h-8 w-8 text-skyblue" />
                  </div>
                  <h3 className="text-xl font-semibold text-navy mb-4">
                    {content.type}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {content.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Features Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-navy text-center mb-12">
            Our Social Media Services
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
            Social Media Management Packages
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
            Our Social Media Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Strategy', description: 'Develop a comprehensive social media strategy' },
              { step: '02', title: 'Create', description: 'Produce engaging content tailored to your audience' },
              { step: '03', title: 'Engage', description: 'Actively manage your community and interactions' },
              { step: '04', title: 'Analyze', description: 'Track performance and optimize for better results' }
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

        {/* Results Section */}
        <div className="mb-20 bg-navy rounded-2xl p-8 md:p-12 text-white">
          <h2 className="text-3xl font-bold text-center mb-12">
            Social Media Success Metrics
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { stat: '400%', label: 'Average Follower Growth', description: 'Organic growth across all platforms' },
              { stat: '250%', label: 'Engagement Rate Increase', description: 'Higher quality interactions' },
              { stat: '180%', label: 'Brand Awareness Boost', description: 'Increased brand recognition' }
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
            Ready to Grow Your Social Presence?
          </h2>
          <p className="text-xl text-cyan-100 mb-8 max-w-2xl mx-auto">
            Let's build a strong social media presence that engages your audience and grows your business. 
            Contact us today for a free social media audit.
          </p>
          <Link
            to="/contact"
            className="bg-white text-skyblue px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 hover:scale-105 transition-all duration-300 inline-flex items-center shadow-lg hover:shadow-xl"
          >
            Get Free Social Audit
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SocialMediaManagement;