// Creación del objeto estudiante
const estudiante = {
    nombre: "Juan Pérez",
    edad: 21,
    cursos: ["Matemáticas", "Física", "Programación"]
  };
  
console.log("Objeto inicial:", estudiante);
  
  // Añadir una nueva propiedad (promedio)
estudiante.promedio = 18.5;
  
console.log("Después de añadir 'promedio':", estudiante);
  
  // Modificar la propiedad 'edad'
estudiante.edad = 22;
  
console.log("Después de modificar 'edad':", estudiante);
  
  // Eliminar la propiedad 'cursos'
delete estudiante.cursos;
  
console.log("Después de eliminar 'cursos':", estudiante);
  
  // Iterar sobre las propiedades del objeto
console.log("Iteración sobre las propiedades del objeto:");
for (const propiedad in estudiante) {
    if (estudiante.hasOwnProperty(propiedad)) {
      console.log(`${propiedad}: ${estudiante[propiedad]}`);
    }
}
  