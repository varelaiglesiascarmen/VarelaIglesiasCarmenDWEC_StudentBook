//Tarea 4: Ordenar y manipular arrays
const arrayNumeros = [5, 2, 9, 1, 7];

// Ordena el array de menor a mayor usando el método sort().
// Para ordenar números, es necesario pasar una función de comparación.
arrayNumeros.sort((a, b) => a - b);
console.log("Array ordenado de menor a mayor:", arrayNumeros);

// Invierte el orden del array usando el método reverse().
arrayNumeros.reverse();
console.log("Array invertido:", arrayNumeros);

// Personaliza la función de comparación en sort() para ordenar los números de mayor a menor.
arrayNumeros.sort((a, b) => b - a);
console.log("Array ordenado de mayor a menor:", arrayNumeros);