//Escreva uma função fibonacci(n) que imprime (ou devolve) os n primeiros termos da sequência de
//Fibonacci, na qual cada termo é a soma dos dois anteriores: 0, 1, 1, 2, 3, 5, 8, 13…
//Exemplo: fibonacci(7) → 0, 1, 1, 2, 3, 5, 8
//Dica: comece com os dois primeiros termos (0 e 1); use um laço e duas variáveis para guardar os dois valores
//anteriores e calcular o próximo.
function fibonacci(n){
    let anterior = 0;
    let atual = 1;
    let sequencia = [anterior, atual];
    for(let numero = 3; numero <= n; numero++){
        proximo = anterior+atual;
        sequencia.push(proximo);
        anterior=atual;
        atual=proximo;
    }
    return sequencia;
}
console.log(fibonacci(7))