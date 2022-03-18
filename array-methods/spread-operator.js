const meses = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio']

const carrito = [
  { nombre: 'ipad mini', precio: 300 },
  { nombre: 'ipad', precio: 400 },
  { nombre: 'airdops', precio: 100, descuento: true},
  { nombre: 'macbook pro', precio: 600 },
  { nombre: 'macbook air', precio: 500 }
]
// spread operator con arreglo de indices
const meses2 = [...meses, 'agosto']   // no modifica el arreglo original
console.log(meses2)

//spread operator con arreglo de objetos
const producto = {nombre: 'imac', precio: 100}
const carrito2 = [...carrito, producto]
console.log(carrito2)
