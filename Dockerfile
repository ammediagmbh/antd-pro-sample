# First build stage
FROM bitnami/node:16 as builder
ENV NODE_ENV="production"

RUN apt-get update

# Install software
RUN apt-get install -y git





# Copy app's source code to the /app directory
COPY . /app

# The application's directory will be the working directory
WORKDIR /app


RUN git clone https://github.com/ant-design/ant-design-pro.git my-project -b master

# The application's directory will be the working directory
WORKDIR /app/my-project

# Install Node.js dependencies defined in '/app/packages.json'
RUN npm install -g npm@8.6.0
RUN npm install -g yarn
RUN npm install -g pm2
#RUN npm install
RUN yarn install --production=false


# Second build stage
FROM bitnami/node:16-prod
ENV NODE_ENV="production"

# Copy the application code
COPY --from=builder /app /app

# Create a non-root user
RUN useradd -r -u 1001 -g root nonroot
RUN chown -R nonroot /app
USER nonroot

WORKDIR /app/my-project
EXPOSE 8000

RUN npm install -g pm2
RUN pm2 start npm --name "app name" -- start

# Start the application
#CMD ["pm2", "start npm --name "app name" -- start"]
