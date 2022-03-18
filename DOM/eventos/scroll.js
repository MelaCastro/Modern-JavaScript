window.addEventListener('scroll', () => {
  

  const premium = document.querySelector('.premium')
  const ubicacion = premium.getBoundingClientRect()

  // console.log(ubicacion) - ubicacion del elemento

  if (ubicacion.top < 100) {
    console.log('el elemento ya esta visible')
  } else {
    console.log('aun no, da mas scroll')
  }
})

// scrolling: cantidad de veces que se hace scroll | scrollY : a cuantos pixeles se les a dado scroll