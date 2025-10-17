                // Conceptos básicos de JS (Parte 2)

 // carga las functiones al arrancar la pag
window.onload = function() {
    helloWorld();
    helloWorldalert();
    suma();
    interactiveSum();
    hiUser();
    calculeOnLine();
};

// Ejercicio 11: Hola Mundo: Escribe un programa que muestre el mensaje "Hola Mundo" en la pantalla.
function helloWorld(){
    document.getElementById("outputEx11").innerText = "Hello World!";
}

// Ejercicio 12: Ventana Emergente: Crea un programa que muestre una ventana emergente con el mensaje "Hola Mundo".
function helloWorldalert(){
    alert("Hello world!");
}

// Ejercicio 13: Suma Simple: Declara dos variables, asígnales los valores 5 y 10, y muestra la suma de las variables en una ventana emergente.
function suma(){
    let num1 = 5;
    let num2 = 10;
    let suma = num1 + num2;

    alert("La suma es: " + suma);
}

// Ejercicio 14: Suma Interactiva: Pide al usuario que introduzca dos números utilizando ventanas emergentes y muestra la suma de los dos números en una ventana emergente.
function interactiveSum(){
    let num1 = parseInt(prompt("Introduce el primer número:"));
    let num2 = parseInt(prompt("Introduce el segundo número:"));
    let suma = num1 + num2;

    if(isNaN(num1) || isNaN(num2)) {
        alert("Por favor, introduce números válidos.");
    } else {
        alert("La suma es: " + suma);
    }

}

// Ejercicio 15: Saludo Personalizado: Pide al usuario su nombre utilizando una ventana emergente y muestra un mensaje de saludo personalizado en una ventana emergente.
function hiUser(){
    let name = prompt("¿Como te llamas?");

    if(name) {
        alert("Hola " + name);
    } else {
        alert("No introduciste tu nombre.");
    }

}

// Ejercicio 16: Cálculo en Línea: Escribe un programa que calcule la suma de 3 + 5 y muestre el resultado directamente en la pantalla.
function calculeOnLine(){
    let suma = 3 + 5;

    document.getElementById("outputEx16").innerText = "La suma es: " + suma;
}