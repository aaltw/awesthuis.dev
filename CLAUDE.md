# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is an NX monorepo containing a personal blog/portfolio built with:
- **Angular 20** - Modern Angular with standalone components and new control flow syntax (@if, @for)
- **Analog.js** - Meta-framework for Angular providing SSR, file-based routing, and Vite integration
- **Tailwind CSS v4** - Utility-first CSS framework with modern PostCSS plugin
- **NX** - Monorepo tooling for build system and development workflow

## Key Architecture

### Blog Application (`apps/blog/`)
- **File-based routing**: Pages in `src/app/pages/` with naming convention `(route).page.ts`
- **SSR-ready**: Uses `isPlatformBrowser()` checks for browser-only APIs (localStorage, window)
- **Standalone components**: All components use `imports` array, no modules
- **Modern Angular syntax**: Uses `@if`/`@for` instead of `*ngIf`/`*ngFor`

### Styling Architecture
- **Tailwind v4 setup**: Uses `@import "tailwindcss"` in `styles.css` (not `@tailwind` directives)
- **PostCSS plugin**: `@tailwindcss/postcss` configured in `vite.config.ts`
- **TypeScript config**: `tailwind.config.ts` with proper v4 structure
- **Style imports**: Styles imported in `main.ts` for Analog.js compatibility

## Common Commands

### Development
```bash
npm run serve:blog          # Start dev server on port 4200
npm run build:blog          # Production build
nx serve blog               # Alternative dev server command
nx build blog               # Alternative build command
```

### Testing and Quality
```bash
nx lint blog                # Lint the blog application
nx test blog                # Run tests with Vitest
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

## Development Workflow
- Use conventional commits format
- Always use Angular 20 modern syntax (not Angular 21)
- Minimize arbitrary Tailwind values - use standard utility classes
- Ensure SSR compatibility for browser APIs
- Test builds before committing changes