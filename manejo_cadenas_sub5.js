/*
Creación de Cadenas
En JavaScript, las cadenas de texto se pueden crear utilizando diferentes comillas:

Comillas simples (' ')
Comillas dobles (" ")
Backticks o acentos graves ( `)
*/

// Cadenas de Plantilla y Uso de ${} para Interpolación
let nombre = 'Sebastián';
let saludo = `Hola, ${nombre}! ¿Cómo estás?`;
console.log(saludo); // "Hola, Sebastián! ¿Cómo estás?"

// Métodos Importantes para Trabajar con Cadenas

// indexOf()

/*
Devuelve la posición de la primera aparición de una subcadena dentro de una cadena. Si no se encuentra, devuelve -1.
*/

let texto = 'Hola, mundo!';
console.log(texto.indexOf('mundo')); // 6
console.log(texto.indexOf('adiós')); // -1


// lastIndexOf()

/*
Devuelve la posición de la última aparición de una subcadena dentro de una cadena.
*/

let texto1 = 'Hola, mundo, hola de nuevo!';
console.log(texto1.lastIndexOf('hola')); // 18


// includes()
/*
Devuelve true si la cadena contiene la subcadena especificada, y false en caso contrario.
*/

let texto2 = 'Hola, mundo!';
console.log(texto2.includes('mundo')); // true
console.log(texto2.includes('adiós')); // false

// match()

/*
Busca coincidencias en la cadena y devuelve un array con los resultados. Es útil cuando se usa junto con expresiones regulares.
*/

let texto3 = 'El año 2024 es un año bisiesto';
let coincidencias = texto3.match(/\d+/g); // Encuentra todos los dígitos
console.log(coincidencias); // ["2024"]

// slice()

/*
Extrae una parte de la cadena y devuelve una nueva cadena sin modificar la original.
*/

let texto4 = 'Hola, mundo!';
let subcadena = texto4.slice(0, 4); // Extrae "Hola"
console.log(subcadena); // "Hola"

// replace()

/*
Reemplaza una subcadena especificada con otra subcadena.
*/

let texto5 = 'Hola, mundo!';
let nuevoTexto = texto5.replace('mundo', 'amigo');
console.log(nuevoTexto); // "Hola, amigo!"

// split()

/*
Divide una cadena en un array de subcadenas usando un separador específico.
*/

let texto6 = 'rojo,verde,azul';
let colores = texto6.split(',');
console.log(colores); // ["rojo", "verde", "azul"]

// trim()

/*
Elimina los espacios en blanco al inicio y al final de la cadena.
*/

let texto7 = '   Hola, mundo!   ';
let textoLimpio = texto7.trim();
console.log(textoLimpio); // "Hola, mundo!"


// search()
// El método search() busca una coincidencia entre una expresión regular y una cadena de texto. A diferencia de match(), que devuelve las coincidencias, search() devuelve el índice de la primera coincidencia o -1 si no se encuentra ninguna coincidencia.

let texto8 = "Hola, mundo!";
let indice = texto8.search(/mundo/);
console.log(indice); // 6

// matchAll()

/*
let iterador = cadena.matchAll(expresionRegular);
cadena: La cadena de texto en la que se va a realizar la búsqueda.
expresionRegular: La expresión regular que define el patrón de búsqueda. Es recomendable usar el modificador g para obtener todas las coincidencias.
*/

let texto9 = "El número 42 es la respuesta. También, el número 100 es importante.";
let regex = /\d+/g; // Buscar todos los números
let iterador = texto9.matchAll(regex);

for (let match of iterador) {
  console.log(match);
}
// ["42", index: 10, input: "El número 42 es la respuesta. También, el número 100 es importante.", groups: undefined]
// ["100", index: 49, input: "El número 42 es la respuesta. También, el número 100 es importante.", groups: undefined]

//sort()

//  ordenar los elementos de un array.

// array.sort([funciónDeComparación])
/*
array: El array que deseas ordenar.
funciónDeComparación (opcional): Una función que define el criterio de ordenación. Si se omite, los elementos se convierten en cadenas y se ordenan en orden lexicográfico.
*/

// Ordenación Alfabética (Por Defecto)

let frutas = ["manzana", "naranja", "plátano", "cereza"];
frutas.sort();
console.log(frutas);
// ["cereza", "manzana", "naranja", "plátano"]

// Ordenación Numérica
// Cuando se ordenan números, sort() puede dar resultados inesperados si no se proporciona una función de comparación, porque los números se convierten en cadenas y se comparan como tales.

let numeros1 = [10, 5, 100, 1, 25];
numeros.sort();
console.log(numeros1);
// ["1", "10", "100", "25", "5"]

// Ejemplo: Ordenación Numérica Ascendente
let numeros = [10, 5, 100, 1, 25];
numeros.sort(function(a, b) {
  return a - b;
});
console.log(numeros);
// [1, 5, 10, 25, 100]
