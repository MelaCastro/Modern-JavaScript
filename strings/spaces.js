const product = "        airdops           "

console.log(product);
console.log(product.length);

//eliminar desde el inicio
console.log( product.trimStart() )
// eliminar espacio final
console.log( product.trimEnd() )

//ambos
console.log( product.trimStart().trimEnd() );
console.log(product.trim());
