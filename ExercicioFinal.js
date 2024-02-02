const prompt = require("prompt-sync")();

//funções dos calculos
function soma(n1, n2) {
  return n1 + n2;
}

function subtracao(n1, n2) {
  return n1 - n2;
}

function divisao() {
  return n1 / n2;
}

function multiplicacao() {
  return n1 * n2;
}

//iteração com usuario
for (let i; i == 0; ) {
  let controle = parseInt(
    prompt("1-Soma 2-Subtração 3-Divisão 4-Multiplicação 5-Sair : ")
  );
  if (controle <= 5 && controle > 0) {
    let num1 = parseFloat(prompt("Digite um número: "));
    let num2 = parseFloat(prompt("Digite outro número: "));
    let operacao;
    let result = 0;

    switch (controle) {
      case 1:
        result = soma(num1, num2);
        operacao = "soma";
        break;

      case 2:
        result = subtracao(num1 - num2);
        operacao = "subtração";
        break;

      case 3:
        result = divisao(num1 / num2);
        operacao = "divisão";
        break;

      case 4:
        result = multiplicacao(num1 * num2);
        operacao = "multiplicação";
        break;

      case 5:
        i++;
        console.log("Obrigado.");
        break;
    }
    //retornos para o usuario
    console.log(`O valor da ${operacao} entre ${num1} e ${num2} é de ${result.toFixed(2)}`);
  }else {
    console.log("Opção inválida. Tente novamente!");
  }
}