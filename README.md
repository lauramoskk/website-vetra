# Fintech Asset Web

A premium, high-performance landing page for a Fintech Asset management platform, built with Astro and Tailwind CSS.

## 🚀 Technologies

- **Astro** 5.15.5 - Modern web framework for content-driven websites.
- **Tailwind CSS** 4.1.17 - Utility-first CSS framework (v4 alpha).
- **TypeScript** - Static typing for safer code.
- **GSAP** - GreenSock Animation Platform for complex animations.
- **Lenis** - Smooth scrolling library.

## ✨ Features

- **Dynamic Real-Time Reserves**: Fetches data from an external API with a Next.js-style proxy to handle CORS, featuring loading skeletons.
- **Interactive Whitepaper**: A dedicated page with a sticky sidebar navigation and responsive tabbed content.
- **Video Backgrounds**: Implemented in the Newsletter section for visual engagement.
- **Partner Carousel**: Infinite scrolling marquee of SVGs using standard CSS animations.
- **Premium UI/UX**:
    - **Glassmorphism** & **Glow Effects** (PulseGlow).
    - **Custom Design System** via CSS variables.
    - **Responsive Design** optimized for desktop and mobile.
- **SEO Optimized**: Semantic HTML, proper meta tags, and structured data.

## 📁 Project Structure

```
/
├── public/          # Static assets
├── src/
│   ├── assets/      # Optimized images and icons
│   ├── components/  # Reusable UI components
│   │   ├── common/  # Global components (Header, Footer, Button)
│   │   └── sections/# Page sections (Hero, RealTimeReserves, WhitepaperContent)
│   ├── layouts/     # Page layouts (Layout.astro, SectionLayout.astro)
│   ├── pages/       # Application routes
│   │   ├── api/     # API routes (e.g., for proxying external requests)
│   │   ├── index.astro
│   │   ├── contact-us.astro
│   │   └── whitepaper.astro
│   ├── styles/      # Global styles and CSS variables
│   └── utils/       # Helper functions (cn.ts)
└── package.json
```

## 🧞 Commands

All commands are run from the project root:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Generates production build in `./dist/`          |
| `npm run preview`         | Preview locally before deploying                 |

## 🎨 Key Components

- **AlignmentLayout**: standardized layout wrapper for consistent spacing.
- **SectionLayout**: Base wrapper for page sections.
- **Badge**: Decorative pill/badge component.
- **Button**: Primary and Outline button variants with hover effects.
- **Title / Description**: Standardized typography components.
- **PulseGlow**: Visual effect component for background glows.

## 📱 Responsiveness

The project uses Tailwind CSS standard breakpoints, with specific attention to mobile (`max-sm`) and desktop (`lg`) layouts.

## 🚀 Deployment

This project is **Static (SSG)** (mostly), but includes API endpoints (`src/pages/api`) which may require an adapter (like Vercel, Netlify, or Node) if dynamic server-side logic is expanded. Previously purely static, the addition of API routes for proxying might require a hybrid output config if not just built at build time. *Currently configured as static generation with client-side fetching via internal proxy routes if applicable, or direct static build.*

### Build
```bash
npm run build
```

The output will be in the `dist/` folder.

## 🔗 Useful Links

- [Astro Documentation](https://docs.astro.build)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [GSAP Documentation](https://greensock.com/docs/)
