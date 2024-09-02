/*
var
Ámbito: Función o global (no respeta bloques).
Reasignación: Sí, puedes reasignar el valor.
Hoisting: Sí, se eleva al inicio de su ámbito con un valor inicial de undefined.
*/

var x = 10;
if (true) {
  var x = 20;  // Misma variable, ámbito de función/global
}
console.log(x);  // 20 (valor dentro del bloque if)

/*
let
Ámbito: Bloque {} (respeta bloques).
Reasignación: Sí, puedes reasignar el valor.
Hoisting: Sí, pero no accesible antes de la declaración (Temporal Dead Zone).
*/

let y = 10;
if (true) {
  let y = 20;  // Nueva variable, ámbito de bloque
  console.log(y);  // 20 (dentro del bloque if)
}
console.log(y);  // 10 (fuera del bloque if)

/*
const
Ámbito: Bloque {} (respeta bloques).
Reasignación: No, no se puede reasignar.
Hoisting: Sí, pero no accesible antes de la declaración (Temporal Dead Zone).
*/

const z = 10;
if (true) {
  const z = 20;  // Nueva variable, ámbito de bloque
  console.log(z);  // 20 (dentro del bloque if)
}
console.log(z);  // 10 (fuera del bloque if)

// z = 30;  
// Error: No se puede reasignar una variable const

/*
Resumen Final:
var: Usar con precaución; su ámbito es más amplio y puede llevar a errores si se utiliza dentro de bloques.
let: Usar para variables que pueden cambiar y que deben respetar el ámbito de bloque.
const: Usar para constantes o valores que no deben cambiar; es la opción más segura por defecto.
*/

// Hoisting

// Hoisting es un comportamiento en JavaScript donde las declaraciones de variables y funciones son movidas "al inicio" de su contexto de ejecución 