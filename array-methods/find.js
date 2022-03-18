
const carrito = [
  { nombre: 'ipad mini', precio: 300 },
  { nombre: 'ipad', precio: 400 },
  { nombre: 'airdops', precio: 100, descuento: true},
  { nombre: 'macbook pro', precio: 600 },
  { nombre: 'macbook air', precio: 500 }
]

let resultado = ''                            //manera manual
carrito.forEach((producto, index) => {
  if(producto.nombre === 'ipad mini') {
    resultado = carrito[index]
  }
})
console.log(resultado)

// .find solo retorna el primer elemento que cumpla con la condicion
const resultado2 = carrito.find( producto => producto.nombre == 'ipad mini') 
console.log(resultado2)