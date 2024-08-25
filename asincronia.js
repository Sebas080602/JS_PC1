/*
La asincronía en JavaScript es crucial para manejar operaciones que toman tiempo, como la lectura de archivos, solicitudes a servidores, y temporizadores
*/

// 1. Callbacks y Manejo de Funciones Asincrónicas
// Un callback es una función que se pasa como argumento a otra función y se ejecuta después de que se completa la operación principal.
function operacionAsincronica(callback) {
    console.log("Iniciando operación...");
    setTimeout(function() {
      console.log("Operación completada.");
      callback();
    }, 2000);
  }
  
function despuesDeOperacion() {
    console.log("Esto se ejecuta después de la operación.");
}
  
operacionAsincronica(despuesDeOperacion);

/*
setTimeout es una función asincrónica que simula una operación retardada.
Una vez que la operación dentro de setTimeout se completa, se ejecuta el callback despuesDeOperacion.
*/

// Promesas

/*
Una promesa es un objeto que representa la eventual finalización (o falla) de una operación asincrónica y su valor resultante.
*/

let promesa = new Promise(function(resolve, reject) {
    setTimeout(function() {
      let exito = true; // Simulando éxito o fallo
  
      if (exito) {
        resolve("La operación fue exitosa");
      } else {
        reject("Hubo un error en la operación");
      }
    }, 2000);
});
  
promesa
    .then(function(resultado) {
      console.log(resultado); // "La operación fue exitosa"
    })
    .catch(function(error) {
      console.error(error);
    });

/*
resolve: Se llama cuando la operación es exitosa.
reject: Se llama cuando la operación falla.
then: Maneja el valor resultante cuando la promesa se resuelve.
catch: Maneja cualquier error que ocurra durante la ejecución de la promesa
*/

// Encadenamiento de Promesas:
// Las promesas permiten el encadenamiento, lo que facilita la ejecución secuencial de operaciones asincrónicas.
promesa
  .then(function(resultado) {
    console.log(resultado);
    return otraOperacionAsincronica();
  })
  .then(function(nuevoResultado) {
    console.log(nuevoResultado);
  })
  .catch(function(error) {
    console.error(error);
  });

// Uso de async y await para Manejar Operaciones Asincrónicas

/*
async: Declara que una función es asincrónica y automáticamente devuelve una promesa.
await: Pausa la ejecución de la función async hasta que la promesa se resuelva, luego devuelve el valor resultante.
*/

async function ejecutarOperacion() {
    try {
      let resultado = await nuevaPromesa();
      console.log(resultado);
    } catch (error) {
      console.error("Error:", error);
    }
}
  
function nuevaPromesa() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("Operación completada con éxito");
      }, 2000);
    });
}
  
ejecutarOperacion();

/*
await nuevaPromesa(): Espera a que nuevaPromesa se resuelva antes de continuar.
try...catch: Se utiliza para manejar errores de manera más limpia en código asincrónico.
*/

/*
Manejo de Errores en Operaciones Asincrónicas
Manejar errores en operaciones asincrónicas es crucial para garantizar que las fallas se manejen adecuadamente y no rompan la aplicación.
*/

// Promesas (.catch): Puedes manejar errores utilizando .catch.

promesa
  .then(resultado => {
    console.log(resultado);
  })
  .catch(error => {
    console.error("Error en la promesa:", error);
  });

// async/await (try...catch): Los bloques try...catch son la forma más 
// efectiva de manejar errores cuando se usan async y await.

async function manejarErrores() {
    try {
      let resultado = await promesaQueFalla();
      console.log(resultado);
    } catch (error) {
      console.error("Error capturado:", error);
    }
}
  
manejarErrores();
  

  