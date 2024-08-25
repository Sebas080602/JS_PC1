/*
Clases y Herencia en JavaScript (class, extends)
En ES6, se introdujo la sintaxis de clases en JavaScript, lo que hizo que trabajar con la POO fuera más intuitivo.

Clases: Una clase es un plano para crear objetos con propiedades y métodos predefinidos.
Herencia: Permite crear una nueva clase basada en una clase existente, heredando todas sus propiedades y métodos.
*/

class Animal {
    constructor(nombre) {
      this.nombre = nombre;
    }
  
    hacerSonido() {
      console.log(`${this.nombre} hace un sonido.`);
    }
}
  
  class Perro extends Animal {
    constructor(nombre, raza) {
      super(nombre); // Llama al constructor de la clase base
      this.raza = raza;
    }
  
    hacerSonido() {
      console.log(`${this.nombre} ladra.`);
    }
}
  
let miPerro = new Perro("Firulais", "Labrador");
miPerro.hacerSonido(); // "Firulais ladra."

/*
class Animal: Define una clase Animal con un constructor y un método.
extends: La clase Perro extiende a Animal, lo que significa que hereda sus propiedades y métodos.
super(): Llama al constructor de la clase padre (Animal) desde la clase hija (Perro).
Cuando se utiliza this dentro de un constructor o una clase, this se refiere a la instancia del objeto que se está creando.
*/

// Instancia
// Las instancias de una clase en JavaScript son objetos creados a partir de esa clase. Cuando defines una clase, básicamente estás creando un plano o plantilla que describe cómo deben ser los objetos que se crearán a partir de ella. 
// Cada objeto creado usando esa clase es una instancia de la clase.

/*
Métodos y Propiedades Estáticas (static)
Los métodos y propiedades estáticas son aquellos que pertenecen a la clase en sí misma, en lugar de a las instancias de la clase.
*/

class Calculadora {
    static sumar(a, b) {
      return a + b;
    }
  
    static PI = 3.14159;
}
  
console.log(Calculadora.sumar(5, 3)); // 8
console.log(Calculadora.PI); // 3.14159

// static: La palabra clave static define métodos y propiedades que se 
// pueden acceder directamente desde la clase sin necesidad de instanciarla.

/*
constructor(): Inicializa las propiedades del objeto cuando se crea una nueva instancia.
arrancar(): Es un método que pertenece a cada instancia.
*/

class Coche {
    constructor(marca, modelo, año) {
      this.marca = marca;
      this.modelo = modelo;
      this.año = año;
    }
  
    arrancar() {
      console.log(`${this.marca} ${this.modelo} ha arrancado.`);
    }
}
  
let miCoche = new Coche("Toyota", "Corolla", 2020);
miCoche.arrancar(); // "Toyota Corolla ha arrancado."

// this y cómo Funciona Dentro de Objetos y Clases
// El contexto this en JavaScript 
// hace referencia al objeto desde el cual se llama una función o método.

class Persona {
    constructor(nombre) {
      this.nombre = nombre;
    }
  
    saludar() {
      console.log(`Hola, me llamo ${this.nombre}`);
    }
}
  
let persona1 = new Persona("Sebastián");
persona1.saludar(); // "Hola, me llamo Sebastián"

/*
Prototipos y Herencia Basada en Prototipos
Cada objeto en JavaScript tiene un enlace interno a otro objeto llamado su prototipo. 
Un objeto hereda las propiedades y métodos de su prototipo.
*/

function Animali(nombre) {
    this.nombre = nombre;
}
  
Animali.prototype.hacerSonido = function() {
    console.log(`${this.nombre} hace un sonido.`);
};
  
let gato = new Animali("Whiskers");
gato.hacerSonido(); // "Whiskers hace un sonido."
  

// Animal.prototype: Es el prototipo del objeto gato, y define un método hacerSonido().

/*
Mixins (Mezcla de Funcionalidades en Objetos)
Los mixins son una forma de agregar funcionalidad a clases o objetos sin utilizar herencia. Se pueden usar para combinar múltiples objetos o clases, lo que permite compartir funcionalidades.
*/

let mezclarFuncionalidad = {
    volar() {
      console.log(`${this.nombre} está volando.`);
    },
    nadar() {
      console.log(`${this.nombre} está nadando.`);
    }
  };
  
  class Pato {
    constructor(nombre) {
      this.nombre = nombre;
    }
  }
  
Object.assign(Pato.prototype, mezclarFuncionalidad);
  
let pato = new Pato("Donald");
pato.volar(); // "Donald está volando."
pato.nadar(); // "Donald está nadando."


  


