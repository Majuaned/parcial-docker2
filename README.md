## PASO 1 Crear las imagenes
## Carpeta mysql
`docker build -t imagen-db .`

## Carpeta Rest
`docker build -t image-rest .`

## Carpeta Soap
`docker build -t image-soap .`

## Carpeta Client
`docker build -t client .`

## PASO 2 Desplegar los servicios con swarm

`docker swarm init`

`docker stack deploy -c docker-compose.yml servicios-segparcial`

## Notas

El servidor web se encuentra alojado en localhost:8080