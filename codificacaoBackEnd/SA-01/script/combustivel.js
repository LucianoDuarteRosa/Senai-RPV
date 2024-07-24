function calcular(){
    try{
    let valorAlcool = document.getElementById('alcool').value;
    let valorGasolina = document.getElementById('gasolina').value;
    let abAlcool = document.getElementById('abAlcool').value;
    let abGasolina = document.getElementById('abGasolina').value;
    let resultAlcool = 0;
    let resultGasolina = 0;

    if(/^[0-9]/.test(valorAlcool) && /^[0-9]/.test(valorGasolina) && /^[0-9]/.test(abAlcool) && /^[0-9]/.test(abGasolina)){
        valorAlcool = parseFloat(valorAlcool);
        valorGasolina = parseFloat(valorGasolina);
        abAlcool = parseFloat(abAlcool);
        abGasolina = parseFloat(abGasolina);
        resultAlcool = valorAlcool * abAlcool;
        resultGasolina = valorGasolina * abGasolina;
    }else{
        throw new Error("Digite somente números")
    }

    let result = document.getElementById('resultadoFinal');
    if((valorAlcool/valorGasolina) > 0.7){
        result = "O valor da gasolina é mais econômico"
    }else{
        result = "O valor da álcool é mais econômico"
    }

    let atualizar1 = document.getElementById('resultado1');
    atualizar1.textContent = "Valor álcool: R$ " + resultAlcool.toFixed('2');
    atualizar1.style.visibility = "visible";

    let atualizar2 = document.getElementById('resultado2');
    atualizar2.textContent = "Valor gasolina: R$ " + resultGasolina.toFixed('2');
    atualizar2.style.visibility = "visible";

    let atualizar3 = document.getElementById('resultadoFinal');
    atualizar3.textContent = result;
    atualizar3.style.visibility = "visible";

    }catch(error){
        alert(error.message);
    }
}
