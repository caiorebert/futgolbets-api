# Etapa 1: Construir a aplicação
FROM node:18-alpine AS builder

# Definir o diretório de trabalho dentro do container
WORKDIR /app

# Copiar package.json e package-lock.json (ou yarn.lock)
COPY package*.json ./

# Instalar dependências de desenvolvimento e produção
RUN npm install

# Copiar o restante do código da aplicação
COPY . .

# Rodar o build da aplicação NestJS (transpilar TypeScript para JavaScript)
RUN npm run build

# Remover dependências de desenvolvimento para otimizar a imagem final
RUN npm prune --production

# Etapa 2: Criar a imagem final para produção
FROM node:18-alpine

# Definir o diretório de trabalho para a aplicação
WORKDIR /app

# Copiar arquivos necessários da etapa de build
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package*.json ./

# Expor a porta que a aplicação NestJS vai rodar (por padrão, 3000)
EXPOSE 3000

# Definir variáveis de ambiente necessárias (por exemplo, produção)
ENV NODE_ENV production

# Comando para iniciar a aplicação NestJS em modo produção
CMD ["node", "dist/main"]
