// Tarea 1: Creación y acceso a arrays
    let arrayFrutas = ["manzana", "banana", "naranja", "uva"];

    // Accede al primer y al último elemento del array.
    const firstfruit = arrayFrutas[0];
    const lastfruit = arrayFrutas[arrayFrutas.length - 1];

    console.log("Primera fruta:", firstfruit, "\nUltima fruta:", lastfruit,);

    // Agrega una nueva fruta al final del array.
    arrayFrutas.push("Albaricoque");

    // Muestra por consola el array completo y la longitud del array
    console.log("Array de frutas:", arrayFrutas);