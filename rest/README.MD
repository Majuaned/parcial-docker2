Creación de un servidor express
Creación de los métodos api
Se realiza una consulta con mi servidor encendido, a la ruta get y no funciona sin la libreria promises de mysql2
http://localhost:5555/perfiles

Creación del archivo Dockerfile y de su imagen:
docker build -t imagen-rest .

Creación del contenedor api-rest:
    docker run -d --name conte-rest -p 5555:5555 imagen-rest

