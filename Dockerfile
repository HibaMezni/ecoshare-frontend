# Multi-stage build for Angular 17 application
# Stage 1: Build the Angular application
FROM node:20-alpine AS builder

WORKDIR /app

# Copy package files
COPY ecoshare/package.json ecoshare/package-lock.json ./

# Install dependencies
RUN npm ci --only=production && npm ci --only=development

# Copy the entire application
COPY ecoshare/ .

# Build the Angular application
RUN npm run build -- --configuration production

# Stage 2: Serve with Nginx (lightweight and production-ready)
FROM nginx:alpine

# Copy nginx configuration
COPY nginx.conf /etc/nginx/nginx.conf

# Copy built application from builder stage
COPY --from=builder /app/dist/ecoshare/browser /usr/share/nginx/html

# Expose port 80 and 443
EXPOSE 80 443

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
    CMD wget --quiet --tries=1 --spider http://localhost/index.html || exit 1

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
