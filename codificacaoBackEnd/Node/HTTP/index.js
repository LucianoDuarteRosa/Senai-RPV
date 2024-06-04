const http = require("http");

const httpServer = http.createServer(
    function(req, res){
        res.send("Seja bem-vindo ao servidor...");
});

const port = 3000;

httpServer.listen(port,
    function(erro){
        if(erro){
            console.log("Ocorreu um erro ao rodar o servidor!")
            return
        }else{
            console.log("Servidor está rodando com sucesso!")
        }
    }
);