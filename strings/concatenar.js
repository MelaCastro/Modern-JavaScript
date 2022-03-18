const product = "ipad "
const price = "200 USD "


console.log(product.concat(price));
console.log(product.concat("off sale"));

console.log(product + price)

console.log("the product " + product + "it has a price of " + price);
console.log("the product ", product , "it has a price of " , price);

// ES6
console.log(`the product ${product} it has a price of $ ${price}`);