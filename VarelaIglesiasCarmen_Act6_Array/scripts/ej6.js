// Tarea 6: Combinar y dividir arrays
const array1 = ["A", "B", "C"];
const array2 = ["D", "E", "F"];

// Combina ambos arrays en uno nuevo llamado array3 usando concat().
const array3 = array1.concat(array2);

// Usa el método slice() para extraer una porción de array3 que incluya los primeros 4 elementos.
const cuatroPrimeros = array3.slice(0, 4);

// Muestra los arrays combinados y la porción extraída
console.log("Array combinado (array3):", array3, "\nCuatro primeros elementos:", cuatroPrimeros);