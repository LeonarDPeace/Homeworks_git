// Crear un array inicial
let pruebaArray = [1, 2, 3, 4, 5];

// push() - Añadir un elemento al final
pruebaArray.push(6);
console.log("push():", pruebaArray); // [1, 2, 3, 4, 5, 6]

// pop() - Eliminar el último elemento
pruebaArray.pop();
console.log("pop():", pruebaArray); // [1, 2, 3, 4, 5]

// shift() - Eliminar el primer elemento
pruebaArray.shift();
console.log("shift():", pruebaArray); // [2, 3, 4, 5]

// unshift() - Añadir un elemento al inicio
pruebaArray.unshift(1);
console.log("unshift():", pruebaArray); // [1, 2, 3, 4, 5]

// concat() - Combinar dos arrays
let newArray = pruebaArray.concat([6, 7, 8]);
console.log("concat():", newArray); // [1, 2, 3, 4, 5, 6, 7, 8]

// slice() - Obtener una parte del array
let slicedArray = pruebaArray.slice(1, 3);
console.log("slice():", slicedArray); // [2, 3]

// splice() - Eliminar y añadir elementos
pruebaArray.splice(2, 1, 10); // Elimina 1 elemento en la posición 2 y añade 10
console.log("splice():", pruebaArray); // [1, 2, 10, 4, 5]

// map() - Crear un nuevo array aplicando una función
let mappedArray = pruebaArray.map(x => x * 2);
console.log("map():", mappedArray); // [2, 4, 20, 8, 10]

// filter() - Filtrar elementos
let filteredArray = pruebaArray.filter(x => x > 2);
console.log("filter():", filteredArray); // [10, 4, 5]

// reduce() - Reducir el array a un único valor
let reducedValue = pruebaArray.reduce((acc, curr) => acc + curr, 0);
console.log("reduce():", reducedValue); // 22

// forEach() - Ejecutar una función en cada elemento
pruebaArray.forEach(x => console.log("forEach():", x));

// find() - Encontrar el primer elemento que cumpla una condición
let foundElement = pruebaArray.find(x => x > 3);
console.log("find():", foundElement); // 10

// findIndex() - Encontrar el índice del primer elemento que cumpla una condición
let foundIndex = pruebaArray.findIndex(x => x > 3);
console.log("findIndex():", foundIndex); // 2

// some() - Comprobar si al menos un elemento cumple una condición
let hasSome = pruebaArray.some(x => x > 10);
console.log("some():", hasSome); // true

// every() - Comprobar si todos los elementos cumplen una condición
let allGreaterThanZero = pruebaArray.every(x => x > 0);
console.log("every():", allGreaterThanZero); // true

// includes() - Comprobar si el array incluye un elemento
let includesFive = pruebaArray.includes(5);
console.log("includes():", includesFive); // true

// indexOf() - Encontrar el índice de un elemento
let indexOfFour = pruebaArray.indexOf(4);
console.log("indexOf():", indexOfFour); // 3

// join() - Convertir el array en una cadena
let joinedArray = pruebaArray.join(", ");
console.log("join():", joinedArray); // "1, 2, 10, 4, 5"

// reverse() - Invertir el array
let reversedArray = pruebaArray.reverse();
console.log("reverse():", reversedArray); // [5, 4, 10, 2, 1]

// sort() - Ordenar el array
let sortedArray = pruebaArray.sort((a, b) => a - b);
console.log("sort():", sortedArray); // [1, 2, 4, 5, 10]