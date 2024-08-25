/*
Sintaxis básica:

condición ? expresiónSiVerdadera : expresiónSiFalsa;

*/
let edad = 20;
let mensaje = edad >= 18 ? 'Eres adulto' : 'Eres menor de edad';
console.log(mensaje); // "Eres adulto"

/*
Operador de Coalescencia Nula (??)
Sintaxis básica:
El operador ?? devuelve el operando derecho cuando el izquierdo es null o undefined.
*/

let nombre = null;
let saludo = nombre ?? 'Anónimo';
console.log(saludo); // "Anónimo"
