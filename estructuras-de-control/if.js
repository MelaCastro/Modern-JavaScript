const puntaje = 1000

// si tiene una sola linea no son necesarias las llaves pero se las deje xD

if (puntaje == 1000) {              // == igual a 
  console.log('si es igual..')
} else {
  console.log('no es igual..')
}

const puntaje2 = 2000

if (puntaje2 != 1000) {                  // != si es diferente a... !== si es diferente.. estricto
  console.log('si, es diferente')
}

const puntaje3 = 2000

if (puntaje3 === '2000') {               // === igual a , operador estricto 
  console.log('si es igual')
} else {
  console.log('no es igual')
}

// operador mayor que y menor que
const dinero = 500
const totalAPagar = 300

if(dinero >= totalAPagar) {              // >mayor que    <menor que   >=mayor o igual    <=meno o igual
  console.log('si podemos pagar')
} else {
  console.log('fondos insuficientes')
}

// else if
const deuda = 200
const pago = 300
const tarjeta = true

if(deuda >= pago) {                      // >mayor que    <menor que   >=mayor o igual    <=meno o igual
  console.log('si podemos pagar')
} else if (tarjeta){
  console.log('si puedo pagar porque tengo la tarjeta')
} else {
  console.log('fondos insuficientes')
}

// detener la ejecucion de un if con una funcion
const puntaje4 = 450

function revisarPuntaje(){
  if (puntaje4 > 400){
    console.log('Excelente!!')
    return
  }
  if(puntaje4 > 300) {
    console.log('buen puntaje.. felicidades')
    return
  }
}
revisarPuntaje()