const express =  require("express");

const app = express();

const Router = require("express").Router;

const router = Router();

router.get("/job",
function(req, res){
    res.send("Exbindo uma lista com vagas de emprego...")
}
);

router.get("/job/:id",
function(req, res){
    const {id} = req.params;
    res.send("Exbindo uma vaga de emprego específica com id: " + id + "...")
} );

router.post("/job",
function(req, res){
    const {id} = req.params;
    res.send("Criando uma nova vaga de emprego...")
});

router.put("/job/:id",
function(req, res){
    const {id} = req.params;
    res.send("Atualizando uma vaga de emprego específica com id: " + id + "...")
});

router.delete("/job/:id",
function(req, res){
    const {id} = req.params;
    res.send("Deletando uma vaga de emprego específica com id: " + id + "...")
});

app.use(router);

app.listen(3000,
     function(erro){
        if(erro){
            console.log("Ocorreu um erro ao rodas o servidor!")
        }else{
            console.log("Servidor está rodando com sucesso!")
        }
     }
);



