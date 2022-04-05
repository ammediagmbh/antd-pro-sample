# First build stage
FROM bitnami/node:16 as builder
ENV NODE_ENV="production"

RUN apt-get update

# Install software
RUN apt-get install -y git
RUN apt-get install -y python2
RUN apt-get install -y build-essential




# Copy app's source code to the /app directory
COPY . /app

# The application's directory will be the working directory
WORKDIR /app


RUN git clone --depth=1 https://github.com/ant-design/ant-design-pro.git my-project -b v2

# The application's directory will be the working directory
WORKDIR /app/my-project

# Install Node.js dependencies defined in '/app/packages.json'
RUN npm install -g npm@8.6.
RUN npm install


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

# Start the application
CMD ["npm", "start"]
