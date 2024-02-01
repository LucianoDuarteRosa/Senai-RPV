//________________________________________________________________________________________________
//                                            Exercício dia 31-01 -parte 2
// ---------------------------------------------"Exercício 1"-------------------------------------
/*const prompt = require('prompt-sync')();

function calcPorcentagem(n1,n2){
    return ((n1/n2)*100)
}
let num1 = parseFloat(prompt("Digite um número: "))
let num2 = parseFloat(prompt("Digite outro número: "))

console.log(`${calcPorcentagem(num1,num2)}% de ${num1} é ${num2}`);*/

// ---------------------------------------------"Exercício 2"-------------------------------------

/*const prompt = require('prompt-sync')();

function calcPorcentagem(n1,n2){
   if(n2 == 1){
        return n1;
   }else if(n2==2){
        return (n1*1.2);
   }else{
        return (n1*1.5);
   }
}

let num1 = parseFloat(prompt("Quantos m²? "));
let num2 = parseFloat(prompt("Quantos quartos? "));
let result = calcPorcentagem(num1,num2);
console.log(`A casa custa R$ ${result.toFixed(2)}`);*/


// ---------------------------------------------"Exercício 3"-------------------------------------
const prompt = require('prompt-sync')();

function calcQuadrado(n1){
    return (n1*2)
}

let num1 = parseFloat(prompt("Digite um número: "));
console.log(`o número ${num1} ao quadrado é ${calcQuadrado(num1)}`)