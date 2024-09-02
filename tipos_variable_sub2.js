// Declaración de variables de diferentes tipos de datos
let indefinido;
const objeto = { nombre: 'Sebastián', edad: 22 };
const booleano = true;
const numero = 42.345;
const cadena = 'hola mundo';
const enteroGrande = 123456789012345678901234567890n;
const simbolo = Symbol('identificador');

// Imprimir el tipo de cada variable utilizando typeof
console.log(`Tipo de indefinido: ${typeof indefinido}`); // "undefined"
console.log(`Tipo de objeto: ${typeof objeto}`); // "object"
console.log(`Tipo de booleano: ${typeof booleano}`); // "boolean"
console.log(`Tipo de número: ${typeof numero}`); // "number"
console.log(`Tipo de cadena: ${typeof cadena}`); // "string"
console.log(`Tipo de bigint: ${typeof enteroGrande}`); // "bigint"
console.log(`Tipo de símbolo: ${typeof simbolo}`); // "symbol"

// Manipulación de una cadena utilizando toUpperCase()
const cadenaMayusculas = cadena.slice(0,4);
console.log(`Primeros 4 caracteres: ${cadenaMayusculas}`); // "HOLA MUNDO"

// Manipulación de un número utilizando toFixed()
const numeroFijado = numero.toFixed(2);
console.log(`Número con dos decimales: ${numeroFijado}`); // "42.35"
