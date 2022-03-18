// encontrar la posicion de un array 

const meses = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio']

const carrito = [
  { nombre: 'ipad mini', precio: 300 },
  { nombre: 'ipad', precio: 400 },
  { nombre: 'airdops', precio: 100, descuento: true},
  { nombre: 'macbook pro', precio: 600 },
  { nombre: 'macbook air', precio: 500 }
]

meses.forEach((mes, i) => {                                 // manera manual
  if (mes === 'abril') {
    console.log(`encontrado en el indice ${i}`)
  }
})

const indice = meses.findIndex(mes => mes === 'abril')      // utilizando .findIndex
console.log(indice)

// encontrar la posicion de un arreglo de objetos (si se repite, solo encontrara el primero "100")
const indice2 = carrito.findIndex(producto => producto.precio === 100)
console.log(indice2)