# Portfolio Enhancer

## Overview

This is a personal developer portfolio website for "Ahmed Samer," a C# Backend Developer. It's a multi-page portfolio built with React on the frontend and Express on the backend, featuring a modern dark premium theme with cinematic animations, neon glow effects, and a terminal-inspired aesthetic. The app showcases skills, projects, an about page, and contact information. It's also configured for deployment to GitHub Pages (under `/Portfolio-Enhancer/` base path) using hash-based routing.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend
- **Framework**: React 18 with TypeScript
- **Routing**: Uses both `wouter` (in Navbar/pages) and `react-router-dom`'s `HashRouter` (in main.tsx) — the app wraps everything in `HashRouter` for GitHub Pages compatibility, but page components use `wouter`'s `Link` and `useLocation`. This is a known inconsistency; both routing libraries coexist.
- **Styling**: Tailwind CSS with CSS variables for theming (dark mode only). Custom design tokens defined in `client/src/index.css`. Uses `shadcn/ui` component library (new-york style) with Radix UI primitives.
- **Animations**: Framer Motion for page transitions, scroll-triggered animations, and micro-interactions.
- **Data Fetching**: TanStack React Query for server state management. Custom hooks (`use-skills.ts`, `use-projects.ts`) fetch from `/api/skills` and `/api/projects`.
- **Fonts**: Space Grotesk (sans), Fira Code (mono), Outfit (display) — loaded via Google Fonts.
- **UI Components**: Full shadcn/ui component library installed under `client/src/components/ui/`. Custom layout components include `Layout`, `Navbar`, `Footer`, and `SectionHeader`.
- **Pages**: Home, About, Skills, Projects, Contact, and 404 (NotFound).
- **Build Tool**: Vite with React plugin. The `base` is set to `/Portfolio-Enhancer/` for GitHub Pages.

### Backend
- **Framework**: Express 5 (TypeScript) running on Node.js
- **API**: Simple REST API with two endpoints:
  - `GET /api/skills` — returns all skills
  - `GET /api/projects` — returns all projects
- **Route Definitions**: Shared route definitions in `shared/routes.ts` using Zod for response validation
- **Storage Layer**: `DatabaseStorage` class in `server/storage.ts` implements `IStorage` interface. Seeds initial data (skills and projects) on startup if the database is empty.
- **Dev Server**: Vite dev server is integrated via middleware in development mode (`server/vite.ts`). In production, static files are served from `dist/public`.

### Shared Code
- `shared/schema.ts` — Drizzle ORM table definitions for `skills` and `projects`, plus Zod insert schemas
- `shared/routes.ts` — API route path constants and Zod response schemas

### Database
- **ORM**: Drizzle ORM with PostgreSQL dialect
- **Database**: PostgreSQL (requires `DATABASE_URL` environment variable)
- **Schema**: Two tables:
  - `skills` — id (serial), category (text), name (text)
  - `projects` — id (serial), title (text), description (text), imageUrl (text, nullable), tags (text array, nullable), link (text, nullable)
- **Migrations**: Drizzle Kit configured to output migrations to `./migrations` directory. Use `npm run db:push` to push schema changes.

### Build & Deployment
- **Development**: `npm run dev` runs the Express server with Vite middleware for HMR
- **Production Build**: `npm run build` runs a custom build script (`script/build.ts`) that builds the Vite frontend and bundles the server with esbuild
- **GitHub Pages**: The project has a pre-built static version in the root (`index.html`, `assets/`) configured with `/Portfolio-Enhancer/` base path and hash routing for static hosting

## External Dependencies

### Core Dependencies
- **PostgreSQL** — Primary database, connected via `DATABASE_URL` environment variable
- **Google Fonts** — Space Grotesk, Fira Code, Outfit, DM Sans, Geist Mono, Architects Daughter

### Key npm Packages
- **drizzle-orm** + **drizzle-kit** — Database ORM and migration tooling
- **express** (v5) — HTTP server
- **@tanstack/react-query** — Client-side data fetching and caching
- **framer-motion** — Animations
- **wouter** — Lightweight client-side routing (used in components)
- **react-router-dom** — HashRouter wrapper (used for GitHub Pages compatibility)
- **zod** + **drizzle-zod** — Schema validation
- **shadcn/ui** ecosystem — Radix UI primitives, class-variance-authority, tailwind-merge, clsx, lucide-react icons
- **pg** — PostgreSQL client for Node.js
- **connect-pg-simple** — PostgreSQL session store (available but not actively used for sessions currently)

### Replit-Specific
- **@replit/vite-plugin-runtime-error-modal** — Error overlay in development
- **@replit/vite-plugin-cartographer** — Dev tooling (conditionally loaded)
- **@replit/vite-plugin-dev-banner** — Dev banner (conditionally loaded)