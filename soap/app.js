const express = require('express');
const app = express();

const mysql = require('mysql2/promise');
const morgan = require('morgan');
const cors = require('cors');
const soap = require('soap');

const port = 5051;

//***********************   INICIALIZACIONES   *************************/
app.use(morgan('dev'))
app.use(cors());
app.use(express.json());
app.use(express.static(__dirname));

//***********************************************************************/
const pool = mysql.createPool({
    host: 'mysql',
    user: 'root',
    password: 'root',
    database: 'prueba',
});

const consultarUsuarios = async () => {
    try {
        const [rows] = await pool.query("SELECT * FROM perfiles");
        console.log(rows)
        return { usuarios: rows }
    } catch (error) {
        console.log(error)
        return { msg: 'Error al hacer la consulta SOAP' };
    }
};

const xml = require('fs').readFileSync('consultarUsuarios.wsdl', 'utf8');

const serviceObject = {
  ConsultarUsuariosService: {
    ConsultarUsuariosPort: {
      consultarUsuarios: consultarUsuarios
    },
  },
};


soap.listen(app, '/consultar_usuarios', serviceObject, xml);

//********************  INICIALIZACIÓN SERVIDOR   ********************** */
app.listen(port, ()=>{
    console.log(`Servidor sirviendo en el puerto ${port}....get prueba: http://localhost:5051/insertar_con_rest`)
})