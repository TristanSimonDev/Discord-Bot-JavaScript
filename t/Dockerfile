# Use node version 22
FROM node:22

# Set the working directory inside the container to /docker
WORKDIR /docker

# Copy package.json and package-lock.json from the root directory into the container
COPY ./package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code into the container
COPY . .

# List the contents of the /docker directory for debugging
RUN ls -R /docker

# Command to run the application
CMD ["node", "src/Bots/Bot1/index.js"]