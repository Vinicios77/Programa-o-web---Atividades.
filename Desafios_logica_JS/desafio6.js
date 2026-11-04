//Escreva uma função ehPalindromo(texto) que devolve true se o texto for um palíndromo — ou seja, se
//ele se lê igual de trás para frente —, ignorando maiúsculas e minúsculas.
//Exemplo: ehPalindromo("Arara") → true · ehPalindromo("Casa") → false
//Dica: compare o primeiro caractere com o último, o segundo com o penúltimo, e assim por diante, usando um
//laço e índices (texto[i]); toLowerCase() ajuda a ignorar maiúsculas.
function ehPalindromo(texto){
    let palavra = texto.toLowerCase();
    let tamanho = palavra.length;
    
    for (let i = 0; i < tamanho / 2; i++){
        if (palavra[i] !== palavra[tamanho - 1 - i]) {
            return false;
        }
    }
    return true;

}
console.log(ehPalindromo("arara"));
console.log(ehPalindromo("casa"));