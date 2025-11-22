# PetMedia Marketing Website

A modern, responsive marketing website for the PetMedia pet adoption mobile app, built with Next.js 15, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Responsive Design**: Mobile-first approach with beautiful gradients and animations
- **Internationalization**: Turkish/English language support
- **Interactive Components**: 
  - Auto-advancing screenshots carousel
  - Smooth scrolling navigation
  - Interactive FAQ accordion
  - Newsletter signup with mock API
- **SEO Optimized**: Complete meta tags, structured data, sitemap, and robots.txt
- **Performance**: Optimized images, fonts, and animations with reduced motion support
- **Accessibility**: ARIA labels, semantic HTML, and keyboard navigation

## 🛠 Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Fonts**: Inter (body), Fraunces (headings)
- **Icons**: Lucide React
- **Deployment**: Vercel-ready

## 📱 Sections

1. **Header**: Logo, navigation, language toggle, download CTA
2. **Hero**: Main headline, app store badges, phone mockup
3. **Features**: Three main app features with gradient cards
4. **Map Teaser**: Interactive map visualization with animated pins
5. **Screenshots**: Swipeable carousel of app screens
6. **How It Works**: Three-step process with connecting animations
7. **Testimonials**: User reviews with ratings
8. **FAQ**: Expandable accordion with common questions
9. **CTA**: Final call-to-action with newsletter signup
10. **Footer**: Links, social media, contact information

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
\`\`\`bash
git clone <repository-url>
cd petmedia-website
\`\`\`

2. Install dependencies:
\`\`\`bash
npm install
# or
yarn install
\`\`\`

3. Run the development server:
\`\`\`bash
npm run dev
# or
yarn dev
\`\`\`

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📦 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically on every push

### Manual Build

\`\`\`bash
npm run build
npm start
\`\`\`

## 🔧 Customization

### App Store Links

Update the store badge URLs in:
- `components/hero-section.tsx`
- `components/cta-section.tsx`

Replace placeholder URLs:
- App Store: `https://apps.apple.com/app/idXXXXXXXXX`
- Google Play: `https://play.google.com/store/apps/details?id=com.example.petmedia`

### Screenshots

Replace placeholder screenshots in `components/screenshots-carousel.tsx` with actual app screenshots.

### Content

Update translations in:
- `locales/tr.json` (Turkish)
- `locales/en.json` (English)

### SEO

Update metadata in `app/layout.tsx`:
- Site URL
- Social media handles
- Verification codes
- Analytics IDs

### Colors & Branding

The design uses a warm color palette:
- Primary: Purple/Pink gradients
- Accent: Orange highlights
- Background: Cream/soft pastels

Modify colors in `app/globals.css` design tokens.

## 📊 Performance

- Lighthouse Score: 90+
- Core Web Vitals optimized
- Image optimization with Next.js
- Font optimization with `next/font`
- Lazy loading for below-the-fold content

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📄 License

This project is licensed under the MIT License.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📞 Support

For questions or support, contact: info@petmedia.app

---

Built with ❤️ for the pet community in Turkey.
