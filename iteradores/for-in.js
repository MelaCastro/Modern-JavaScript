// permite iterar sobre objetos
const automovil = {
  modelo: 'camaro',
  año: 1873,
  motor: 'diesel'
}

 for( let propiedad in automovil) {
   console.log(`${automovil[propiedad]}`)
}

// ES6
for (let [llave, valor] of Object.entries(automovil)) {
  console.log(valor)
  console.log(llave)
}