const formulario = document.querySelector('#formulario')

formulario.addEventListener('submit', (evt) => {
  evt.preventDefault()    // evitar lo que el navegador hace por default en cambio reliza lo que requerimos

  console.log('buscando..')
  console.log(evt.target.method)    // tipo de motodo que utilizo | .action hacia donde va
})

// se puede utilizar tambien la declaracion de funcion
formulario.addEventListener('submit', validarFormulario)

function validarFormulario(evt) {
  evt.preventDefault()    

  console.log('buscando..')
  console.log(evt.target.method)
}