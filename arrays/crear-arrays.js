// agrupar elementos del mismo tipo

const numeros = [10,20,30,40,50,[1,2,3]];

console.log(numeros)
console.table(numeros)
//acceder al arreglo
console.log(numeros[2])
console.log(numeros[0])
console.log(numeros[5])
console.log(numeros[5][1])

//recorrer un array

const meses = ['enero','febrero','marzo']
console.table(meses)
// cuanto mide el arreglo
console.log(meses.length)

for ( let i = 0; i < meses.length; i++) {
  // muestra del 0 al 5
  console.log(i);
  // muestra los meses de enero a junio
  console.log(meses[i]);
}

// reasignar un valor
meses[0] = 'diciembre';
// agregar nuevo elemento
meses[3] = 'ultimo mes';
// .push agregar al final de un arreglo
meses.push('abril')
// .unshift agregar al inicio de un arreglo
meses.unshift('octubre')

console.table(meses)

// agregar elementos que se encuentran en objetos
const carrito = [];

const producto = {
  nombre: 'iphone',
  precio: 300
}
const producto2 = {
  nombre: 'ipad',
  precio: 500
}
const producto3 = {
  nombre: 'macbook pro',
  precio: 1000
}
const producto4 = {
  nombre: 'airdops',
  precio: 100
}
carrito.push(producto, producto2, producto4)
carrito.unshift(producto3)

// eliminar elementos de un arreglo

//.pop ultimo elemento
carrito.pop()
//.shirft primer elemento
carrito.shift()
// elementos del medio (en rango tambien)
carrito.splice(1,1);
carrito.splice(0,2);

console.table(carrito)

//destructuring en arrays
const numbers = [10,20,30,40,50] 

//muestra el primer valor
const [primero] = numbers
//muestra el tercer valor sin requerir los demas
const [ , , third] = numbers
// un grupo de valores
const [ , , ...five] = numbers

console.log(five)