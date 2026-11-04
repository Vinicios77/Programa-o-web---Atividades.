function contarVogais(palavra){
    let contador = 0;
    const vogais = "aeiouáéíóúãõâêîôû";
    let minuscula = palavra.toLowerCase();
    for(let letra of minuscula){
        if (vogais.includes(letra)){
            contador++
        }
    }
    return contador;
}
console.log(contarVogais("programação"));
