//Challenge 1

// Diferencia entre Arrow Functions y Regular Functions

// regularFunction
function regularFunction(a, b) {
    return a + b;
}

// arrowFunction
const arrowFunction = (a, b) => a + b;

//Challenge 2

// Regular Function
function isEvenOrOddRegular(number) {
    if (number % 2 === 0) {
        return `${number} es par`;
    } else {
        return `${number} es impar`;
    }
}

// Arrow Function
const isEvenOrOddArrow = (number) => {
    if (number % 2 === 0) {
        return `${number} es par`;
    } else {
        return `${number} es impar`;
    }
};

// Mensaje en la terminar de las funciones
console.log(isEvenOrOddRegular(10)); // 10 es par
console.log(isEvenOrOddRegular(7));  // 7 es impar

console.log(isEvenOrOddArrow(4));    // 4 es par
console.log(isEvenOrOddArrow(3));    // 3 es impar
