# Use an official Node.js runtime as a base image
FROM node:16-slim

# Set the working directory in the container to /app
WORKDIR /app

# Copy package.json and package-lock.json into the container at /app
COPY package*.json /app/

# Install dependencies
RUN npm install

# Copy the current directory (i.e., Next.js project) into the container at /app
COPY . /app/

# Start the Next.js application
CMD ["npm", "run", "dev"]
