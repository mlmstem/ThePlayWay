# Stage 1: Install dependencies and run tests
FROM node:18-alpine AS build

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json (if present)
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the entire app source
COPY . .

# Run tests as part of the build process
RUN npm test

# Build the Next.js app
RUN npm run build

# Stage 2: Production environment
FROM node:18-alpine

# Set the working directory
WORKDIR /app

# Copy only the production build from the previous stage
COPY --from=build /app/.next ./.next
COPY --from=build /app/package.json ./
COPY --from=build /app/public ./public
COPY --from=build /app/node_modules ./node_modules

# Expose the port
EXPOSE 3000

# Set environment variable to production
ENV NODE_ENV=production

# Start the app
CMD ["npm", "run", "start"]
