// todos los elementos deben cumplir una condicion para imprimir (true) o por lo contrario (false)
const carrito = [
  { nombre: 'ipad mini', precio: 300 },
  { nombre: 'ipad', precio: 400 },
  { nombre: 'airdops', precio: 100, descuento: true},
  { nombre: 'macbook pro', precio: 600 },
  { nombre: 'macbook air', precio: 500 }
]

const resultado = carrito.every(producto.precio < 1000)
console.log(resultado)