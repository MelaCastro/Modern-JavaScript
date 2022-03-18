// ejemplo de numeros pares y nones

let i = 1;  // inicializar el while

while(i <= 20) { //condicion
  if(i % 2 === 0) {
    console.log(`El numero ${i} es PAR`)
  } else {
    console.log(`El numero ${i} es IMPAR`)
  }
  i++;          // incremento
}

// Do While se ejecuta al menos una vez y depues verifica la condicion ya sea que se cumpla o no

let a = 0;    // inicio

do {
  console.log(`Numero ${i}`)

  a++;   // incremento
} while (a < 10); // condicion
