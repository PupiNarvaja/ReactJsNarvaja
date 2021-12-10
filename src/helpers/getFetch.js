//========= SECCIÓN DE PRODUCTOS =========
class Producto {  //-------------------------------------> Clase constructora de "Productos".
    constructor (id, tipo, precio, cantidad, imagen, descripcion) {
        this.id = id;
        this.tipo = tipo;
        this.precio = precio;
        this.cantidadExistente = cantidad;
        this.imagen = imagen;
        this.descripcion = descripcion;
    }
}

let watch = new Producto(15, "Smart watch 1", 3500, 4, "src/media/watch1.jpg", "Resistente a salpicaduras.");
let watch1 = new Producto(16, "Smart watch 2", 7700, 7, "src/media/watch2.jpg", "Reloj inteligente.");
let watch2 = new Producto(17, "Smart watch 3", 17000, 3, "src/media/watch3.jpg", "Reloj inteligente.");
let watch3 = new Producto(18, "Smart watch 4", 5500, 9, "src/media/watch4.jpg", "Reloj inteligente.");
let watch4 = new Producto(19, "Smart watch 5", 7000, 6, "src/media/watch5.jpg", "Reloj inteligente.");
let watch5 = new Producto(20, "Smart watch 6", 5000, 6, "src/media/watch6.jpg", "Reloj inteligente.");
let watch6 = new Producto(21, "Smart watch 7", 10000, 1, "src/media/watch7.jpg", "Reloj inteligente.");

let productos = [watch, watch1, watch2, watch3, watch4, watch5, watch6];

export const getFetch = new Promise((resolve) => {
    setTimeout(() => {
        resolve(productos);
    }, [3000]);
});
