const jobModel = require("../models/jobModel.js");
const jobModel = require("../models/jobModel.js")

class JobController{
    readList(req, res){
        try{
            let result = jobModel.readList();
            if( result){
                res.status(200).json(result);
            }else{
                res.status(404).send("Nenhuma vaga de emprego foi encontrada!")
            }
        }catch(error){
            res.status(400).json(error.message);
        }
    }

    read(req, res){
        try{
            const {id} = req.params;
            let result = jobModel.read(id);
            if(result){
                res.status(200).json(result);
            }else{
                res.status(404).send("Nenhuma vaga de emprego foi encontrada!")
            }
        }catch(error){
            res.status(400).json(error.message);
        }
    };

    create(req, res){
        try{
            let newjob = req.body
            jobModel.create(newjob);
            res.status(201).send('Vaga de emprego criada com sucesso!');
        }catch(error){
            res.status(400).json(error.message);
        }
    };

    update(req, res){
        try{
            const {id} = req.params
            const update = req.body;
            let result = jobModel.update(update, id);
            if(result){
                res.status(200).send('Vaga atualizada com sucesso!');
            }else{
                res.status(404).send("Nenhuma vaga de emprego foi encontrada!")
            }
        }catch(error){
            res.status(400).json(error.message);
        }
    };

    delete(req, res){
        try{
            const {id} = req.params;
            let deletar = jobModel.delete(id);
            if(deletar){
                res.status(200).send('Vaga excluída com sucesso!');
            }else{
                res.status(404).send("Nenhuma vaga de emprego foi encontrada!")
            }
        }catch(error){
            res.status(400).json(error.message);
        }
    };
}


module.exports = new JobController();