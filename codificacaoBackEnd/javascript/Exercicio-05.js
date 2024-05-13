/* 5. Utilizando função: Crie um programa que leia a largura e o comprimento de um terreno 
retangular, calculando e mostrando a sua área em m² (largura x comprimento). 
O programa também deve mostrar a classificação desse terreno, de acordo com a lista abaixo: 
- Abaixo de 100m² = TERRENO POPULAR 
- Entre 100m² e 500m² = TERRENO MASTER 
- Acima de 500m² = TERRENO VIP */

  function validarEnviar(){
    let terreno = {};
    let largura = parseFloat(document.getElementById('largura').value);
    let comprimento = parseFloat(document.getElementById('comprimento').value);

    try{
        if (!isNaN(largura) && !isNaN(comprimento)) {
          terreno.largura = largura;
          terreno.comprimento = comprimento;
          terreno.area = terreno.comprimento * terreno.largura
        } else {
            throw new Error("Valor inválido.");
        }

        let result = document.getElementById('retornoAqui');

        result.innerText = classificacaoTerreno(terreno);

        let visibility = document.getElementById('return')
        visibility.style.visibility  = "visible";

      }catch(error){
        alert(error.message)
      }

  }

  function classificacaoTerreno(terreno){
    if(terreno.area < 100){
      return `A área do terreno é de ${terreno.area.toFixed(0)}m². O seu terreno é POPULAR.`;
    }else if (terreno.area >= 100 && terreno.area <= 500){
        return `A área do terreno é de ${terreno.area.toFixed(0)}m². O seu terreno é TERRENO MASTER.`;
    }else{
      return `A área do terreno é de ${terreno.area.toFixed(0)}m². O seu terreno é TERRENO VIP.`;
    };
};

    
