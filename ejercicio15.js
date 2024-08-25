// Cadena de texto original
let texto = "JavaScript es un lenguaje de programación muy poderoso y flexible";

// 1. Dividir la cadena en un array de palabras
let palabrasArray = texto.split(" ");
console.log("Array de palabras:", palabrasArray);

// 2. Ordenar el array alfabéticamente
palabrasArray.sort();
console.log("Array de palabras ordenado:", palabrasArray);

// 3. Unir las palabras en una cadena nuevamente
let textoOrdenado = palabrasArray.join(" ");
console.log("Cadena ordenada alfabéticamente:", textoOrdenado);


// Array de números original
let numeros = [23, 1, 45, 12, 7, 88, 34, 56];

// 1. Ordenar el array numéricamente (de menor a mayor)
numeros.sort(function(a, b) {
  return a - b;
});
console.log("Array de números ordenado:", numeros);

// 2. Ordenar el array numéricamente (de mayor a menor)
numeros.sort(function(a, b) {
  return b - a;
});
console.log("Array de números ordenado de mayor a menor:", numeros);

// 3. Convertir el array de números en una cadena (separada por comas)
let numerosCadena = numeros.join(", ");
console.log("Array de números en cadena:", numerosCadena);
