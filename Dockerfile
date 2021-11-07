# Stage 1: Compile and Build angular codebase

# Use official node image as the base image
FROM node:16-alpine3.14 as build
# Set the working directory
WORKDIR /usr/local/app
# Add the source code to app
COPY ./ /usr/local/app/
# Install all the dependencies
RUN npm install
# Generate the build of the application
RUN npm run build

# Stage 2: Serve app with nginx server
# Use official nginx image as the base image
FROM nginx:16-alpine3.14

# Copy the build output to replace the default nginx contents.
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=build /usr/local/app/dist/sentency-web /usr/share/nginx/html

# Expose port 80
EXPOSE 80

CMD ["/bin/sh",  "-c",  "envsubst < /usr/share/nginx/html/en/assets/env.template.js > /usr/share/nginx/html/en/assets/env.js && envsubst < /usr/share/nginx/html/pt/assets/env.template.js > /usr/share/nginx/html/pt/assets/env.js && exec nginx -g 'daemon off;'"]

