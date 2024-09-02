/*
3.1 indexOf()
Devuelve la posición de la primera aparición de una subcadena dentro de una cadena. 
Si no se encuentra, devuelve -1.
*/

let texto = 'Hola, mundo!';
console.log(texto.indexOf('mundo')); // 6
console.log(texto.indexOf('adiós')); // -1

/*
3.2 lastIndexOf()
Devuelve la posición de la última aparición de una subcadena dentro de una cadena.
*/

let texto = 'Hola, mundo, hola de nuevo!';
console.log(texto.lastIndexOf('hola')); // 18

/*
3.3 includes()
Devuelve true si la cadena contiene la subcadena especificada, y false en caso contrario.
*/

let texto = 'Hola, mundo!';
console.log(texto.includes('mundo')); // true
console.log(texto.includes('adiós')); // false

/*
3.4 match()
Busca coincidencias en la cadena y devuelve un array con los resultados. Es útil cuando se usa junto con expresiones regulares.
*/

let texto = 'El año 2024 es un año bisiesto';
let coincidencias = texto.match(/\d+/g); // Encuentra todos los dígitos
console.log(coincidencias); // ["2024"]

/*
3.5 slice()
Extrae una parte de la cadena y devuelve una nueva cadena sin modificar la original.
*/

let texto = 'Hola, mundo!';
let subcadena = texto.slice(0, 4); // Extrae "Hola"
console.log(subcadena); // "Hola"

/*
3.6 replace()
Reemplaza una subcadena especificada con otra subcadena.
*/

let texto = 'Hola, mundo!';
let nuevoTexto = texto.replace('mundo', 'amigo');
console.log(nuevoTexto); // "Hola, amigo!"

/*
3.7 split()
Divide una cadena en un array de subcadenas usando un separador específico.
*/

let texto = 'rojo,verde,azul';
let colores = texto.split(',');
console.log(colores); // ["rojo", "verde", "azul"]

/*
3.8 trim()
Elimina los espacios en blanco al inicio y al final de la cadena.
*/

let texto = '   Hola, mundo!   ';
let textoLimpio = texto.trim();
console.log(textoLimpio); // "Hola, mundo!"

/*
3.9 search()
El método search() busca una coincidencia entre una expresión regular y una cadena de texto. 
A diferencia de match(), que devuelve las coincidencias, search() 
devuelve el índice de la primera coincidencia o -1 si no se encuentra ninguna coincidencia.
*/

let texto = "Hola, mundo!";
let indice = texto.search(/mundo/);
console.log(indice); // 6

/*
3.10 matachAll()
A diferencia de match(), matchAll() es especialmente útil cuando trabajas con grupos capturados y quieres obtener todas las coincidencias, incluso si la expresión regular contiene el modificador g (global).
*/

let texto = "El número 42 es la respuesta. También, el número 100 es importante.";
let regex = /\d+/g; // Buscar todos los números
let iterador = texto.matchAll(regex);

for (let match of iterador) {
  console.log(match);
}
// ["42", index: 10, input: "El número 42 es la respuesta. También, el número 100 es importante.", groups: undefined]
// ["100", index: 49, input: "El número 42 es la respuesta. También, el número 100 es importante.", groups: undefined]

/*
3.11 sort()
1. Ordenación Alfabética (Por Defecto)
Cuando sort() se usa sin una función de comparación, los elementos del array se convierten en cadenas y se ordenan en orden alfabético.
*/

let frutas = ["manzana", "naranja", "plátano", "cereza"];
frutas.sort();
console.log(frutas);
// ["cereza", "manzana", "naranja", "plátano"]

/*
2. Ordenación Numérica
Cuando se ordenan números, sort() puede dar resultados inesperados si no se proporciona una función de comparación, porque los números se convierten en cadenas y se comparan como tales.
*/

let numeros = [10, 5, 100, 1, 25];
numeros.sort();
console.log(numeros);
// ["1", "10", "100", "25", "5"]


/*
Función de Comparación
Una función de comparación se utiliza para definir el criterio de ordenación. Esta función toma dos argumentos (a y b) y devuelve:

Un valor negativo si a debe aparecer antes que b.
Un valor positivo si a debe aparecer después que b.
0 si a y b son considerados iguales en términos de orden.
*/

// Ejemplo: Ordenación Numérica Ascendente

let numeros = [10, 5, 100, 1, 25];
numeros.sort(function(a, b) {
  return a - b;
});
console.log(numeros);
// [1, 5, 10, 25, 100]

// Ejemplo: Ordenación Numérica Descendente

let numeros = [10, 5, 100, 1, 25];
numeros.sort(function(a, b) {
  return b - a;
});
console.log(numeros);
// [100, 25, 10, 5, 1]

/*
1. Ordenar Objetos por una Propiedad
Cuando trabajas con arrays de objetos, puedes usar sort() con una función de comparación para ordenar los objetos por una propiedad específica.
*/

let personas = [
    { nombre: "Carlos", edad: 30 },
    { nombre: "Ana", edad: 20 },
    { nombre: "Juan", edad: 25 }
  ];
  
  personas.sort(function(a, b) {
    return a.edad - b.edad;
  });
  
  console.log(personas);
  // [{ nombre: "Ana", edad: 20 }, { nombre: "Juan", edad: 25 }, { nombre: "Carlos", edad: 30 }]

/*
2. Ordenar Cadenas de Texto Insensible a Mayúsculas
Para ordenar cadenas de texto sin tener en cuenta si están en mayúsculas o minúsculas, puedes usar localeCompare.
*/

let palabras = ["Banana", "manzana", "Naranja", "cereza"];
palabras.sort(function(a, b) {
  return a.localeCompare(b);
});

console.log(palabras);
// ["Banana", "cereza", "manzana", "Naranja"]



