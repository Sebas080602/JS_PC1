// Obtener la fecha y hora actual
const fechaActual = new Date();

// Mostrar la fecha completa
console.log("Fecha y hora actual:", fechaActual.toString());

// Mostrar solo la fecha (sin la hora)
console.log("Solo la fecha:", fechaActual.toDateString());

// Mostrar solo la hora
console.log("Solo la hora:", fechaActual.toTimeString());

// Mostrar la fecha en formato ISO
console.log("Fecha en formato ISO:", fechaActual.toISOString());

// Mostrar la fecha en formato local (según la configuración regional del sistema)
console.log("Fecha en formato local:", fechaActual.toLocaleString());

// Sumar 10 días a la fecha actual
// const nuevaFecha = new Date(fechaActual);
// nuevaFecha.setDate(fechaActual.getDate() + 10);
const newDate = new Date(fechaActual);
newDate.setDate(fechaActual.getDate() + 10);

// Mostrar la nueva fecha (10 días después)
console.log("Fecha después de 10 días:", newDate.toDateString());
