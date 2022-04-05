# First build stage
FROM bitnami/node:16 as builder
ENV NODE_ENV="production"



# The application's directory will be the working directory
WORKDIR /app

RUN npm install


# Install Node.js dependencies defined in '/app/packages.json'
RUN npm install -g create-react-app
RUN npx create-react-app r./
RUN npm install -g express

# Second build stage
FROM bitnami/node:16-prod
ENV NODE_ENV="production"

# Copy the application code
COPY --from=builder /app/react-app /app/react-app

# Create a non-root user
RUN useradd -r -u 1001 -g root nonroot
RUN chown -R nonroot /app/react-app
USER nonroot

WORKDIR /app/react-app
EXPOSE 3000

# Start the application
CMD ["npm", "start"]
