const fs = require("fs");

const save =  async() =>{
    const contenido = await fs.promises.writeFile("./productos.txt",JSON.stringify([{nombre:"edgar",edad:20}]));
    const contenidonew = await fs.promises.readFile("./productos.txt","utf-8");
    const prod = JSON.parse(contenidonew);
    console.log(prod);
    prod.push({nombre:"carlos", edad:23});
    await fs.promises.writeFile("./productos.txt",JSON.stringify(prod));
}
save();