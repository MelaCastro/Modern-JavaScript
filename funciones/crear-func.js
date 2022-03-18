// declaracion de funcion (Funtion Declaration)
function sumar() {
  console.log(2 + 2)
}
// mandar a llamar la funcion
sumar();

// expresion de funcion (Function Espression)
const sumar2 = function() {
  console.log(3 + 3)
}
sumar2();

// funciones nativas
// alert('hubo un error..')
// prompt('cual es tu edad??')
console.log ( parseInt('20'))

// diferencia entre funciones y metodos
const numero1 = 20;
const numero2 = "20";

console.log(parseInt(numero2) ); // funcion
console.log(numero1.toString() ) // metodo

// parametros y argumentos
function resta(a, b) { // a y b son parametros de funcion
  console.log(a - b)
}

resta(4, 3); // 3 y 4 son argumentos
resta(239, 50);

function saludar(nombre, apellido){
  console.log(`hola ${nombre} ${apellido}`);
} 
saludar('melannie', 'castro')

// parametros por default
function saludar(nombre = 'anonimo', apellido = ''){
  console.log(`hola ${nombre} ${apellido}`);
} 
saludar('melannie')