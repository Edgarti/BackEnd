const http = require("http");

//Crear Servidor
const server = http.createServer((request, response)=>{
 console.log("El server recibio solicitud")
 response.end("Exito")
});

//Levanar el server en un puerto
server.listen(8080,()=> console.log("servidor correiendo en el puerto"));

// Instalar nodemon se encarga de  cancelar el server y reiniciar el server  
// cada vez que se realice algun cambio
// para ejecutar ... nodemom server.js

//Instalar express para facilitar el codigo de configurar server en el puerto 8080

// el maejo de endpoint

// punto de base
// http://localhost:8080

// endpoint
// /productos   http:/localhost:8080/productos;
// /mascotas    http:/localhost:8080/mascotas;
// /usuarios;

//Crear server con express


