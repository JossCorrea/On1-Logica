// Descobrindo o número
// Crie um jogo de adivinhação para sortear um númemero de 0 a 5 e informe se o usuário acertou

var numeroSorteado = Math.ceil(Math.random()*5);
console.log(numeroSorteado)
var chute = parseInt(prompt('Informe um numero'));

// chute < numeroSorteado 'Errou...é maior'
// chute > numeroSorteado 'Ih, é menor!'

if (chute < numeroSorteado) {
    console.log('Errou...é maior')
}else if (chute > numeroSorteado) {
    console.log('Ih...é menor')
}else{
    console.log('Acertou !!!')
}