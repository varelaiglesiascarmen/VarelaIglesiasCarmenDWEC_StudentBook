// Tarea 5: Inserción y eliminación de elementos en un array
const arrayColores = ["rojo", "verde", "azul", "amarillo"];

// Añade naranja al principio del array
arrayColores.unshift("naranja");

// Elimina el ultmio color del array
arrayColores.pop();

// utilixa splice() para eliminar el segundo color y añadir morado en su lugar
arrayColores.splice(1, 1, "morado");

// muestra el array final en consola
console.log(arrayColores);