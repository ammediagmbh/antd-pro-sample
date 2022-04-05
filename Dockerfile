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






RUN git clone https://github.com/ant-design/ant-design-pro-site.git

RUN ls

WORKDIR /app/ant-design-pro-site

# Install Node.js dependencies defined in '/app/packages.json'
RUN npm install


# Second build stage
FROM bitnami/node:16-prod
ENV NODE_ENV="production"

# Copy the application code
COPY --from=builder /app/appointment /app/appointment

# Create a non-root user
RUN useradd -r -u 1001 -g root nonroot
RUN chown -R nonroot /app
USER nonroot

WORKDIR /app/ant-design-pro-site
EXPOSE 3000

# Start the application
CMD ["npm", "start"]
