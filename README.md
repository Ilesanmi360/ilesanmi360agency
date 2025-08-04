# Iles360 - Digital Solutions. Full Circle.

A professional, multi-page agency website built with React, TypeScript, Tailwind CSS, and Supabase.

## Features

- **Multi-page website** with Home, Services, About, Team, and Contact pages
- **Responsive design** optimized for all devices
- **Modern UI/UX** with navy blue (#1E3A8A) and orange (#F97316) color scheme
- **Supabase integration** for dynamic content and form handling
- **Contact form** with database storage
- **Team management** with CMS capabilities
- **Professional branding** with Iles360 logo integration

## Pages

### Home Page
- Hero section with compelling tagline
- Service highlights in grid layout
- Call-to-action buttons

### Services Page
- Detailed service descriptions
- Feature lists for each service
- Professional service icons

### About Us Page
- Company history and story
- Mission, vision, and values
- Impact statistics

### Team Page
- Dynamic team member profiles
- Supabase-powered content management
- Professional team photos and bios

### Contact Page
- Contact form with Supabase integration
- Business location and contact information
- WhatsApp integration
- Google Maps placeholder

## Tech Stack

- **Frontend**: React 18, TypeScript, Tailwind CSS
- **Routing**: React Router DOM
- **Database**: Supabase
- **Icons**: Lucide React
- **Fonts**: Inter (Google Fonts)
- **Build Tool**: Vite

## Getting Started

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd iles360-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up Supabase**
   - Create a new Supabase project
   - Copy `.env.example` to `.env`
   - Add your Supabase URL and anon key to `.env`
   - Run the migrations in the `supabase/migrations` folder

4. **Start development server**
   ```bash
   npm run dev
   ```

## Supabase Setup

The project includes two main database tables:

### team_members
- Stores team member information
- Public read access for displaying team profiles
- Fields: name, role, bio, image_url

### contact_submissions
- Stores contact form submissions
- Public insert access for form submissions
- Fields: name, email, message

## Deployment

The project is ready for deployment on Netlify:

1. Build the project: `npm run build`
2. Deploy the `dist` folder to Netlify
3. Set up environment variables in Netlify dashboard

## Customization

- **Colors**: Modify the color scheme in `tailwind.config.js`
- **Content**: Update page content in the respective page components
- **Logo**: Replace the logo image in the `public` folder
- **Team Members**: Add/edit team members through Supabase dashboard

## Contact Information

**Iles360**
- Location: Ilesanmi Junction, Unilorin Road, Tanke, Ilorin, Kwara State.
- Email: info@iles360.com
- Phone: +234 (0) 123 456 7890

---

*Digital Solutions. Full Circle.*
