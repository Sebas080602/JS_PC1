const prompt = require('prompt-sync')();

// Número secreto definido por el juego
const numeroSecreto = 7;

// Simulación de entrada del usuario (puedes cambiar estos valores para probar)
let entradaUsuario = prompt('Adivina el número secreto (entre 1 y 10):');

// Validación de la entrada utilizando coalescencia nula
entradaUsuario = entradaUsuario ?? "0";  // Si el usuario deja en blanco o cancela, toma "0" como valor predeterminado

// Conversión de la entrada del usuario a número (coerción de tipo)
let numeroAdivinado = Number(entradaUsuario);

// Lógica condicional del juego
if (numeroAdivinado === numeroSecreto) {
  console.log('¡Felicidades! Adivinaste el número secreto.');
} else if (numeroAdivinado > numeroSecreto) {
  console.log('El número es demasiado alto. ¡Intenta nuevamente!');
} else if (numeroAdivinado < numeroSecreto && numeroAdivinado !== 0) {
  console.log('El número es demasiado bajo. ¡Intenta nuevamente!');
} else if (numeroAdivinado == 0) {
  console.log('No ingresaste un número válido.');
} else {
  console.log('Algo salió mal. Por favor, vuelve a intentarlo.');
}

// Exploración de la coerción de tipos y valores nulos
let valorNulo = null;
console.log(`Resultado de valorNulo ?? "valor predeterminado": ${valorNulo ?? "valor predeterminado"}`); // Debería imprimir "valor predeterminado"

let valorFalso = false;
console.log(`Resultado de !valorFalso: ${!valorFalso}`); // Debería imprimir "true" porque !false es true
