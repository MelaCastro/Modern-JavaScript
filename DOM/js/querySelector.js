// permite seleccionar ids y clases , solo retorna el primero que encuentre
const card = document.querySelector('.card')
console.log(card)

// podemos tener selectores especificos como en css
const info = document.querySelector('.premiun .info')
console.log(info)

// seleccionar el segundo card de hospedaje
const segundoCard = document.querySelector('section.hospedaje .card:nth-child(2)')
console.log(segundoCard)

// seleccionar el formulario (id)
const formulario = document.querySelector('#formulario')
console.log(formulario)

// seleccionar elemntos html
const navegacion = document.querySelector('nav')
console.log(navegacion)