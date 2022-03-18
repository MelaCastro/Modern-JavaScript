// .forEach (ideal para recorrer arreglos)

const pendientes = ['tarea', 'comer', 'proyecto', 'trabjar', 'estudiar javascrip']

pendientes.forEach((pendiente, indice) => {
  console.log(`${indice} : ${pendiente}`)
})

const carrito = [
  { nombre: 'ipad mini', precio: 300 },
  { nombre: 'ipad', precio: 400 },
  { nombre: 'airdops', precio: 100, descuento: true},
  { nombre: 'macbook pro', precio: 600 },
  { nombre: 'macbook air', precio: 500 }
]
carrito.forEach( producto => console.log(producto))

//.map crea un arreglo nuevo
const nuevoarreglo2 = carrito.map(producto => console.log(producto.nombre))

