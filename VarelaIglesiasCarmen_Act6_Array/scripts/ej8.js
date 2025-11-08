// Tarea 8: Búsqueda de elementos en un array
const ciudades = ["Sevilla", "Cáceres", "Madrid", "Barcelona", "Valencia", "Zaragoza"];
// Busca si "Madrid" está presente en el array utilizando el método includes().
const ciudadBuscada = "Madrid";
const existe = ciudades.includes(ciudadBuscada);
console.log(`¿Está "${ciudadBuscada}" en el array?`, existe);

// Encuentra la posición de "Barcelona" usando el método indexOf().
const posicionBCN = ciudades.indexOf("Barcelona");
console.log(`La posición de "Barcelona" es:`, posicionBCN);

// Si la ciudad no está en el array, agrega una nueva ciudad al final
const busca = "Pamplona";
if (!ciudades.includes(busca)) {
    ciudades.push(busca);
    console.log(`Se ha agregado "${busca}" al array.`);
} else {
    console.log(`"${busca}" ya está en el array.`);
}

console.log("Array final de ciudades:", ciudades);