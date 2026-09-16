//Dada uma lista de notas (um array de números já pronto no código), calcule e exiba: a quantidade de
//aprovados (nota ≥ 6), a média da turma e a maior nota.
//Exemplo: notas = [7, 4, 9, 5, 8] → Aprovados: 3 | Média: 6.6 | Maior: 9
//Dica: percorra com for…of; use acumuladores (soma e contador) e uma variável para guardar a maior nota até
//o momento.
const notas = [7, 4, 9, 5, 8];
let maiorNota = notas[0];
let aprovados = 0;
let soma = 0;
for(let n of notas){
    soma = soma + n
    if(n >= 6){
        aprovados++
    }
    if(n > maiorNota){
        maiorNota = n
    }
}
let media = soma / notas.length;

console.log(`Aprovados: ${aprovados} || Média: ${media} || Maior: ${maiorNota}`);