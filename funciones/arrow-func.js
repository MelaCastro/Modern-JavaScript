const aprediendo = function() {
  console.log('aprendiendo javaScript')
}

// arrow otra forma de declarar funciones ES6
const aprediendo2 = () => 'aprendiendo javaScript'               // cuando se tiene una funcion con una 
                                                                 //sola linea, las llaves ya no son necesarias y 
console.log(aprediendo2())                                       //tambien se da por implicito el return 


// parametros y argumentos en un arrow function
const aprendiendo3 = function(tecnologia, tecnologia2) {
  console.log(`aprendiendo ${tecnologia} y ${tecnologia2}`)
}
aprendiendo3('JavaScript', 'Node.js')


const aprediendo4 = (tecnologia, tecnologia2) => `aprendiendo ${tecnologia} y ${tecnologia2}` // cuando se le pasa solo un parametro los parentesis son opcionales 
console.log(aprediendo4('JavaScript', 'Node.js'))

// .map y forEach con arrow function
const carrito = [
  { nombre: 'ipad mini', precio: 300 },
  { nombre: 'ipad', precio: 400 },
  { nombre: 'airdops', precio: 100 },
  { nombre: 'macbook pro', precio: 600 },
  { nombre: 'macbook air', precio: 500 }
]

const nuevoArreglo = carrito.map( producto =>  `${producto.nombre} - precio : ${producto.precio}`)
carrito.forEach( producto => console.log( `${producto.nombre} - precio : ${producto.precio}`))

console.log(nuevoArreglo)

// metodos de propiedad hacia arrow function
const reproductor = {
  cancion: '',
  reproducir: id => console.log(`reproduciendo cancion con el id ${id}`),
  pausar: () => console.log('pausando...'),
  crearPlaylist: nombre => console.log(`creando la playlist de ${nombre}`),
  reproducirPlaylist: nombre => console.log(`escuchar cancion playlist ${nombre}`),

  set nuevaCancion(cancion){              // set es una forma de agregar valores
    this.cancion = cancion;
    console.log(`añadiendo ${cancion}`)
  },

  get obtenerCancion() {
    console.log(`${this.cancion}`)       // get es la forma de obtener de vuelta los valores
  }
}

reproductor.nuevaCancion = 'Yellow - Coldplay'
reproductor.obtenerCancion

reproductor.reproducir(30)
reproductor.reproducir(10)
reproductor.pausar()
reproductor.crearPlaylist('Vallenatos')
reproductor.reproducirPlaylist('Mañanitas de invierno - Pocho Zuleta')