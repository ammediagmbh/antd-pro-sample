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


RUN mkdir appointment

WORKDIR /app/appointment

RUN git clone "https://ammediagmbh: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@github.com/ammediagmbh/appointment.intranet.venus-beauty.ch.git"

WORKDIR /app/appointment/appointment.intranet.venus-beauty.ch

# Install Node.js dependencies defined in '/app/packages.json'
# RUN npm install pm2 -g
RUN npm i -g node-sass
RUN npm install

# Install Node.js dependencies defined in '/app/packages.json'
#RUN npm install -g create-react-app
#RUN npx create-react-app react-app

#WORKDIR /app/react-app

# Second build stage
FROM bitnami/node:16-prod
ENV NODE_ENV="production"

# Copy the application code
COPY --from=builder /app/appointment /app/appointment

# Create a non-root user
RUN useradd -r -u 1001 -g root nonroot
RUN chown -R nonroot /app
USER nonroot

WORKDIR /app/appointment/appointment.intranet.venus-beauty.ch
EXPOSE 3000

# Start the application
CMD ["npm", "start"]
