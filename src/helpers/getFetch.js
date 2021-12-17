import jacketImg0 from '/src/media/p0.jpg'
import jacketImg1 from '/src/media/p1.jpg'
import jacketImg2 from '/src/media/p2.jpg'
import jacketImg3 from '/src/media/p3.jpg'
import jacketImg4 from '/src/media/p4.jpg'
import jacketImg5 from '/src/media/p5.jpg'
import jacketImg6 from '/src/media/p6.jpg'



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

let jacket = new Producto(0, "jackets", 3500, 4, {jacketImg0}, "Most recently design.");
let jacket1 = new Producto(1, "jackets", 7700, 7, {jacketImg1}, "Most recently design.");
let jacket2 = new Producto(2, "jackets", 17000, 3, {jacketImg2}, "Most recently design.");
let jacket3 = new Producto(3, "jackets", 5500, 9, {jacketImg3}, "Most recently design.");
let jacket4 = new Producto(4, "jackets", 7000, 6, {jacketImg4}, "Most recently design.");
let jacket5 = new Producto(5, "jackets", 5000, 6, {jacketImg5}, "Most recently design.");
let jacket6 = new Producto(6, "jackets", 10000, 1, {jacketImg6}, "Most recently design.");

let shirt = new Producto(7, "shirts", 5500, 9, {jacketImg0}, "Most recently design.");
let shirt1 = new Producto(8, "shirts", 7000, 6, {jacketImg1}, "Most recently design.");
let shirt2 = new Producto(9, "shirts", 5000, 6, {jacketImg2}, "Most recently design.");
let shirt3 = new Producto(10, "shirts", 10000, 1, {jacketImg3}, "Most recently design.");

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