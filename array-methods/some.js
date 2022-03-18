const meses = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio']

const carrito = [
  { nombre: 'ipad mini', precio: 300 },
  { nombre: 'ipad', precio: 400 },
  { nombre: 'airdops', precio: 100, descuento: true},
  { nombre: 'macbook pro', precio: 600 },
  { nombre: 'macbook air', precio: 500 }
]

// .includes comprobar si un valor existe en un arreglo de un solo indice o un valor basado en un indice

meses.forEach(mes =>{                           //manera manual
  if(mes === 'enero') {
    console.log('enero si existe')
  }
})
const resultado = meses.includes('enero')       // array methods
console.log(resultado)

// .some comprobar si un valor existe en un arreglo de objetos (tambien funciona con arreglos de un solo indice)

const existe = carrito.some(producto => {
  return producto.nombre === 'ipad'
})
console.log(existe)

// en un arreglo tradicional con .some
const existe2 = meses.some(mes => mes === 'febrero')
console.log(existe2)