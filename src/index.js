const express = require('express');
const app = express();
const morgan = require('morgan');
var router = require('./routes') 

//Se agregan middlewares
app.use(morgan("dev"))
app.use(express.json())

//Configuración
app.set("port", 8080)
app.listen(app.get("port"), () => {
    console.log("SERVER CORRIENDO!")
})

//Rutas
app.use("/buscaminas",router)

module.exports = app