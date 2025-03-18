# Usa un'immagine base di Node.js
FROM node:20

# Imposta la directory di lavoro
WORKDIR /usr/src/app

# Copia il file package.json e package-lock.json
COPY package*.json ./

# Installa le dipendenze
RUN npm install

# Copia il resto dell'applicazione
COPY . .

# Espone la porta su cui l'applicazione ascolta
EXPOSE 3000

# Comando per avviare l'applicazione
CMD ["node", "app.js"]
