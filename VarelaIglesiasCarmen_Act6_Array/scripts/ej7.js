// Tarea 7: Caso práctico de objetos y arrays
const empleados = [
  { nombre: "Carmen", edad: 26, salario: 500 },
  { nombre: "María", edad: 57, salario: 3200 },
  { nombre: "Victor", edad: 53, salario: 3800 }
];

// Añade 3 empleados al array
empleados.push(
    { nombre: "Silvia", edad: 29, salario: 1200 },
    { nombre: "Juanma", edad: 30, salario: 1950 },
    { nombre: "Lesther", edad: 28, salario: 1400 }
);

// Ordena los empleados por su salario de menor a mayor.
empleados.sort((a, b) => a.salario - b.salario);

// Filtra el array para mostrar solo los empleados mayores de 30 años.
const mayores30 = empleados.filter(emp => emp.edad > 30);

// Muestra los resultados por consola
console.log("Empleados ordenados por salario de menor a mayor:" , empleados, "\nEmpleados mayores de 30 años:", mayores30);