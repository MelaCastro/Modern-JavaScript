const encabezado = document.querySelector('.contenido-hero h1').textContent // otra forma de acceder al texto
console.log(encabezado)

//acceder al texto
console.log(encabezado.innerText) // tiene visibility:hidden , no lo va a encontrar
console.log(encabezado.textContent) // si lo va a encontrar
console.log(encabezado.innerHTML) // se trae el HTML

// modificar imagenes
const imagen = document.querySelector('.card img')
console.log(imagen)