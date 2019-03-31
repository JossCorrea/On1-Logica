//Passei direto, to de prova final ou não deu
// Crie um algoritmo que receba duas notas de um aluno, calcule sua média e mostre as seguintes mensagens de acordo com cada situação:
// média >= 7 - Aprovado
// 5 <= média < 7 - Recuperação
// média < 5 - Reprovado

var nota1 = 5
var nota2 = 8
var media = (nota1 + nota2)/2
console.log ('Sua média', media)
if (media >= 7){
    console.log('Aprovado')
}else if (media>=5 && media<7){
    console.log('Recuperação')
}else if (media < 5){
    console.log('Reprovado')
}

// guardar o valor de uma nota1
//var nota1 = 6
// guardar o valor de uma nota2
// calcular a media das notas 
// se a media for maior que 7 (media >=7)