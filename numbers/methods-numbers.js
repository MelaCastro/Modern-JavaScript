const numero1 = "20";
const numero2 = "20.2";
const numero3 = "dos";
const numero4 = 20;

//convertir a entero
console.log(Number.parseInt(numero1));
//convertir a flotante
console.log(Number.parseFloat(numero2));
// revisar si un numero es entero o no
console.log(Number.isInteger(numero4))

// operadores
const number1 = 20;
const number2 = "20";
const number3 = 30;

// operador mayor a
console.log(number1 > number3);
console.log(number3 > number2);
// menor que
console.log(number1 < number3);
// comparar valores (no es estricto)
console.log(number1 == number3);
console.log(number1 == number2);
// comparar valores (es estricto)
console.log(number1 === number2);
console.log(number1 === parseInt(number2));
console.log(typeof number1);
console.log(typeof number2);

//comparar si son diferentes
const password1 = "admin";
const password2 = "Admin";

console.log(password1 != password2);
console.log(number1 != number2);
// diferentes (estricto)
console.log(number1 !== number2);
console.log(number1 !== parseInt(number2));

// undefined
let number;

console.log(number);
console.log(typeof number);

//null
let number10 = null;
console.log(number10);
console.log(typeof number10);




