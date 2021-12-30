//========= SECCIÓN DE PRODUCTOS =========
class Producto {
    constructor (id, title, tipo, precio, stock, imagen, descripcion) {
        this.id = id;
        this.title = title;
        this.tipo = tipo;
        this.precio = precio;
        this.stock = stock;
        this.imagen = imagen;
        this.descripcion = descripcion;
    }
}

let jacket = new Producto(0, "Dark Jean Jacket", "jackets", 3500, 4, "https://res.cloudinary.com/this/image/upload/v1640141590/p0_belgdx.jpg", "Most recently design.");
let jacket1 = new Producto(1, "Baggy Jacket", "jackets", 7700, 7, "https://res.cloudinary.com/this/image/upload/v1640141590/p1_s8wqla.jpg", "Most recently design.");
let jacket2 = new Producto(2, "Uniqlo Jacket", "jackets", 17000, 3, "https://res.cloudinary.com/this/image/upload/v1640141590/p2_fmfm7d.jpg", "Most recently design.");
let jacket3 = new Producto(3, "Light Jean Jacket", "jackets", 5500, 9, "https://res.cloudinary.com/this/image/upload/v1640141590/p3_u5n7ej.jpg", "Most recently design.");
let jacket4 = new Producto(4, "Coat", "jackets", 7000, 6, "https://res.cloudinary.com/this/image/upload/v1640141590/p4_v7rvgj.jpg", "Most recently design.");
let jacket5 = new Producto(5, "Ripped Light Jean Jacket", "jackets", 5000, 6, "https://res.cloudinary.com/this/image/upload/v1640141590/p5_e7mpfd.jpg", "Most recently design.");
let jacket6 = new Producto(6, "Black Jacket", "jackets", 10000, 1, "https://res.cloudinary.com/this/image/upload/v1640141590/p6_tmqo1u.jpg", "Most recently design.");

let shirt = new Producto(7, "Shirt0", "shirts", 5500, 9, "https://res.cloudinary.com/this/image/upload/v1640141590/p0_belgdx.jpg", "Most recently design.");
let shirt1 = new Producto(8, "Shirt1", "shirts", 7000, 6, "https://res.cloudinary.com/this/image/upload/v1640141590/p1_s8wqla.jpg", "Most recently design.");
let shirt2 = new Producto(9, "Shirt2", "shirts", 5000, 6, "https://res.cloudinary.com/this/image/upload/v1640141590/p2_fmfm7d.jpg", "Most recently design.");
let shirt3 = new Producto(10, "Shirt3", "shirts", 10000, 1, "https://res.cloudinary.com/this/image/upload/v1640141590/p3_u5n7ej.jpg", "Most recently design.");

let productos = [jacket, jacket1, jacket2, jacket3, jacket4, jacket5, jacket6, shirt, shirt1, shirt2, shirt3];

export const getFetch = new Promise((resolve) => {
    setTimeout(() => {
        resolve(productos);
    }, [2000]);
});


// DENTRO DE UN USEEFFECT!!!!
// Acepta un 2do parametro: body
                    //   |          ---------------> Entoncees quedaría el 1er como POST y el 2do mandar datos.
// fetch("URL de la api", {})
// .then(resp => resp.json()) ---------->  Devuelve un JSON.
// .then(data = console.log(data)) --------> Ahora devuelve un array de objetos.


// MediaStreamAudioDestinationNodeheader
// body -->  aca irran nuestros productos.


//Exacto pedro, podes llamar a tu array de productos y hacer un find si queréis que te devuelva solo un produto