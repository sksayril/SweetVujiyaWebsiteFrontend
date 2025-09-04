# Krishna & Kanha Sales Enterprises

A modern, responsive web application for Krishna & Kanha Sales Enterprises - showcasing authentic Indian sweets and premium namkeen products.

## 🍯 Features

- **Modern UI/UX**: Beautiful, responsive design with smooth animations
- **Product Showcase**: Comprehensive product catalog with filtering and search
- **Contact Form**: Secure contact form with validation and error handling
- **Distributor Portal**: Complete distributor application and partnership information
- **SEO Optimized**: Meta tags, structured data, and performance optimizations
- **Accessibility**: ARIA labels, semantic HTML, and keyboard navigation
- **Performance**: Lazy loading, code splitting, and optimized builds
- **Type Safety**: Full TypeScript implementation with strict type checking

## 🚀 Tech Stack

- **Frontend**: React 18 + TypeScript
- **Styling**: Tailwind CSS + Framer Motion
- **Routing**: React Router DOM
- **Build Tool**: Vite
- **Linting**: ESLint + TypeScript ESLint
- **Formatting**: Prettier
- **Testing**: Vitest (configured)

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd SweetVujiyaWebsiteFrontend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

## 🛠️ Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint errors
- `npm run type-check` - Run TypeScript type checking
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check code formatting
- `npm run test` - Run tests
- `npm run test:ui` - Run tests with UI
- `npm run test:coverage` - Run tests with coverage
- `npm run clean` - Clean build artifacts
- `npm run analyze` - Analyze bundle size

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Navbar.tsx      # Navigation component
│   ├── Hero.tsx        # Hero section
│   ├── Footer.tsx      # Footer component
│   ├── ErrorBoundary.tsx # Error handling
│   └── LoadingSpinner.tsx # Loading component
├── pages/              # Page components
│   ├── Home.tsx        # Home page
│   ├── Products.tsx    # Products page
│   ├── Sweets.tsx      # Sweets page
│   ├── Namkeen.tsx     # Namkeen page
│   ├── Distributors.tsx # Distributors page
│   ├── About.tsx       # About page
│   ├── Contact.tsx     # Contact page
│   └── NotFound.tsx    # 404 page
├── utils/              # Utility functions
│   └── validation.ts   # Form validation utilities
├── constants/          # Application constants
│   └── index.ts        # Centralized constants
├── App.tsx             # Main app component
├── main.tsx            # App entry point
└── index.css           # Global styles
```

## 🔧 Configuration

### Environment Variables
Create a `.env` file in the root directory:
```env
VITE_APP_NAME="Krishna & Kanha Sales Enterprises"
VITE_APP_URL="https://krishnakanha.com"
VITE_CONTACT_EMAIL="krishnakanhasalesenterprises@gmail.com"
VITE_CONTACT_PHONE="+91 6392574854"
```

### Build Configuration
The project uses Vite for building with the following optimizations:
- Code splitting with manual chunks
- Tree shaking for unused code
- Minification with Terser
- Console log removal in production
- Target ES2015 for broader browser support

## 🎨 Design System

### Colors
- **Primary**: Orange (#f97316) to Yellow (#eab308) gradient
- **Secondary**: Red (#ef4444) for accents
- **Background**: Light orange to yellow gradient
- **Text**: Gray scale (#1f2937 to #6b7280)

### Typography
- **Headings**: Bold, gradient text with drop shadows
- **Body**: Regular weight, high contrast
- **Font Family**: System fonts with fallbacks

### Components
- **Cards**: Rounded corners, shadows, hover effects
- **Buttons**: Gradient backgrounds, hover animations
- **Forms**: Clean inputs with validation states
- **Navigation**: Sticky header with active states

## 🔒 Security Features

- **Input Sanitization**: All user inputs are sanitized
- **Form Validation**: Client-side validation with error handling
- **XSS Prevention**: HTML entity encoding
- **CSRF Protection**: Ready for backend integration
- **Secure Headers**: CSP and security headers ready

## ♿ Accessibility

- **ARIA Labels**: Proper labeling for screen readers
- **Keyboard Navigation**: Full keyboard accessibility
- **Semantic HTML**: Proper HTML structure
- **Color Contrast**: WCAG AA compliant
- **Focus Management**: Visible focus indicators

## 📱 Responsive Design

- **Mobile First**: Designed for mobile devices first
- **Breakpoints**: Tailwind CSS responsive breakpoints
- **Touch Friendly**: Large touch targets
- **Performance**: Optimized for mobile networks

## 🚀 Performance Optimizations

- **Lazy Loading**: Pages loaded on demand
- **Code Splitting**: Automatic and manual chunk splitting
- **Image Optimization**: WebP format support
- **Caching**: Browser caching strategies
- **Bundle Analysis**: Bundle size monitoring

## 🧪 Testing

The project is configured with Vitest for testing:
- Unit tests for utilities
- Component testing ready
- Coverage reporting
- UI testing interface

## 📈 SEO Features

- **Meta Tags**: Comprehensive meta tag implementation
- **Structured Data**: JSON-LD schema markup
- **Open Graph**: Social media sharing optimization
- **Twitter Cards**: Twitter sharing optimization
- **Sitemap**: Ready for sitemap generation
- **Robots.txt**: Search engine crawling optimization

## 🔄 Deployment

### Build for Production
```bash
npm run build
```

### Deploy to Vercel
1. Connect your GitHub repository to Vercel
2. Configure build settings:
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`

### Deploy to Netlify
1. Connect your GitHub repository to Netlify
2. Configure build settings:
   - Build Command: `npm run build`
   - Publish Directory: `dist`

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

- **Website**: [krishnakanha.com](https://krishnakanha.com)
- **Email**: krishnakanhasalesenterprises@gmail.com
- **Phone**: +91 6392574854
- **Address**: 123 Sweet Street, Andheri West, Mumbai, Maharashtra 400058, India

## 🙏 Acknowledgments

- **Design Inspiration**: Modern e-commerce design patterns
- **Icons**: Lucide React for beautiful icons
- **Animations**: Framer Motion for smooth animations
- **Styling**: Tailwind CSS for utility-first styling
- **Development**: Vite for fast development experience

---

Made with ❤️ by Krishna & Kanha Sales Enterprises
