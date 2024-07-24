function calcular(){
    try{
    let valor1 = document.getElementById('numero1').value;
    let valor2 = document.getElementById('numero2').value;
    let operacao = checkRatio();

    if(/^\-?[0-9]/.test(valor1) && /^\-?[0-9]/.test(valor2)){
        valor1 = parseFloat(valor1);
        valor2 = parseFloat(valor2);
    }else{
        throw new Error("Digite somente números")
    }

    let result = teste(valor1, valor2, operacao);
    result = (parseFloat(result)).toFixed('2');

    let atualizar = document.getElementById('resultado');
    atualizar.textContent = result;
    atualizar.style.visibility = "visible";

    }catch(error){
        alert(error.message);
    }
}

function checkRatio(){
    let radios = document.getElementsByName('opcao')

    for (let i = 0; i < radios.length; i++){
      if(radios[i].checked){
        return radios[i].value;
      }
    }
  };

function teste(valor1, valor2, operacao) {
    switch (operacao) {
      case '+':
        return valor1 + valor2;
      case '-':
        return valor1 - valor2;
      case '*':
        return valor1 * valor2;
      case '/':
        let teste = valor1 / valor2
        if(teste === 0 || teste == 'Infinity'){
          return 0;
        }
        return valor1 / valor2;
      default:
        break;
    }
  }