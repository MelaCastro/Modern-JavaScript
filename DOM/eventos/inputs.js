const busqueda = document.querySelector('.busqueda')

// en el parentesis se puede pasar el evento que esta sucediendo (se nombre como uno desee)

// input: funciona cuando se realiza cualquiera de los eventos aneriores excepto blur
// blur: entrar en el input y luego salirse | copy: cuando copia el texto | paste: cuando pegas algo 
// cut: cuando se corta | keydown: funciona cuando se presiona una tecla
busqueda.addEventListener('input',(evt) => {   
  console.log(evt.type)
})

// .type - sobre que elemento se esta trabajando | .target sobre que input especifico se esta trabajando
// .target.value - lo que el usuario esta escirbiendo



// una forma de validar qu eun input tenga algo de validacion
busqueda.addEventListener('input',(evt) => {   
  if(evt.target.value === '') {
    console.log('fallo la validacion')
  }
})