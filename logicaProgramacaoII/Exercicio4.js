/*
const prompt = require('prompt-sync')();
var i = 0;
for(i; i==0;){
    var controle = parseInt(prompt("1-Soma 2-Subtração 3-Divisão 4-Multiplicação 5-Sair : ")); 
    if(controle!=5){
        var num1 = parseFloat(prompt("Digite um número: "));
        var num2 = parseFloat(prompt("Digite outro número: "));
        var operacao;
        var result= 0;

        switch(controle){
                case 1:
                    result = num1 + num2;
                    operacao = "soma"
                break;

                case 2:
                    result = num1 - num2; 
                    operacao = "subtração"   
                break;

                case 3:
                    result = num1 / num2;
                    operacao = "divisão"
                break;

                case 4:
                    result = num1 * num2;
                    operacao = "multiplicação"           
                break;

                case 5:
                    i++         
                break;
                
                default:
                console.log("Opção inválida. Tente novamente.")
                break;
            }
            console.log(`O valor da ${operacao} entre ${num1} e ${num2} é de ${result.toFixed(2)}`)
        }else{
            console.log("Obrigado.")
            i++
        }
    }*/
//________________________________________________________________________________________________
  //                                            Exercício dia 31-01
  // ---------------------------------------------"Exercício 1"-------------------------------------
    
    const prompt = require('prompt-sync')();
    let valor = parseInt(prompt("Digite o valor da tabuada: "));

    while(valor <= 0){
        valor = parseInt(prompt("O valor precisa ser maior que 0. Digite novamente: "));
    }

    let result = `A tabuada de ${valor} é: ` 
    for(i = 1 ; i<10; i++){
        let n = i * valor; 
        result += ` ${i} x ${valor} = ${n}     `;
    };
    console.log(result);
