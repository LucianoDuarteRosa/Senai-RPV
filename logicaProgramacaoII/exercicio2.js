//________________________________________________________________________________________________
//                                            Exercício dia 25-01
// ---------------------------------------------"Exercício 1"-------------------------------------
    /*const readline = require('readline');

    const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
    });
    rl.question("Digite: 1-Check-in 2- Chamar serviço de quarto 3- Fazer pedido  4- Fazer Check-out:", function(entrada) {
        var controle = parseInt(entrada);
        switch (controle) {
            case 1:
                console.log("Check-in realizado com sucesso.")
            break;

            case 2:
                console.log("Um cololaborador em instantes vai ao seu quarto para realizar o atendimento.")        
            break;

            case 3:
                console.log("Pedido realizado com sucesso.")
            break;

            case 4:
                console.log("Check-out realizado com sucesso.")              
            break;
              
            default:
              console.log("Opção inválida.")
            break;
          }
        rl.close();
    })*/

// ---------------------------------------------"Exercício 2"-------------------------------------

/*const readline = require('readline');

    const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
    });
    rl.question("Digite um número: ", function(n1) {
        rl.question("Digite outro número: ", function(n2) {
            rl.question("Digite: 1-Soma 2- Subtração 3- Multiplicação  4- Divisão :", function(entrada) {
                var num1 = parseFloat(n1);
                var num2 = parseFloat(n2);
                var controle = parseInt(entrada);
                var operacao;
                var result;
                    switch (controle) {
                            case 1:
                                result = num1 + num2;
                                operacao="soma"
                            break;

                            case 2:
                                result = num1 - num2;
                                operacao="subtração"        
                            break;

                            case 3:
                                result = num1 * num2;
                                operacao="multiplicação"
                            break;

                            case 4:
                                result = num1 / num2;   
                                operacao="divisão"         
                            break;
                            
                            default:
                            console.log("Opção inválida.")
                            break;
                        }
                        console.log(`O resultado da ${operacao} entre os valores ${num1.toFixed(2)} e ${num2.toFixed(2)} é ${result.toFixed(2)}`)
                        rl.close();
    }) }) })*/


    // ---------------------------------------------"Exercício 3"-------------------------------------

/*const readline = require('readline');

const rl = readline.createInterface({
input: process.stdin,
output: process.stdout
});
rl.question("Digite seu sexo(1- Masculino ou 2- Feminino): ", function(sexo) {
    rl.question("Digite seu peso: ", function(n1) {
            var controle = parseInt(sexo)
            var peso = parseFloat(n1);
            var pesoIdeal;
                switch (controle) {
                        case 1:
                            pesoIdeal = (peso -100) * 0.9 ;
                        break;

                        case 2:
                            pesoIdeal = (peso -100) * 0.85;        
                        break;
                        
                        default:
                        console.log("Opção inválida.")
                        break;
                    }
                    if(controle == 1){
                        console.log(`Você escolheu o masculino. Seu peso ideal é ${pesoIdeal}`)
                    }else{
                        console.log(`Você escolheu o feminino. Seu peso ideal é ${pesoIdeal}`)
                    }
                    
                    rl.close();
}) })*/

// ---------------------------------------------"Exercício 4"-------------------------------------
/*
const readline = require('readline');

const rl = readline.createInterface({
input: process.stdin,
output: process.stdout
});
rl.question("Digite valor da compra: ", function(n1) {
    rl.question("Tipo de cliente(1-comum, 2-funcionário, 3-vip) : ", function(n2) {
            var valor = parseFloat(n1);
            var cliente = parseInt(n2);
            var valorFinal;
                switch (cliente) {
                        case 1:
                        break;

                        case 2:
                            valorFinal = valor * 0.9;        
                        break;

                        case 3:
                            valorFinal = valor * 0.95;        
                        break;
                        
                        default:
                        console.log("Opção inválida.")
                        break;
                    }
                    if(cliente != 1){
                        console.log(`O valor final da sua compra com desconto é de R$ ${valorFinal.toFixed(2)}`)  
                    }else{
                        console.log(`O valor final da sua compra é de R$ ${valor.toFixed(2)}`)
                    }
                    rl.close();
}) })*/


// ---------------------------------------------"Exercício 5"-------------------------------------

/*const readline = require('readline');

const rl = readline.createInterface({
input: process.stdin,
output: process.stdout
});
rl.question("Digite número referente ao mês: ", function(n1) {
            var num1 = parseInt(n1);
            var mes;
                switch (num1) {
                        case 1: mes = "janeiro"; break;
                        case 2: mes = "fevereiro"; break;
                        case 3: mes = "março"; break;
                        case 4: mes = "abril"; break;
                        case 5: mes = "maio"; break;
                        case 6: mes = "junho"; break;
                        case 7: mes = "julho"; break;
                        case 8: mes = "agosto"; break;
                        case 9: mes = "setemnho"; break;
                        case 10: mes = "outubro"; break;
                        case 11: mes = "novembro"; break;
                        case 12: mes = "dezembro"; break;
                        default:console.log("Opção inválida.");break;
                    }
                    console.log("O mês é", mes)
                    rl.close();
})*/


// ---------------------------------------------"Exercício 6"-------------------------------------

/*const readline = require('readline');

const rl = readline.createInterface({
input: process.stdin,
output: process.stdout
});
rl.question("Digite 1-Taxa natalidade 2-Taxa de mortaldidade: ", function(n1) {
    rl.question("Digite quantidade nascidos(taxa de natalidade) ou mortos (taxa de mortalidade): ", function(n2) {
        rl.question("Digite número habitantes: ", function(n3) {
            var controle = parseInt(n1);
            var num1 = parseInt(n2);
            var num2 = parseInt(n3);
            var result = (num1 * 1000)/num2
                switch (controle) {
                        case 1: 
                            console.log(`A taxa de natalidade é de: ${result}`) 
                        ; break;
                        case 2:
                            console.log(`A taxa de mortalidade é de: ${result}`)
                        break;                   
                        default:console.log("Opção inválida.");break;
                    }
                    rl.close();
})})})*/

// ---------------------------------------------"Exercício 7"-------------------------------------

const readline = require('readline');

const rl = readline.createInterface({
input: process.stdin,
output: process.stdout
});
rl.question("Digite o valor do produto: ", function(n1) {
    rl.question("Digite 1- à vista 2- à prazo :", function(n2) {
            var valor = parseFloat(n1);
            var controle = parseInt(n2);
            var result;
                switch (controle) {
                        case 1: 
                            result = valor * 0.9
                            console.log(`o valor final é R$${result.toFixed(2)}.`) 
                        ; break;
                        case 2:
                            console.log(`o valor final é R$${valor.toFixed(2)}.`)
                        break;                   
                        default:console.log("Opção inválida.");break;
                    }
                    rl.close();
})})