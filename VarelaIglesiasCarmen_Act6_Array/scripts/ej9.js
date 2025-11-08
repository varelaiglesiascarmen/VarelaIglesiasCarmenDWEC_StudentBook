// Tarea 9: Filtrar un array de objetos
const productos = [
    {nombre: "botas", categoria: "zapatos", precio: 300},
    {nombre: "cazadora", categoria: "ropa", precio: 250},
    {nombre: "pantalon", categoria: "ropa", precio: 100},
];

const tecnologia = productos.filter(prod => prod.categoria === "tecnología");
console.log("Productos de categoría tecnología:", tecnologia);

// Filtrar productos cuyo precio sea mayor a 100
const precioMayor100 = productos.filter(prod => prod.precio > 100);
console.log("Productos con precio mayor a 100:", precioMayor100);