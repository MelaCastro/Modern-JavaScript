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
// forma declarativa no modifica el array
let resultado;
resultado = [...carrito, producto];
resultado = [...resultado, producto2];
//al inicio
resultado = [producto3, ...resultado];

console.table(resultado)