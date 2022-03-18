// this. variable reservada es una forma de referirse al objeto mismo donde fue declarado
const product = {
  names: "macbook",
  price: 300,
  avaliable: true,
  info : function() {
    console.log(`El producto ${this.names} tiene un precio de: ${this.price} `)
  }
}

product.info();
