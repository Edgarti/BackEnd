const express= require("express");
const contenedor = require("./Container");
const contenedorProductos = new contenedor("./productos.txt");
var PORT = 8080;
//Crear Server
const app = express();
//Levantar server
app.listen(PORT,()=> console.log("server activo"))

//  rutas endpoint
app.get("/",async(request,response)=>{
    const result = await contenedorProductos.getAll();
    response.json(result)
    // end solo texto  Send json,array
})

app.get("/users",(request,response)=>{
    response.json({nombre:"Edgar", edad:25}); // end solo texto  Send json,array
})

//Glitch.com  deploy public

app.get("/productos",async(request,response)=>{
    const result = await contenedorProductos.getAll();
    console.log(result)
    response.json(result)
    // end solo texto  Send json,array
})

app.get("/productosRandom",async(request,response)=>{
    const respuesta = await contenedorProductos.countProductos();
    console.log(respuesta)
    const idReg =Math.floor(Math.random() * (respuesta - 1) + 1);
    const getById = await contenedorProductos.getById(idReg)      
    response.json(getById); // end solo texto  Send json,array
})
