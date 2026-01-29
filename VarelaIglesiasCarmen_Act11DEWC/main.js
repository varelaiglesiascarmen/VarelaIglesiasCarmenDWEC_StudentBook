$(document).ready(function () {

    // 1. Gestión de Documentos Dinámicos
    $("#btnEx1").click(function () {
        $("#imgEx1").fadeIn(1000);
    });

    // 2. Menú Dinámico
    $("#areaMenu").click(function () {
        $("#menuList").slideToggle("slow");
    });
    $(".item-menu").on({
        mouseenter: function () { $(this).css("background-color", "#856330"); },
        mouseleave: function () { $(this).css("background-color", "transparent"); },
        click: function () { alert("Enlace de la página: " + $(this).text()); }
    });

    // 3. Alternancia con Desplegable
    // efecto visible/invisible con slideDown/slideUp
    $("#selectCond").change(function () {
        if ($(this).val() === "si") {
            $("#formDinamico").slideDown("slow");
        } else {
            $("#formDinamico").slideUp("slow");
            $("#msgErrorEx3").hide(); 
        }
    });

    // validacion de campos
    $("#formDinamico").submit(function (event) {
        let nombre = $("#nombre").val(); 
        let email = $("#email").val();  
        let errorMsg = "";

        // Validar si algún campo está vacío.
        if (nombre === "" || email === "") {
            errorMsg = "Todos los campos son obligatorios.";
        }
        // Validar si falta el '@' en el correo electrónico.
        else if (email.indexOf('@') === -1) {
            errorMsg = "El correo electrónico debe contener un '@'.";
        }

        if (errorMsg !== "") {
            $("#msgErrorEx3").text(errorMsg).fadeIn();
            return false;
        } else {
            alert("Formulario validado correctamente.");
            $("#msgErrorEx3").hide();
        }
    });

    // 4. Eventos del Teclado
    // keypress permite detectar la tecla Enter
    $("#inputTeclado").on("keypress", function (e) {
        $(this).css("color", "blue");
        if (e.which == 13) {
            alert("Tu mensaje: " + $(this).val());
        }
    });

    // 5. Galería Dinámica
    // rutas imags
    const imagenes = [
        { src: 'img/animals/cats/gatito01.webp', clase: 'gato' },
        { src: 'img/animals/cats/gatito02.webp', clase: 'gato' },
        { src: 'img/animals/cats/gatito03.jpg', clase: 'gato' },
        { src: 'img/animals/dogs/perrito01.png', clase: 'perro' },
        { src: 'img/animals/dogs/perrito02.jpg', clase: 'perro' },
        { src: 'img/animals/dogs/perrito03.jpg', clase: 'perro' }
    ];

    $.each(imagenes, function (index, animal) {
        $("#galeriaGrid").append(
            `<img src="${animal.src}" class="${animal.clase}" style="display:none; width:150px; margin:5px; border-radius:8px;">`
        );
    });

    // filtros de buttons
    $("#btnTodos").click(function () {
        $("#contenedorAnimales").show();
        $("#galeriaGrid img").fadeIn("slow");
    });

    $("#btnGatos").click(function () {
        $("#contenedorAnimales").show();
        $("#galeriaGrid img").hide();
        $(".gato").fadeIn("slow");
    });

    $("#btnPerros").click(function () {
        $("#contenedorAnimales").show();
        $("#galeriaGrid img").hide();
        $(".perro").fadeIn("slow");
    });

    $("#btnCerrar").click(function () {
        $("#contenedorAnimales").fadeOut("fast");
    });

    // 6. Barra de Progreso
    $("#btnAvanzar").click(function () {
        $("#barraProgreso").animate({ width: "+=20%" }, 500);
    });
    $("#btnReset").click(function () {
        $("#barraProgreso").animate({ width: "0%" }, "fast");
    });

    // 7. Peticiones Asíncronas (AJAX)
    $("#btnAjax").click(function () {

        $("#tablaAjax tbody").empty();

        $.get("https://jsonplaceholder.typicode.com/users", function (data, status) {
            $.each(data, function (index, usuario) {
                let fila = "<tr><td>" + usuario.name + "</td><td>" + usuario.email + "</td></tr>";
                $("#tablaAjax tbody").append(fila);
            });
            console.log("Estado de la carga: " + status);
        });
    });

    // 8. Gestión de Contenidos Dinámicos
    $("#btnCambioTexto").click(function () {
        // nevos cuentos
        const cuento1 = "<strong>Peter Pan: </strong>este cuento nos habla de muchos valores diferentes encarnados en dos de sus personajes principales. Por un lado tenemos a Peter Pan, todo un ejemplo de valentía, que demuestra que con su ingenio e inteligencia es capaz de derrotar al capitán Garfio, mucho más fuerte que él. Por otro lado tenemos a la dulce Wendy, que nos enseña el valor de la bondad a través de la forma en que se comporta con sus hermanos y con los Niños perdidos.";
        const cuento2 = "<strong>Los tres cerditos: </strong> este popular cuento sirve como magnífico ejemplo para que los niños entiendan el valor del esfuerzo y del trabajo. El hecho de que las casas de los dos cerditos holgazanes acaben por los suelos, mientras que la del cerdito más trabajador sea la que aguante y les sirva de cobijo, no es pura casualidad. Pone de manifiesto la importancia de esforzarse y trabajar si de verdad queremos vencer todo tipo de dificultades. <br/> El cuento también habla de otro valor como es la inteligencia. Lo hace a través del personaje del cerdito mayor, quien reflexiona a la hora de elegir el material con el que fabricará su casa y se decanta finalmente por los ladrillos una vez que ha valorado sus ventajas. <br/> Por otro lado el cuento también refleja el valor del ingenio, que les sirve a los cerditos para librarse definitivamente del lobo cuando creen que no tienen nada que hacer. Una vez más el ingenio vence a la fuerza.";
        const cuento3 = "<strong>El dragón que escupia chocolate: </strong>el cuento nos habla del valor de la superación. De esforzarse por lograr aquello que nos resulta complicado y de la enorme satisfacción que produce el conseguirlo. Tal y como le ocurre al dragón protagonista de esta historia, que cuando por fin se esfuerza por hacer lo mismo que el resto de los dragones, se da cuenta de que puede volar y escupir chocolate y eso lo hace muy feliz.";

        $("#bloque1").fadeOut("slow", function () {
            $(this).html(cuento1).fadeIn("slow");  
        });

        $("#bloque2").fadeOut("slow", function () {
            $(this).html(cuento2).fadeIn("slow");
        });

        $("#bloque3").fadeOut("slow", function () {
            $(this).html(cuento3).fadeIn("slow");
        });
    });

    // 9. Validación de Formularios
    // validar nombre > string
    $("#nombreValidar").on("input", function () {
        let valor = $(this).val(); 
        let regexLetras = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]*$/;

        if (valor !== "" && !regexLetras.test(valor)) {
            $("#errorNombre").slideDown("fast");
            $(this).css("border", "2px solid red");
        } else {
            $("#errorNombre").slideUp("fast");
            $(this).css("border", "1px solid #ccc");
        }
    });

    // validar tlf > number
    $("#telefono").on("input", function () {
        let valor = $(this).val(); 

        if (valor !== "" && !$.isNumeric(valor)) {
            $("#errorTelefono").slideDown("fast");
            $(this).css("border", "2px solid red");
        } else {
            $("#errorTelefono").slideUp("fast");
            $(this).css("border", "1px solid #ccc");
        }
    });

    // control envio
    $("#formValidar").submit(function (e) {
        let nom = $("#nombreValidar").val();
        let tlf = $("#telefono").val();
        let regexLetras = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;

        if (nom === "" || tlf === "" || !regexLetras.test(nom) || !$.isNumeric(tlf)) {
            alert("Por favor, revisa los campos del formulario.");
            return false;
        }

        $("#notificacionExito").fadeIn().delay(2000).fadeOut();
        return false; 
    });

    // 10. Menús Contextuales
    // dtectar click derecho
    $("#zonaClickDerecho").on("contextmenu", function (e) {
        e.preventDefault(); 

        $("#menuContextual")
            .css({ top: e.pageY, left: e.pageX })
            .fadeIn("fast");
    });

    // click fuera > cerrar menu
    $(document).on("click", function () {
        $("#menuContextual").fadeOut("fast");
    });

    // 1º opcion del menu: Mayúsculas (transformar h2)
    $("#optMayus").click(function () {
        $("h2").css("text-transform", "uppercase");
    });

    // 2º opcion del menu: Cambiar color (cambiar color a rosa fucsia)
    $("#optColor").click(function () {
        $("h1, h2").css("color", "#ff00ff");
    });

    // 3º opcion del menu: Enviar mensaje (prompt y alert)
    $("#optMsg").click(function () {
        let mensaje = prompt("Escribe tu mensaje:");
        if (mensaje) {
            alert("Mensaje enviado: " + mensaje);
        }
    });

    // 4º opcion del menu: Añadir imagen (append una imagen de un gato)
    $("#optGato").click(function () {
        $("#ex10").append(
            `<img src="img/animals/cats/gatito03.jpg" alt="Gatito" style="display:block; margin-top:15px; width:200px; border-radius:10px; ">`
        );
    });

});