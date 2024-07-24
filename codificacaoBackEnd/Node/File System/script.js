const fs = require('fs');
const prompt = require('prompt-sync')();

let textoParaGravar = prompt('Digite o que você quer gravar: ');


fs.writeFile('arquivo.txt', textoParaGravar, (err) => {
    if (err) {
        console.error('Erro ao gravar no arquivo:', err);
        return;
    } 
    console.log('Texto gravado com sucesso no arquivo!');
});


fs.readFile('arquivo.txt', 'utf-8', (err, conteudo) => {
    if (err) {
        console.error('Erro ao ler o arquivo:', err);
        return;
    }
    console.log('Conteúdo do arquivo:', conteudo);
});
