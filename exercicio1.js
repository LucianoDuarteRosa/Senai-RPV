  //________________________________________________________________________________________________
  //                                            Exercício dia 23-01
  // "Exercício 1"----------------------------------------------------------------------------------
  /*var nomeCurso = null

  if(nomeCurso != null){
    console.log("Aluno do curso", nomeCurso) 
  }else{
    console.log("Campo vazio")
  }
  
  console.log("---- 2° variação ----")
  
  nomeCurso = "FullStack"

  if(nomeCurso != null){
    console.log("Aluno do curso", nomeCurso) 
  }else{
    console.log("Campo vazio")
  }*/

  //"Exercício 2" ----------------------------------------------------------------------------------
  /*var n1 = 10;
  var n2 = 12;
  if(n1 > n2){
    console.log("O valor maior é: ",n1)
  }else if(n2 > n1){
    console.log("O valor maior é: ",n2)
  }else{
    console.log("os valores são iguais")
  }*/


  //"Exercício 3" ----------------------------------------------------------------------------------
  /*var sexo = "M"
  if (sexo == "F"){
    console.log("Sexo Feminino")
  }else if(sexo == "M"){
    console.log("Sexo Masculino")
  }else{
    console.log("Sexo inválido")
  }*/


  //"Exercício 4" ----------------------------------------------------------------------------------
  /*var p1 = 10 
  var p2 = 10
  var media = (p1 + p2)/2
  if(media >= 7 && media <10){
    console.log("Aprovado")
  }else if(media == 10){
    console.log("Aprovado com Distinção")
  }else{
    console.log("Reprovado")
  }*/


  //______________________________________________________________________________________________________
  //                                      Exercicios do dia 24-01
  /*
  // Exercício 1 ----------------------------------------------------------------------------------
  var nome= "Luciano Duarte"
  var idade= "34"
  console.log(`Olá, meu nome é ${nome} e eu tenho ${idade} anos.`)*/


  /*
  // Exercício 2 ----------------------------------------------------------------------------------
  const readline = require('readline');
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  rl.question("Digite um número: ", function(num1) {
    rl.question("Digite outro número: ", function(num2) {
      // Convertendo as entradas para números
      var n1 = parseFloat(num1);
      var n2 = parseFloat(num2);
  
      console.log("A soma dos números é: ", n1 + n2);
      console.log("A subtração dos números é: ", n1 - n2);
      console.log("A multiplicação dos números é: ", n1 * n2);
      console.log("A divisão dos números é: ", n1 / n2);
  
      rl.close();
    });
  });*/


  /*
  // Exercício 3 ----------------------------------------------------------------------------------
  const readline = require('readline');
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  rl.question("Digite a sua idade: ", function(idade){
    if(idade>100){
      console.log("Você está morto? Se não.. aproveite o pouco vida que te resta.")
    }
    else if(idade >=18){
      console.log("Você é maior de idade.")
    }else{
      console.log("Você é menor de idade.")
    }
    rl.close();
  });*/

  // Exercício 4 ----------------------------------------------------------------------------------
  /*const readline = require('readline');

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  rl.question("Digite um número: ", function(num1) {
    rl.question("Digite outro número: ", function(num2) {
      rl.question("Digite mais um número: ", function(num3) {
      var n1 = parseFloat(num1);
      var n2 = parseFloat(num2);
      var n3 = parseFloat(num3);
      var result = (n1+n2+n3)/3
  
      console.log(`A média entre ${n1},${n2} e ${n3} é: ${result}.`); 
      rl.close();
    });
  })});*/



  // Exercício 5 ----------------------------------------------------------------------------------
  /*const readline = require('readline');

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  rl.question("Digite seu nome: ", function(nome) {
    rl.question("Digite seu salário: ", function(num1) {
      var n1 = parseFloat(num1); 
      n1 = n1 * 1.1;
      console.log(`Parabens ${nome},seu salário com o novo aumento é de R$ ${n1.toFixed(2)}.`); 
      rl.close();
    });
  });*/

// Exercício 6 ----------------------------------------------------------------------------------
/*
const readline = require('readline');

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  rl.question("Digite um número: ", function(num1) {
    rl.question("Digite outro número: ", function(num2) {
      var a = parseFloat(num1); 
      var b = parseFloat(num2);
      var c;
      var resut;
      if(a == b){
        result = "soma"
        c = a + b
      } else{
        result = "multiplicação"
        c = a * b
      }
      console.log(`O resultado da ${result} entre ${a} e ${b} é ${c}`)
      rl.close();
    });
  });
*/

// Exercício 7 ----------------------------------------------------------------------------------
/*const readline = require('readline');

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  rl.question("Digite o valor: ", function(num1) {
    rl.question("Digite a quantidade de parcela: ", function(num2) {
      var valor = parseFloat(num1); 
      var parcela = parseInt(num2);
      var valorParcela;
      if(parcela > 3){
        valor= valor * 1.2
      } else{
        valor = valor * 1.1
      }
      valorParcela = valor/parcela
      console.log(`O valor do total parcelado é de ${valor.toFixed(2)}, dividido em ${parcela} de  R$ ${valorParcela.toFixed(2)}}`)
      rl.close();
    });
  });*/


  // Exercício 8 ----------------------------------------------------------------------------------
/*const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
  
rl.question("Digite o nome do aluno: ", function(nome) {  
  rl.question("Digite a 1° nota: ", function(num1) {
    rl.question("Digite a 2° nota: ", function(num2) {
      rl.question("Digite a 3° nota: ", function(num3) {
      var n1 = parseFloat(num1); 
      var n2 = parseFloat(num2);
      var n3 = parseFloat(num3);
      var media = (n1+ n2 +n3)/3;
      var result;
      if(media >= 8){
        result = "aprovado"
      } else{
        result = "repovado"
      }
      console.log(`O aluno ${nome} foi ${result} com a média de ${media.toFixed(2)}.`)
      rl.close();
});})})});*/

// Exercício 9 ----------------------------------------------------------------------------------

/*const readline = require('readline');

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  rl.question("Digite o numero: ", function(num1) {
    rl.question("Digite outro numero: ", function(num2) {
      rl.question("Digite 1-Soma 2-Multiplicação 3-Divisão: ", function(num3) {
      var n1 = parseFloat(num1); 
      var n2 = parseFloat(num2);
      var controle = parseInt(num3);
      var result;
      var operacao;
      switch (controle) {
        case 1:
          operacao = "soma";
          result = n1+n2
        break;
          
        case 2:
          operacao = "multiplicação"
          result= n1*n2
        break;
          
        case 3:
          operacao = "divisão"
          result = n1/n2
        break; 

        default:
          result = null
        break;
      }
      
      if(result == null){
        console.log("Valor digitado na operação inválido.")
      }else{
        console.log(`O valor do resultado da ${operacao} entre ${n1} e ${n2} é de ${result.toFixed(2)}}`)
      }
      rl.close();
})})});*/