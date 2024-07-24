const express =  require("express");

const app = express();

app.listen(3000,
     function(erro){
        if(erro){
            console.log("Ocorreu um erro ao rodas o servidor!")
        }else{
            console.log("Servidor está rodando com sucesso!")
        }
     }
);



