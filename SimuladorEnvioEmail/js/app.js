// varibles
const btnEnviar = document.querySelector('#enviar')
const btnReset = document.querySelector('#resetBtn')
const formulario = document.querySelector('#enviar-mail')

// variables para los campos
const email = document.querySelector('#email')
const asunto = document.querySelector('#asunto')
const mensaje = document.querySelector('#mensaje')
// validando con expresiones regulares (manera profesional)
const er = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

eventListeners()
function eventListeners() {
  // cuando la appp arranca
  document.addEventListener('DOMContentLoaded', iniciarApp)

  // campos del formulario
  email.addEventListener('blur', validarFormulario)   //blur funciona cuando se esta en el input y se salga
  asunto.addEventListener('blur', validarFormulario)
  mensaje.addEventListener('blur', validarFormulario)

  // reinicia el formulario
  btnReset.addEventListener('click', resetearFormulario)

  //Enviar Email
  formulario.addEventListener('submit', enviarEmail )

}

//funciones
function iniciarApp() {
  btnEnviar.disabled = true     // desabilitar boton enviar 
  btnEnviar.classList.add('cursor-not-allowed', 'opacity-50')      // agregando clases de tailwind(framework de css que utiliza la pag)
}

// validar formulario
function validarFormulario(evt) {
  if(evt.target.value.length > 0) {
    // eliminar los errores
    const error = document.querySelector('p.error')
    if(error) {
      error.remove()
    }
    

    // en caso de que todo esta bien
    evt.target.classList.remove('border', 'border-red-500')
    evt.target.classList.add('border', 'border-green-500') 

  } else {
    evt.target.classList.remove('border', 'border-green-500')
    evt.target.classList.add('border', 'border-red-500')    // clases de tailwind, se coloca el input de color rojo al no tener nada de contenido
  
    mostrarError('Todos los campos son obligatorios')
  }

  if(evt.target.type === 'email') {   // validar el campo de email
    

    if(er.test(evt.target.value)) {
      // eliminar los errores
      const error = document.querySelector('p.error')
      if(error) {
        error.remove()
      }

      evt.target.classList.remove('border', 'border-red-500')
      evt.target.classList.add('border', 'border-green-500')

    } else {
      evt.target.classList.remove('border', 'border-green-500')
      evt.target.classList.add('border', 'border-red-500')
      mostrarError('Email no valido')
    }
  }

  if(er.test(email.value) && asunto.value !== '' && mensaje.value !== '') {
    btnEnviar.disabled = false
    btnEnviar.classList.remove('cursor-not-allowed', 'opacity-50')
  }

} 
// mostrarle al usuario mensaje de error 
function mostrarError(mensaje) {
  const mensajeError = document.createElement('p')    // agregarle un parrafo
  mensajeError.textContent = mensaje   // mensaje del parrafo
  mensajeError.classList.add('border', 'border-red-500', 'background-red-100', 'text-red-500', 'p-3', 'mt-5', 'text-center', 'error')

  const errores = document.querySelectorAll('.error')
  if(errores.length === 0) {    // mostrar solo un mensaje de error
    formulario.appendChild(mensajeError)
  }
}


// envia el email
function enviarEmail(evt) {
  evt.preventDefault()

  //mostrar el spinner
  const spinner = document.querySelector('#spinner')
  spinner.style.display = 'flex'

  // despues de 3 segundos ocultar el spinner y mostrar el mensaje
  setTimeout(() => {
    spinner.style.display = 'none'


    // mensaje que dice que se envio correctamente
    const parrafo = document.createElement('p')
    parrafo.textContent = 'El mensaje se envio correctamente'
    parrafo.classList.add('text-center', 'my-10', 'p-2', 'bg-green-500', 'text-white', 'font-bold', 'uppercase')
    
    // inserta el parrafo antes del spinner
    formulario.insertBefore(parrafo, spinner)

    setTimeout(() => {
      parrafo.remove() // eliminar el mensaje de exito

      resetearFormulario()
    }, 5000);
  }, 3000);
}

// funcion que resetea el formulario
function resetearFormulario() {
  formulario.reset() 

  iniciarApp()
}
 