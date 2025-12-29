# FROM node:20 AS build

# # Set working directory
# WORKDIR /app

# # Copy only package files first for caching
# COPY package*.json ./

# # Install all dependencies (dev + prod)
# RUN npm ci

# # Copy only source code needed for build
# COPY . .

# # Build the app (e.g., TypeScript -> JS)
# RUN npm run build


# FROM node:20-alpine

# # Set working directory
# WORKDIR /app

# # Set Node environment to production
# ENV NODE_ENV=production

# # Copy compiled code from build stage
# COPY --from=build /app/dist ./dist

# # Copy only package files to install production dependencies
# COPY --from=build /app/package*.json ./

# # Install only production dependencies
# RUN npm ci --omit=dev && npm cache clean --force

# # Optional: Expose port (if your app uses it)
# EXPOSE 3000

# # Start the app
# CMD ["node", "dist/index.js"]


FROM node:20-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .

ENV NODE_ENV=production

EXPOSE 3000

CMD ["npm", "start"]
