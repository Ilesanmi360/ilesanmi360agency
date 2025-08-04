/*
  # Create team members table

  1. New Tables
    - `team_members`
      - `id` (uuid, primary key)
      - `name` (text, required)
      - `role` (text, required)
      - `bio` (text, required)
      - `image_url` (text, required)
      - `created_at` (timestamp)

  2. Security
    - Enable RLS on `team_members` table
    - Add policy for public read access (team members are public information)
*/

CREATE TABLE IF NOT EXISTS team_members (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  role text NOT NULL,
  bio text NOT NULL,
  image_url text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE team_members ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can read team members"
  ON team_members
  FOR SELECT
  TO public
  USING (true);

-- Insert sample team members
INSERT INTO team_members (name, role, bio, image_url) VALUES
  (
    'John Ilesanmi',
    'Founder & CEO',
    'Visionary leader with 5+ years of experience in digital marketing and business development. Passionate about helping businesses grow through innovative digital solutions.',
    'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400'
  ),
  (
    'Sarah Johnson',
    'Lead Developer',
    'Full-stack developer specializing in modern web technologies. Expert in React, Node.js, and cloud architecture with a passion for creating scalable solutions.',
    'https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=400'
  ),
  (
    'Michael Chen',
    'UI/UX Designer',
    'Creative designer with an eye for detail and user-centered design. Specializes in creating beautiful, functional interfaces that drive conversions.',
    'https://images.pexels.com/photos/3778876/pexels-photo-3778876.jpeg?auto=compress&cs=tinysrgb&w=400'
  ),
  (
    'Emily Rodriguez',
    'Digital Marketing Specialist',
    'Data-driven marketer with expertise in SEO, social media, and paid advertising. Focused on delivering measurable results and ROI for clients.',
    'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=400'
  );