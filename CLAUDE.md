# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is an NX monorepo containing a personal blog/portfolio built with:
- **Angular 20** - Modern Angular with standalone components and new control flow syntax (@if, @for)
- **Analog.js** - Meta-framework for Angular providing SSR, file-based routing, and Vite integration
- **Tailwind CSS v4** - Utility-first CSS framework with modern PostCSS plugin
- **Biome v2.1** - Fast formatter and linter replacing ESLint/Prettier
- **NX** - Monorepo tooling for build system and development workflow

## Key Architecture

### Blog Application (`apps/blog/`)
- **File-based routing**: Pages in `src/app/pages/` with naming convention `(route).page.ts`
- **Dynamic routes**: Use `[slug].page.ts` for parameterized routes
- **SSR-ready**: Uses `isPlatformBrowser()` checks for browser-only APIs (localStorage, window)
- **Standalone components**: All components use `imports` array, no modules
- **Modern Angular syntax**: Uses `@if`/`@for` instead of `*ngIf`/`*ngFor`
- **Shared services**: Theme service for dark/light mode state management
- **Component structure**: Reusable header/footer components for consistent layout

### Styling Architecture
- **Tailwind v4 setup**: Uses `@import "tailwindcss"` in `styles.css` (not `@tailwind` directives)
- **PostCSS plugin**: `@tailwindcss/postcss` configured in `vite.config.ts`
- **TypeScript config**: `tailwind.config.ts` with proper v4 structure
- **Style imports**: Styles imported in `main.ts` for Analog.js compatibility

### Code Quality Setup
- **Biome v2.1**: Fast formatter and linter configured in `biome.json`
- **Single quotes**: Consistent with Angular and modern TypeScript practices
- **2-space indentation**: Standard for Angular projects
- **Import organization**: Automatic import sorting and type imports
- **No ESLint/Prettier**: Replaced with unified Biome toolchain

## Common Commands

### Development
```bash
npm run serve:blog          # Start dev server on port 4200
npm run build:blog          # Production build
nx serve blog               # Alternative dev server command
nx build blog               # Alternative build command
```

### Code Quality
```bash
npm run lint                # Check linting and formatting with Biome
npm run lint:fix            # Auto-fix linting and formatting issues
npm run format              # Format code only
nx lint blog                # Lint specific blog application
nx lint:fix blog            # Auto-fix specific blog application
```

### Docker
```bash
npm run docker:build       # Build Docker image
npm run docker:run         # Run container on port 8080
```

## Important Implementation Notes

### Tailwind v4 Setup Requirements
1. Install `@tailwindcss/postcss` plugin
2. Configure PostCSS in `vite.config.ts` with `tailwindcss` and `autoprefixer`
3. Use `@import "tailwindcss"` in styles.css
4. Import styles in `main.ts`
5. Use TypeScript config format (`tailwind.config.ts`)

### Angular 20 + Analog.js Requirements
- Use `inject(PLATFORM_ID)` and `isPlatformBrowser()` for SSR compatibility
- Import styles in `main.ts` for proper Analog.js integration
- Use standalone components with `imports` array
- Use modern control flow syntax (`@if`, `@for`)

### File Structure Conventions
- Pages: `apps/blog/src/app/pages/(route).page.ts`
- API routes: `apps/blog/src/server/routes/api/`
- Styles: Import in `main.ts`, configure in `vite.config.ts`

## Documentation Sources

### Angular
- **Primary documentation**: https://angular.dev/context/llm-files/llms-full.txt
- Use for understanding Angular 20 features, syntax, and best practices

### Analog.js
- **Primary documentation**: https://github.com/analogjs/analog/tree/beta/apps/docs-app/docs
- Use for Analog.js-specific configuration, SSR patterns, and integration guides

### Tailwind CSS v4
- **Primary documentation**: https://github.com/tailwindlabs/tailwindcss.com/tree/main/src/docs
- Use for Tailwind v4 features, configuration, and utility classes

## Blog Features

### Current Implementation
- **Homepage**: Hero section with featured posts and modern gradient design
- **Blog listing**: Paginated post list with search/filter capabilities
- **Blog post details**: Full article page with navigation and social sharing
- **About page**: Personal profile with tech stack and social links
- **Tags page**: Tag cloud with post counts and categorization
- **Dark/Light theme**: System preference detection with manual toggle
- **Responsive design**: Mobile-first approach with Tailwind breakpoints

### Page Structure
```
/                    # Homepage with featured posts
/blog                # Blog post listing
/blog/[slug]         # Individual blog post
/about               # About page
/tags                # Tags overview
```

### Component Architecture
```
shared/
├── services/
│   └── theme.service.ts         # Theme state management
└── components/
    ├── header.component.ts      # Navigation and theme toggle
    └── footer.component.ts      # Site footer with social links
```

## Development Workflow
- Use conventional commits format
- Always use Angular 20 modern syntax (not Angular 21)
- Minimize arbitrary Tailwind values - use standard utility classes
- Ensure SSR compatibility for browser APIs
- Run `npm run lint:fix` before committing to ensure code quality
- Test builds before committing changes
- **No testing framework**: Tests removed to keep the blog simple and focused on content