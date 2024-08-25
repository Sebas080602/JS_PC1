// Clase Persona
class Persona {
    constructor(nombre, edad) {
      this.nombre = nombre;
      this.edad = edad;
    }
  
    // Método para saludar
    saludar() {
      console.log(`Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años.`);
    }
  }
  
  // Clase Estudiante que hereda de Persona
  class Estudiante extends Persona {
    constructor(nombre, edad, curso) {
      super(nombre, edad); // Llama al constructor de la clase padre (Persona)
      this.curso = curso;
    }
  
    // Método para mostrar el curso del estudiante
    mostrarCurso() {
      console.log(`Estoy cursando: ${this.curso}.`);
    }
  }
  
  // Ejemplo de uso
  const estudiante = new Estudiante('Sebastián', 22, 'Ingeniería Informática');
  estudiante.saludar(); // "Hola, mi nombre es Sebastián y tengo 22 años."
  estudiante.mostrarCurso(); // "Estoy cursando: Ingeniería Informática."
  