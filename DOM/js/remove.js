// eliminar un elemento por si mismo
const primereNlace = document.querySelector('a')
primereNlace.remove();
console.log(primereNlace)

// eliminarlo desde el padre
const navegacion = document.querySelector('.navegacion')
console.log(navegacion.children)

navegacion.removeChild(navegacion.children[2])