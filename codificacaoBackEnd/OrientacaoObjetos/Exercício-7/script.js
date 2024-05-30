/*2. Crie um programa que leia os dados de um aluno: nome, matrícula, disciplina, nota. 
   - Se a nota do aluno for maior ou igual a 60 exiba no console “Aprovado”.
   - Se a nota do aluno for menor que 60 porém maior ou igual a 50 
   exiba no console “Em recuperação” 
   - Se a nota do aluno for menor que 50 exiba no console “Reprovado”.
   criar nova propriedade chamada situacao para o aluno.*/

  class Aluno {
      constructor(nome, matricula, disciplina, nota, situacao) {
          this.nome = nome;
          this.matricula = matricula;
          this.disciplina = disciplina;
          this.nota = nota;
          this.situacao = situacao

          
      }
  }

  let nome = new Aluno();
  function validarEnviar(){
    let nome = document.getElementById('nome').value;
    let matricula = document.getElementById('matricula').value;
    let disciplina = document.getElementById('disciplina').value;
    let nota = document.getElementById('nota').value
    let situacao = ""

    try{
      if (/^[a-zA-ZÀ-ÿ\s']{2,}$/.test(nome)) {
      } else {
          throw new Error('Por favor, digite um nome válido.')
      };
      
      if (!isNaN(nota) && nota >= 0 && nota <= 100) {
        nota = parseInt(nota);
      } else {
          throw new Error('Por favor, digite uma nota válida.')
      };
      
      if(nota >= 60){
        situacao = "aprovado"
      }else if(nota >= 50 && nota < 60){
          situacao = "recuperação"
      }else{
        situacao = "reprovado"
      }

      let result = document.getElementById('retornoAqui');

      let aluno = new Aluno(nome, matricula, disciplina, nota, situacao)

      result.innerText = `${aluno.nome}, matrícula ${aluno.matricula} está com a nota ${aluno.nota} está ${aluno.situacao} em ${aluno.disciplina}.`;

      let visibility = document.getElementById('return')
      visibility.style.visibility  = "visible";

    }catch(error){
      alert(error.message)
    }

  }

