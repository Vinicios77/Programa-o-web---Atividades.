function ehPrimo(n){
    if(n < 2){
        return false;
    }
    for(let i = 2; i < n; i++){
         if(n % i == 0){
            return false
        }
    };
    return true;
}
console.log(ehPrimo(7));
console.log(ehPrimo(9));

const primosEncontrados = [];
for(let numero = 2; numero <= 50; numero++){
    if(ehPrimo(numero) == true){
        primosEncontrados.push(numero);
    }
}
console.log(primosEncontrados);