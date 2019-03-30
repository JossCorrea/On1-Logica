// Entrada + processamento + Saída:
// Crie um algoritmo que calcule a idade de uma pessoa a partir do ano de nascimento

var nomeVariavel //Camel Case formato de escrever variáveis separando palavras por letras maiúsculas 
// Semântico - sua variável merece ter sentido (Dica livro Clean Code)
// Inicia com letra, _ ou $
// Não use caracteres especiais
// Não pode palavra reservada (para saber mais: https://www.w3schools.com/js/js_reserved.asp)

//Dica: preste atenção na digitação das variáveis na hora de chamar elas (nome tem que ser igual sempre)

var anoAtual; // Declaraçao - criando espaço na memória que vc pode chamar pelo nome
anoAtual = 2019; //Atribuição - inserindo um valor no espaço que vc criou (esse valor pode mudar, basta atribuir um novo valor que ele substitui o que estava lá antes)
var anoNascimento = prompt('Informe seu ano de nascimento');
var idade =  anoAtual - anoNascimento // Atribuindo um valor que resultará de um cálculo à variável
console.log('Idade:', idade)// Mostrando o resultado no console