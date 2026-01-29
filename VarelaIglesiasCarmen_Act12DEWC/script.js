// EJERCICIO 1 y 4: Petición GET y Manejo de Errores
function ejercicio1() {
    var xhttp = new XMLHttpRequest();
    var display = document.getElementById("resultado1");
    
    display.innerText = "Cargando...";
    display.className = "resultado-box cargando";

    xhttp.onreadystatechange = function () {
        if (this.readyState == 4) {
            if (this.status == 200) {
                console.log("Respuesta recibida:", this.responseText);
                display.innerText = "Éxito (GET): " + this.responseText;
                display.className = "resultado-box exito";
            } else {
                console.error("Error al obtener los datos");
                display.innerText = "Error al obtener los datos (Status: " + this.status + ")";
                display.className = "resultado-box error";
            }
        }
    };

    xhttp.open("GET", "https://jsonplaceholder.typicode.com/posts/1", true);
    xhttp.send();
}

// EJERCICIO 2: Enviar datos con POST
function ejercicio2() {
    var xhttp = new XMLHttpRequest();
    var display = document.getElementById("resultado2");

    display.innerText = "Enviando datos...";
    display.className = "resultado-box cargando";

    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && (this.status == 200 || this.status == 201)) {
            console.log("Datos enviados:", this.responseText);
            display.innerText = "Respuesta del servidor (POST): " + this.responseText;
            display.className = "resultado-box exito";
        }
    };

    xhttp.open("POST", "https://jsonplaceholder.typicode.com/posts", true);
    xhttp.setRequestHeader("Content-Type", "application/json; charset=UTF-8");

    var datos = JSON.stringify({
        nombre: "Juan",
        edad: 25
    });

    xhttp.send(datos);
}

// EJERCICIO 3: Actualizar elemento del DOM
function ejercicio3() {
    var xhttp = new XMLHttpRequest();
    
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var usuario = JSON.parse(this.responseText);
            // Actualización del DOM
            document.getElementById("nombreUsuario").innerHTML = "Usuario recibido: <b>" + usuario.name + "</b>";
            document.getElementById("nombreUsuario").className = "resultado-box exito";
        }
    };

    xhttp.open("GET", "https://jsonplaceholder.typicode.com/users/1", true);
    xhttp.send();
}

// EJERCICIO 5: Comparar GET y POST
function ejercicio5() {
    var explicacion = 
        "DIFERENCIAS GET vs POST (Según Tema 12):\n\n" +
        "1. GET:\n" +
        "   - Generalmente son más rápidas.\n" +
        "   - Se usan para recuperar datos.\n\n" +
        "2. POST:\n" +
        "   - Al actualizar archivos o bases de datos.\n" +
        "   - Envío de gran cantidad de datos (sin límite).\n" +
        "   - Envío de datos sensibles (contraseñas).";

    document.getElementById("explicacion5").innerText = explicacion;
    document.getElementById("explicacion5").className = "resultado-box info";
}

// EJERCICIO 6 y 7: Carga asíncrona y Procesamiento JSON
function ejercicio6() {
    var xhttp = new XMLHttpRequest();
    var display = document.getElementById("contenidoWeb");
    
    display.innerText = "Buscando tarea...";
    
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var respuesta = JSON.parse(this.responseText);
            var contenido = "Tarea encontrada: " + respuesta.title;
            
            display.innerText = contenido;
            display.className = "resultado-box exito";
        }
    };

    xhttp.open("GET", "https://jsonplaceholder.typicode.com/todos/1", true);
    xhttp.send();
}

// EJERCICIO 8: Eventos y AJAX
document.getElementById("btnEvento").addEventListener("click", function() {
    var xhttp = new XMLHttpRequest();
    var display = document.getElementById("resultado8");

    display.innerText = "Petición 'rota' (lanzada)...";
    display.className = "resultado-box cargando";
    
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            display.innerText = "¡Petición completada tras el click!\n" + this.responseText;
            display.className = "resultado-box exito";
        }
    };

    xhttp.open("GET", "https://jsonplaceholder.typicode.com/posts/2", true);
    xhttp.send();
});

// EJERCICIO 9: Estado de la petición 
function ejercicio9() {
    var display = document.getElementById("estadoPeticion");
    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function () {
        if (this.readyState < 4) {
            display.innerText = "Cargando... (Estado: " + this.readyState + ")";
            display.className = "resultado-box cargando";
        } 
        else if (this.readyState == 4) {
            if (this.status == 200) {
                display.innerText = "¡Carga Completada con éxito!";
                display.className = "resultado-box exito";
            }
        }
    };

    xhttp.open("GET", "https://jsonplaceholder.typicode.com/posts/3", true);
    xhttp.send();
}

// EJERCICIO 10: Seguridad en AJAX
function ejercicio10() {
    var display = document.getElementById("seguridadLog");
    
    var analisis = 
        "EVALUACIÓN DE SEGURIDAD (Según Tema 12.4):\n\n" +
        "1. PROBLEMA: AJAX bloquea peticiones a otros dominios por defecto (Same Origin Policy).\n" +
        "2. SOLUCIÓN: El servidor debe permitirlo explícitamente (CORS).\n" +
        "3. RIESGO XSS: Siempre 'limpiar' (sanitizar) los datos antes de mostrarlos en el HTML.";

    display.innerText = analisis;
    display.className = "resultado-box error"; 
}