const prompt = require('prompt-sync')();
function operarConDatos(dato) {
    // Verificar el tipo de dato usando typeof
    const tipo = typeof dato;
  
    switch (tipo) {
      case 'number':
        console.log(`Realizando operaciones aritméticas con el número ${dato}`);
        const suma = dato + 10;
        const resta = dato - 5;
        console.log(`Suma: ${dato} + 10 = ${suma}`);
        console.log(`Resta: ${dato} - 5 = ${resta}`);
        break;
  
      case 'string':
        console.log(`Realizando manipulaciones con la cadena "${dato}"`);
        const mayusculas = dato.toUpperCase();
        const minusculas = dato.toLowerCase();
        console.log(`En mayúsculas: ${mayusculas}`);
        console.log(`En minúsculas: ${minusculas}`);
        break;
  
      case 'object':
        if (Array.isArray(dato)) {
          console.log(`Transformando el arreglo: [${dato}]`);
          const reverso = dato.reverse();
          console.log(`Reverso del arreglo: [${reverso}]`);
        } else {
          console.warn('Advertencia: Se esperaba un array, pero se recibió un objeto diferente.');
        }
        break;
  
      case 'boolean':
        console.log(`Operando con el valor booleano: ${dato}`);
        const negacion = !dato;
        console.log(`Negación: ${negacion}`);
        break;
  
      default:
        console.warn(`Advertencia: Tipo de dato "${tipo}" no soportado.`);
        break;
    }
  
    // Coerción de tipos explícita con advertencias
    if (tipo !== 'number') {
      const numeroConvertido = Number(dato);
      if (isNaN(numeroConvertido)) {
        console.warn(`No se puede convertir "${dato}" a número. Resultado: NaN`);
      } else {
        console.log(`Dato convertido a número: ${numeroConvertido}`);
      }
    }
  }
  
  // Ejemplos de uso:
  /*
  operarConDatos(25);          // Operaciones aritméticas
  operarConDatos('Hola Mundo'); // Manipulaciones de cadenas
  operarConDatos([1, 2, 3, 4]); // Transformaciones de arreglos
  operarConDatos(true);         // Operaciones con booleanos
  operarConDatos({ clave: 'valor' }); // Advertencia sobre objetos no esperados
  */

let dato = prompt();
operarConDatos(dato.split(""));
console.log(typeof(dato));

/*
split() es útil cuando quieres dividir una cadena en un array basado en un separador específico (por ejemplo, dividir una frase en palabras).
Array.from() y [...] son útiles cuando simplemente quieres convertir una cadena en un array de caracteres.
*/

