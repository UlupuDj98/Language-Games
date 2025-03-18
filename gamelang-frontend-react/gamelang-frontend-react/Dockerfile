# Usa un'immagine di Node.js come base
FROM node:14 AS build

# Imposta la directory di lavoro
WORKDIR /app

# Copia i file package.json e package-lock.json
COPY package*.json ./

# Installa le dipendenze
RUN npm install

# Copia il resto dell'app
COPY . .

# Costruisci l'app
RUN npm run build

# Usa un'immagine di Nginx per servire l'app
FROM nginx:alpine

# Copia i file di build nella directory di Nginx
COPY --from=build /app/dist /usr/share/nginx/html

# Espone la porta 80
EXPOSE 80

# Comando per avviare Nginx
CMD ["nginx", "-g", "daemon off;"]
