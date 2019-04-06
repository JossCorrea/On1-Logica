// Variáveis e Tipos

/* Precisa de ajuda? Veja esses links:
    http://tableless.github.io/iniciantes/manual/js/variaveis.html
    https://www.w3schools.com/js/default.asp (navegue)
    https://developer.mozilla.org/pt-BR/docs/Aprender/Getting_started_with_the_web/JavaScript_basico (navegue)
*/

// Tá com dúvidas sobre como responder ao exercício? Leia o arquivo _Intrucoes.md

// Crie/declare uma variável para guardar o nome do curso que você está fazendo na reprograma (sem valor).
var NomeCurso;

// Mostre o valor atual de sua variável no console
console.log(NomeCurso);

// Atribua um valor à variável que você acabou de criar
NomeCurso = "Curso Online de Front End";

// Agora mostre novamente o valor atual de sua variável no console
console.log(NomeCurso); 

// Crie/declare uma variável para guardar uma nota de 1 a 10 (sem valor).
var Nota;

// Nesta variável atribua o valor da nota que você daria (hoje) para os seus conhecimentos de lógica (seja realista sem ser cruel com você mesma, lembre que você está começando)
Nota = 5;
console.log(Nota;

// Crie/declare uma nova variável chamada 'soma' e atribua o resultado da soma de dois valores nesta variável (tente fazer tudo em uma linha)
var soma = 1 + 2;
console.log(soma);

// Incremente (some mais 1) à sua variável 'soma' usando 3 formas diferentes (dica: pesquise operadores unários)
soma = 1;
soma++;
console.log(soma);
// Crie/declare uma variável 'multiplicacao' que multiplica a sua variável 'soma' por um valor qualquer
soma = 45;
var multiplicacao = soma*3;
console.log(multiplicacao);

// Mostre o valor das variáveis 'soma' e 'multiplicacao' usando três formas diferentes
soma = 45;
var multiplicacao = soma*3;
console.log(soma, multiplicacao);
document.write(`Soma ${soma} e Multiplicação ${multiplicacao}`);
alert(`Soma ${soma} e Multiplicação ${multiplicacao}`);

// Crie/declare uma variável chamada 'queroSerDesenvolvedora' e atribua um valor booleano à ela (...tô torcendo pra ser true..rsrsrsr)
var queroSerDesenvolvedora = true;

// Crie/Declare uma variável chamada 'sanduba' do tipo array e acrescente valores correspondentes àos ingretientes da sua receita preferida. (Nós vimos array correndo então vou dar uma dica aqui: var sanduba = ['pao', 'ovo', 'queijo'] )
var sanduba = ["pao", "queijo", "presunto", "rúcula"];

// Moste a variável 'sanduba' no console
console.log(sanduba);

// Mostre o primeiro igrediente de 'sanduba' (desafio pra você pesquisar)
console.log(sanduba[0]);

// Acrescente um ingrediente ao seu 'sanduba' (desafio pra você pesquisar)
sanduba.push("tomate"); 

// Substitua um ingrediente do seu 'sanduba' (desafio pra você pesquisar...sempre tento trocar a ervilha, quando tem)
sanduba.splice(2, 1, "cebola caramelizada");

// Escolha 3 variáveis que você criou e mostre o seus respectivos tipos (lembre que tem um comando pra isso)
typeof sanduba; // object
typeof Nota; // number
typeof queroSerDesenvolvedora; // boolean