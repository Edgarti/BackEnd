const fs = require('fs');

const mascotas = fs.readFileSync("./mascotas.txt","utf-8")
console.log(Json.parse(mascotas)); //recibo string con parse pasa a Json
const archivo = fs.readFileSync("./usuarios.txt","utf-8")
console.log(archivo);

//escribir archivos 
//
const write = fs.writeFileSync("./usuarios.txt","Ingreso registro")

const persona ={
    nombre:"Juanito",
    edad : 25
}

fs.writeFileSync("./usuarios.txt",Json.stringify(persona)); //paso de formato Json a string

fs.utimesSync("./mascotas.txt")

// fs.readFileSync lectura
// fs.writeFileSync  escritura
// fs.appendFileSync actualiza 
// fs.unlinkSync borra

//agreagr registros
//Primero leer
const nombre = fs.readFileSync("./usuarios.txt","utf-8")
//segundo agregar a nombre
//Tercero reescribir el archivo 

try{

    const mascotas = fs.readFileSync("./mascotas.txt","utf-8")
}
catch(error){
 console.log("Error al leer el archivo")
}

// Asyncro no bloqueantes 

