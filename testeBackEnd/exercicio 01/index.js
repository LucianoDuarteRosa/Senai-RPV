
const prompt = require('prompt-sync')();
const { login } = require('./teste');

function programa() {
    console.log("Bem-vindo ao sistema de login.");
    const usuario = prompt('Nome de usuário: ');
    const senha = prompt('Senha: ', { hideEchoBack: true });

    const resultado = login(usuario, senha);

    console.log(resultado.message);
}

programa();
