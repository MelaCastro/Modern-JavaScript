// funcion reductora, tomar una gran cantidad de datos unirlos y entregar un resultado
const carrito = [
  { nombre: 'ipad mini', precio: 300 },
  { nombre: 'ipad', precio: 400 },
  { nombre: 'airdops', precio: 100, descuento: true},
  { nombre: 'macbook pro', precio: 600 },
  { nombre: 'macbook air', precio: 500 }
]

let total = 0;                                                                      // forma manual
carrito.forEach(producto => total += producto.precio)
console.log(`total a pagar : ${total}`)

let resultado = carrito.reduce ((total,producto) => total + producto.precio, 0)     // con .reduce
console.log(`total a pagar : ${resultado}`)