// Ejercico 1
function rellenarInformacion() {
    // Aquí cogemos los id de los text area y extrae lo que ha introducido por teclado el usuario
    const titulo = document.getElementById("campoTitulo").value;
    const seccion1 = document.getElementById("campoSeccion1").value;
    const seccion2 = document.getElementById("campoSeccion2").value;

    // aquí imprime en cada info en el id que le corresponde
    document.getElementById("titulo").textContent = "Título: " + titulo;
    document.getElementById("seccion1").textContent = "Sección 1: " + seccion1;
    document.getElementById("seccion2").textContent = "Sección 2: " + seccion2;
}

// Ejercicio 2
function cambiarTitulo() {
    // coger lo introducido por teclado
    const titulo = document.getElementById("nuevoTitulo").value;

    //meter la info en la const titulo
    document.getElementById("titulo").textContent = titulo;
}

// Ejercicoi 3
function AniadirParrafo() {
    // obtener lo entrado por teclado
    const nuevoParrafo = document.getElementById("campoFrase").value;

    // si el nuevo <p> está vacío no imprime nada
    if (nuevoParrafo.trim() === "") return;

    // crear el nuevo <p>
    const parrafo = document.createElement("p");

    // poner lo introducido por teclado en <p> 
    parrafo.textContent = nuevoParrafo;

    // añadir <p> en <div1>
    document.getElementById("div1").appendChild(parrafo);

    // vaciar el textarea para escribir otro párrafo
    document.getElementById("campoFrase").value = "";
}

// Ejercicio 4
function rellenarInformacion() {
    // Aquí cogemos los id de los text area y extrae lo que ha introducido por teclado el usuario
    const titulo = document.getElementById("campoTitulo").value;
    const seccion1 = document.getElementById("campoSeccion1").value;
    const seccion2 = document.getElementById("campoSeccion2").value;

    // busca el elemento con el id = div1
    const div1 = document.getElementById("div1");

    // reinicia div1 tras usarlo en cada vuelta
    div1.innerHTML = "";

    // si el titulo no está vacío ..
    if (titulo.trim() !== "") {
        // crea el elemento <h2>
        const h2 = document.createElement("h2");
        // añade en el elemento lo introducido or teclado en titulo
        h2.textContent = titulo;
        // utiliza appendChild para agregar el elemento <h2>
        div1.appendChild(h2);
    }

    // si la seccion 1 no está vacía ..
    if (seccion1.trim() !== "") {
        // crea el elemento <p>
        const p1 = document.createElement("p");
        // añade en el elemento lo introducido or teclado en seccion1
        p1.textContent = seccion1;
        // utiliza appendChild para agregar el elemento <p>
        div1.appendChild(p1);
    }

    // si la seccion 2 no está vacía ..
    if (seccion2.trim() !== "") {
        // crea el elemento <p>
        const p2 = document.createElement("p");
        // añade en el elemento lo introducido or teclado en seccion2
        p2.textContent = seccion2;
        // utiliza appendChild para agregar el elemento <p>
        div1.appendChild(p2);
    }

    // limpia los formularios al hacer onclick
    document.getElementById("campoTitulo").value = "";
    document.getElementById("seccion1").value = "";
    document.getElementById("seccion2").value = "";
}

// Ejercico 5
function rellenarInformacion2() {
    // Obtener valores de los campos
    const titulo = document.getElementById("campoTitulo").value;
    const seccion1 = document.getElementById("campoSeccion1").value;
    const parrafo1 = document.getElementById("parrafo1").value;
    const seccion2 = document.getElementById("campoSeccion2").value;
    const parrafo2 = document.getElementById("parrafo2").value;

    // busca el elemento con el id = div1
    const div1 = document.getElementById("div1");

    // reinicia div1 tras usarlo en cada vuelta
    div1.innerHTML = "";

    // si el titulo no está vacío ..
    if (titulo.trim() !== "") {
        // crea el elemento <h2>
        const h2 = document.createElement("h2");
        // añade en el elemento lo introducido or teclado en titulo
        h2.textContent = titulo;
        // utiliza appendChild para agregar el elemento <h2>
        div1.appendChild(h2);
    }

    // Añadir sección 1 si no está vacía
    if (seccion1.trim() !== "") {
        const h3_seccion1 = document.createElement("h3");
        h3_seccion1.textContent = seccion1;
        div1.appendChild(h3_seccion1);

        // si la seccion 1 no está vacía ..
        if (parrafo1.trim() !== "") {
            // crea el elemento <p>
            const p1 = document.createElement("p");
            // añade en el elemento lo introducido or teclado en seccion1
            p1.textContent = parrafo1;
            // utiliza appendChild para agregar el elemento <p>
            div1.appendChild(p1);
        }
    }

    // Añadir sección 2 si no está vacía
    if (seccion2.trim() !== "") {
        const h3_seccion2 = document.createElement("h3");
        h3_seccion2.textContent = seccion2;
        div1.appendChild(h3_seccion2);

        // si la seccion 2 no está vacía ..
        if (parrafo2.trim() !== "") {
            // crea el elemento <p>
            const p2 = document.createElement("p");
            // añade en el elemento lo introducido or teclado en seccion1
            p2.textContent = parrafo2;
            // utiliza appendChild para agregar el elemento <p>
            div1.appendChild(p2);
        }
    }

    // Limpiar campos del formulario
    document.getElementById("campoTitulo").value = "";
    document.getElementById("campoSeccion1").value = "";
    document.getElementById("parrafo1").value = "";
    document.getElementById("campoSeccion2").value = "";
    document.getElementById("parrafo2").value = "";
}

// Ejercicio 6
function aniade() {
    // Obtener valores de los campos
    const alumnoNuevo = document.getElementById("nombre").value;

    // si el campo no está vacío ..
    if (alumnoNuevo.trim() !== "") {
        const nuevoElemento = document.createElement("li");
        // añadir info al nuevo <li>
        nuevoElemento.textContent = alumnoNuevo;
        // añade el <li> dentro de la lista con id = lista
        document.getElementById("lista").appendChild(nuevoElemento);
    }

    // Limpiar campos del formulario
    document.getElementById("nombre").value = "";
}

// Ejercicio 7
function aniadeElementos() {
    // Aquí cogemos los id de los text area y extrae lo que ha introducido por teclado el usuario
    const nombre = document.getElementById("dato1").value;
    const calificacion = document.getElementById("dato2").value;

    // Si alguno de los campos está vacío, no se añade nada
    if (nombre.trim() === "" || calificacion.trim() === "") {
       return alert("Por favor, rellena los dos campos antes de añadir.");
    } else {
        // busca el elemento con el id = cuerpo
        const cuerpo = document.getElementById("cuerpo");

        // crear filas <tr> y columnas <td>
        const fila = document.createElement("tr");
        const celdaAlumno = document.createElement("td");
        const celdaCalificacion = document.createElement("td");

        // insertar info en celda
        celdaAlumno.textContent = nombre;
        celdaCalificacion.textContent = calificacion;

        // añadir las celdas a la fila
        fila.appendChild(celdaAlumno);
        fila.appendChild(celdaCalificacion);

        // añadir las filas nuevas a la tabla
        cuerpo.appendChild(fila);
    }

    // limpia los formularios al hacer onclick
    document.getElementById("dato1").value = "";
    document.getElementById("dato2").value = "";

}