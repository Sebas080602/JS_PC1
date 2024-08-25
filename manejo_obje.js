/*
Un objeto en JavaScript es una estructura de datos que agrupa propiedades (datos) y métodos (funcionalidades) bajo un mismo nombre. 
Creación de Objetos
La forma más común de crear un objeto en JavaScript es utilizando la notación de literal de objeto. Esto se realiza encerrando pares de clave-valor entre llaves {}.
*/

let persona = {
    nombre: "Sebastián",
    edad: 22,
    ciudad: "Lima",
    saludar: function() {
      console.log("Hola, me llamo " + this.nombre);
    }
  };

// Acceso y Modificación de Propiedades

/*
Puedes acceder y modificar las propiedades de un objeto utilizando el punto (.) o los corchetes ([]).
*/

// Acceso a propiedades
console.log(persona.nombre); // "Sebastián"
console.log(persona["edad"]); // 22

// Modificación de propiedades
persona.edad = 23;
persona["ciudad"] = "Arequipa";

// Agregar nuevas propiedades
persona.profesion = "Ingeniero";
persona["pais"] = "Perú";

console.log(persona);

/*
Métodos para Objetos
JavaScript proporciona varios métodos útiles para trabajar con las propiedades de los objetos.
*/

// Object.keys(): Devuelve un array con los nombres de las propiedades (claves) del objeto.
let claves = Object.keys(persona);
console.log(claves); // ["nombre", "edad", "ciudad", "saludar", "profesion", "pais"]

// Object.values(): Devuelve un array con los valores de las propiedades del objeto.
let valores = Object.values(persona);
console.log(valores); // ["Sebastián", 23, "Arequipa", function(), "Ingeniero", "Perú"]

// Object.entries(): Devuelve un array de arrays, donde cada sub-array es un par [clave, valor].
let entradas = Object.entries(persona);
console.log(entradas);
// [["nombre", "Sebastián"], ["edad", 23], ["ciudad", "Arequipa"], ["saludar", function()], ["profesion", "Ingeniero"], ["pais", "Perú"]]

/*
Iteración sobre Propiedades de Objetos
Existen varias formas de iterar sobre las propiedades de un objeto.
*/

// for...in: Itera sobre las claves del objeto.
for (let clave in persona) {
    console.log(clave + ": " + persona[clave]);
}

// Object.keys(): Itera sobre las claves utilizando Object.keys().
Object.keys(persona).forEach(function(clave) {
    console.log(clave + ": " + persona[clave]);
  });

// Object.values(): Itera sobre los valores utilizando Object.values().
Object.values(persona).forEach(function(valor) {
    console.log(valor);
  });

/*
. Encadenamiento Opcional (?.)
El encadenamiento opcional es una característica que permite acceder a propiedades de objetos anidados sin necesidad de verificar manualmente si cada referencia en la cadena es nula o indefinida.
*/

let empresa = {
    nombre: "Tech Corp",
    direccion: {
      ciudad: "Lima",
      pais: "Perú"
    }
  };
  
  // Sin encadenamiento opcional
  console.log(empresa.direccion.ciudad); // "Lima"
  
  // Con encadenamiento opcional
  console.log(empresa.direccion?.ciudad); // "Lima"
  console.log(empresa.contacto?.telefono); // undefined (en lugar de un error)

/*
Desestructuración de Objetos
La desestructuración de objetos te permite extraer propiedades de un objeto y asignarlas a variables individuales de manera concisa.
*/

let {nombre, edad, ciudad} = persona;
console.log(nombre);
console.log(edad);
console.log(ciudad);

// Desestructuración con alias
let { nombre: nombreCompleto, edad: años } = persona;
console.log(nombreCompleto); // "Sebastián"
console.log(años);           // 23

  
