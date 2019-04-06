// Operadores lógicos 

/* Precisa de ajuda? Veja esses links:

    https://www.w3schools.com/js/default.asp (navegue)

    https://developer.mozilla.org/pt-BR/docs/Aprender/Getting_started_with_the_web/JavaScript_basico (navegue)
*/

//Tranforme as frases abaixo em operações, rode no seu console e acrescente a resposta que foi obtida 


// true e true 
var numero = 4;
var condicao1 = (numero == 4); 
console.log ('Condicao 1:',condicao1)
var condicao2 = (numero > 3);
console.log ('Condicao 2:',condicao2) 

// true e false 
var numero = 4;
var condicao1 = (numero == 4); 
console.log ('Condicao 1:',condicao1)
var condicao2 = (numero < 3);
console.log ('Condicao 2:',condicao2) 

// false e true
var numero = 4;
var condicao1 = (numero == 8); 
console.log ('Condicao 1:',condicao1)
var condicao2 = (numero > 3);
console.log ('Condicao 2:',condicao2) 

// false e false 
var numero = 4;
var condicao1 = (numero == 8); 
console.log ('Condicao 1:',condicao1)
var condicao2 = (numero == 3);
console.log ('Condicao 2:',condicao2) 


//!false e true
var numero = 4;
var condicao1 = (numero != 5); 
console.log ('Condicao 1:',condicao1)
var condicao2 = (numero == 4);
console.log ('Condicao 2:',condicao2) 

// !true e false 
var numero = 4;
var condicao1 = (numero != 4); 
console.log ('Condicao 1:',condicao1)
var condicao2 = (numero == 5);
console.log ('Condicao 2:',condicao2) 

// true ou true
var numero = 4;
var condicao1 = (numero == 4); 
console.log ('Condicao 1:',condicao1)
var condicao2 = (numero >= 4);
console.log ('Condicao 2:',condicao2) 

console.log (condicao1 || condicao2)


// true ou false 
var numero = 4;
var condicao1 = (numero == 4); 
console.log ('Condicao 1:',condicao1)
var condicao2 = (numero < 4);
console.log ('Condicao 2:',condicao2) 

console.log (condicao1 || condicao2)


// true ou false ou true
var numero = 4;
var condicao1 = (numero == 4); 
console.log ('Condicao 1:',condicao1)
var condicao2 = (numero < 4);
console.log ('Condicao 2:',condicao2) 
var condicao3 = (numero >= 4);
console.log ('Condicao3:', condicao3)

console.log (condicao1 || condicao2 || condicao3)


// !true ou false
var numero = 4;
var condicao1 = (numero > 4); 
console.log ('Condicao 1:',condicao1)
var condicao2 = (numero == 5);
console.log ('Condicao 2:',condicao2) 

console.log (condicao1 || condicao2)

// !(true ou false) e true
var numero = 4;
var condicao1 = (numero != 4); 
console.log ('Condicao 1:',condicao1)
var condicao2 = (numero == 4);
console.log ('Condicao 2:',condicao2) 
var condicao3 = (numero < 4);
console.log ('Condicao 3:' , condicao3)
var condicao4 = (numero >= 4)
console.log ('Condicao 4:' , condicao4)


console.log (condicao1 && condicao2 || condicao3 && condicao4)


// true ou !(false e true)
var numero = 4;
var condicao1 = (numero >= 4); 
console.log ('Condicao 1:',condicao1)
var condicao2 = (numero == 4);
console.log ('Condicao 2:',condicao2) 
var condicao3 = (numero != 4);
console.log ('Condicao 3:' , condicao3)
var condicao4 = (numero > 3)
console.log ('Condicao 4:' , condicao4)


console.log (condicao1 || condicao2 && condicao3 && condicao4)

//Deu nó? Vai beber uma água e continue depois
