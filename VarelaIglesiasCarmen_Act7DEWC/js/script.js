// ACTIVIDAD 1
function analizarTexto() {
    const t = document.getElementById("texto1").value;
    let res = "";

    if (t === t.toUpperCase()) res = "Mayusculitas";
    else if (t === t.toLowerCase()) res = "Minusculitas";
    else res = "De las dos :)";

    document.getElementById("resultado1").textContent = res;
}

// ACTIVIDAD 2
function bonoloto() {
    let nums = [];
    for (let i = 0; i < 6; i++)
        nums.push(Math.floor(Math.random() * 49) + 1);

    let complementario = Math.floor(Math.random() * 9) + 1;

    document.getElementById("resultado2").textContent =
        `Números: ${nums.join(", ")} | Complementario: ${complementario}`;
}

// ACTIVIDAD 3
function calcularEdad() {
    const fecha = new Date(document.getElementById("fechaNacimiento").value);
    const hoy = new Date();
    let edad = hoy.getFullYear() - fecha.getFullYear();

    if (
        hoy.getMonth() < fecha.getMonth() ||
        (hoy.getMonth() === fecha.getMonth() && hoy.getDate() < fecha.getDate())
    ) edad--;

    document.getElementById("resultado3").textContent = `Tienes ${edad} años.`;
}

// ACTIVIDAD 4
let miVentana;

function abrirVentana() {
    miVentana = window.open("", "", "width=300,height=200");
    miVentana.document.write("<h1>Ventana abierta</h1>");
}

function moverVentana() {
    if (miVentana) miVentana.moveBy(50, 50);
}

function redimensionarVentana() {
    if (miVentana) miVentana.resizeBy(100, 50);
}

function cerrarVentana() {
    if (miVentana) miVentana.close();
}

// ACTIVIDAD 5
function ponerHora() {
    const ahora = new Date();
    document.getElementById("hora").value = ahora.getHours();
    document.getElementById("min").value = ahora.getMinutes();
    document.getElementById("seg").value = ahora.getSeconds();
}

// ACTIVIDAD 6
let segundos = 0;

setInterval(() => {
    segundos++;
    document.getElementById("tiempoWeb").textContent = `${segundos} segundos`;
}, 1000);

// ACTIVIDAD 7
function celsiusAF() {
    let c = parseFloat(document.getElementById("temp").value);
    let f = (c * 9/5) + 32;
    document.getElementById("resultado7").textContent = `${f.toFixed(2)} °F`;
}

function fahrenheitAC() {
    let f = parseFloat(document.getElementById("temp").value);
    let c = (f - 32) * 5/9;
    document.getElementById("resultado7").textContent = `${c.toFixed(2)} °C`;
}

// ACTIVIDAD 8
function calc(op) {
    let n1 = parseFloat(document.getElementById("num1").value);
    let n2 = parseFloat(document.getElementById("num2").value);
    let res;

    switch (op) {
        case "+": res = n1 + n2; break;
        case "-": res = n1 - n2; break;
        case "*": res = n1 * n2; break;
        case "/": res = n1 / n2; break;
    }

    document.getElementById("resultado8").textContent = `Resultado: ${res}`;
}

// ACTIVIDAD 9
function contarPalabras() {
    let texto = document.getElementById("texto9").value.trim();
    let palabras = texto === "" ? 0 : texto.split(/\s+/).length;
    document.getElementById("resultado9").textContent = `${palabras} palabras`;
}