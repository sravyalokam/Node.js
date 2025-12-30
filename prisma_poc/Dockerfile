# # Stage 1: Build
# FROM node:20 AS build
# WORKDIR /app

# # Copy dependencies & tsconfig for caching
# COPY package*.json ./

# # Install dev + prod dependencies
# RUN npm ci

# # Copy full source
# COPY . .

# # Build TypeScript
# RUN npm run build

# # Stage 2: Production
# FROM node:20-alpine
# WORKDIR /app

# # # Set production environment
# ENV NODE_ENV=production

# # Copy compiled code
# COPY --from=build /app/dist ./dist

# # Copy production dependencies
# COPY --from=build /app/package*.json ./

# # Install only production dependencies
# RUN npm ci --omit=dev && npm cache clean --force

# # Copy Prisma schema & .env if needed
# COPY prisma ./prisma
# COPY .env ./

# # # Expose port
# # EXPOSE 3000

# # Start app
# CMD ["node", "dist/index.js"]



FROM node:20-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .

CMD ["npm", "start"]
