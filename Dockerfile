FROM node:16 AS builder
ENV NODE_ENV=development
WORKDIR /app
COPY package.json ./
COPY pnpm-lock.yaml ./
COPY prisma ./prisma
RUN npm install -g pnpm
RUN pnpm install
RUN pnpm dlx prisma generate
COPY . .
RUN pnpm build


FROM node:16 AS runner
ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}
RUN npm install -g pnpm
WORKDIR /app
COPY --from=builder /app/node_modules ./node_modules
COPY package.json ./
COPY pnpm-lock.yaml ./
COPY prisma ./prisma
COPY start.sh ./
RUN pnpm install
COPY --from=builder /app/dist ./dist
RUN chmod +x ./start.sh
CMD [ "./start.sh" ]