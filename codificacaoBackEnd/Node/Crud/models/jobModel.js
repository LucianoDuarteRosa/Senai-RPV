const fs = require("fs")

class Job{
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
}


module.exports = new Job();