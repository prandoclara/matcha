# Étape 1 : Utilise une image avec Node.js 20 et Alpine
FROM node:20-alpine

# Étape 2 : Installe nginx
RUN apk add --no-cache nginx

# Étape 3 : Définis le dossier de travail
WORKDIR /usr/src/app/frontend

# Étape 4 : Copie la conf nginx + code
COPY ./conf/nginx.conf /etc/nginx/nginx.conf
COPY . .

# Étape 5 : Rends exécutable le script si besoin
RUN chmod +x ./script/setupstatic.sh

# Étape 6 : Expose le port utilisé par nginx
EXPOSE 8443

# Étape 7 : Build du frontend
RUN sh ./script/setupstatic.sh
RUN npm install
RUN npm run build:css
RUN npm run build

# Étape 8 : Lance nginx
CMD ["nginx", "-g", "daemon off;"]
