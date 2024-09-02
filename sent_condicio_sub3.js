/*
Sintaxis basica
if (condición) {
  // Código a ejecutar si la condición es verdadera
} else if (otraCondición) {
  // Código a ejecutar si la primera condición es falsa y la otraCondición es verdadera
} else {
  // Código a ejecutar si todas las condiciones anteriores son falsas
}
*/

let edad = 20;

if (edad < 18) {
  console.log('Eres menor de edad');
} else if (edad >= 18 && edad < 65) {
  console.log('Eres adulto');
} else {
  console.log('Eres mayor');
}
