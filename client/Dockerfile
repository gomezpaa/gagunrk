# Using an official Node.js runtime as the base image
FROM node:14

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

#Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . ./

# Specify the command to run the client app
CMD ["npm", "start"]
