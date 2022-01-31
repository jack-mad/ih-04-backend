/*
Patrones de diseño
Son propuestas y casos de uso que permite resolver problemas cotidianos

1. module pattern - patron modular
aplica validez de importaciones y exportaciones en un proyecto

*/

// 1. importaciones
//traer funciones o variables de otros archivos a este

//se usa para archivos externos propios
// const suma = require('./suma');
// console.log(suma(2,4))

//archivos node_modules
//express es una libreria que funciona para la gestion de ruteos y middlewares
const express = require("express");
const app = express();      
// console.log(express);

// const resta = require('./resta');
// console.log(resta(20,11))

// 2. middlewares
//Activar variables d entorno
//en local vale una cosa y en remoto otra
require('dotenv').config()

app.use(express.static('public'))

//establecer vistas (path y motor handlebars)
app.set('views', __dirname + '/views')

//motor handlebars
app.set('view engine', 'hbs')

// 3. rutas
app.use('/', require('./routes/index'))

// 4. servidor
app.listen(process.env.PORT, () => {
  console.log("Servidor activo");
});
 