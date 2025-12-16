/**
 * esta funcion carga todos los ejercicios js mientras carga el html
 * y los asigna a los botones correspondientes.
 * Este codigo está hecho con IA porque no entendía porque en mi HTML no se podía visualizar
 * el resultado de los ejercicios al pulsar los botones. (aún no hemos llegado ahí en clase)
 */
document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('button[onclick="nameAgeCity()"]')?.addEventListener('click', nameAgeCity);
    document.querySelector('button[onclick="concatenation()"]')?.addEventListener('click', concatenation);
    document.querySelector('button[onclick="conversionVariables()"]')?.addEventListener('click', conversionVariables);
    document.querySelector('button[onclick="adress()"]')?.addEventListener('click', adress);
    document.querySelector('button[onclick="stringToNumber()"]')?.addEventListener('click', stringToNumber);
    document.querySelector('button[onclick="commentsExample()"]')?.addEventListener('click', commentsExample);
    document.querySelector('button[onclick="leerArchivoLocal()"]')?.addEventListener('click', leerArchivoLocal);

    validateForm();
    manipulateDOM();
    keyboardEvent();
});

/**
 * Ejercicio 1: Declara tres variables (nombre, edad y 
 * ciudad) y muéstralas en consola. Identifica el tipo 
 * de dato con typeof.
 */
function nameAgeCity() {
    //declarar varibles
    let name = "Alice";
    let age = 30;
    let city = "New York";

    //imprimir variables con typeof
    console.log("Alicia es una variable de tipo "+typeof name+
        ", los 30 años son de tipo "+typeof age+ " y Nueva York es de tipo "+ typeof city);
}

/**
 * Ejercicio 2: Crea un script que concatene cadenas y números. 
 * Usa tanto el operador + como template literals.
 */
function concatenation() {
    // declarar variables
    let name = "Alice";
    let age = 30;

    // imprimir concatenacion
    console.log("Hola " + name + ", tienes " + age + " tacos");
    // imprimir concatenacion con template string
    console.log(`Hola ${name}, tienes ${age} tacos`);
}

/**
 * Ejercicio 3: Declara una variable y conviértela a distintos tipos 
 * (Number, String, Boolean). Explica el resultado obtenido.
 */
function conversionVariables() {
    /** declarar varible, debe de ser un numero porque si no 
    * en string y boolean da diferente resultado
    */
    let year = "2024";

    //convertir variable a number, string y boolean
    let num = Number(year);
    let str = String(num);
    let bool = Boolean(num);

    // Mostrar los resultados y tipos en consola
    console.log("Valor original:", year, "→", typeof year);
    console.log("Convertido a Number:", num, "→", typeof num);
    console.log("Convertido a String:", str, "→", typeof str);
    console.log("Convertido a Boolean:", bool, "→", typeof bool);
}

/**
 * Ejercicio 4: Reproduce el caso práctico 'Variable address' 
 * con una variable no declarada. Observa el error y corrígelo.
 */
function adress() {
    /* Error común: olvidar declarar la variable
    address = "Calle Falsa 123";

    try {
        console.log(address);
    } catch (error) {
        console.log("Error detectado:", error.message);
    }
    */

    // Hay que hacerlo así
    let addressCorrecta = "Calle Verdadera 456";
    console.log("Variable declarada correctamente:", addressCorrecta);
}

/**
 * Ejercicio 5: Implementa un formulario sencillo (input + botón) 
 * y valida que el campo no esté vacío antes de mostrar un alert.
 */
function validateForm() {
    // ""Lllamamos" al formulario (formulario) 
    // y lo guarda en una variable
    const form = document.getElementById("formulario");
    
    // Nos aseguramos de que el formulario exista antes de añadir el listener
    if (form) {
        form.addEventListener("submit", function (event) {
            // esto es para que el formulario no recarge la 
            // pag de nuevo
            event.preventDefault();
    
            const input = document.getElementById("userName");
            const value = input.value.trim();
    
            // comprueba si está o no vacío
            if (value === "") {
                alert("Necesitas un nombre de usuario.");
            } else {
                alert(`Usuario registrado: ${value}`);
            }
        });
    }
}

/**
 * Ejercicio 6: Realiza un script que convierta datos de texto a 
 * número usando parseInt y parseFloat. Controla el caso de NaN.
 */
function stringToNumber() {
    // Pedimos al usuario que introduzca un número
    let texto = prompt("Dime un número:");

    // Convertimos el texto a número int(enter) o float(decimal)
    let numeroEntero = parseInt(texto);
    let numeroDecimal = parseFloat(texto);

    // Comprobamos si ha podido convertir a número
    if (isNaN(numeroEntero) || isNaN(numeroDecimal)) {
        //puede ser que haya metido una letra o simbolo
        alert("El valor introducido no es un número válido.");
    } else {
        //imprime la conversion
        alert(
            `Conversión exitosa:\n
        Valor original: ${texto}\n
        Entero con parseInt(): ${numeroEntero}\n
        Decimal con parseFloat(): ${numeroDecimal}`
        );
    }
}

/**
 * Ejercicio 7: Crea un código con comentarios de línea y de 
 * bloque que explique el funcionamiento de un script de 5-6 líneas.
 * */
function commentsExample() {
    /* 
    Pide al usuario su edad y le dice 
    si es mayor o menor de edad. 
    */

    //pido edad por teclado 
    let edadTexto = prompt("Introduce tu edad:");
    // lo guardo en una variable cambiandolo a numero
    let edad = parseInt(edadTexto);

    // Comprobamos si mayor o menor de edad
    if (!isNaN(edad)) {
        alert(edad >= 18 ? "Eres mayor de edad" : "Eres menor de edad");
    } else {
        alert("Por favor, introduce un número válido.");
    }
}

/**
 * Ejercicio 8: Manipula el DOM: cambia el contenido y el estilo de 
 * un párrafo con JavaScript al hacer clic en un botón.
 * */
function manipulateDOM() {
    // Selecciona el p y button para manipular p
    const newp = document.getElementById("pDOM");
    const boton = document.getElementById("buttonDOM");

    // Nos aseguramos de que el botón exista antes de añadir el listener
    if (boton) {
        // Al hacer 'click' al botón se cambiará
        boton.addEventListener("click", function () {
            // por esto
            newp.textContent = "¡Adiós Lorem Ipsum!";
    
            // y el css tambn
            newp.style.color = "red";
            newp.style.fontSize = "24px";
            newp.style.fontWeight = "bold";
        });
    }
}

/**
 * Ejercicio 9: Captura un evento del teclado en un campo 
 * de texto e imprime en consola la tecla pulsada.
 *  */
function keyboardEvent() {
    const input = document.getElementById("miInput");

    // Nos aseguramos de que el input exista antes de añadir el listener
    if (input) {
        input.addEventListener("keydown", function (event) {
            console.log("Tecla pulsada:", event.key);
        });
    }
}

/**  
 * Ejercicio 10: Reflexiona sobre una limitación de JavaScript en 
 * el navegador (por ejemplo acceso a archivos) e ilústrala con un ejemplo.
*/
function leerArchivoLocal() {
    try {
        /**
         * como js no puede acceder a archivos locales directamente por seguridad,
         * este código lanzará un error por lo que salta al catch lanzando un mensaje
         * de error.
         */
        let contenido = open("archivo.txt");
        console.log(contenido);
    } catch (error) {
        console.error("Error: No puedo acceder a tus archivos locales :(");
    }
}