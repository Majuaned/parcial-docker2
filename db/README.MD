Creo el Dockerefile
Creo el create_table.sql
Creo la imágen:
    docker build -t imagen-db .
Creo el contenedor:
    docker run -d --name conte-db -p 3306:3306 imagen-db

//Consultas a la base de datos:
    mysql -u root -p
    root

    use prueba;
    select * from perfiles;

