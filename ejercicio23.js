// Ejemplo de código con errores

function calcularAreaRectangulo(base, altura) {
    area = base * altura; // Error: variable 'area' no definida
    return area;
  }
  
  function saludar() {
    const nombre = "Sebastián";
    console.log("Hola, " + nombre); // Advertencia: Uso de concatenación en lugar de template literals
  }
  
  function calcularPromedio(numeros) {
    let suma = 0;
    for (i = 0; i < numeros.length; i++) { // Error: variable 'i' no definida
      suma += numeros[i];
    }
  
    const promedio = suma / numeros.length;
    return promedio
  }
  
  function convertirAArray(obj) {
    let arr = [];
    for (let key in obj) { // Advertencia: Uso de for...in en lugar de Object.keys()
      arr.push(obj[key]);
    }
    return arr
  }
  
  function encontrarMaximo(numeros) {
    let maximo = numeros[0];
    for (let i = 1; i < numeros.length; i++) {
      if (numeros[i] > maximo) {
        maximo = numeros[i];
      }
    }
    console.log("Máximo: ", maximo);
    return maximo
  }
  
  const numeros = [3, 5, 7, 2, 8, 10];
  
  const areaRectangulo = calcularAreaRectangulo(5, 10);
  console.log("Área del rectángulo:", areaRectangulo);
  
  saludar();
  
  const promedio = calcularPromedio(numeros);
  console.log("Promedio:", promedio);
  
  const obj = { a: 1, b: 2, c: 3 };
  const arr = convertirAArray(obj);
  console.log("Array convertido:", arr);
  
  const maximo = encontrarMaximo(numeros);
  