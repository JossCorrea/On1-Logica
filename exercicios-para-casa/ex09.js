// Funções

//Nós não falamos de funções ainda ...é tema da próxima aula, mas eu proponho o seguinte exercício: pesquise sobre funções na documentação (sugiro MDN ou W3schools), depois disso selecione 3 dos exercícios resolvidos anterioriormente e os transfor-me em uma função:
//Dica exemplo: 
// Soma de dois números > 2 + 5:
// function doisMaisCinco(){
//    return 2+5
// }

function jogarParOuImpar(){
let parOuImparUsuaria = prompt('Escolha par ou ímpar (P/I)');
let numeroUsuaria = parseInt(prompt('Digite um número inteiro'));
let numeroPC = Math.round(Math.random());
let soma = numeroUsuaria + numeroPC


if (parOuImparUsuaria=='p' && soma%2 == 0){
    console.log('Você ganhou!')
}else if (parOuImparUsuaria == 'I' && soma%2 == 1){
    console.log('Você perdeu!')
}
}

// PS.Não frita com esse exercício...vamos falar sobre isso na próxima semana