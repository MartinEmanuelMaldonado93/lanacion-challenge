FROM node:18-alpine AS builder

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm ci

COPY . .

RUN npm run build

FROM node:18-alpine

# Instalar http-server globalmente
RUN npm install -g http-server

# Establecer el directorio de trabajo en /app
WORKDIR /app

# Copiar los archivos compilados desde la etapa de construcción
COPY --from=builder /app/dist ./dist

# Exponer el puerto en el que el servidor estará escuchando
EXPOSE 8080

# Comando por defecto para ejecutar el servidor
CMD ["http-server", "dist", "-p", "8080"]


