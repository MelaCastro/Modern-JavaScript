// crea un nuevo arrelgo basado en la condicion que se este revisando
const carrito = [
  { nombre: 'ipad mini', precio: 300 },
  { nombre: 'ipad', precio: 400 },
  { nombre: 'airdops', precio: 100, descuento: true},
  { nombre: 'macbook pro', precio: 600 },
  { nombre: 'macbook air', precio: 500 }
]

let resultado
resultado = carrito.filter(producto => producto.precio > 400)         // que muestre los que son mayores a 400
resultado = carrito.filter(producto => producto.precio < 600)         // que muestre los que son menores a 600
resultado = carrito.filter(producto => producto.nombre !== 'ipad')    // quitar un elemento (todos menos ipad)
resultado = carrito.filter(producto => producto.nombre === 'ipad')    // mostras (solo mostrar ipad)

console.log(resultado)