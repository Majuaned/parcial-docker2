Creación de un servidor express
Creación de los métodos api

Creación del archivo Dockerfile y de su imagen:
docker build -t imagen-soap .

Creación del contenedor api-rest:
    docker run -d --name conte-soap -p 5050:5050 imagen-soap

