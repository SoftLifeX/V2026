<div align="center">
  <img src="public/assets/ismailchabaneSite.png" alt="Ismail Chabane Portfolio" width="800"/>
  
  # Ismail Chabane - Portfolio Website
  
  [![Next.js](https://img.shields.io/badge/Next.js-16.0-black?style=flat-square&logo=next.js)](https://nextjs.org/)
  [![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
  [![React](https://img.shields.io/badge/React-19.2-61DAFB?style=flat-square&logo=react)](https://react.dev/)
  [![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-38B2AC?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)
  
  A modern, responsive portfolio website showcasing my work as a Software Developer specializing in Full-Stack Development, Mobile Development, and DevOps.
  
  [🌐 Live Website](https://ismailchabane.com) • [📧 Contact](https://ismailchabane.com/contact)
</div>

---

## ✨ Features

### 🎨 User Experience
- **Modern Dark Theme** with smooth theme switching
- **Fully Responsive Design** optimized for all devices
- **Smooth Animations** powered by GSAP and Framer Motion
- **Interactive Project Showcase** with detailed case studies
- **GitHub Contributions Visualization** showing coding activity

### 📱 Core Sections
- **Hero Section** - Professional introduction with availability status
- **Featured Projects** - Highlighted project showcase with visual gallery
- **Work Experience** - Professional journey and career milestones
- **Tech Stack** - Technologies and tools I work with
- **Project Portfolio** - Complete project gallery with MDX-powered case studies
- **Contact Form** - Integrated email functionality via Resend

### 🚀 Technical Highlights
- **Server-Side Rendering (SSR)** for optimal performance and SEO
- **MDX Content** for rich, interactive project documentation
- **Type-Safe** with full TypeScript coverage
- **SEO Optimized** with automatic sitemap generation
- **Analytics Ready** with Vercel Analytics integration
- **Progressive Web App** capabilities

---

## 🛠️ Tech Stack

### Core Framework
- **Next.js 16** - React framework with App Router
- **React 19** - UI library
- **TypeScript** - Type-safe development

### Styling & UI
- **Tailwind CSS 4** - Utility-first CSS framework
- **Radix UI** - Accessible component primitives
- **Lucide React** - Icon library
- **Framer Motion** - Animation library
- **GSAP** - Advanced animations

### Content & Data
- **MDX** - Markdown with JSX support for project content
- **next-mdx-remote** - MDX rendering
- **date-fns** - Date formatting utilities

### Backend & Services
- **Resend** - Email delivery service
- **React Email** - Email template rendering
- **Vercel Analytics** - Web analytics

### Development Tools
- **ESLint** - Code linting
- **next-sitemap** - Automatic sitemap generation
- **next-themes** - Theme management

---

## 📦 Project Structure

```
portfoliov2/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx         # Root layout with metadata
│   ├── page.tsx           # Home page
│   ├── projects/          # Project pages
│   └── contact/           # Contact page
├── features/              # Feature-based organization
│   ├── home/              # Home page components
│   │   ├── components/
│   │   │   ├── hero/      # Hero section
│   │   │   ├── projects/  # Project showcase
│   │   │   ├── tech-stack/# Tech stack display
│   │   │   └── experience/# Work experience
│   │   └── page.tsx
│   ├── projects/          # Projects feature
│   │   ├── content/       # MDX project case studies
│   │   └── components/    # Project components
│   ├── contact/           # Contact form feature
│   └── shared/            # Shared components
│       ├── layout/        # Navbar, Footer
│       └── ui/            # Reusable UI components
├── lib/                   # Utilities and data
├── public/                # Static assets
│   ├── work/             # Project screenshots
│   └── assets/           # General assets
└── components.json        # shadcn/ui configuration
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- pnpm (recommended) or npm/yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/ismailchabane/ismailchabane.com.git
   cd ismailchabane.com
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Set up environment variables**
   ```bash
   cp env.example .env.local
   ```
   
   Add your environment variables:
   - `GITHUB_USERNAME` - For GitHub contributions
   - `RESEND_API_KEY` - For contact form emails
   - `EMAIL_FROM` - Email sender address
   - `EMAIL_TO` - Email recipient address

4. **Run the development server**
   ```bash
   pnpm dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

---

## 📜 Available Scripts

| Script | Description |
|--------|-------------|
| `pnpm dev` | Start development server on port 3000 |
| `pnpm build` | Build production-ready application |
| `pnpm start` | Start production server |
| `pnpm lint` | Run ESLint for code quality checks |
| `pnpm postbuild` | Generate sitemap after build |

---

## 🎯 Key Features Explained

### Project Case Studies
Projects are documented using MDX files in `features/projects/content/`, allowing for rich content with embedded images, code blocks, and interactive components.

### GitHub Integration
The homepage displays your GitHub contribution graph, fetched server-side for optimal performance.

### Contact Form
Integrated with Resend for reliable email delivery, with server actions handling form submissions securely.

### Theme System
Built with `next-themes` for seamless dark/light mode switching with system preference detection.

---

## 🌐 Deployment

This portfolio is deployed on **Vercel** for optimal Next.js performance and automatic deployments.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/ismailchabane/ismailchabane.com)

---

## 📄 License

This project is private and proprietary. All rights reserved.

---

## 🤝 Connect

- **Portfolio**: [ismailchabane.com](https://ismailchabane.com)
- **Email**: Available through contact form
- **GitHub**: [@IsmailChabane](https://github.com/ismailchabane)

---

<div align="center">
  <p>© 2024 Ismail Chabane. All rights reserved.</p>
</div>
