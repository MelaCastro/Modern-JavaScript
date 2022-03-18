// mandar a llamar funciones

inicicarApp();

function inicicarApp() {
  console.log('iniciando app..')

  segundaFuncion()
}

function segundaFuncion() {
  console.log('desde la segunda funcion')

  usuarioAutenticado('pablo')
}

function usuarioAutenticado(usuario) {
  console.log('autenticando usuario.. espere..')
  console.log(`usuario autenticado exitosamente: ${usuario}`)
}

// funciones que retornan valores
// no 
function sumar (a, b) {
  console.log( a + b)
} 
sumar(2, 5)
//si
function restar (c, d) {
  return c - d ;
} 
const result = restar(5, 2)
console.log(result)

// ejemplo avanzado
let total = 0;
function agregarCarrito(precio) {
  return total += precio          // 1++ incrementa de uno en uno += 3 incrementa de tres en tres 
}
function calcularImpuesto(total) {
  return total * 1.15
}
total = agregarCarrito(300)
total = agregarCarrito(100)
total = agregarCarrito(600)

const totalPagar = calcularImpuesto(total)

console.log(`el total a pagar es de ${totalPagar}`)
console.log(total)