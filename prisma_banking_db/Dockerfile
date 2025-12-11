# 1. Base image
FROM node:24-alpine

# 2. Set working directory
WORKDIR /prisma_banking_db

# 3. Copy only package files for caching
COPY package*.json ./

# 4. Install dependencies
RUN npm install

# 5. Copy entire project
COPY . .

# 6. Add environment variable for build time
ENV DATABASE_URL="postgresql://postgres:root@postgres:5432/Banking?schema=public"

# 6. Generate Prisma client (important!)
RUN npx prisma generate

# 7. Expose the port your Node app uses
EXPOSE 3000

# 8. Default command to run your app
CMD ["npm", "start", "dev"]
