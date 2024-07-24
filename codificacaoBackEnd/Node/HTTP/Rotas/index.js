const express = require('express');
const app = express();

const rotas = require('./api/rotas');

app.use(rotas);

app.listen(3000, (erro) => {
    if (erro) {
        console.log('Ocorreu um erro ao rodar o servidor!');
    } else {
        console.log('Servidor está rodando com sucesso!');
    }
});