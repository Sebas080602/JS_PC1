// Función tradicional para calcular el área de un rectángulo
function calcularAreaRectangulo(base, altura) {
    return base * altura;
  }
  
  // Función flecha para calcular el área de un rectángulo
  const calcularAreaRectanguloFlecha = (base, altura) => base * altura;
  
  // Función tradicional para devolver el nombre completo de una persona
  function obtenerNombreCompleto(primerNombre, segundoNombre) {
    return `${primerNombre} ${segundoNombre}`;
  }
  
  // Función flecha para devolver el nombre completo de una persona
  const obtenerNombreCompletoFlecha = (primerNombre, segundoNombre) => `${primerNombre} ${segundoNombre}`;
  
  // Ejemplos de uso
  console.log(calcularAreaRectangulo(5, 10)); // 50
  console.log(calcularAreaRectanguloFlecha(5, 10)); // 50
  console.log(obtenerNombreCompleto("Juan", "Pérez")); // "Juan Pérez"
  console.log(obtenerNombreCompletoFlecha("Juan", "Pérez")); // "Juan Pérez"
  