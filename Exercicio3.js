let historicoAluno = {
    ensinoMedio: true,
    ensinoSuperior: true,
    hardSkils: ['C#', 'Git e GitHub', 'MySql'],
    idioma: ['ingles', 'espanhol', 'russo']
}

let curso = {
    nomeCursoConcluido: 'POO', 
    anoDeConclusao: '2019'}


let cursoProfissional = {
    nomeAluno: 'Larissa',
    nomeCurso: 'FullStack',
    valorCurso: 95,
    infoCurso: ['manhã', 'tarde', 'noite'],
    cursoConclusao:[curso],
    historico: historicoAluno
}


console.log(cursoProfissional.cursoConclusao[0].nomeCursoConcluido);
console.log(cursoProfissional.cursoConclusao[0].anoDeConclusao);
console.log(cursoProfissional.historico.ensinoMedio);
console.log(cursoProfissional.historico.ensinoSuperior);
console.log(cursoProfissional.historico.hardSkils);
console.log(cursoProfissional.historico.idioma);





