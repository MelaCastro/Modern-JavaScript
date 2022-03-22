// NOTAS IMPORTANTES
// ESTRUCTURAS DE DATOS (PRIMITIVOS Y OBJECTOS) ==> JAVASCRIPT

// 1. PRIMITIVOS => SUS VALORES NO PUEDEN SER MUTADOS Y NO SON OBJECTOS
//   - BOOLEAN -- Boolean representa una entidad lógica y puede tener dos valores: verdadero y falso. 
      typeof false
      false === false
// El tipo String de JavaScript se usa para representar datos textuales. Es un conjunto de "elementos" de 
// valores enteros sin signo de 16 bits. Cada elemento en String ocupa una posición en String. El primer 
// elemento está en el índice 0, el siguiente en el índice 1 y así sucesivamente. La longitud de un String 
// es el número de elementos que contiene.
//   - STRING
      typeof 'string'
      'string' === 'string'

//    ECMAScript tiene dos tipos numéricos integrados: Number y BigInt
//   - NUMBER -10000 => 10000
      typeof 1
      1 === 1
//   - BIGINT
      typeof 2n
      2n === 2n

//   - SYMBOLS*  -- es un valor especial unico aunque su valor sea el mismo sera totalmente diferente 
      typeof Symbol
      typeof Symbol('JAVASCRIPT') // RETORNA EL TIPO DE DATO
//   - UNDEFINED -- Una variable a la que no se le ha asignado un valor tiene el valor indefinido.
      typeof undefined
      undefined === undefined
//   - NULL (CASO ESPECIAL)*  --  El tipo Nulo tiene exactamente un valor: nulo.
      typeof null
      null === null

// 2. OBJECTOS => SUS VALORES PUEDEN SER MUTADOS Y SE GUARDAN POR REFERENCIA
//   - {}
      ;({} === {})
//   - []
      ;([] === [])
// Colecciones con clave: Maps, Sets, WeakMaps, WeakSets Estas estructuras de datos, introducidas en 
// ECMAScript Edition 6, toman referencias a objetos como claves. Set y WeakSet representan un conjunto 
// de objetos, mientras que Map y WeakMap asocian un valor a un objeto.
//   - Set - Map 

//  3. FUNCTIONES => SE GUARDAN POR REFERENCIA
//    - FUNCTIONS
      typeof function () {}


const object = {
  a: 1,
  b: {
    z: 1
  }
}

const object2 = {
  a: 1,
  b: {
    z: 1
  }
}

JSON.stringify(object)                                 // convertirlo a string para que al comprar de true
JSON.stringify(object) === JSON.stringify(object2)

//JSON - JSON (Notación de objetos de JavaScript) es un formato ligero de intercambio de datos,
// derivado de JavaScript, pero utilizado por muchos lenguajes de programación.
// JSON construye estructuras de datos universales.