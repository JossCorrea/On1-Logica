// Operadores aritméticos 

/* Precisa de ajuda? Veja esses links:

    https://www.w3schools.com/js/default.asp (navegue)

    https://developer.mozilla.org/pt-BR/docs/Aprender/Getting_started_with_the_web/JavaScript_basico (navegue)
*/

//Crie uma variável chamada 'numeroMagico' e atribua um valor de 1 a 10
var numeroMagico = Math.floor((Math.random()*10)+1)
console.log(numeroMagico)

// Agora faça a sua variável 'numeroMagico'ser substituida pelo valor atual dela multiplicado por 9
numeroMagico = numeroMagico * 9
console.log(numeroMagico);

// Crie uma variável chamada 'abra' e atribua à ela o valor de 'numeroMagico' dividido por 10
var abra = numeroMagico / 10
console.log(abra)

// Pequise um método para garantir que teremos sempre um número inteiro na variável 'abra', e aplique esse método na operação anterior (divisão por 10)
// Dica: parseInt()...pesquise pelo menos mais uma forma de fazer isso
var abra =parseInt() Math.trunc()

// Crie uma variável chamada 'cadabra' e atribua o valor correspondente ao resto da divisão por 10 à essa variável
var cadabra = (numeroMagico % 10)
console.log(cadabra)

// Crie uma variável chamada 'magica' e guarde nela a soma das variáveis 'abra' e 'cadabra'
var magica = (abra + cadabra)
console.log(magica)

//Divida o 'numeroMagico' por 'mágica'
numeroMagico / magica


// Moste no console a frase "O número mágico que foi pensado inicialmento é X" substituindo X por 'numeroMagico/magica' (Isso mesmo, coloque uma operação dentro do console.log()...opa olha o spoiler)
[Substitua este texto por sua resposta]

// Segundo mister M essa mágica deve funcionar