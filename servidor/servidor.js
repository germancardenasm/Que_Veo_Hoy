//paquetes necesarios para el proyecto
var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var controladorPeliculas = require('./controladores/controladorPeliculas');
var controladorGeneros = require('./controladores/controladorGeneros');
var controladorInfoPeliculas = require('./controladores/controladorInfoPeliculas');
var controladorRecomendacion = require('./controladores/controladorRecomendacion');


var app = express();

app.use(cors());

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());

app.get("/peliculas?", controladorPeliculas.mostrarPeliculas);
app.get("/generos", controladorGeneros.cargarGeneros);
app.get("/peliculas/:id", controladorInfoPeliculas.obtenerDetallePelicula);

app.get("/peliculas/recomendacion?", controladorRecomendacion.recomendarSegunSeleccion);
//app.get("/peliculas/recomendacion", controladorRecomendacion.recomendarCualqueira);

//seteamos el puerto en el cual va a escuchar los pedidos la aplicación
var puerto = '8080';

app.listen(puerto, function () {
  console.log( "Escuchando en el puerto " + puerto );
});

