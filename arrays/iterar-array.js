const carrito = [
 { nombre: 'ipad mini', precio: 300 },
 { nombre: 'ipad', precio: 400 },
 { nombre: 'airdops', precio: 100 },
 { nombre: 'macbook pro', precio: 600 },
 { nombre: 'macbook air', precio: 500 }
]

for(let i = 0; i < carrito.length; i++ ) {
  console.log(carrito[i])
}
// acceder al nombre
for(let i = 0; i < carrito.length; i++ ) {
  console.log(carrito[i].nombre)
}
for(let i = 0; i < carrito.length; i++ ) {
  console.log(`${carrito[i].nombre} - precio : ${carrito[i].precio}`)
}

// ForEach
// producto es cada uno de los valores de carrito
carrito.forEach(function(producto){
  console.log(`${producto.nombre} - precio : ${producto.precio}`)
})

// .map crea un nuevo arreglo
const nuevoArreglo = carrito.map(function(producto){
  return `${producto.nombre} - precio : ${producto.precio}`
})

const nuevoArreglo2 = carrito.forEach(function(producto){
  return `${producto.nombre} - precio : ${producto.precio}`
})

console.log(nuevoArreglo)
console.log(nuevoArreglo2)