
const tarefaModel = require("../models/tarefaModel");


class TarefaController {
 
  readList(req, res) {
   
    const retorno = tarefaModel.readList();
    return retorno
      .then((result) => result.length == 0
        ? res.status(404).send("Nenhuma vaga de emprego foi encontrada!")
        : res.status(200).json(result)
      )
      .catch((error) => res.status(400).json(error.message));
  }

 
  read(req, res) {
    
    const { id } = req.params;
    
    const retorno = tarefaModel.read(id);
    return retorno
      .then((result) =>
        result.length == 0 
        ? res.status(404).send("Tarefa não encontrada!") 
        : res.status(200).json(result)
      )
      .catch((error) => res.status(400).json(error.message));
  }

  create(req, res) {
    const reqBody = req.body; 
    const retorno = tarefaModel.create(reqBody);
    return retorno
      .then((result) =>
        res.status(201).send("Tarefa criada com sucesso!")
      )
      .catch((error) => res.status(400).json(error.message));
  }

  update(req, res) {
    const { id } = req.params;
    const reqBody = req.body;
      
    const retorno = tarefaModel.update(reqBody, id);
    return retorno
      .then((result) =>
        res.status(200).send("Tarefa atualizada com sucesso!")
      )
      .catch((error) => res.status(400).json(error.message));

  }

  delete(req, res) {
    const { id } = req.params;
    const retorno = tarefaModel.delete(id);
    return retorno
      .then((result) =>
        res.status(200).send("Tarefa deletada com sucesso!")
      )
      .catch((error) => res.status(400).json(error.message));
  }
  
}

module.exports = new TarefaController();
