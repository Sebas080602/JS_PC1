/*
Sentencias de Bucles (for, while, do...while)
Los bucles permiten repetir un bloque de código mientras una condición sea verdadera.
*/

//while

let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}

//for

for (let z = 0; z < 5; z++) {
    console.log(z);
  }

  
//do...while
let j = 0;
do {
  console.log(j);
  j++;
} while (j < 5);

let a = 0;
do {
    console.log(`Valor de a: ${a}`);
    a++;
} while (false);

//for...in y for...of
// for...in: Itera sobre las propiedades enumerables de un objeto.
const persona = { nombre: 'Sebastián', edad: 22 };

for (let propiedad in persona) {
  console.log(`${propiedad}: ${persona[propiedad]}`);
}

//for...of: Itera sobre los valores de un objeto iterable como un array.
const numeros = [1, 2, 3];

for (let numero of numeros) {
  console.log(numero);
}

/*
Uso Adecuado
Usa for...in cuando necesites acceder a las claves de un objeto o los índices de un array.
Usa for...of cuando quieras iterar directamente sobre los valores de un array, cadena de texto, o cualquier otro iterable.
*/