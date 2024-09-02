/*
Sintaxis básica:
switch (expresión) {
  case valor1:
    // Código a ejecutar si expresión === valor1
    break;
  case valor2:
    // Código a ejecutar si expresión === valor2
    break;
  // Puedes tener tantos casos como necesites
  default:
    // Código a ejecutar si ningún caso coincide
}
*/

let dia = 3;

switch (dia) {
  case 1:
    console.log('Lunes');
    break;
  case 2:
    console.log('Martes');
    break;
  case 3:
    console.log('Miércoles');
    break;
  default:
    console.log('Día no válido');
}
