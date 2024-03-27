FROM node:21-alpine3.18

# Create app directory
COPY . /app

# Set working directory
WORKDIR /app

# Copy package.json
COPY package.json .

# Install app dependencies
RUN npm install

# # Build app
# RUN npm run build

# Expose port
EXPOSE 3000

# Start app
CMD [ "npm", "start" ]

