// el evento se propaga , se va hacia un elemento padre o cualquiera que tenga registrados eventos
const cardDiv = document.querySelector('.card')
const infoDiv = document.querySelector('.info')
const titulo = document.querySelector('.titulo')

cardDiv.addEventListener('click', evt => {
  evt.stopPropagation()                         // detener la propagacion
  console.log('click en card')
})

infoDiv.addEventListener('click', evt => {
  evt.stopPropagation()
  console.log('click en info')
})

titulo.addEventListener('click', evt => {
  evt.stopPropagation()
  console.log('click en el titulo')
})

// prevenirlo con delegation
const cardDiv2 = document.querySelector('.card')

cardDiv2.addEventListener('click', (evt) => {                     
  if(evt.target.classList.contains('titulo')) {
    console.log('diste click en titulo')
  }
  if(evt.target.classList.contains('precio')) {
    console.log('diste click en precio')
  }
  if(evt.target.classList.contains('card')) {
    console.log('diste click en card')
  }

})

// Evitar la propagación con contenido creado...
const parrafo1 = document.createElement('P');
parrafo1.textContent = 'Concierto';
parrafo1.classList.add('categoria');
parrafo1.classList.add('concierto');

// Segundo parrafo
const parrafo2 = document.createElement('P');
parrafo2.textContent = 'Concierto de Rock';
parrafo2.classList.add('titulo');

// 3er parrafo...
const parrafo3 = document.createElement('p');
parrafo3.textContent = '$800 por persona';
parrafo3.classList.add('precio');

parrafo3.onclick = nuevaFuncion(1);

// crear el div...
const info = document.createElement('div');
info.classList.add('info');
info.appendChild(parrafo1)
info.appendChild(parrafo2)
info.appendChild(parrafo3);


// Vamos a crear la imagen
const imagen = document.createElement('img');
imagen.src = 'img/hacer2.jpg';

// Crear el Card..
const contenedorCard = document.createElement('div');
contenedorCard.classList.add('contenedorCard');

// Vamos a asignar la imagen al card...
contenedorCard.appendChild(imagen);

// y el info
contenedorCard.appendChild(info);

// Insertarlo en el HTML...
const contenedor = document.querySelector('.hacer .contenedor-cards');
contenedor.appendChild(contenedorCard); // al inicio info



function nuevaFuncion(id) {
    console.log('click..', id)
}