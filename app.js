const express=  require('express');
const app = express();

const {json,urlencoded} = require('body-parser');


//convertir informacion del frontend para recibirla en json hacia el backend
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());
app.use(urlencoded({ extended: true }));
app.use(json());


//importar rutas 
const usuariosRoutes = require('./routes/index');


//utiliza las rutas que definimos 
app.use(usuariosRoutes);







module.exports = app;




