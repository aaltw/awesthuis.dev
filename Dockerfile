# Multi-stage build for static site
FROM node:22-alpine AS builder

WORKDIR /app

# Copy package files first for better Docker layer caching
COPY package*.json ./

# Install dependencies
RUN npm ci --frozen-lockfile

# Copy source code
COPY . .

# Build the static site
RUN npm run build:blog

# Production stage - serve static files with nginx
FROM nginx:1.28.0-alpine

# Install curl for health checks
RUN apk add --no-cache curl

# Copy built static files
COPY --from=builder /app/dist/apps/blog/client /usr/share/nginx/html

# Copy custom nginx configuration
COPY nginx.conf /etc/nginx/nginx.conf

# Create directories nginx needs with proper permissions
RUN mkdir -p /tmp/nginx/client_body /tmp/nginx/proxy /tmp/nginx/fastcgi /tmp/nginx/uwsgi /tmp/nginx/scgi && \
    chown -R nginx:nginx /usr/share/nginx/html /tmp/nginx /var/cache/nginx /var/log/nginx && \
    chmod -R 755 /tmp/nginx

# Switch to non-root user
USER nginx

# Add health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
    CMD curl -f http://localhost:80/ || exit 1

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]