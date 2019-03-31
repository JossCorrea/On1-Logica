// Acumulador de passos até atingir a meta de 5000

var passos = 0;
const metaPassos = 1000;
var dia = 1; //contador
while (passos < metaPassos) {
    passos = passos + parseInt(prompt('Numero de passos do '+ dia +'º dia'))
    console.log(dia , passos)
    dia++
}
