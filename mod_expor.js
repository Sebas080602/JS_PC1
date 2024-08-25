//  Uso de Módulos en JavaScript (import, export)

/*
export: Se utiliza para exportar funciones, objetos, clases, o valores de un módulo, para que puedan ser usados en otros archivos.
import: Se utiliza para importar las funciones, objetos, clases, o valores exportados desde otro módulo.
*/

// Archivo math.js (módulo de utilidades matemáticas):
// Exportación de funciones
export function sumar(a, b) {
    return a + b;
}
  
  export function restar(a, b) {
    return a - b;
}

//Archivo main.js (importando funciones desde math.js):
// Importación de funciones desde math.js
import { sumar, restar } from './math.js';

console.log(sumar(5, 3));  // 8
console.log(restar(5, 3)); // 2

// Organización del Código en Diferentes Archivos
// Organizar el código en diferentes archivos es crucial para mantener el código modular y limpio


/*
Exportación de Funciones, Objetos y Clases (default, named exports)
*/

/*
Exportaciones Nombradas (named exports): Se utilizan cuando quieres 
exportar múltiples elementos desde un módulo y necesitas especificar un nombre para cada uno.
*/

// named exports
export function sumar(a, b) {
    return a + b;
  }
  
export const PI = 3.14159;

// importacion
import { sumar, PI } from './math.js';

/*
Exportaciones por Defecto (default exports): Se utilizan cuando el 
módulo exporta un único valor o cuando quieres que un módulo tenga 
una exportación principal.
*/

// default export
export default function multiplicar(a, b) {
    return a * b;
}

import multiplicar from './math.js';
