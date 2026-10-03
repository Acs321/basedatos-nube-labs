# Comandos importantes


```docker
docker build -t nombre_de_tu_imagen:tag .
```


```docker
docker run --name nginx-prueba -p 8180:80 -d nginx:v1

```

## Entrar al contenedor 

```docker
docker exec -it nginx-prueba sh
```

docker run --name App_node -d -p 3136:8080 app:v1 

