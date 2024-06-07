const Router = require('express').Router;

const router = Router();


/*class Job{
    constructor(){
    this.type = 0;
    this.dir = "database/jobDatabase.json";
    this.init();
    }

    init(){
        switch(this.type){
            case 0 : 
            this.jobs = JSON.parse(fs.readFileSync(this.dir, "utf-8"));
            break;
            case 1 : fs.readFile(this.dir, "utf-8", (error,file) => {
                if(error) throw error;
                this.jobs = JSON.parse(file);
            });
            break;
        }
    }

    readList(){
        return [this.jobs];
    }

    read(id){
        let job = this.jobs.find((job) => job.id === parseInt(id));
        return job;
    }

    create(newJob){
        newJob.id =  this.jobs.length + 1;
        this.jobs.push(newJob);
        this.commit();
        return newJob;
    }

    update(updateJob, id){
        const index = this.jobs.findIndex((job) => job.id === parseInt(id));
        if(index !== -1){
            this.jobs[index]= updateJob;
            this.commit();
            return this.jobs[index];
        }
        return false
    }

    delete(id){
        const index = this.jobs.findIndex((job) => job.id === parseInt(id));
        if(index !== -1){
            this.jobs.splice(index, 1);
            this.commit();
            return true;
        }
        return false;
    }

    commit(){
        switch(this.type){
            case 0: 
                fs.writeFileSync(this.dir, JSON.stringify(this.jobs));
                break;
            case 1: 
                fs.writeFile(this.dir, JSON.stringify(this.jobs), (error) => {
                if(error) throw error;
            });
                break;
        }
    }
}*/


const JobController = require("../controllers/jobController.js")

router.get("/job", JobController.readList);

router.get("/job/:id", JobController.read);

router.post("/job", JobController.create);

router.put("/job/:id", JobController.update);

router.delete("/job/:id", JobController.delete);


/*
router.get("/job", function(req, res){
    try{
        let arrayTodosJobs = jobs.readList();
        if( arrayTodosJobs){
            res.status(200).json(arrayTodosJobs);
        }else{
            res.status(404).send("Nenhuma vaga de emprego foi encontrada!")
        }
    }catch(error){
        res.status(400).json(error.message);
    }
});

router.get("/job/:id", function(req, res){
    try{
        const {id} = req.params;
        let result = jobs.read(id);
        if(result){
            res.status(200).json(result);
        }else{
            res.status(404).send("Nenhuma vaga de emprego foi encontrada!")
        }
    }catch(error){
        res.status(400).json(error.message);
    }
});

router.post("/job", function(req, res){
    try{
        let newjob = req.body
        jobs.create(newjob);
        res.status(201).send('Vaga de emprego criada com sucesso!');
    }catch(error){
        res.status(400).json(error.message);
    }
});

router.put("/job/:id", function(req, res){
    try{
        const {id} = req.params
        const update = req.body;
        let ArrayJobAtualizado = jobs.update(update, id);
        if(ArrayJobAtualizado){
            res.status(200).send('Vaga atualizada com sucesso!');
        }else{
            res.status(404).send("Nenhuma vaga de emprego foi encontrada!")
        }
    }catch(error){
        res.status(400).json(error.message);
    }
});

router.delete("/job/:id", function(req, res){
    try{
        const {id} = req.params;
        let deletar = jobs.delete(id);
        if(deletar){
            res.status(200).send('Vaga excluída com sucesso!');
        }else{
            res.status(404).send("Nenhuma vaga de emprego foi encontrada!")
        }
    }catch(error){
        res.status(400).json(error.message);
    }
});
*/

module.exports = router;