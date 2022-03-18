const boolean1 = true;
const boolean2 = false;

// no comun
const boolean3 = new Boolean(true);

console.log(boolean1);
console.log(boolean2);
console.log(boolean3);
//comparar
console.log(boolean1 === boolean2)
console.log(boolean1 === true)

//operador ternario
const authentication = true;

// if(authentication){
//   console.log('si puedes ver netflix')
// } else{
//   console.log('no, no puedes verlo')
// }

console.log(authentication ? 'si esta autenticado' : 'no esta autenticado')


