FROM node:8-jessie-slim

RUN apt-get update \
  && apt-get install unzip

ADD . /app

WORKDIR /app

# Install nodejs dependencies with dev dependencies
# build assets, then rm and re-install without dev dependencies
RUN npm install \
  && npm install -g gulp \
  && gulp build \
  && rm -rf node_modules \
  && npm install --no-optional --production \
  && npm remove -g gulp \
  && apt-get remove --purge -y unzip
CMD ["node", "app.js"]
EXPOSE 5000

