// recorrer el DOM
const navegacion = document.querySelector('.navegacion')
console.log(navegacion)
console.log(navegacion.firstElementChild)     // seleccionar el primer elemnto de la navegacion
console.log(navegacion.lastElementChild)      // ultimo elemento

console.log(navegacion.childNodes) // los espacios en blanco son considerados elementos
console.log(navegacion.children) // los espacios en blanco no son considerados elemntos


// console.log(navegacion.children[1].nodeName)
// console.log(navegacion.children[1].nodeType)

const card = document.querySelector('.card')
  card.children[1].children[1].textContent = 'Nuevo heading desde traversing the DOM'
console.log(card.children[1].children[1].textContent)

//imagen
  card.children[0].src = 'img/hacer3.jpg'
console.log(card.children[0])

// traversing del hijo al padre
console.log(card.parentNode)
console.log(card.parentElement) // forma mas segura
console.log(card.parentElement.parentElement) // se va al siguiente padre etc.. 


// traversing con hermanos
console.log(card)
console.log(card.nextElementSibling)
console.log(card.nextElementSibling.nextElementSibling)

const ultimoCard = document.querySelector('.card:nth-child(4')      // hacia el elemento previo
console.log(ultimoCard.previousElementSibling)