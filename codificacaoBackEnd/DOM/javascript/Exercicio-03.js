/* 3. Utilizando objeto: Crie um programa que leia os dados de um aluno: nome, matrícula,
     disciplina, nota. 
   - Se a nota do aluno for maior ou igual a 60 exiba no console “Aprovado”.
   - Se a nota do aluno for menor que 60 porém maior ou igual a 50 
   exiba no console “Em recuperação” 
   - Se a nota do aluno for menor que 50 exiba no console “Reprovado”.
   criar nova propriedade chamada situacao para o aluno.*/

  function validarEnviar(){
    let aluno = {};
    let nome = document.getElementById('nome').value;
    aluno.matricula = document.getElementById('matricula').value;
    aluno.disciplina = document.getElementById('disciplina').value;
    let nota = document.getElementById('nota').value


    try{
      if (/^[a-zA-ZÀ-ÿ\s']{2,}$/.test(nome)) {
        aluno.nome = nome  
      } else {
          throw new Error('Por favor, digite um nome válido.')
      };
      
      if (!isNaN(nota) && nota > 0 && nota <= 100) {
        aluno.nota = parseInt(nota);
      } else {
          throw new Error('Por favor, digite uma nota válida.')
      };
      
      if(aluno.nota >= 60){
        aluno.situacao = "aprovado"
      }else if(aluno.nota >= 50 && aluno.nota < 60){
        aluno.situacao = "recuperação"
      }else{
          aluno.situacao = "reprovado"
      }

      let result = document.getElementById('retornoAqui');

      result.innerText = `${aluno.nome}, matrícula ${aluno.matricula} está com a nota ${aluno.nota} está ${aluno.situacao} em ${aluno.disciplina}.`;

      let visibility = document.getElementById('return')
      visibility.style.visibility  = "visible";

    }catch(error){
      alert(error.message)
    }

  }

