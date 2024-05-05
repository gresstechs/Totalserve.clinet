# Use an official Node.js runtime as a parent image
FROM node:21-alpine AS Build_Image

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install app dependencies
RUN npm install

# Copy the rest of your application code to the working directory
COPY . .

# Expose a port to communicate with the React app

# EXPOSE 5173

# Start your React app
RUN npm run build

#EXPOSE 3000

FROM node:21-alpine as Production_Image

WORKDIR /app

COPY --from=Build_Image /app/dist /app/dist

EXPOSE 8080

COPY package.json .
COPY vite.config.ts .

RUN npm install typescript

EXPOSE 8080
CMD ["npm", "run", "preview"]