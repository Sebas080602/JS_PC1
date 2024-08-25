// utils.js - Módulo de utilidades para manipulación de objetos anidados

// Función para fusionar objetos anidados profundamente
function deepMerge(target, source) {
    if (typeof target !== 'object' || typeof source !== 'object') {
      return source;
    }
  
    for (const key in source) {
      if (source[key] instanceof Object && key in target) {
        Object.assign(source[key], deepMerge(target[key], source[key]));
      }
    }
  
    return { ...target, ...source };
  }
  
  // Función para crear una copia profunda de un objeto
  function deepClone(obj) {
    if (obj === null || typeof obj !== 'object') {
      return obj;
    }
  
    if (Array.isArray(obj)) {
      return obj.map(item => deepClone(item));
    }
  
    const clonedObj = {};
    for (const key in obj) {
      clonedObj[key] = deepClone(obj[key]);
    }
  
    return clonedObj;
  }
  
  // Función para acceder a propiedades de manera segura utilizando encadenamiento opcional
  function safeAccess(obj, path) {
    return path.split('.').reduce((acc, part) => acc?.[part], obj);
  }
  
  // Prueba del Módulo con Objetos Complejos
  
  // Objeto complejo para pruebas
  const obj1 = {
    name: 'Sebastián',
    details: {
      age: 22,
      address: {
        city: 'Lima',
        country: 'Perú'
      },
      hobbies: ['programming', 'reading']
    }
  };
  
  const obj2 = {
    details: {
      address: {
        city: 'Cusco',
        zipcode: '08002'
      },
      hobbies: ['hiking'],
      profession: 'Engineer'
    },
    extra: {
      active: true
    }
  };
  
  // Fusionar objetos profundamente
  const mergedObj = deepMerge(obj1, obj2);
  console.log('Objeto fusionado:', mergedObj);
  
  // Crear una copia profunda
  const clonedObj = deepClone(mergedObj);
  console.log('Copia profunda del objeto:', clonedObj);
  
  // Modificar la copia profunda para verificar que no afecta al original
  clonedObj.details.address.city = 'Arequipa';
  console.log('Original después de modificar la copia:', mergedObj);
  console.log('Copia después de modificación:', clonedObj);
  
  // Acceso seguro a propiedades anidadas
  const city = safeAccess(mergedObj, 'details.address.city');
  console.log('Ciudad:', city);
  
  const nonExistent = safeAccess(mergedObj, 'details.address.zipcode');
  console.log('Código postal:', nonExistent); // Debería devolver '08002'
  
  const nonExistentDeep = safeAccess(mergedObj, 'extra.nonexistent.property');
  console.log('Propiedad no existente:', nonExistentDeep); // Debería devolver 'undefined'
  