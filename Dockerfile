# Use Node.js slim image
FROM node:22-slim AS base

# Install dependencies
FROM base AS deps
WORKDIR /app
COPY package.json package-lock.json* ./
RUN npm ci

# Build application
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

ENV NODE_ENV=production
RUN npx @tanstack/router-cli generate
RUN npm run build

# Production image
FROM node:22-slim AS runner
WORKDIR /app

ENV NODE_ENV=production

# Install curl
RUN apt-get update && apt-get install -y curl && rm -rf /var/lib/apt/lists/*

# Create non-root user
RUN addgroup --system --gid 1001 nodejs && \
    adduser --system --uid 1001 nodejs

# Copy only the build output
COPY --from=builder /app/.output ./.output

EXPOSE 3000

USER nodejs

CMD ["node", ".output/server/index.mjs"]