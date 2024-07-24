const express = require('express');

const app = express();

const port = 3000;

const router = require('./router/index.js')

router(app, express);

app.listen( port,
    function(error){
        if(error){
            console.log('Ocorreu erro ao rodar o servidor!');
            return;
        }else{
            console.log('Servidor está rodando com o sucesso!');
        }
    }
);