// Edgar Pirachican - Colombia  320-4541181 

class usuarios{
 constructor(){
        this.name = "Edgar Enrique",
        this.lasname = "Pirachican Fontecha",
        this.book = [],
        this.pets = []
    }

    getFullName(){
       console.log(`Me presento: ${this.name} ${this.lasname}`);
    }

    addPets(namePets){
        this.pets.push(namePets);
    }

    CountPets(){
        console.log(`Cantidad total de mascotas: ${this.pets.length}`);
    }

    addBook( titulo, autor){
        let texto = {
            title : titulo,
            autor : autor
        }
       this.book.push(texto);
    }
 
    getBookNames(){    
       let nameTitulo =  this.book.map(nameTitle => nameTitle.title);
       console.log(` lista nombre de libros : ${nameTitulo}`);
    }

}

let usu = new(usuarios);
usu.getFullName();

usu.addPets("Gato");
usu.addPets("Perro");
usu.addPets("Loro");
usu.addPets("Pez");

console.log("Lista de mascotas:");
console.log(usu.pets);
usu.CountPets();

usu.addBook("Dale color a tu vida","Claudia Castellanos");
usu.addBook("La belleza de ser mujer","Johanna Castellanos");
usu.addBook("Tocando el corazon del padre","Cesar Castellanos");

console.log("Lista de Book :");
 console.log(usu.book);

usu.getBookNames();

console.log(usu)