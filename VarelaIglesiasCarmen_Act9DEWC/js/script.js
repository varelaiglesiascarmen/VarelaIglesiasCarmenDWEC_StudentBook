// Act 2. Carga con 'onload'
function inicializarAplicacion() {
    // declara const para los elementos del DOM
    const elementoMensaje = document.getElementById('mensaje');
    const elementoImagen = document.getElementById('miImagen');

    // manipular DOM, remplazamos texto y estilo
    elementoMensaje.textContent = 'Aplicación cargada correctamente';
    elementoMensaje.style.color = 'green';

    // mandar a consola info
    console.log('--- Aplicación Inicializada ---');
    // elementoImagen.offsetWidth > devuelve el ancho de la img para que escale al ancho de <p>
    console.log('Ancho de la imagen:', elementoImagen.offsetWidth, 'píxeles.');

    // ejecuta practica cookies
    ejecutarPracticaCookies();
}

// iniciamos la app después de q todo el contenido haya cargado
window.onload = inicializarAplicacion;

// Act 3. Expresiones Regulares
/**
 * @param {Event} event
 */
function validarFormulario(event) {
    // Evita que el formulario se envíe y la página se recargue
    event.preventDefault();

    // Variable para rastrear si el formulario es válido
    let formularioValido = true;

    // obtener elementos del DOM
    const campo1Input = document.getElementById('campo1');
    const campo2Input = document.getElementById('campo2');
    const error1Div = document.getElementById('error1');
    const error2Div = document.getElementById('error2');

    // inicia el mensaje de error a vacío (si hay alguno se cmabia más adelante)
    error1Div.textContent = '';
    error2Div.textContent = '';

    // expresión estricta > solo permite una cadena de txt con 1 num entero o más digitos (no permite 0 digitos)
    const regexEntero = /^\d+$/;

    // en caso de que el campo1 no cumpla regexEntero devuelve el mensaje de error
    if (!regexEntero.test(campo1Input.value)) {
        error1Div.textContent = 'Solo se permiten números enteros.';
        formularioValido = false;
    }

    // expresión estricta > solo permite una cadena de txt con 1 num entero / decimal o más digitos (no permite 0 digitos)
    const regexDecimal = /^\d+(\.\d+)?$/;

    // en caso de que el campo2 no cumpla regexDecimal devuelve el mensaje de error
    if (!regexDecimal.test(campo2Input.value)) {
        error2Div.textContent = 'Se permiten números enteros y decimales (ej: 123.45).';
        formularioValido = false;
    }

    if (formularioValido) {
        console.log('[PUNTO 3] Formulario validado con éxito.');
        alert('Formulario validado: ¡Datos correctos!');
        // Aquí se enviaría el formulario al servidor
    }
}

// Carga el contenido al mismo tiempo que el html
document.addEventListener('DOMContentLoaded', function () {
    const formulario = document.getElementById('formularioNumeros');
    if (formulario) {
        formulario.addEventListener('submit', validarFormulario);
    }
});

// ACt4. Flujo de eventos
// obtinee elementos padre e hijo del ejemplo de flujo.
const padre = document.getElementById('padre');
const hijo = document.getElementById('hijo');

// asigna un manejador de clic al elemento padre
padre.addEventListener('click', function () {
    console.log('--- Flujo de Eventos ---');
    console.log('1. PADRE (CAPTURA): Intercepta primero el evento.');
}, true);

// asigna un manejador de clic al elemento hijo
hijo.addEventListener('click', function () {
    console.log('2. HIJO (OBJETIVO): El evento se ejecuta en el elemento clicado.');
});

// asigna un segundo manejador de clic al padre. Al no tener el true, usa la Fase de Burbujeo (por defecto), lo que significa que este console.log se ejecuta después que el hijo.
padre.addEventListener('click', function () {
    console.log('3. PADRE (BURBUJEO): El evento regresa y se ejecuta en el padre.');
});

// ACt 5. Manejo de Cookies
function leerTodasLasCookies() {
    // obtiene todas las cookies como una cadena (nombre solo)
    const todasLasCookies = document.cookie;

    // si esta vacía, no hay cookies
    if (todasLasCookies === "") {
        console.log("[PUNTO 6] No hay cookies almacenadas en esta página.");
        return;
    }

    // marca el inicio de la lista de cookies en la consola.
    console.log("--- [PUNTO 6] Cookies Encontradas ---");

    // se divide la cadena en un array y se limpia el formato
    const paresDeCookies = todasLasCookies.split(';');

    // recorre cada par nombre=valor y lo muestra en consola
    paresDeCookies.forEach(par => {
        const parLimpio = par.trim();
        const [nombre, valor] = parLimpio.split('=');

        console.log(`Nombre: ${decodeURIComponent(nombre.trim())} | Valor: ${decodeURIComponent(valor.trim())}`);
    });
    console.log("----------------------------");
}

// Ejecutamos la lectura al cargar el DOM para que se vean las cookies en consola
document.addEventListener('DOMContentLoaded', leerTodasLasCookies);

// Act 6. Crear cookie con duración de 24 horas
function crearCookie24Horas(nombre, valor) {
    // como se declara por segundos se hace la cuenta de q 24h = 86400s
    const maxAgeSegundos = 86400;

    // cod valor para evitar problemas con caracteres especiales
    const valorCodificado = encodeURIComponent(valor);

    // Creamos la cookie con max-age y banderas de seguridad recomendadas
    document.cookie = `${nombre}=${valorCodificado}; max-age=${maxAgeSegundos}; path=/; SameSite=Lax; Secure`;

    console.log(`[PUNTO 7] Cookie '${nombre}' configurada por 24 horas.`);
}

// Act 7. Práctica Cookies: Bienvenida personalizada
const NOMBRE_COOKIE_USUARIO = "nombreUsuario";

// Función auxiliar para obtener el valor de una cookie
function obtenerCookie(nombre) {
    const nombreEQ = nombre + "=";
    const ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') c = c.substring(1, c.length);
        if (c.indexOf(nombreEQ) === 0) return decodeURIComponent(c.substring(nombreEQ.length, c.length));
    }
    return "";
}

function ejecutarPracticaCookies() {
    const elementoBienvenida = document.getElementById('bienvenida-cookie');
    let usuarioGuardado = obtenerCookie(NOMBRE_COOKIE_USUARIO);

    if (usuarioGuardado) {
        // Usuario ya existe
        elementoBienvenida.textContent = `¡Bienvenido de vuelta, ${usuarioGuardado}! (Leído desde Cookie)`;
    } else {
        // Usuario nuevo
        const nuevoNombre = prompt("PUNTO 9: Parece que eres nuevo. Por favor, ingresa tu nombre:");

        if (nuevoNombre) {
            // Creamos la cookie con el nuevo nombre (duración de 7 días)
            const dias = 7;
            const maxAgeSegundos = dias * 24 * 60 * 60;

            document.cookie = `${NOMBRE_COOKIE_USUARIO}=${encodeURIComponent(nuevoNombre)}; max-age=${maxAgeSegundos}; path=/; SameSite=Lax; Secure`;

            elementoBienvenida.textContent = `¡Hola, ${nuevoNombre}! Hemos guardado tu nombre por 7 días.`;
        } else {
            elementoBienvenida.textContent = `¡Hola, Invitado!`;
        }
    }
}