const enlace = document.createElement('a')

//agregando el texto
enlace.textContent = 'Nuevo enlace'

// agregando href
enlace.href = '/nuevo.enlace'

// tagregando target
enlace.target = '_blank'

// ejemplo agregandole una funcion
enlace.onclick = miFuncion

// donde se mostrara
const navegacion = document.querySelector('.navegacion')
navegacion.appendChild(enlace) // insertar de ultimo

navegacion.insertBefore(enlace, navegacion.children[1] )   // insertar antes de algun elemento


console.log(enlace)

function miFuncion() {
  alert('diste click crack')
}

// crear un card de forma dinamica

const parrafo1 = document.createElement('p')
parrafo1.textContent = 'Concierto'
parrafo1.classList.add('categoria', 'concierto')

const parrafo2 = document.createElement('p')
parrafo2.textContent = 'Concierto de Rock'
parrafo2.classList.add('titulo')

const parrafo3 = document.createElement('p')
parrafo3.textContent = '$800 por persona'
parrafo3.classList.add('precio')

// crear div con la clase info
const info = document.createElement('div')
info.classList.add('info')
// agregar los parrafos
info.appendChild(parrafo1)
info.appendChild(parrafo2)
info.appendChild(parrafo3)
// crear la imagen
const imagen = document.createElement('img')
imagen.src = 'img/hacer2.jpg'

// crear el card padre
const card = document.createElement('div')
card.classList.add('card')
// asignar la imagen
card.appendChild(imagen)

//asignar info
card.appendChild(info)

// donde se mostrara
const contenedor = document.querySelector('.hacer .contenedor-cards')
contenedor.appendChild(card)