//========= SECCIÓN DE PRODUCTOS =========
class Producto {
    constructor (id, tipo, precio, cantidad, imagen, descripcion) {
        this.id = id;
        this.tipo = tipo;
        this.precio = precio;
        this.cantidadExistente = cantidad;
        this.imagen = imagen;
        this.descripcion = descripcion;
    }
}

let jacket = new Producto(0, "Blue jean jacket", 3500, 4, "src/media/p0.jpg", "Most recently design.");
let jacket1 = new Producto(1, "Black baggy jacket", 7700, 7, "src/media/p1.jpg", "Reloj inteligente.");
let jacket2 = new Producto(2, "Black Uniqlo jacket", 17000, 3, "src/media/p2.jpg", "Reloj inteligente.");
let jacket3 = new Producto(3, "Lightblue jean jacket", 5500, 9, "src/media/p3.jpg", "Reloj inteligente.");
let jacket4 = new Producto(4, "Black leather jacket", 7000, 6, "src/media/p4.jpg", "Reloj inteligente.");
let jacket5 = new Producto(5, "Ripped blue jean jacket", 5000, 6, "src/media/p5.jpg", "Reloj inteligente.");
let jacket6 = new Producto(6, "Dar jean jacket", 10000, 1, "src/media/p6.jpg", "Reloj inteligente.");

let productos = [jacket, jacket1, jacket2, jacket3, jacket4, jacket5, jacket6];

export const getFetch = new Promise((resolve) => {
    setTimeout(() => {
        resolve(productos);
    }, [3000]);
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