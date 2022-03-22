// const name = "macbook pro";;
// const price = 200;
// const avaliable = true;

// el objeto agrupa todo en una sola variable


// object literal
//name: propiedad o llave del objeto,   macbookpro: valor
const product = {
   name: 'macbook pro',
   price: 200.,
   avaliable: true
 }
 console.log(product);

//acceder a sus valores

 console.log(product.name);
// no comun
 console.log(product['name']);

// agregar propiedades
 product.image = 'image.jpg';
// eliminar propiedades
 delete product.image;

// acceder a los valores y asignarlos a variables
//  const name = product.name;
//ES6 destructuring
 const {name} = product;
 const {price, avaliable} = product;
 console.log(price)

// objeto dentro de otro objeto
const smartphone = {
  names: 'iphone 11, iphone 11pro',
  prices: 300,
  avaliables: true,
  info : {
    weight : '1kg',
    measure : '20cm',
    color: 'golden',
    production : {
      country : 'Japan',
      material : 'aluminium'
    }
  }
}

console.log(smartphone);
console.log(smartphone.info);
console.log(smartphone.info.color)
console.log(smartphone.info.production.country)

//ES6 destructuring de objetos anidados
const {names, info, info: {production, production : {country} } } = product;

console.log(names)
console.log(info)
console.log(production)
console.log(country)

// reescribir variable
smartphone.avaliables = false;

// otra manera de nombrar objetos Object Constructor
function producto(nombre, precio){
  this.nombre = nombre
  this.precio = precio;
  this.disponible = true;
}
const producto2 = new producto('macbook air', 500);
console.log(producto2)

const producto3 = new producto('ipad mini', 300);
console.log(producto3)