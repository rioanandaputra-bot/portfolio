# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal portfolio website built with Next.js 13+ (App Router), TypeScript, and Tailwind CSS. It features a space-themed design with 3D animations using Three.js/React Three Fiber, showcasing personal projects, work experience, education, and blog content.

## Development Commands

### Core Commands
- **Development server**: `npm run dev` or `bun dev`
- **Build**: `npm run build`
- **Production server**: `npm start`
- **Linting**: `npm run lint`

### Package Management
The project uses Bun as the primary package manager (evidenced by `bun.lock`). Use `bun install` for dependencies.

## Architecture Overview

### Directory Structure
```
app/                    # Next.js 13+ App Router
├── page.tsx           # Homepage
├── layout.tsx         # Root layout with navigation
├── globals.css        # Global styles
├── about/             # About page
├── projects/          # Projects listing + dynamic [slug] pages
├── experience/        # Experience listing + dynamic [slug] pages
├── education/         # Education page
├── blog/             # Blog listing + dynamic [slug] pages
└── contact/          # Contact page

components/
├── main/             # Page-level components
│   ├── Hero.tsx      # Homepage hero with video background
│   ├── Navbar.tsx    # Main navigation
│   ├── Footer.tsx    # Site footer
│   ├── StarBackground.tsx  # Animated star field background
│   └── ...Preview.tsx      # Homepage section previews
└── sub/              # Reusable sub-components
    ├── HeroContent.tsx
    ├── ProjectCard.tsx
    └── SkillDataProvider.tsx

constants/
├── personalData.ts   # Comprehensive personal data (MAIN CONFIG)
└── index.ts         # Skills data and configuration
```

### Key Features
- **3D Animations**: Uses React Three Fiber (`@react-three/fiber`, `@react-three/drei`) for 3D elements
- **Motion**: Framer Motion for animations and transitions
- **Space Theme**: Video backgrounds (`blackhole.webm`), animated star fields, and cosmic imagery
- **Dynamic Routes**: Slug-based routing for projects, experience, and blog posts
- **Responsive Design**: Tailwind CSS with mobile-first approach

## Data Management

### Primary Configuration
All personal data is centralized in `constants/personalData.ts`:
- `personalInfo`: Basic profile information
- `workExperience`: Detailed job history with slugs for dynamic pages
- `education`: Educational background
- `projects`: Portfolio projects with categories and detailed descriptions
- `blogPosts`: Blog content with metadata
- `certifications`: Professional certifications

### Skills Data
Skills are defined in `constants/index.ts` with categorized arrays:
- `Frontend_skill`: Frontend technologies
- `Backend_skill`: Backend technologies
- `Full_stack`: Full-stack tools and frameworks
- `Other_skill`: Additional technologies

### Dynamic Content
- Projects, experience entries, and blog posts use slug-based routing
- Each content type has detailed descriptions, achievements, and metadata
- Categories and tags for filtering and organization

## Development Guidelines

### Styling Approach
- **Tailwind CSS**: Primary styling framework
- **Dark Theme**: Space theme with dark backgrounds (`bg-[#030014]`)
- **Custom Animations**: Framer Motion for page transitions and interactions
- **3D Elements**: Three.js components for interactive backgrounds

### Component Patterns
- **Page Components**: Located in `components/main/` (e.g., `Hero.tsx`, `Projects.tsx`)
- **Sub Components**: Reusable components in `components/sub/`
- **Preview Components**: Homepage sections that link to full pages
- **Data-Driven**: Components consume data from `constants/personalData.ts`

### Asset Management
- **Images**: Project screenshots, skill icons, and profile images in `public/`
- **Videos**: Background videos (`.webm` format) for performance
- **Icons**: SVG icons for social media and navigation
- **Resume**: PDF resume accessible at `/resume.pdf`

### Route Structure
- Static pages: `/about`, `/contact`, `/education`
- Dynamic pages: `/projects/[slug]`, `/experience/[slug]`, `/blog/[slug]`
- Homepage sections: Each main component represents a homepage section

### TypeScript Configuration
- Strict mode enabled
- Path aliases: `@/*` maps to project root
- Next.js plugin for enhanced TypeScript support

## Content Updates

To update portfolio content, modify the relevant exports in `constants/personalData.ts`:
- Personal information and social links
- Work experience entries (remember to update slugs)
- Project portfolio with categories
- Blog posts and educational content

The component system will automatically reflect changes from the data layer without requiring component modifications.