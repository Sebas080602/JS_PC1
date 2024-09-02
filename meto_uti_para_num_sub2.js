/*
Métodos Útiles para Números
JavaScript proporciona varios métodos útiles para trabajar con números. Aquí te explico los más comunes:

toFixed()

Este método formatea un número usando notación de punto fijo. 
Redondea el número a un número específico de decimales y devuelve el resultado como una cadena de texto.
*/


//toFixed()
let num1 = 3.14159;
console.log(num1.toFixed(2)); // "3.14"
console.log(num1.toFixed(4)); // "3.1416"

//toPrecision()
let num2 = 3.14159;
console.log(num2.toPrecision(3)); // "3.14"
console.log(num2.toPrecision(5)); // "3.1416"

//parseInt()
let texto = "42";
console.log(parseInt(texto)); // 42

let binario = "1010";
console.log(parseInt(binario, 2)); // 10

//parseFloat()
let textoDecimal = "3.14";
console.log(parseFloat(textoDecimal)); // 3.14


