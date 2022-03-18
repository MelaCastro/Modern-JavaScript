// seleccionar elementos por su clase (forma no tan comun)

const header = document.getElementsByClassName('header')

console.log(header)

const hero = document.getElementsByClassName('hero')
console.log(hero)


// si las clases exixten mas de una vez

const contenedores = document.getElementsByClassName('contenedor')
console.log(contenedores)

// si una clase no existe
const noExiste = document.getElementsByClassName('no-existe')
console.log(noExiste)