# Use the official Node.js image
FROM node:20

# Set the working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the project files
COPY . .

# Build the application
RUN npm run build

# Expose the Vite preview port
EXPOSE 4173

# Start the application
CMD ["npm", "run", "preview", "--", "--host"]