/*
Sintaxis básica:
function nombreDeLaFuncion(parámetro1, parámetro2) {
  // Código a ejecutar
  return resultado;
}
*/
function saludar(nombre) {
    return `Hola, ${nombre}`;
  }
  
let mensaje = saludar('Sebastián');
console.log(mensaje); // "Hola, Sebastián"

// Tipos de funciones

// Funciones anonimas (se le asigna una variable, generalmente)
let sumar = function(a, b) {
    return a + b;
  };
console.log(sumar(2, 3)); // 5

// Funciones Flecha
const multiplicar = (a,b) => {
    return a*b;
};

const restar = (a,b) => a+b;
console.log(restar(8,7));

console.log(multiplicar(2,3));

/*
Operador Rest (...) y Parámetros por Defecto
Operador Rest:
El operador rest (...) permite a una función aceptar un número indefinido de argumentos como un array.
*/

function sumarTodos(...numeros) {
    return numeros.reduce((acumulador, numero) => acumulador + numero, 0);
}
  
console.log(sumarTodos(1, 2, 3, 4)); // 10


// Closures

// Un closure es una función que recuerda el entorno en el que se creó, lo que significa que puede acceder a las variables de su entorno exterior incluso después de que esa función exterior haya terminado de ejecutarse.

function crearContador() {
    let contador = 0;
    return function() {
      contador++;
      return contador;
    };
  }
  
  const incrementar = crearContador();
  
  console.log(incrementar()); // 1
  console.log(incrementar()); // 2
  console.log(incrementar()); // 3

// Funciones de orden superior
/*
Las funciones de orden superior son aquellas 
que aceptan otras funciones como 
argumentos o que devuelven una función como resultado.
*/

function operar(a,b,operando) {
    return operando(a,b);
};

const op1 = (a,b) => a + b + 2*b;
const op2 = (a,b) => a + 4*b;

console.log(operar(2,3,op1));
console.log(operar(2,7,op2));

// Recursion
// La recursión ocurre cuando una función se llama a sí 
// misma. Es útil para problemas que pueden dividirse en 
// subproblemas más pequeños del mismo tipo.

function factorial(n) {
    if (n==0) {
        return 1;
    } 
    return n * factorial(n-1);
}

console.log(factorial(3));