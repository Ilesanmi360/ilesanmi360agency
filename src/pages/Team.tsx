import React, { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import { Linkedin, Mail, Users } from 'lucide-react';

interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image_url: string;
}

const Team = () => {
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchTeamMembers();
  }, []);

  const fetchTeamMembers = async () => {
    try {
      const { data, error } = await supabase
        .from('team_members')
        .select('*')
        .order('created_at', { ascending: true });

      if (error) {
        console.error('Error fetching team members:', error);
        // Use fallback data if Supabase is not connected
        setTeamMembers(fallbackTeamData);
      } else {
        setTeamMembers(data || fallbackTeamData);
      }
    } catch (error) {
      console.error('Error:', error);
      setTeamMembers(fallbackTeamData);
    } finally {
      setLoading(false);
    }
  };

  // Fallback data for when Supabase is not connected
  const fallbackTeamData: TeamMember[] = [
    {
      id: '1',
      name: 'John Ilesanmi',
      role: 'Founder & CEO',
      bio: 'Visionary leader with 5+ years of experience in digital marketing and business development. Passionate about helping businesses grow through innovative digital solutions.',
      image_url: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: '2',
      name: 'Sarah Johnson',
      role: 'Lead Developer',
      bio: 'Full-stack developer specializing in modern web technologies. Expert in React, Node.js, and cloud architecture with a passion for creating scalable solutions.',
      image_url: 'https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: '3',
      name: 'Michael Chen',
      role: 'UI/UX Designer',
      bio: 'Creative designer with an eye for detail and user-centered design. Specializes in creating beautiful, functional interfaces that drive conversions.',
      image_url: 'https://images.pexels.com/photos/3778876/pexels-photo-3778876.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: '4',
      name: 'Emily Rodriguez',
      role: 'Digital Marketing Specialist',
      bio: 'Data-driven marketer with expertise in SEO, social media, and paid advertising. Focused on delivering measurable results and ROI for clients.',
      image_url: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  if (loading) {
    return (
      <div className="min-h-screen py-20 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange mx-auto mb-4"></div>
          <p className="text-gray-600">Loading team members...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-navy mb-6">
            Meet Our Team
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our talented team of professionals is dedicated to delivering exceptional 
            digital solutions. Get to know the people behind Iles360.
          </p>
        </div>

        {/* Team Grid */}
        {teamMembers.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-16">
            {teamMembers.map((member) => (
              <div
                key={member.id}
               className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl hover:scale-105 transition-all duration-300 group"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={member.image_url}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-navy mb-2">
                    {member.name}
                  </h3>
                 <p className="text-skyblue font-medium mb-4">
                    {member.role}
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {member.bio}
                  </p>
                  <div className="flex space-x-3">
                    <a
                      href="#"
                     className="text-gray-400 hover:text-skyblue hover:scale-110 transition-all duration-300"
                    >
                      <Linkedin className="h-5 w-5" />
                    </a>
                    <a
                      href="#"
                     className="text-gray-400 hover:text-skyblue hover:scale-110 transition-all duration-300"
                    >
                      <Mail className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <Users className="h-16 w-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-600 mb-2">
              Team Information Coming Soon
            </h3>
            <p className="text-gray-500">
              We're updating our team profiles. Please check back soon!
            </p>
          </div>
        )}

        {/* Join Our Team CTA */}
        <div className="bg-gradient-to-r from-navy to-blue-900 rounded-2xl p-8 md:p-12 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Want to Join Our Team?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            We're always looking for talented individuals who share our passion 
            for digital excellence. If you're ready to make an impact, we'd love to hear from you.
          </p>
          <a
            href="/contact"
            className="bg-skyblue text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-skyblue/90 hover:scale-105 transition-all duration-300 inline-block shadow-lg hover:shadow-xl"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </div>
  );
};

export default Team;