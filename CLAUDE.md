# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

### Core Development
- `bun run dev` - Start development server (Next.js 13.5.6)
- `bun run dev:turbo` - Start development server with Turbo mode
- `bun run build` - Build for production
- `bun run build:analyze` - Build with bundle analysis
- `bun run start` - Start production server
- `bun run lint` - Run ESLint
- `bun run lint:fix` - Run ESLint with automatic fixes
- `bun run type-check` - Run TypeScript type checking
- `bun run clean` - Clean build artifacts

### Utilities
- `bun run optimize-images` - Optimize images using scripts/optimize-images.sh

## Project Architecture

### Tech Stack
- **Framework**: Next.js 13.5.6 with App Router
- **Language**: TypeScript with strict mode
- **Styling**: Tailwind CSS with custom animations
- **3D Graphics**: Three.js with React Three Fiber
- **Icons**: React Icons and Heroicons
- **Animation**: Framer Motion
- **Build Tool**: Next.js built-in bundler with Turbo support

### Directory Structure
```
app/                    # Next.js App Router pages
├── about/             # About page
├── blog/              # Blog pages
├── contact/           # Contact page
├── education/         # Education page
├── experience/        # Experience pages with dynamic routes
├── projects/          # Project pages with dynamic routes
├── globals.css        # Global styles
├── layout.tsx         # Root layout with performance optimizations
└── page.tsx           # Home page

components/
├── main/              # Main page components (Hero, Navbar, Projects, etc.)
└── sub/               # Reusable sub-components (ProjectCard, Breadcrumb, etc.)

constants/
├── index.ts           # Skill data and other constants
└── personalData.ts    # Personal info, work experience, projects, education

utils/                 # Utility functions for animations and performance
hooks/                 # Custom React hooks
public/               # Static assets (images, videos)
```

### Key Configuration
- **Path Mapping**: `@/*` points to root directory
- **Image Optimization**: WebP/AVIF formats, multiple device sizes configured
- **Performance**: Package imports optimized for react-icons and @heroicons/react
- **TypeScript**: Strict mode with Next.js plugin
- **Tailwind**: Custom animations (fade-in, slide-up, bounce-slow) and keyframes

### Data Management
All personal data, projects, work experience, and educational information is centralized in `constants/personalData.ts`. This includes:
- Personal information and social links
- Work experience with detailed descriptions
- Project portfolio with technical details
- Education and certifications
- Blog posts and skills

### Performance Features
- Dynamic imports for heavy components (StarBackground)
- Image optimization with multiple formats and sizes
- Performance monitoring scripts in layout
- Resource preloading for critical assets
- Lazy loading for 3D components

### Component Organization
- **Main components**: Page-level components in `components/main/`
- **Sub components**: Reusable UI components in `components/sub/`
- **Dynamic routing**: Projects and experience use slug-based routing
- **Breadcrumb navigation**: Implemented for better UX

### Styling Approach
- Tailwind CSS with dark theme (`bg-[#030014]`)
- Custom animations defined in tailwind.config.ts
- Responsive design with mobile-first approach
- Space-themed design with star background