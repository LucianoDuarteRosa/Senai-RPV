/*1. Utilizando função: Tendo como dados de entrada o peso (em quilogramas)
   e a altura (em metros) de uma pessoa, 
   crie um programa que calcule o Índice de Massa Corporal (IMC) dessa pessoa. 
Calcule o IMC usando a fórmula: IMC = peso / (altura * altura). 
Classifique o IMC da seguinte forma:
- IMC < 18,5 Kg/m²: Abaixo do Peso
- IMC >= 18,5 Kg/m² e < 24,9 Kg/m²: Peso Normal
- IMC >= 25 Kg/m² e < 29,9 Kg/m²: Sobrepeso
- IMC >= 30 Kg/m² e < 34.9 Kg/m²: Obesidade Grau I
- IMC >= 35 Kg/m² e < 39.9 Kg/m²: Obesidade Grau II
- IMC >= 39.9 Kg/m²: Obesidade Grau III   */


function validarEnviar(){
  let pessoa = {};
  let peso = parseFloat(document.getElementById('peso').value);
  let altura = parseFloat(document.getElementById('altura').value);

  try{
      if (!isNaN(peso) && !isNaN(altura)) {
        pessoa.peso = peso;
        pessoa.altura = altura;
        pessoa.imc = pessoa.peso / (pessoa.altura * pessoa.altura)
      } else {
          throw new Error("Valor inválido.");
      }

      let result = document.getElementById('retornoAqui');

      result.innerText = classificacaoIMC(pessoa);

      let visibility = document.getElementById('return')
      visibility.style.visibility  = "visible";

    }catch(error){
      alert(error.message)
    }

}

function classificacaoIMC(pessoa){
  if(pessoa.imc < 18.5){
      return `Abaixo do peso. Vai comer um hamburguer.`;
  }else if (pessoa.imc >= 18.5 && pessoa.imc <= 24.9){
    return `Peso ideal. Não gosto de gente assim.`;
  }else if (pessoa.imc >= 25 && pessoa.imc <= 29.9){
    return `Sobrepeso. Tá maneiro, mas pode melhorar.`;
  }else if (pessoa.imc >= 30 && pessoa.imc <= 34.9){
    return `Obesidade Grau I. Vamos maneirar aí? #partiuAlface.`;
  }else if (pessoa.imc >= 35 && pessoa.imc < 39.9){
    return `Obesidade Grau II. Eita porra. Ta ficando sério agora`;
  }else{
    return `Obesidade Grau III. Agora lascou!!`;
  };
};