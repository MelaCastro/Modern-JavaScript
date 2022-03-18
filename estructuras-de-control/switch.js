// switch case

const metodoPago = 'cheque';

switch (metodoPago) {
  case 'efectivo':
    console.log(`pagaste con ${metodoPago}`)
    pagar()
    break
  case 'cheque':
    console.log(`pagaste con ${metodoPago}`)
    pagar()
    break
  case 'tarjeta':
    console.log(`pagaste con ${metodoPago}`)
    pagar()
    break
  default:
    console.log('aun no ha seleccionado un metodo de pago o metodo de pago no soportado')
    break
}
function pagar(){
  console.log('pagando...')
}