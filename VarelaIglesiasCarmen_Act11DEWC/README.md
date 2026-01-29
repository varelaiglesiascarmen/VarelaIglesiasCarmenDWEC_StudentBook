# Actividad 11: Dinamismo en el Desarrollo de Páginas Web (jQuery)

Este documento contiene la resolución de la **Actividad 11**, enfocada en la implementación de la librería **jQuery** para la manipulación del DOM, gestión de eventos, efectos visuales y peticiones asíncronas (AJAX).

---

## 1. **Gestión de Documentos Dinámicos**
- Carga de elementos cuando el documento está preparado (`ready`) y transiciones suaves.

### Método `ready()` y `fadeIn()`
Se utiliza para asegurar que el código no se ejecute antes de que el HTML esté completamente cargado. La transición suave mejora la experiencia de usuario (UX).

#### Código:
![Código Ejercicio 1](img/code/code1.png)

---

## 2. **Creación de Efectos Visuales y Eventos**
- Menú dinámico que se expande/contrae y cambia de color al pasar el cursor.

### Métodos `slideToggle()` y `on()`
El uso de manejadores múltiples permite que los elementos del menú cambien a color **#856330** al detectar el evento `mouseenter`.

#### Código:
![Código Ejercicio 2](img/code/code2.png)

---

## 3. **Alternancia de Estados Visuales**
- Formulario limpio donde aparecen campos adicionales según la selección de un desplegable.

### Efectos de Deslizamiento
Se emplean `slideDown()` y `slideUp()` para que la aparición de nuevos campos sea orgánica y no brusca para el cliente.

#### Código:
![Código Ejercicio 3](img/code/code3.png)

---

## 4. **Gestión de Eventos del Teclado**
- Interacción mediante teclado para activar funciones y cambiar estilos del texto.

### Uso de `keypress` y `e.which`
Se detecta el código **13** (tecla Enter) para lanzar mensajes personalizados y se cambia el color del texto a azul en tiempo real mientras el usuario escribe.

#### Código:
![Código Ejercicio 4](img/code/code4.png)

---

## 5. **Visualización Dinámica de Imágenes**
- Galería con filtros por categorías (Animalitos, Gatitos, Perritos) y opción de cierre completo.

### Recorrido con `$.each()`
Las imágenes se cargan recorriendo un objeto de datos que apunta a las carpetas `cats` y `dogs`. Se filtran mediante selectores de clase, apareciendo con efectos visuales suaves.

#### Código:
![Código Ejercicio 5](img/code/code5.png)

---

## 6. **Barra de Progreso Interactiva**
- Creación de una barra que avanza dinámicamente y permite reiniciarse a cero.

### Método `animate()`
Permite modificar la propiedad CSS `width` de forma fluida. El avance se realiza en tramos acumulativos del **20%** cada vez que se pulsa el botón de acción.

#### Código:
![Código Ejercicio 6](img/code/code6.png)

---

## 7. **Peticiones Asíncronas con AJAX**
- Carga de datos desde un servidor externo (API) sin necesidad de recargar la página.

### El método `$.get()`
Se simplifica el uso de AJAX para obtener un JSON de usuarios. Requisito clave: se vacía la tabla con `.empty()` antes de insertar los nuevos datos con `.append()`.

#### Código:
![Código Ejercicio 7](img/code/code7.png)

---

## 8. **Gestión de Contenidos Dinámicos**
- Intercambio de bloques de texto (cuentos) por otros nuevos mediante interacción con botones.

### Animaciones encadenadas y Callback
Se usa una función de **callback** dentro de `fadeOut()` para asegurar que el texto cambie mediante `.html()` justo cuando el elemento es invisible, evitando saltos bruscos.

#### Código:
![Código Ejercicio 8](img/code/code8.png)

---

## 9. **Validación de Formularios con Efectos**
- Validación en tiempo real (evento `input`) con mensajes de error deslizantes que aparecen debajo del campo.

### Validaciones String y Number
- **Nombre:** Solo admite letras y espacios mediante **expresiones regulares**.
- **Teléfono:** Solo admite valores numéricos mediante la utilidad `$.isNumeric()`.
- **Efecto:** Si se detecta un carácter inválido, el mensaje "emerge" suavemente usando `slideDown()`.

#### Código:
![Código Ejercicio 9](img/code/code9.png)

---

## 10. **Menús Contextuales Interactivos**
- Menú personalizado que aparece al hacer clic derecho (`contextmenu`) en una zona específica.

### Acciones del Menú:
- **Mayúsculas:** Convierte todos los `<h2>` del sitio a uppercase.
- **Colores:** Cambia el color de títulos `<h1>` y `<h2>` a dorado (#856330).
- **Mensaje:** Ventana emergente `prompt` que captura un mensaje y lo muestra en un `alert`.
- **Imagen:** Inyecta la foto de un gato (`img/animals/cats/gatito03.jpg`) al final de la sección.

#### Código:
![Código Ejercicio 10](img/code/code10.png)

---

## **Resumen Técnico**
La utilización de **jQuery** en esta actividad ha permitido:
- **Simplificar el código:** Reducción drástica de líneas comparado con la DOM API nativa.
- **Compatibilidad:** Garantía de funcionamiento idéntico en todos los navegadores modernos.
- **Dinamismo:** Interfaz interactiva que responde al instante mediante efectos de desvanecimiento y deslizamiento.

---
**Asignatura:** Desarrollo Web en Entorno Cliente  
**Curso:** 2025-2026  
**Alumno:** [Carmen Varela Iglesias](https://github.com/varelaiglesiascarmen)  