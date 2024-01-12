# Use a base image with Node.js
FROM node:20

# Set the working directory in the container
WORKDIR /remix-app

# Copy package.json and pnpm-lock.yaml to the working directory
COPY package.json pnpm-lock.yaml tsconfig.json* .npmrc* ./

# Install project dependencies using pnpm
RUN npm install -g pnpm
RUN npm install pm2 -g
RUN pnpm install

# Copy the rest of the application code to the working directory
COPY . .

# Build the project
RUN pnpm build

# Expose port 3000
EXPOSE 3000

# Start the application using pm2
CMD ["pm2", "start", "pm2.json"]
