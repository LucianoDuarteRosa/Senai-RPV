  //________________________________________________________________________________________________
  //                                            Exercício dia 30-01
  // ---------------------------------------------"Exercício 1"-------------------------------------

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let livro = {
    idDoLivro: 1,
    nomeDoLivro: 'Game Of Thrones',
    autorDoLivro: 'George R. R. Martin',    
    genero: ['Romance', 'Literatura fantástica', 'Alta fantasia', 'Ficção Política'],
    disponivel: true}

let aluno = {
    matricula: 1,
    nomeAluno: 'Rômulo',
    nomeCurso: 'FullStack',
    turma: '002-001-2024',
    valorCurso: null,
    infoCurso: 'Hibrido',
    livrosEmprestados: []}
  
  rl.question("Digite a matricula do aluno: ", function(num1) {
    rl.question("Digite a id do livro: ", function(num2) {   
        var idAluno = parseInt(num1);
        var idLivro = parseInt(num2);
        if(aluno.matricula == idAluno){
            if(livro.idDoLivro == idLivro){
                aluno.livrosEmprestados = livro;
                console.log(`O livro ${livro.nomeDoLivro} foi emprestado para o aluno ${aluno.nomeAluno} matricula: ${aluno.matricula} da turma: ${aluno.turma} curso: ${aluno.nomeCurso}.`)
            }else{
                console.log("Livro não localizado.")
            }
        }else{
            console.log("Aluno não cadastrado.")
        }
    rl.close();    
    })})

      // ---------------------------------------------"Exercício 2"-------------------------------------
        
       /* let professor = {
            codProf: 1,
            nomeProfessor: 'Reinaldo',
            valorSalario: 5000,
            infoCurso: 'Hibrido',
            areasDeAtuacao:['Ti', 'Front-end','React']
        }

        let cursos = {
            codCurso: 1,
            nomeCurso: 'FullStack',
            dataInicio: '19/09/2023',
            dataTermino: '20/09/2024',

        }
        
        let aluno = {
            matricula: 1,
            nomeAluno: 'Rômulo',
            nomeCurso: cursos.nomeCurso,
            turma: '002-001-2024',
            valorCurso: null,
            infoCurso: 'Hibrido',
            livrosEmprestados: []
        }
        
        let aulas = {
            IdAula: 1,
            nomeProfessor: professor.nomeProfessor,
            nomeCurso: cursos.nomeCurso,
            dataAula: []
        }


        let escolaStark = {
            alunos: [aluno],
            ministracaoAulas: [aulas],
            realizacaoCurso:[cursos],
            professores:[professor]
        }*/
