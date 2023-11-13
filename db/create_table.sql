CREATE DATABASE IF NOT EXISTS prueba;

USE prueba;

CREATE TABLE IF NOT EXISTS perfiles (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nomUsuario VARCHAR(255),
    perfil VARCHAR(255),
    activo BOOLEAN
);

insert into perfiles (nomUsuario, perfil, activo) values ('maldo', 'senior programador',1);