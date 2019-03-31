//Conte até 10 de trás pra frente
//Agora calcule o fatorial

//  5!( fatorial) = 5 * 4 * 3 * 2 * 1

var fatorial = 1
for (let i=5; i>=1; i--){ 
    fatorial = fatorial*i  
    console.log(i , fatorial)
}

// i   fatorial
// 5       5
// 4       5*4    
// 3       5*4*3 
// 2       5*4*3*2
// 1       5*4*3*2*1

var passos = 0;
for (let dia=1; dia<=3; dia++){ 
    passos = passos + parseInt(prompt('Numero de passos do '+ dia +'º dia'))
    console.log(dia , passos)
}
console.log('Parabés! Você andou ' + passos +' passos')