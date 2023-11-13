const express = require('express');
const app = express();

const mysql = require('mysql2/promise');
const morgan = require('morgan');
const cors = require('cors');
const port = 5555;

//***********************   INICIALIZACIONES   *************************/
app.use(morgan('dev'))
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//********************  CONEXIÓN A LA BASE DE DATOS   ****************** */
const pool = mysql.createPool({
    // host: 'localhost',
    // host: '172.17.0.2',
    host: 'mysql',
    user: 'root',
    password: 'root',
    database: 'prueba'
})

//************************   MÉTODOS REST    ****************************/
app.get('/consultar_con_soap', async (req, res)=>{
    try {
        const [rows] = await pool.query('SELECT * FROM perfiles');
        console.log(rows)
        res.json({ok: true, msg: 'Perfiles', rows});
    } catch (error) {
        console.log(error)
        return res.json({msg: "Error al hacer la consulta"})
    }
})

app.post('/insertar_con_rest', async (req,res)=>{
    try {
        const {nomUsuario, perfil, activo} = req.body
        console.log(req.body)
        const [rows] = await pool.query("INSERT INTO perfiles(nomUsuario, perfil, activo) VALUES(?,?,?)", [nomUsuario, perfil, activo]);
        res.json({
            msg: 'Registro insertado correctamente',
            id: rows.insertId,
            nomUsuario,
            perfil,
            activo
        });

    } catch (error) {
        console.log(error)
        return res.json({msg: 'Error al insertar el registro', error})
    }
})
//********************  INICIALIZACIÓN SERVIDOR   ********************** */
app.listen(port, ()=>{
    console.log(`Servidor sirviendo en el puerto ${port}....get prueba: http://localhost:5555/consultar_con_soap`)
})