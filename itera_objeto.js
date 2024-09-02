/*
1. for...in
¿Qué es?
El bucle for...in se utiliza para iterar sobre las propiedades enumerables de un objeto o las claves de un array.

¿Cómo funciona?
Objetos: Cuando se utiliza for...in con un objeto, se iteran las propiedades del objeto, es decir, las claves del objeto.
Arrays: Cuando se utiliza for...in con un array, se iteran los índices del array (las posiciones de los elementos).
Ejemplo con un Objeto:
*/

const persona = {
  nombre: 'Sebastián',
  edad: 22,
  ciudad: 'Lima'
};

for (let propiedad in persona) {
  console.log(`${propiedad}: ${persona[propiedad]}`);
}
/*
Salida:

nombre: Sebastián
edad: 22
ciudad: Lima
*/
/*
Aquí, propiedad toma cada uno de los nombres de las propiedades (nombre, edad, ciudad), y se accede a su valor correspondiente con persona[propiedad].
Ejemplo con un Array:
*/

const colores = ['rojo', 'verde', 'azul'];

for (let indice in colores) {
  console.log(`Índice ${indice}: ${colores[indice]}`);
}
/*
Salida:

yaml
Copiar código
Índice 0: rojo
Índice 1: verde
Índice 2: azul
Aquí, indice toma los valores 0, 1, 2, que son los índices del array colores.
*/

/*
2. for...of
¿Qué es?
El bucle for...of se utiliza para iterar sobre valores de objetos iterables como arrays, cadenas de texto, Mapas, Conjuntos (Sets), etc. for...of es ideal para trabajar directamente con los elementos de un array u otro iterable.

¿Cómo funciona?
Arrays: Cuando se utiliza for...of con un array, se iteran directamente los valores de los elementos del array.
Strings: Se iteran los caracteres de la cadena.
Mapas y Conjuntos: Se iteran los valores de las entradas.
Ejemplo con un Array:
*/

const colores = ['rojo', 'verde', 'azul'];

for (let color of colores) {
  console.log(color);
}
/*
Salida:

rojo
verde
azul
Aquí, color toma directamente los valores "rojo", "verde", "azul".
*/