# Use Node.js version that supports ??= 
FROM node:16

# Set working menu
WORKDIR /usr/src/app

# Copy package.json and package-lock.json (if exists)
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy project files to working menu
COPY . .

# Set commands to run when the containers start
CMD [ "node", "seed.js" ]
