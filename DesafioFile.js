
const fs = require("fs");

class contenedor {
    
    constructor(filename){
      this.filename = filename;
    }

    async save(data) {
        try{
          const indice = await fs.promises.readFile(this.filename ,"utf-8");
          console.log(indice)
          const idPro = JSON.parse(indice);
          let reg = idPro.length;
          data.id=reg+1;
          idPro.push(data);
          const contenido = await fs.promises.writeFile(this.filename,JSON.stringify(idPro));
          console.log("*** Id Asignado: "+data.id +" ***");
          console.log(idPro);
        }
        catch (error){
         console.log("Error en la funcion save."+error)
        }
    }

    async getById(indice){
        try{
        console.log("*** Buscar por indice... ***")
        let bandera = 0
        const contenidonew = await fs.promises.readFile("./productos.txt","utf-8");
        const prod = JSON.parse(contenidonew);
        for (var i in prod) {
            if (prod[i].id ===indice){
                console.log("Title: "+prod[i].title);
                console.log("Price: "+prod[i].price);
                console.log("Indice: "+prod[i].id);
              bandera= 1
            }
        }
        const existe = bandera ===1 ? console.log("Existe el Id en el archivo") : console.log("No existe el Id en el archivo");
        console.log(existe); // "Beer"
        }
            catch (error){
            console.log("Error buscar por indice.")
        }
    }

    async getAll()
    {
        try{
        console.log("*** Array all objects ***")
        const contenidonew = await fs.promises.readFile(this.filename ,"utf-8");
        const prod = JSON.parse(contenidonew);
        console.log(prod);
        }
        catch(error){
            console.log("error  todos los objetos productos")
        }
    }

    async deleteById(idDel)
    {
        try{
        console.log("*** Delete por Id ***")
        let bandera = 0;
        let newfile =[{}]
        const contenidonew = await fs.promises.readFile("./productos.txt","utf-8");
        const prod = JSON.parse(contenidonew);
        for (var i in prod) {
            if(prod[i].id !== idDel){
                let ingreso={
                   title: prod[i].title,
                   price: prod[i].price,
                   url : prod[i].url,
                   id: prod[i].id
                   }
                newfile.push(ingreso);
            }  else bandera=1
        }

        if(bandera ===1){
            await fs.promises.writeFile("./productos.txt",JSON.stringify(newfile));
            console.log("Eliminó registro");
        }
        else console.log("No se encontro registro para eliminar");
      
        console.log("new file")
        console.log(newfile);
    }
     catch(error){
        console.log("error delete por id")
     }
    }

    async deleteAll(){
       console.log("*** Delete All Products ***")
       const contenidonew = await fs.promises.unlink("./productoscopia.txt");
    }

    async countProductos( ){
        try{
          const indice = await fs.promises.readFile(this.filename ,"utf-8");
          console.log(indice)
          const idPro = JSON.parse(indice);
          let reg = idPro.length;
          return reg;
        }
        catch (error){
         console.log("Error en la funcion save."+error)
        }
    }
}



 const productos = new contenedor("./productos.txt");
 productos.save({title:"producto01",price : 25, url:"", id:0})
 productos.getById(3);
 productos.getAll();
 productos.deleteById(15)
 productos.deleteAll()

