const Router = require('express').Router;

const router = Router();

class Pessoa{
    constructor(pessoas){
        this.pessoas = pessoas
    }

    readList(){
        return [this.pessoas];
    }

    read(id){
        let pessoa = this.pessoas.find((pessoa) => pessoa.id === parseInt(id));
        return pessoa;
    }

    create(newPessoa){
        newPessoa.id =  this.pessoas.length + 1;
        this.pessoas.push(newPessoa);
        return newPessoa;
    }

    update(updatePessoa, id){
        const index = this.pessoas.findIndex((pessoas) => pessoas.id === parseInt(id));
        if(index !== -1){
            this.pessoas[index]= updatePessoa;
            return this.pessoas[index];
        }
        return false
    }

    delete(id){
        const index = this.pessoas.findIndex((pessoa) => pessoa.id === parseInt(id));
        if(index !== -1){
            this.pessoas.splice(index, 1);
            return true;
        }
        return false;
    }

}

let pessoas = new Pessoa([
    {id: 1, nome:"Francisca Barroso", idade: 40, casado : true},
    {id: 2, nome:"Geralda Souza", idade: 35, casado : false},
    {id: 3, nome:"Roseclaide Werneck", idade: 30, casado : false}
])


router.get("/pessoa", function(req, res){
    try{
        let arrayTodosPessoas = pessoas.readList();
        if( arrayTodosPessoas){
            res.status(200).json(arrayTodosPessoas);
        }else{
            res.status(404).send("Nenhuma vaga de emprego foi encontrada!")
        }
    }catch(error){
        res.status(400).json(error.message);
    }
});

router.get("/pessoa/:id", function(req, res){
    try{
        const {id} = req.params;
        let result = pessoas.read(id);
        if(result){
            res.status(200).json(result);
        }else{
            res.status(404).send("Nenhuma vaga de emprego foi encontrada!")
        }
    }catch(error){
        res.status(400).json(error.message);
    }
});

router.post("/pessoa", function(req, res){
    try{
        let newPessoa = req.body;
        pessoas.create(newPessoa);
        res.status(201).send('Vaga de emprego criada com sucesso!');
    }catch(error){
        res.status(400).json(error.message);
    }
});

router.put("/pessoa/:id", function(req, res){
    try{
        const {id} = req.params
        const update = req.body;
        let ArrayPessoaAtualizado = pessoas.update(update, id);
        if(ArrayPessoaAtualizado){
            res.status(200).send('Vaga atualizada com sucesso!');
        }else{
            res.status(404).send("Nenhuma vaga de emprego foi encontrada!")
        }
    }catch(error){
        res.status(400).json(error.message);
    }
});

router.delete("/pessoa/:id", function(req, res){
    try{
        const {id} = req.params;
        let deletar = pessoas.delete(id);
        if(deletar){
            res.status(200).send('Vaga excluída com sucesso!');
        }else{
            res.status(404).send("Nenhuma vaga de emprego foi encontrada!")
        }
    }catch(error){
        res.status(400).json(error.message);
    }
});

module.exports = router;