// la primera parte (let i = 0;) es el inicializador donde empieza a contar o repetir la segunda parte 
// es la condicion que se revisa (i < 10) la tercera parte (i++) se conoce como el incremento

// (i += 2) incrementa de dos en dos
for ( let i = 0; i < 10; i++ ) {         
  console.log(`Numero: ${i}`)                                       
}

// en el for loop como se identifica los numeros pares y nones
for(let i = 1; i <= 20; i++) {
  if(i % 2 === 0) {
    console.log(`El numero ${i} es PAR`)
  } else {
    console.log(`El numero ${i} es IMPAR`)
  }
}

// for looop que se ejecute las veces que hay elementos en el carrito
const carrito = [
  { nombre: 'ipad mini', precio: 300 },
  { nombre: 'ipad', precio: 400 },
  { nombre: 'airdops', precio: 100, descuento: true},
  { nombre: 'macbook pro', precio: 600 },
  { nombre: 'macbook air', precio: 500 }
]
console.log(carrito.length)

for (let i = 0; i < carrito.length; i++){
  console.log(carrito[i].nombre)
}
// uno de los elemntos tiene descuento
for (let i = 0; i < carrito.length; i++ ) {
  if (carrito[i].descuento) {
    console.log(`El articulo ${carrito[i].nombre} tiene descuento`)
    continue;
  }  
  console.log(carrito[i].nombre)
}

// break corta la ejecucion de un for loop
for ( let i = 0; i < 10; i++ ) { 
  if(i === 5){
    console.log(`este es el 5`)
    break;
  }
  
  console.log(`Numero: ${i}`)                                       
}

// continue permite interceptar un elemento, identificarlo y continuar la ejecucion
for ( let i = 0; i < 10; i++ ) { 
  if(i === 5){
    console.log(`CINCO`)
    continue;
  }
  
  console.log(`Numero: ${i}`)                                       
}