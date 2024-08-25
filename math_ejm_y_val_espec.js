//Math.random()
let aleatorio = Math.random();
console.log(aleatorio); // Ejemplo: 0.5467 (valor aleatorio entre 0 y 1)

// Generar un número aleatorio entre 1 y 100
const numeroAleatorio = Math.floor(Math.random() * 100) + 1;
console.log(`El número aleatorio entre 1 y 100 es: ${numeroAleatorio}`);

//Math.max() y Math.min()
let maximo = Math.max(10, 20, 30, 5);
let minimo = Math.min(10, 20, 30, 5);
console.log(maximo); // 30
console.log(minimo); // 5

//Math.floor(), Math.ceil() y Math.round()
let num = 4.7;
console.log(Math.floor(num)); // 4
console.log(Math.ceil(num)); // 5
console.log(Math.round(num)); // 5

// Math.sqrt() y Math.pow()
let raizCuadrada = Math.sqrt(16);
let potencia = Math.pow(2, 3);
console.log(raizCuadrada); // 4
console.log(potencia); // 8

//Valores especiales
// NaN
let resultado = 0 / 0;
console.log(resultado); // NaN
console.log(isNaN(resultado)); // true

//Infinity
let positivoInfinito = 1 / 0;
let negativoInfinito = -1 / 0;
console.log(positivoInfinito); // Infinity
console.log(negativoInfinito); // -Infinity
console.log(isFinite(positivoInfinito)); // false


