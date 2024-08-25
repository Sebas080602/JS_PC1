/*
1. Creación de Arrays
Hay varias formas de crear arrays en JavaScript:

Literals ([]): La forma más común y directa.
Array.of(): Crea un nuevo array con los elementos dados.
Array.from(): Crea un nuevo array a partir de un objeto iterable o similar a un array.
*/

// Literal
let array1 = [1, 2, 3];

// Array.of()
let array2 = Array.of(4, 5, 6);

// Array.from()
let array3 = Array.from('Hola'); // ['H', 'o', 'l', 'a']
let array4 = Array.from(array1); // [1, 2, 3]

console.log(array3)

/*
2. Acceso y Manipulación de Elementos en Arrays
Acceso por Índices: Acceder a un elemento usando su posición en el array.
*/

let frutas = ["manzana", "banana", "cereza"];
console.log(frutas[1]); // "banana"

// push()  Añadir un elemento al final del array.
frutas.push("naranja");
console.log(frutas); // ["manzana", "banana", "cereza", "naranja"]


// pop(): Elimina el último elemento del array y lo devuelve.

let ultimaFruta = frutas.pop();
console.log(ultimaFruta); // "naranja"
console.log(frutas); // ["manzana", "banana", "cereza"]

// shift(): Elimina el primer elemento del array y lo devuelve.

let primeraFruta = frutas.shift();
console.log(primeraFruta); // "manzana"
console.log(frutas); // ["banana", "cereza"]

// unshift(): Añadir uno o más elementos al principio del array.

frutas.unshift("kiwi","Naranja");
console.log(frutas); // ["kiwi", "banana", "cereza"]

// splice(): Añadir o eliminar elementos en cualquier posición del array.

frutas.splice(1, 1, "limón", "mango"); // Elimina 1 elemento en la posición 1, e inserta "limón" y "mango"
console.log(frutas); // ["kiwi", "limón", "mango", "cereza"]

// Iteración sobre arrays

// forEach(): Ejecuta una función para cada elemento del array.

frutas.forEach(function(fruta) {
    console.log(fruta);
  });
  // "kiwi", "limón", "mango", "cereza"
  
// map(): Crea un nuevo array con los resultados de aplicar una función a cada elemento.

let longitudes = frutas.map(function(fruta) {
    return fruta.length;
  });
  console.log(longitudes); // [4, 5, 5, 6]

let unis = ["UPC","UPCH","PUCP","UNI"];
let bestuni = unis.map(function(uni) {
    return uni[1];
});

console.log(bestuni);

// filter(): Crea un nuevo array con todos los elementos que pasan un test específico.

let frutasCortas = frutas.filter(function(fruta) {
    return fruta.length <= 5;
  });
  console.log(frutasCortas); // ["kiwi", "limón", "mango"]

console.log(frutas);

// reduce(): Aplica una función a un acumulador y a cada elemento del array (de izquierda a derecha) para reducirlo a un solo valor.

let totalLetras = frutas.reduce(function(acumulador, fruta) {
    return acumulador + fruta.length;
  }, 0);
  console.log(totalLetras); // 20

/*
 Métodos de Búsqueda
find(): Devuelve el primer elemento que cumple con la condición especificada.
*/

let frutaLarga = frutas.find(function(fruta) {
    return fruta.length < 5;
})

console.log(frutaLarga);

// findIndex(): Devuelve el índice del primer elemento que cumple con la condición especificada.

let indiceFrutaLarga = frutas.findIndex(function(fruta) {
    return fruta.length > 5;
});
console.log(indiceFrutaLarga); // 3 (índice de "cereza")

/*
Validación
every(): Devuelve true si todos los elementos del array pasan el test implementado por la función proporcionada.
*/

let todasCortas = frutas.every(function(fruta) {
    return fruta.length <= 6;
});
console.log(todasCortas);

// some(): Devuelve true si al menos un elemento del array pasa el test implementado por la función proporcionada.

let algunaLarga = frutas.some(function(fruta) {
    return fruta.length > 5;
});
console.log(algunaLarga); // true

// includes(): Determina si un array contiene un determinado elemento.

let contieneMango = frutas.includes("mango");
console.log(contieneMango); // true


/*
Métodos para Transformar Arrays
*/

// flat(): Aplana un array de arrays en un solo array.

let arrayAnidado = [1, 2, [3, 4, [5, 6]]];
let plano = arrayAnidado.flat(2); // Aplana hasta 2 niveles de profundidad
console.log(plano); // [1, 2, 3, 4, 5, 6]

// concat(): Combina dos o más arrays.

let array_1 = [1, 2, 3];
let array_2 = [4, 5, 6];
let combinado = array_1.concat(array_2);
console.log(combinado); // [1, 2, 3, 4, 5, 6]

// join() : Combina todos los elementos de un array en una cadena, separados por un delimitador.

let cadena = frutas.join(", ");
console.log(cadena); // "kiwi, limón, mango, cereza"

/*
 Desestructuración de Arrays
La desestructuración te permite extraer elementos de un array y asignarlos a variables individuales.
*/

let [primera, segunda, ...resto] = frutas;
console.log(primera); // "kiwi"
console.log(segunda); // "limón"
console.log(resto); // ["mango", "cereza"]

/*
Sets (Colecciones de Valores Únicos)
Un Set es una colección de valores donde cada valor debe ser único.
*/

let set = new Set([1, 2, 3, 4, 4, 5]);
console.log(set); // Set { 1, 2, 3, 4, 5 }

// Añadir elementos
set.add(6);
console.log(set); // Set { 1, 2, 3, 4, 5, 6 }

// Eliminar elementos
set.delete(2);
console.log(set); // Set { 1, 3, 4, 5, 6 }

// Comprobar si un valor está en el set
console.log(set.has(3)); // true
console.log(set.has(2)); // false



