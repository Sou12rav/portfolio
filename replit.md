# Overview

This is a professional portfolio website built for a Computer Science Engineering graduate (2025) specializing in Data Analytics and AI. The application showcases educational background, technical skills, certifications, projects, and includes a functional contact form for potential employers or collaborators to reach out.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **React 18** with TypeScript for type-safe component development
- **Vite** as the build tool and development server for fast hot module replacement
- **Wouter** for lightweight client-side routing instead of React Router
- **Tailwind CSS** with CSS variables for responsive design and theming
- **Shadcn/ui** component library built on Radix UI primitives for consistent, accessible UI components
- **TanStack React Query** for server state management and API data fetching

## Backend Architecture
- **Express.js** server with TypeScript for API endpoints
- **File-based routing** with centralized route registration in `server/routes.ts`
- **Memory storage implementation** (`MemStorage`) as the default data persistence layer
- **Zod schemas** for request validation and type safety between client and server
- **Middleware logging** for API request monitoring and debugging

## Data Storage Solutions
- **PostgreSQL** as the primary database configured through Drizzle ORM
- **Neon Database** serverless PostgreSQL for cloud deployment
- **Drizzle Kit** for database migrations and schema management
- **In-memory fallback storage** for development and testing scenarios
- Database schema includes `users` and `contact_messages` tables with UUID primary keys

## Authentication and Authorization
- Basic user schema implemented but not actively used in current portfolio context
- Session management prepared with `connect-pg-simple` for PostgreSQL session storage
- Authentication endpoints structured but portfolio focuses on public content display

## Design System
- **CSS Custom Properties** for consistent theming and dark mode support
- **Responsive design patterns** with mobile-first approach using Tailwind breakpoints
- **Component composition** with Radix UI primitives for accessibility compliance
- **Icon integration** using Lucide React and React Icons libraries
- **Inter font family** for clean, professional typography

## Development Tools
- **ESBuild** for production server bundling
- **TypeScript** with strict mode for compile-time error detection
- **Replit integration** with specialized plugins for development environment
- **Hot module replacement** in development with Vite's middleware mode