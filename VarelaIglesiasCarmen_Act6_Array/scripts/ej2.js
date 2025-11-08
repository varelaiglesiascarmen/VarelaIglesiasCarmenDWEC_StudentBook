// Tarea 2: Modificación de propiedades de objetos
let persona = {nombre: "Carmen", apellido: "Varela Iglesias", edad: 26, pais: "España"};

// Modifica el valor de la propiedad edad.
persona.edad = 27;

// Agrega una nueva propiedad llamada profesion.
persona.profesion = "Estudiante";

// Elimina la propiedad pais del objeto.
delete persona.pais;

// Muestra por consola el objeto modificado.
console.log(persona);