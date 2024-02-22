FROM node:21-alpine3.18

WORKDIR /app

COPY package.json ./

RUN npm install --global pnpm
COPY . .
RUN pnpm install


ENV DATABASE_URL="postgresql://nextappadmin:qwer1236@db:5432/nextapp"
ENV TYPESENSE_API_KEY=l2bb7LrLzo0JCqYVGr5hhbknGEYJk0dYsqexICLZsPkMPOTp
ENV TYPESENSE_URL=typesense

EXPOSE 4000

RUN pnpm prisma generate

CMD ["npm", "run", "start"]