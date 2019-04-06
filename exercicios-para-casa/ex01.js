// Variáveis e Tipos

/* Precisa de ajuda? Veja esses links:

    http://tableless.github.io/iniciantes/manual/js/variaveis.html

    https://www.w3schools.com/js/default.asp (navegue)

    https://developer.mozilla.org/pt-BR/docs/Aprender/Getting_started_with_the_web/JavaScript_basico (navegue)
*/

// Tá com dúvidas sobre como responder ao exercício? Leia o arquivo _Intrucoes.md

// Crie/declare uma variável para guardar o nome do curso que você está fazendo na reprograma (sem valor).
var reprogramaFront; 

// Mostre o valor atual de sua variável no console 

console.log (reprogramaFront); // reprogramaFront

// Atribua um valor à variável que você acabou de criar
reprogramaFront = 'Reprograma rules'

// Agora mostre novamente o valor atual de sua variável no console 
console.log (reprogramaFront); // Reprograma rules

// Crie/declare uma variável para guardar uma nota de 1 a 10 (sem valor).
var minhaNota;

// Nesta variável atribua o valor da nota que você daria (hoje) para os seus conhecimentos de lógica (seja realista sem ser cruel com você mesma, lembre que você está começando)
minhaNota = 5;

// Crie/declare uma nova variável chamada 'soma' e atribua o resultado da soma de dois valores nesta variável (tente fazer tudo em uma linha) 
soma = (3 + 5); // 8
var soma = 3 + 5 


// Incremente (some mais 1) à sua variável 'soma' usando 3 formas diferentes (dica: pesquise operadores unários) 
soma = soma + 1; // 9
soma += 1; // 10
soma ++; //10 

// Crie/declare uma variável 'multiplicacao' que multiplica a sua variável 'soma' por um valor qualquer
multiplica = soma*5 // 40
var multiplica = soma*5;

// Mostre o valor das variáveis 'soma' e 'multiplicacao' usando três formas diferentes 
soma = 
console.log = ('O valor da soma é ', soma);
alert ('O valor da soma é ', soma);
document.write ('O valor da soma é', soma);

multiplica = 
console.log = ('O valor da multiplicação é ', mulplica);
alert ('O valor da multiplicação é ', mulplica);
document.write ('O valor da multiplicação é ', mulplica);


// Crie/declare uma variável chamada 'queroSerDesenvolvedora' e atribua um valor booleano à ela (...tô torcendo pra ser true..rsrsrsr)
var queroSerDesenvolvedora = true;

// Crie/Declare uma variável chamada 'sanduba' do tipo array e acrescente valores correspondentes àos ingretientes da sua receita preferida. (Nós vimos array correndo então vou dar uma dica aqui: var sanduba = ['pao', 'ovo', 'queijo'] )
var sanduba = ['dois hamburgueres', 'alface', 'queijo', 'molho especial', 'cebola', 'picles','pão com gergelim'];

// Moste a variável 'sanduba' no console

sanduba
//Array(7) [ "dois hamburgueres", "alface", "queijo", "molho especial", "cebola", "picles", "pão com gergelim" ]

// Mostre o primeiro igrediente de 'sanduba' (desafio pra você pesquisar)

sanduba [0]; // "dois hamburgueres"


// Acrescente um ingrediente ao seu 'sanduba' (desafio pra você pesquisar)

sanduba.push('big mac'); //8

// Substitua um ingrediente do seu 'sanduba' (desafio pra você pesquisar...sempre tento trocar a ervilha, quando tem)

sanduba[0] = 'cogumelos assados'; // Array(8) [ "cogumelos assados", "alface", "queijo", "molho especial", "cebola", "picles", "pão com gergelim", "big mac" ]

// Escolha 3 variáveis que você criou e mostre o seus respectivos tipos (lembre que tem um comando pra isso)

typeof sanduba;
console.log('A variável sanduba, de valor ' + sanduba + ', é do tipo: ' + typeof sanduba) //A variável sanduba, de valor cogumelos assados,alface,queijo,molho especial,cebola,picles,pão com gergelim,big mac, é do tipo: object

typeof minhaNota;
console.log('A variável frontEndOnline, de valor ' + minhaNota + ', é do tipo: ' + typeof minhaNota)

typeof reprogramaFront;
console.log('A variável reprogramaFront, de valor ' + reprogramaFront + ', é do tipo: ' + typeof reprogramaFront)