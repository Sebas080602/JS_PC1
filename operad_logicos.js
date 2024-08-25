/*
Sintaxis básica:
AND (&&): Verdadero solo si ambas condiciones son verdaderas.
OR (||): Verdadero si al menos una condición es verdadera.
NOT (!): Invierte el valor lógico.
*/

let esAdulto = true;
let tienePermiso = false;

if (esAdulto && tienePermiso) {
  console.log('Puedes ingresar');
} else {
  console.log('No puedes ingresar');
}

// Uso de NOT
console.log(!esAdulto); // false

/*
Igualdad en JavaScript (==, ===, !=, !==)
==: Igualdad débil. Compara valores después de convertirlos a un tipo común.
===: Igualdad estricta. Compara tanto el valor como el tipo.
!=: Desigualdad débil.
!==: Desigualdad estricta.
*/

let x = '5';
let y = 5;

console.log(x == y);  // true (compara valor, convierte tipo)
console.log(x === y); // false (diferentes tipos)

/*
Verificación de Valores Truthy y Falsy
En JavaScript, algunos valores se evalúan como true (truthy) y otros como false (falsy).

Valores falsy: false, 0, "", null, undefined, NaN.
Valores truthy: lo demás
*/

let valor = 0;

if (valor) {
  console.log('Es truthy');
} else {
  console.log('Es falsy');  // Este será el resultado
}

