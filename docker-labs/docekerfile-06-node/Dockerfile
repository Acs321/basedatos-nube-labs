##RUN SE EEJCUTA A LA HORA DE CONSTRUIR LA IMAGEN
FROM node:alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci    
COPY . .
EXPOSE 3000 
CMD [ "node", "app.js" ]