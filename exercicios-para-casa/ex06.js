// Estrutura if / else if / else

// Baseado em testes reais:
// Imagine que você foi contratada para criar um algoritmo para ajudar pessoas a entederem as novas regras da previdência (que é uma coisa que ninguém entende...rsrsrs)
// Isso é só um exercício, nem sei se os valores estão corretos, não se apegue a isso
// Você deve considerar as seguintes premissas:
// - O usuário deve informar o sexo (H ou M), o tempo de contribuição (anos) e a idade (anos)

let sexo = prompt('Informe o sexo (H/M)');
let tempoContribucao = prompt('Informe o tempo de contribuição em anos');
let idade = prompt('Informe a idade');


// - Se for mulher(M) a pessoa deve ter tempo de contribuição maior ou igual a 20 anos e idade maior ou igual a 62 anos

if (sexo == 'M'){
    if (tempoContribucao >= 20 && idade >= 62){
        console.log('Você pode se aposentar')
    }else {
        console.log('Você não pode se aposentar')
    }
}else if (sexo == 'H'){
    if (tempoContribucao >= 20 && idade >= 65){
        console.log('Você pode se aposentar')
    }else{
        console.log('Você não pode se aposentar')
    }
}



// - Se for homem(H) a pessoa deve ter tempo de contribuição maior ou igual a 20 anos e idade maior ou igual a 65 anos
// - Se a pessoa atender aos parâmetros mostre a mensagem 'Você já pode se aposentar'
// - Se a pessoa não atender aos parâmetros mostre a mensagem 'Você ainda não pode se aposentar'
[Substitua este texto por sua resposta]

// [DESAFIO - NÃO OBRIGATÓRIO] 
// Se você achou fácil, tente fazer uma versão que mostre o motivo pelo qual a pessoa ainda não pode se aposentar ;)