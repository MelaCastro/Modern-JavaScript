// operador && ( revisa que se cumplan dos condiciones dentro de un if)
const usuario = true
const puedePagar = true

if(usuario && puedePagar) {
  console.log('si puedes comprar')
} else if (!puedePagar && !usuario){
  console.log('no, no puedes comprar')
} else if(!usuario){
  console.log('inicia sesion o crea una cuenta')
} else if(!puedePagar){
  console.log('fondos insuficientes')
}

//operador OR (revisa que se cumpla al menos una condicion)
const efectivo = 300
const credito = 1000
const disponible = efectivo + credito
const totalAPagar = 600

if(efectivo > totalAPagar || credito < totalAPagar || disponible > totalAPagar ) {
  console.log('si puedes pagar')
} else {
  console.log('fondos insuficientes')
}

// operador ternario

const autenticado = true
const puedepagar = true

console.log( autenticado ? 'si esta autenticado' : 'no, no esta autenticado' )
console.log(autenticado && puedepagar ? 'si puede pagar' : 'no, no esta autenticado ')
console.log(autenticado || puedepagar ? 'si puede pagar' : 'no, no esta autenticado')
