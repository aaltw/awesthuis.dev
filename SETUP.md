# awesthuis.dev Setup Guide

## GitHub Repository Setup

### 1. Create GitHub Repository
1. Go to [GitHub.com](https://github.com) and log in
2. Click "New repository" or go to https://github.com/new
3. Repository settings:
   - **Repository name**: `awesthuis.dev`
   - **Description**: `Personal blog and portfolio website`
   - **Visibility**: Public (recommended for portfolio sites)
   - **Initialize**: Do not initialize (we already have code)

### 2. Connect Local Repository to GitHub
```bash
# Add GitHub remote (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/awesthuis.dev.git

# Push to GitHub
git branch -M main
git push -u origin main
```

## Development Commands

### Local Development
```bash
# Start development server
npm run serve:blog

# Build for production
npm run build:blog
```

### Docker Commands
```bash
# Build Docker image
npm run docker:build

# Run Docker container locally
npm run docker:run

# Access at http://localhost:8080
```

## Project Structure
- `apps/blog/` - Main Analog.js application
- `apps/awesthuis-dev/` - Original Angular app (can be removed if not needed)
- `Dockerfile` - Docker configuration for production
- `nginx.conf` - Nginx configuration for static hosting
- `tailwind.config.js` - Tailwind CSS configuration

## Homelab Deployment
1. Build the Docker image: `npm run docker:build`
2. Tag for your registry: `docker tag awesthuis.dev your-registry/awesthuis.dev`
3. Push to your registry: `docker push your-registry/awesthuis.dev`
4. Deploy to your homelab using your preferred orchestration tool

## Next Steps
1. Create GitHub repository as described above
2. Customize the blog content in `apps/blog/src/app/pages/`
3. Add your domain configuration to your homelab reverse proxy
4. Set up CI/CD pipeline for automatic deployments