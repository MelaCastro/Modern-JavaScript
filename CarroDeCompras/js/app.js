// Variables
const carrito = document.querySelector('#carrito')
const contenedorCarrito = document.querySelector('#lista-carrito tbody')
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito')
const listaCursos = document.querySelector('#lista-cursos')
let articulosCarrito = []       // crear arreglo para ingresar el curso al carrito de compras

cargarEventListeners()
function cargarEventListeners() {
  // cuando agregas un curso presionando "agregar al carrito"
  listaCursos.addEventListener('click', agregarCurso) 

  // elimina cursos del carrito
  carrito.addEventListener('click', eliminarCurso)

  // vaciar el carrito 
  vaciarCarritoBtn.addEventListener('click', () => {
    articulosCarrito = []     // reseteamos el arreglo

    limpiarHTML()     // eliminamos todo el html
  })
}

//Funciones
function agregarCurso(evt) {
  evt.preventDefault();   // prevenir la accion por defauld del boton (event bubbling)

  if(evt.target.classList.contains('agregar-carrito')) {
    const cursoSeleccionado = evt.target.parentElement.parentElement;                                                                // e.target saber a que se le esta dando click
    leerDatosCurso(cursoSeleccionado)
  }
}

// eliminar un curso del carrito
function eliminarCurso(evt) {
  if(evt.target.classList.contains('borrar-curso')) {
    const cursoId = evt.target.getAttribute('data-id') 

    // eliminar del arreglo de articulosCarrito por el data-id
    articulosCarrito = articulosCarrito.filter(curso => curso.id !== cursoId )
    
    carritoHTML() // iterar sobre el carrito y mostrar su HTML
  }
}

// leer el contenido del HTML al que le dimos click y extrae la informacion del curso
function leerDatosCurso(curso) {
  // console.log(curso)

    // crear un objeto con el contenido del curso actual
    const infoCurso = {
      imagen : curso.querySelector('img').src,
      titulo : curso.querySelector('h4').textContent,
      precio : curso.querySelector('.precio span').textContent,
      id : curso.querySelector('a').getAttribute('data-id'),      // nos ayuda a identificar que cursoesta tratando de eliminar el usuario
      cantidad : 1    //se selecciona un sola vez y no se repite (si no se da en el boton de agregar mas de uno)
    }

    // revisa si un elemento ya esta en el carrito utilizando .some
    const existe = articulosCarrito.some(curso => curso.id === infoCurso.id)
    if (existe) {
      // actualizamos la cantidad
      const cursos = articulosCarrito.map(curso => {
        if(curso.id === infoCurso.id){
          curso.cantidad++;
          return curso    // retorna el objeto actulizado
        } else {
          return curso    // retorna los objetos que no son los duplicados
        }
      })
      articulosCarrito = [...cursos]
    } else {
      //agregamos el curso al carrito
       // agrega elementos al arreglo de carrito utilizando spread operator
    articulosCarrito = [...articulosCarrito, infoCurso];
    }

   
    console.log(articulosCarrito)

    carritoHTML()

}

// muestra el carrito de compras en el html
function carritoHTML() {

  // limpiar el HTML
  limpiarHTML()

  // recorre el carrito y genera el HTML
  articulosCarrito.forEach(curso => {
    const {imagen, titulo, precio, cantidad, id} = curso
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>
        <img src="${curso.imagen}" width="100">
      </td>
      <td>${titulo}</td>
      <td>${precio}</td>
      <td>${cantidad}</td>

      <td>
        <a href="#" class="borrar-curso" data-id="${id}"> X </a>
      </td>
    `

    // agrega el HTML del carrito en el tbody
    contenedorCarrito.appendChild(row)
  })
}

// elimina los cursos del tbody
function limpiarHTML(){
  // forma lenta
  // contenedorCarrito.innerHTML = ''

  // forma rapida
  while(contenedorCarrito.firstChild){        // estamos revisando que mientras haya un hijo esta condicion se cumple
    contenedorCarrito.removeChild(contenedorCarrito.firstChild)
  }
}