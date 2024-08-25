/*
La manipulación del DOM (Document Object Model) 
es una parte esencial del desarrollo web, 
ya que permite a los desarrolladores 
interactuar y modificar la estructura de una 
página web de manera dinámica mediante JavaScript.
*/

// Selección de Elementos del DOM

// document.getElementById(): Selecciona un elemento por su ID.

let elemento = document.getElementById("miElemento");

// document.getElementsByClassName(): Selecciona todos los elementos que comparten una clase CSS.

let elementos = document.getElementsByClassName("miClase");

// document.getElementsByTagName(): Selecciona todos los elementos con una etiqueta HTML específica.

let elementos1 = document.getElementsByTagName("p");

// document.querySelector(): Selecciona el primer elemento que coincide con un selector CSS dado.

let elementos2 = document.querySelector(".miClase");

// document.querySelectorAll(): Selecciona todos los elementos que coinciden con un selector CSS dado.

let elementos3 = document.querySelectorAll(".miClase");

// Modificación de Atributos y Contenido de Elementos
// Una vez que has seleccionado un elemento, puedes modificar sus atributos y contenido.

// textContent: Cambia el texto dentro de un elemento.
elemento.textContent = "Nuevo contenido";

// innerHTML: Cambia el HTML dentro de un elemento.
elemento.innerHTML = "<strong>Nuevo contenido</strong>";

// setAttribute(): Cambia o añade un atributo a un elemento.
elemento.setAttribute("class", "nuevaClase");

// getAttribute(): Obtiene el valor de un atributo de un elemento.
let clase = elemento.getAttribute("class");

// removeAttribute(): Elimina un atributo de un elemento.
elemento.removeAttribute("class");

/* 
Manejo de Eventos
Los eventos permiten interactuar con el usuario a través del DOM. Puedes escuchar eventos y responder a ellos con funciones JavaScript.

addEventListener(): Asocia un evento a un elemento.
*/

elemento.addEventListener("click", function() {
    alert("Elemento clickeado");
});

/*
Eventos Comunes:

click: Ocurre cuando el usuario hace clic en un elemento.
input: Ocurre cuando el valor de un campo de formulario cambia.
submit: Ocurre cuando un formulario es enviado.
*/

// createElement(): Crea un nuevo elemento HTML.

let nuevoElemento = document.createElement("div");
nuevoElemento.textContent = "Hola, soy un nuevo div";

// appendChild(): Añade un elemento hijo a otro elemento.

let contenedor = document.getElementById("contenedor");
contenedor.appendChild(nuevoElemento);

// removeChild(): Elimina un elemento hijo.
contenedor.removeChild(nuevoElemento);

// firstElementChild(): devuelve el primer elemento hijo de un nodo padre.
let contenedor1 = document.getElementById("contenedor1");
let primerHijo = contenedor1.firstElementChild;

console.log(primerHijo); // <p>Primer párrafo</p>


// Ejemplo

let lista = document.getElementById("miLista");

// Crear un nuevo elemento de lista
let nuevoItem = document.createElement("li");
nuevoItem.textContent = "Nuevo ítem";

// Añadir el nuevo ítem a la lista
lista.appendChild(nuevoItem);

// Eliminar el primer ítem de la lista
let primerItem = lista.firstElementChild;
lista.removeChild(primerItem);

// Delegación de Eventos y Burbujeo

// Delegación de Eventos es una técnica que permite manejar eventos de manera eficiente, especialmente cuando se trabaja con elementos dinámicos. 
// En lugar de añadir un addEventListener a cada elemento hijo, 
// se añade uno al elemento padre que se encarga de manejar los eventos de
// todos los hijos.

let lista1 = document.getElementById("miLista");

lista1.addEventListener("click", function(event) {
  if (event.target.tagName === "LI") {
    alert("Elemento de lista clickeado: " + event.target.textContent);
  }
});




  