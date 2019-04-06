// Funções

//Nós não falamos de funções ainda ...é tema da próxima aula, mas eu proponho o seguinte exercício: pesquise sobre funções na documentação (sugiro MDN ou W3schools), depois disso selecione 3 dos exercícios resolvidos anterioriormente e os transfor-me em uma função:
//Dica exemplo: 
// Soma de dois números > 2 + 5:
// function doisMaisCinco(){
//    return 2+5
// }

function jogarParOuImpar() {

    let parOuImparUsuaria = prompt('Par ou ímpar?');
    console.log('parOuImparUsuaria', parOuImparUsuaria);



    let numeroUsuaria = parseInt(prompt('Escolha seu número'));
    console.log('parOuImparUsuaria', numeroUsuaria);


    let numeroPc = Math.round(Math.random());
    console.log('numeroPc', numeroPc);


    let soma = numeroUsuaria + numeroPc;
    console.log('Soma', soma);


    if (parOuImparUsuaria == 'P' && soma % 2 == 0) {
        console.log('Voce ganhou!');

    } else if (parOuImparUsuaria == 'I' && soma % 2 == 1) {
        console.log('Voce ganhou!');
    } else {
        console.log('Voce perdeu!');
    }

    console.log('parOuImparUsuaria', parOuImparUsuaria);
}


// PS.Não frita com esse exercício...vamos falar sobre isso na próxima semana