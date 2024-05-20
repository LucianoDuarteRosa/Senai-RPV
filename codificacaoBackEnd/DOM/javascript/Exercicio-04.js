
/* 4. Utilizando função: Crie um programa que leia um valor inicial A e exiba a sequência de valores do cálculo de A! e o seu resultado. 
	Ex: 5! = 5 X 4 X 3 X 2 X 1 = 120 */

  function validarEnviar(){
    let valorA = parseInt(document.getElementById('numero').value);
    console.log(valorA)

    try{
        if (!isNaN(valorA)) {
            
        } else {
            throw new Error("Número inválido ou campo vazio.");
        }
  
        let result = document.getElementById('retornoAqui');

        result.innerText = fazerCalculo(valorA);

        let visibility = document.getElementById('return');
        visibility.style.visibility  = "visible"; 
      }catch(error){
        alert(error.message)
      }
  }

    
  function fazerCalculo(valorA){
    let resultString = `O resultado do calculo de ${valorA}! é:`;
    let resultValor = 1;

    if(valorA === 0){
      return `O resultado do calculo de ${valorA}! é: 1`
    }

    for(valorA; valorA > 0; valorA--){
        if(valorA == 1){
            resultString += ` 1 = ${resultValor}`
        }else{
            resultValor *= valorA;
            resultString += ` ${valorA} x`
        }
    }
    return resultString;
};
