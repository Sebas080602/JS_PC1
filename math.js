/*
Uso del Objeto Math
El objeto Math en JavaScript incluye una serie de propiedades y métodos para realizar operaciones matemáticas básicas y avanzadas:

Math.random()

Devuelve un número pseudoaleatorio de punto flotante entre 0 (inclusive) y 1 (exclusive).
*/

let aleatorio = Math.floor(Math.random() * 100) + 1;
console.log(aleatorio); 

/*
Math.max() y Math.min()

Math.max(): Devuelve el número más grande entre los argumentos dados.
Math.min(): Devuelve el número más pequeño entre los argumentos dados.
*/

let maximo = Math.max(10, 20, 30, 5);
let minimo = Math.min(10, 20, 30, 5);
console.log(maximo); // 30
console.log(minimo); // 5

// Sacar el maximo y minimo de una lista con ...
let min = Math.min(...[1,2,3,4,5]);
let max = Math.max(...[1,2,3,4,5]);
console.log(min);
console.log(max);

console.log(...[1,2,3,4]);

/*
Math.floor(), Math.ceil() y Math.round()

Math.floor(): Redondea un número hacia abajo al entero más cercano.
Math.ceil(): Redondea un número hacia arriba al entero más cercano.
Math.round(): Redondea un número al entero más cercano.
*/

let num = 4.7;
console.log(Math.floor(num)); // 4
console.log(Math.ceil(num)); // 5
console.log(Math.round(num)); // 5

/*

Math.sqrt() y Math.pow()

Math.sqrt(): Devuelve la raíz cuadrada de un número.
Math.pow(): Devuelve la base elevada al exponente (equivalente al operador **).
*/

let raizCuadrada = Math.sqrt(16);
let potencia = Math.pow(2, 3);
console.log(raizCuadrada); // 4
console.log(potencia); // 8


