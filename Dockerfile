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

RUN mkdir appointment

WORKDIR /app/appointment

RUN git clone "https://ammediagmbh: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@github.com/ammediagmbh/appointment.intranet.venus-beauty.ch.git"

# Install Node.js dependencies defined in '/app/packages.json'
RUN npm install pm2 -g
RUN npm install

#RUN pm2 start npm --name "appointment" -- start


# Second build stage
FROM bitnami/node:16-prod
ENV NODE_ENV="production"

# Copy the application code
COPY --from=builder /app /app

# Create a non-root user
#RUN useradd -r -u 1001 -g root nonroot
#RUN chown -R nonroot /app
#USER nonroot

EXPOSE 3000

RUN npm install pm2 -g

# Start the application
#CMD ["pm2", "start npm --name "appointment" -- start"]
RUN pm2 start npm --name "appointment" -- start
