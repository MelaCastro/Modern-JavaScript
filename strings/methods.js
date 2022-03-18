//.length imprimir cantidad de letras 
const product = "macbook air"

console.log(product)
console.log(product.length)


// replace, slice, subtring
const object = "ipad 10 pulgadas"
console.log(object);
//.replace paraa remplazar
console.log(object.replace("pulgadas", '"'))
console.log(object.replace("ipad", "macbook"))

//.slice para cortar
console.log(object.slice(0,10))
console.log(object.slice(8))
//alternativa a slice
console.log(object.substring(0,10))


// repeat, split
//.repeat permite repetir una cadena de texto
const text = "off sale".repeat(3);

console.log(text);
console.log(`${object} ${text}`);

//.split dividir un string
const exercise = "modern javaScript";
console.log(exercise.split(" "))

const hobbies = "read, cook, lettering, programing, talk"
console.log(hobbies.split(", "))

//.toUpperCase convertir todo a mayuscula
const letters = "macbook pro"
console.log(letters.toUpperCase());
// variante a minuscula
console.log(letters.toLowerCase());

// numeros a string
const number = "200"
console.log(number);
console.log(number.toString());


