ARG NODE=node:18.17-alpine

FROM ${NODE} as builder

RUN apk add --no-cache libc6-compat

WORKDIR /app

COPY package*.json ./
RUN npm install --omit=dev --frozen-lockfile

COPY . .

ARG WEATHER_API_KEY
ENV WEATHER_API_KEY ${WEATHER_API_KEY}

RUN npm run build

FROM ${NODE} as runner

RUN apk add --no-cache libc6-compat

WORKDIR /app

COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

ARG WEATHER_API_KEY
ENV WEATHER_API_KEY ${WEATHER_API_KEY}

EXPOSE 3000

ENTRYPOINT ["node", "server.js"]