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


RUN git clone https://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@github.com/ammediagmbh/appointment.intranet.venus-beauty.ch

# Install Node.js dependencies defined in '/app/packages.json'
RUN npm install -g create-react-app
RUN npx create-react-app react-app

WORKDIR /app/react-app

# Second build stage
FROM bitnami/node:16-prod
ENV NODE_ENV="production"

# Copy the application code
COPY --from=builder /app /app

# Create a non-root user
RUN useradd -r -u 1001 -g root nonroot
RUN chown -R nonroot /app
USER nonroot

WORKDIR /app/react-app
EXPOSE 3000

# Start the application
CMD ["npm", "start"]
