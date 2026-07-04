FROM node:20-alpine AS builder
WORKDIR /app
COPY ecoshare/package.json ecoshare/package-lock.json ./
RUN npm ci --only=production && npm ci --only=development
COPY ecoshare/ .
RUN npm run build -- --configuration production

FROM nginx:alpine
RUN addgroup -S ecoshare && adduser -S ecoshare -G ecoshare
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=builder /app/dist/ecoshare/browser /usr/share/nginx/html
RUN chown -R ecoshare:ecoshare /usr/share/nginx/html && \
    chown -R ecoshare:ecoshare /var/cache/nginx && \
    chown -R ecoshare:ecoshare /var/log/nginx && \
    touch /var/run/nginx.pid && \
    chown ecoshare:ecoshare /var/run/nginx.pid
USER ecoshare
EXPOSE 80
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
    CMD wget --quiet --tries=1 --spider http://localhost/index.html || exit 1
CMD ["nginx", "-g", "daemon off;"]
