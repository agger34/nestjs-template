FROM node:18.16.0-alpine

ARG WORK_DIR=/var/www/node
RUN mkdir -p ${WORK_DIR}
COPY . ${WORK_DIR}/
WORKDIR ${WORK_DIR}

# install ALL modules
RUN npm ci
# build
RUN npm run build

ENTRYPOINT  ["npm", "run", "start:prod"]
