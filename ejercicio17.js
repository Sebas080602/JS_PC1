const users = [
    { id: 1, name: "Alice", age: 28, isActive: true },
    { id: 2, name: "Bob", age: 35, isActive: false },
    { id: 3, name: "Charlie", age: 22, isActive: true },
    { id: 4, name: "David", age: 40, isActive: false },
    { id: 5, name: "Eve", age: 30, isActive: true },
  ];

// Pipeline de procesamiento de datos
const processedData = users
  .filter(({ isActive }) => isActive) // Filtrar usuarios activos
  .map(({ name, age }) => ({ name, ageIn5Years: age + 5 })) // Mapear para mostrar el nombre y la edad en 5 años
  .sort((a, b) => a.ageIn5Years - b.ageIn5Years) // Ordenar por la edad en 5 años
  .reduce((acc, user) => {
    acc.names.push(user.name);
    acc.totalAgeIn5Years += user.ageIn5Years;
    return acc;
  }, { names: [], totalAgeIn5Years: 0 }); // Reducir para obtener una lista de nombres y la suma total de la edad en 5 años

console.log(processedData);
