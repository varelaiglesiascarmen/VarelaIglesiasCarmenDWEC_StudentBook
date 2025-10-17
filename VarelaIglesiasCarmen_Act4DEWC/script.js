/**
 * Esta constante asocia cada boton con su function correspondiente utilizando el id asignado a ésta
 * 
*/
const acciones = {
    // Act 1
    btnPiramide: function () {
        document.getElementById('piramide').innerHTML = generarPiramide(5);
    },

    //Act 2 y 3
    btnNum100: mostrarNumeros,
    btnFactorial: function () {
        const num = Number(document.getElementById('n').value);
        document.getElementById('factorial').innerHTML = factorial(num);
    },

    //Act4
    btnMultiplos: function () {
        const num1 = Number(document.getElementById('num1').value);
        const num2 = Number(document.getElementById('num2').value);
        document.getElementById('multiplos').innerHTML = multiplosDe8(num1, num2);
    },

    // Act5
    btnPrimo: function () {
        const numPrimo = Number(document.getElementById('numPrimo').value);
        document.getElementById('primo').innerText = esPrimo(numPrimo) ? "Es primo" : "No es primo";
    },

    //Act6
    btnAdivinar: function() {
        const intento = Number(document.getElementById('adivinanza').value);

        if (intento === numeroSecreto) {
            document.getElementById('numAleatorio').innerText = `¡Correcto! El número era ${numeroSecreto}.`;
            numeroSecreto = Math.floor(Math.random() * 10) + 1; 
        } else if (intento < numeroSecreto) {
            document.getElementById('numAleatorio').innerText = 'El número es mayor. Intenta de nuevo.';
        } else {
            document.getElementById('numAleatorio').innerText = 'El número es menor. Intenta de nuevo.';
        }
    },

    //act 7
    btnArmstrong: function () {
        const n = Number(document.getElementById('armstrongNum').value);
        document.getElementById('armstrong').innerText = esArmstrong(n) ? "Es Armstrong" : "No es Armstrong";
    },

    // act8
    btnVocales: function () {
        const texto = document.getElementById('textoVocales').value;
        document.getElementById('vocales').innerText = contarVocales(texto);
    },

    // Act 9
    btnPI: function () {
        document.getElementById('pi').innerText = Math.PI.toFixed(4);
    },

    //Act 10
    btnReemplazar: function() {
        const frase = document.getElementById('frase').value.trim();
        const nuevaPalabra = document.getElementById('oldWord').value.trim();

        if (frase === "" || nuevaPalabra === "") {
            document.getElementById('reemplazo').innerText = "Por favor, completa ambos campos.";
            return;
        }

        // Dividimos la frase en palabras
        const palabras = frase.split(' ');
        // Reemplazamos la última palabra
        palabras[palabras.length - 1] = nuevaPalabra;

        // Unimos de nuevo la frase
        const resultado = palabras.join(' ');

        document.getElementById('reemplazo').innerText = resultado;
    }
};

/*
* este bucle lo que hace es recorrer todos los botones de dentro de la const "acciones",
* lo que hace es buscar "que hacer" al clickar en el boton con el id="X"
*/
for (const id in acciones) {
    const boton = document.getElementById(id);

    if (boton) {
        boton.addEventListener('click', acciones[id]);
    }
}

// Act 1
function generarPiramide(niveles) {
    let resultado = '';

    for (let i = 1; i <= niveles; i++) {
        resultado += '*'.repeat(i) + '<br>';
    }

    return resultado;
}

//Act 2
function mostrarNumeros() {
    let resultado = '';

    for (let i = 1; i <= 100; i++) {
        if (i % 4 === 0 && i % 7 === 0) {
            resultado += i + ' FullStack<br>';
        } else if (i % 4 === 0) {
            resultado += 'FrontEnd<br>';
        } else if (i % 7 === 0) {
            resultado += 'BackEnd<br>';
        } else {
            resultado += i + '<br>';
        }
    }

    document.getElementById('num1to100').innerHTML = resultado;
}

//Act 3
function factorial(n) {
    if (n === 0 || n === 1) return 1;
    let resultado = 1;
    for (let i = 2; i <= n; i++) {
        resultado *= i;
    }

    return resultado;
}

//Act 4
function multiplosDe8(num1, num2) {
    let res = [];

    const min = Math.min(num1, num2);
    const max = Math.max(num1, num2);

    for (let i = min; i <= max; i++) {
        if (i % 8 === 0) {
            res.push(i);
        }
    }

    // Retornar como cadena separada por comas, o mensaje si no hay múltiplos
    return res.length > 0 ? res.join(', ') : 'No hay múltiplos de 8';
}

//Act 5
// Función que determina si un número es primo
function esPrimo(numPrimo) {
    if (numPrimo < 2) return false; // 0 y 1 no son primos

    // Solo necesitamos verificar hasta la raíz cuadrada de num
    for (let i = 2; i <= Math.sqrt(numPrimo); i++) {
        if (numPrimo % i === 0) return false; // divisible, no es primo
    }

    return true; // si no se encontró ningún divisor, es primo
}

// Act 6
let numeroSecreto = Math.floor(Math.random() * 10) + 1;

//Act7. Comprobar número Armstrong
function esArmstrong(n) {
    const str = n.toString();
    let suma = 0;
    for (const d of str) {
        suma += Math.pow(Number(d), str.length);
    }
    return suma === n;
}

//Act 8 
function contarVocales(texto) {
    // Convertimos todo a minúsculas para simplificar la comparación
    texto = texto.toLowerCase();
    let contador = 0;

    // Recorremos cada carácter del texto
    for (let i = 0; i < texto.length; i++) {
        if ('aeiouáéíóúü'.includes(texto[i])) {
            contador++;
        }
    }

    return `${contador} vocales`;
}

// Act 9 y 10 ya están dentro de const acciones
