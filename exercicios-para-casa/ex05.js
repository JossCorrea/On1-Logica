//Condicionais Estrutura if / else

// Lembra do exercício de par ou ímpar, vamos incrementar?
// Crie um jogo de par ou ímpar contra o computador. A ideia é você gerar um número aleatório para o computador e comparar com o número informado pelo usuário e mostrar quem venceu a partida. Divirta-se

// Dicas: 
//  - Use a função Math.random() para gerar um número inteiro aleatório
//  - Use o prompt() para coletar o número informado pelo usuário

//usuaria escolhe par ou impar
let parOuImparUsuaria = prompt('Escolha par ou ímpar (P/I)');
console.log('parOuImparUsuaria', parOuImparUsuaria)

//usuaria escolhe um numero
let numeroUsuaria = parseInt(prompt('Digite um número inteiro'));
console.log ('numeroUsuaria', nomeUsuaria)

//o pc vai gerar outro numero aleatório
let numeroPC = Math.round(Math.random());
console.log('numeroPC', numeroPC)

//soma os numeros
let soma = numeroUsuaria + numeroPC
console.log ('soma', soma)

//verifica se a soma é par ou impar
if (parOuImparUsuaria=='p' && soma%2 == 0){
    console.log('Você ganhou!')
}else if (parOuImparUsuaria == 'I' && soma%2 == 1){
    console.log('Você perdeu!')
}


//verifica quem ganhou
let resultado
