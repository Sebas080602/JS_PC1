/*
Variables: Scope y Hoisting
Scope (Ámbito)
El scope o ámbito se refiere a la accesibilidad de variables y funciones en diferentes partes del código. En JavaScript, existen principalmente dos tipos de scope:

Global Scope:

Las variables declaradas fuera de cualquier función tienen un ámbito global. Esto significa que son accesibles desde cualquier parte del código.
*/

var globalVar = "Soy global";

function mostrarGlobal() {
  console.log(globalVar); // Accede a la variable global
}

mostrarGlobal(); // "Soy global"


/*
Function Scope:

Las variables declaradas dentro de una función solo son accesibles dentro de esa función.
*/

function miFuncion() {
    var functionScoped = "Solo accesible dentro de esta función";
    console.log(functionScoped);
  }
  
miFuncion(); // "Solo accesible dentro de esta función"
  // console.log(functionScoped); // Error: functionScoped no está definida

/*
Block Scope (Bloque de Código):

Introducido con let y const, el block scope permite que las variables solo sean accesibles dentro del bloque {} donde se declaran.
*/

if (true) {
    let blockScoped = "Dentro del bloque";
    console.log(blockScoped); // "Dentro del bloque"
  }
  // console.log(blockScoped); // Error: blockScoped no está definida

/*
  Hoisting
  El hoisting es un comportamiento de JavaScript en el que las declaraciones de variables y funciones son movidas "al inicio" de su contexto de ejecución (global o de función) antes de que se ejecute el código.
  
  Variables declaradas con var: Las declaraciones de variables con var son "elevadas" al inicio de su contexto, pero no la inicialización.
  
  Ejemplo:
*/

  console.log(hoistedVar); // undefined
  var hoistedVar = "Hola";
  console.log(hoistedVar); // "Hola"
//   El código anterior se interpreta como:
  

  var hoistedVar;
  console.log(hoistedVar); // undefined
  hoistedVar = "Hola";
  console.log(hoistedVar); // "Hola"
//   Variables declaradas con let y const: Estas variables también son hoisted, pero permanecen en un "Temporal Dead Zone" (zona muerta temporal) hasta que se asigna un valor.
  
//   Ejemplo:
  

  // console.log(noHoistedVar); // Error: Cannot access 'noHoistedVar' before initialization
  let noHoistedVar = "Hola";
  console.log(noHoistedVar); // "Hola"


// Ejercicio 1: Scope y Hoisting

function testScope() {
    // Scope de función
    var funcionVar = "Soy una var en función";
    let funcionLet = "Soy un let en función";
    const funcionConst = "Soy un const en función";
  
    if (true) {
      // Block scope dentro de la función
      var bloqueVar = "Soy una var en bloque";
      let bloqueLet = "Soy un let en bloque";
      const bloqueConst = "Soy un const en bloque";
      console.log(bloqueVar); // Accesible
      console.log(bloqueLet); // Accesible
      console.log(bloqueConst); // Accesible
    }
  
    console.log(bloqueVar); // Accesible fuera del bloque
    // console.log(bloqueLet); // Error: bloqueLet no está definido
    // console.log(bloqueConst); // Error: bloqueConst no está definido
  }
  
  testScope();
  
  // Hoisting con var
  console.log(hoistedVar); // undefined (hoisting)
  var hoistedVar = "Soy una var hoisted";
  
  // Hoisting con let y const
  // console.log(hoistedLet); // Error: Cannot access 'hoistedLet' before initialization
  let hoistedLet = "Soy un let no hoisted";
  
  