// Tarea 10: Reducir un array de números
const ventas = [100, 200, 300, 400, 500];

// Sumar todas las ventas usando reduce()
const totalVentas = ventas.reduce((acumulador, valorActual) => acumulador + valorActual, 0);
console.log("Total de ventas:", totalVentas);

// Calcular el promedio
const promedioVentas = totalVentas / ventas.length;
console.log("Promedio de ventas:", promedioVentas);