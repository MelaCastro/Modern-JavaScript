
// congelar un objeto para que no se pueda modificar (modo estricto)
"use strict";

const product = {
  name: "macbook",
  price: 300,
  avaliable: true
}

Object.freeze(product)

// product.avaliable = false   .freeze no permite modificar, agregar y eliminar
// product.image = 'image.jpg'

//.isFrozen saber si un objeto esta congelado
console.log(Object.isFrozen(product))

// .seal sellar un objeto , no se puede agregar ni eliminar pero si modificar
Object.seal(product)
// .isSealed saber si un objeto esta sellado
console.log(Object.isSealed(product))


// unir dos objetos
const weight = {
  height : '20px',
  width : '10px'
}
const table = {
  color : 'blue',
  avaliable : true
}

const result = Object.assign(weight, table)
console.log(result)
// forma alternativa Spread Operator o Rest Operator
const result2 = { ...weight, ...table }
console.log(result2)

// .keys retornar las llaves de un objeto
const producto =  {
  nommbre: 'ipad',
  precio: 200,
  disponible: true
}
console.log(Object.keys(producto))

//.values retornar los valores de un objeto 
console.log(Object.values(producto))

// .entries retorna todo en pares
console.log(Object.entries(producto))



