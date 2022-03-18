const meses = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio']
const meses2 = ['agosto', 'septiembre', 'octubre']
const meses3 = ['noviembre', 'diciembre']

// .concat
const result = meses.concat(meses2, meses3)
console.log(result) 

//.spread operator
const result2 = [...meses, ...meses2, ...meses3]
console.log(result2)