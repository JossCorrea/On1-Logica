//Condicionais Estrutura if / else

// Lembra do exercício de par ou ímpar, vamos incrementar?
// Crie um jogo de par ou ímpas contra o compudador. A ideia é você gerar um número aleatório para o computador e comparar com o número informado pelo usuário e mostrar quem venceu a partida. Divirta-se

// Dicas: 
//  - Use a função Math.random() para gerar um número inteiro aleatório
//  - Use o prompt() para coletar o número informado pelo usuário
[Substitua este texto por sua resposta]

//Momento da escolha par ou impar 
let parOuImparUsuaria= prompt ('Par ou ímpar?');
console.log('parOuImparUsuaria', parOuImparUsuaria)


//revelacao/escolha do meuNumero
let numeroUsuaria = parseInt(prompt ('Escolha seu número'));
console.log('parOuImparUsuaria', numeroUsuaria)

//revelacao/gerar do pcNumero
let numeroPc = Math.round(Math.random());
console.log ('numeroPc', numeroPc)

//Soma dos numeros 
let soma = numeroUsuaria + numeroPc
console.log ('Soma', soma)

//Verifica se a soma e par ou impar
if (parOuImparUsuaria== 'P' && soma%2 ==0){
    console.log ('Voce ganhou!')
    
}else if(parOuImparUsuaria == 'I' && soma%2 ==1){
    console.log ('Voce ganhou!')
}else {
    console.log ('Voce perdeu!')
}
//resultado
console.log ('parOuImparUsuaria', parOuImparUsuaria)