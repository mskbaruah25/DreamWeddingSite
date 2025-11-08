# Build stage
FROM node:20-alpine as build

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies including development dependencies
RUN npm install

# Copy project files
COPY . .

# Build the client app
ENV NODE_ENV=production
RUN cd client && npm run build

# Production stage
FROM node:20-alpine

WORKDIR /app

# Copy built assets and necessary files
COPY --from=build /app/client/dist ./client/dist
COPY --from=build /app/server ./server
COPY --from=build /app/package*.json ./
COPY --from=build /app/node_modules ./node_modules

# Expose port
EXPOSE 3000

# Start the server
CMD ["node", "--experimental-modules", "server/index.js"]
