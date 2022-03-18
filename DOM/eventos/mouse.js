const nav = document.querySelector('.navegacion')

// regustrar un evento
nav.addEventListener('click', () => {     // click: al dar click en nav  
  console.log('click en nav')
})

nav.addEventListener('mouseenter', () => {     //  mouseenter: colocar el cursor sobre nav
  console.log('click en nav')
  nav.style.backgroundColor = "pink"
})

nav.addEventListener('mouseout', () => {     // mouseout: saliendo de la navegacion
  console.log('click en nav')
  nav.style.backgroundColor = "red"
})

// otros:
// mousedown - similar al click |  dblclick - doble click |  mouseup - cuando sueltas el maouse