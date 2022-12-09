FROM node:16.16.0 as base

COPY package.json ./
COPY package-lock.lock ./
COPY .prettierrc ./
RUN npm install

COPY src ./src
COPY env ./env
COPY tsconfig.json ./tsconfig.json
COPY tslint.json ./tslint.json
COPY tsconfig.build.json ./tsconfig.build.json

# Build dist
RUN npm build-ts

COPY --from=base ./node_modules ./node_modules
COPY --from=base /dist /dist

EXPOSE 7800
CMD ["dist/src/server.js"]