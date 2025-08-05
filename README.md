# Iles360 - Digital Solutions. Full Circle.

A professional, production-ready agency website built with React, TypeScript, Tailwind CSS, and Supabase. Fully optimized for deployment on Netlify with GitHub integration.

## Features

- **Multi-page website** with Home, Services, About, Team, and Contact pages
- **Responsive design** optimized for all devices
- **Modern UI/UX** with navy blue (#1E3A8A) and orange (#F97316) color scheme
- **Supabase integration** for dynamic content and form handling
- **Contact form** with database storage
- **Team management** with CMS capabilities
- **Professional branding** with Iles360 logo integration
- **Performance optimized** with lazy loading and code splitting
- **SEO optimized** with proper meta tags and structured data
- **Accessibility compliant** with WCAG guidelines
- **Cross-platform compatibility** (Bolt.new, GitHub, Netlify, Supabase)

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
- **Deployment**: Netlify
- **Version Control**: GitHub

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

## Environment Variables

Create a `.env` file in the root directory:

```env
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

**Note:** The website includes fallback functionality and will work without Supabase configuration for demonstration purposes.

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

### Netlify Deployment (Recommended)

1. **Automatic Deployment:**
   - Connect your GitHub repository to Netlify
   - Netlify will automatically detect the build settings
   - The `netlify.toml` file is already configured

2. **Manual Deployment:**
   ```bash
   npm run build
   # Upload the 'dist' folder to Netlify
   ```

3. **Environment Variables in Netlify:**
   - Go to Site Settings > Environment Variables
   - Add your Supabase credentials:
     - `VITE_SUPABASE_URL`
     - `VITE_SUPABASE_ANON_KEY`

### Other Platforms

- **Vercel**: Compatible with zero configuration
- **GitHub Pages**: Requires additional routing configuration
- **Firebase Hosting**: Compatible with build output

## Customization

- **Colors**: Modify the color scheme in `tailwind.config.js`
- **Content**: Update page content in the respective page components
- **Logo**: Replace the logo image in the `public` folder
- **Team Members**: Add/edit team members through Supabase dashboard

## Performance Features

- **Lazy Loading**: Components are loaded on demand
- **Code Splitting**: Optimized bundle sizes
- **Image Optimization**: Responsive images with proper loading
- **Caching**: Proper cache headers for static assets
- **SEO**: Meta tags, structured data, and semantic HTML

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Troubleshooting

### Common Issues

1. **Build Errors**: Ensure all dependencies are installed with `npm install`
2. **Supabase Connection**: Check environment variables and network connectivity
3. **Routing Issues**: Ensure proper redirects are configured (handled by `netlify.toml`)
4. **Performance**: Enable gzip compression and CDN caching

### Development Issues

- **Hot Reload**: Restart dev server if changes aren't reflecting
- **TypeScript Errors**: Run `npm run build` to check for type issues
- **Styling Issues**: Clear browser cache and check Tailwind compilation

## Contact Information

**Iles360**
- Location: Ilesanmi Junction, Unilorin Road, Tanke, Ilorin, Kwara State.
- Email: info@iles360.com
- Phone: +234 (0) 123 456 7890
- Website: https://iles360.com

---

*Digital Solutions. Full Circle.*
