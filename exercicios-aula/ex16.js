// Conte até 3
// Depois conte até 10
// Depois conte até n
// Conte os números pares até 100

// Indo de i=0 até i=3 i++ // (i++   i = i + 1 / i-- i = i-1)
// Dica : Artigo da Mari no medium (escopo)
// https://medium.com/front-end-weekly/es6-cool-stuffs-var-let-and-const-in-depth-24512e593268
// https://medium.com/reprogramabr/entendendo-escopos-no-javascript-5cd474c932c3

for (let i=1; i<=3; i++){ 
    console.log(i)    
}

// Versao 2:
var inicio = prompt('Informe a partir de quanto vc quer contar')
var fim = prompt('Informe até quanto vc quer contar')
for (let i=inicio; i<=fim; i++){ 
    console.log(i)    
}

// versão 3 (Contando de tras pra frente)
var inicio = 100
var fim = 0
for (let i=inicio; i>=fim; i--){ 
    console.log(i)    
}

// versao 4 (contando de 2 em 2)
for (let i=0; i<=100; i=i+2){ 
    console.log(i)    
}
// Escreendo incrementos
//i+=2   / i = i + 2
//i*=2   / i = i + 2
//i/=2   / i = i + 2

