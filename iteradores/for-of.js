// permite iterar sobre arreglos
const pendientes = ['tarea', 'comer', 'proyecto', 'trabjar', 'estudiar javascrip']

const carrito = [
  { nombre: 'ipad mini', precio: 300 },
  { nombre: 'ipad', precio: 400 },
  { nombre: 'airdops', precio: 100, descuento: true},
  { nombre: 'macbook pro', precio: 600 },
  { nombre: 'macbook air', precio: 500 }
]

for( let pendiente of pendientes) {
  console.log(pendiente)
}

for( let producto of carrito) {
  console.log(producto.nombre)
}