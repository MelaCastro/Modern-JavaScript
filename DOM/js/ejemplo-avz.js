// ocultar y mostrar footer

const btnFlotante = document.querySelector('.btn-flotante')
const footer = document.querySelector('.footer')

//evento
btnFlotante.addEventListener('click', mostrarOcultarFooter)

function mostrarOcultarFooter() {     // hacerlo con una funcion
  if(footer.classList.contains('activo')){         // .contains verificar si tiene o no una clase
    footer.classList.remove('activo')
    this.classList.remove('activo')
    this.textContent = '  Idioma y Moneda'
  } else {
    footer.classList.add('activo')
    this.classList.add('activo')       // el cambio de color en el boton
    this.textContent = 'X Cerrar'      // cambiar de texto a cerrar
  }
  
  console.log(footer.classList)
}