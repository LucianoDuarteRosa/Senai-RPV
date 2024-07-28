
const subGroupModel = require("../models/subGroupModel");


class SubGroupController {
 
  readList(req, res) {
   
    const retorno = subGroupModel.readList();
    return retorno
      .then((result) => result.length == 0
        ? res.status(404).send("Nenhum Sub-Grupo encontrado!")
        : res.status(200).json(result)
      )
      .catch((error) => res.status(400).json(error.message));
  }

 
  read(req, res) {
    
    const { id } = req.params;
    
    const retorno = subGroupModel.read(id);
    return retorno
      .then((result) =>
        result.length == 0 
        ? res.status(404).send("Sub-Grupo não encontrado!") 
        : res.status(200).json(result)
      )
      .catch((error) => res.status(400).json(error.message));
  }

  search(req, res) {
    
    const { id } = req.params;
    
    const retorno = subGroupModel.search(id);
    return retorno
      .then((result) =>
        result.length == 0 
        ? res.status(404).send("Nenhum Sub-Grupo encontrado!") 
        : res.status(200).json(result)
      )
      .catch((error) => res.status(400).json(error.message));
  }

  create(req, res) {
    const reqBody = req.body; 
    const retorno = subGroupModel.create(reqBody);
    return retorno
      .then((result) =>
        res.status(201).send("Sub-Grupo criado com sucesso!")
      )
      .catch((error) => res.status(400).json(error.message));
  }

  update(req, res) {
    const { id } = req.params;
    const reqBody = req.body;
      
    const retorno = subGroupModel.update(reqBody, id);
    return retorno
      .then((result) =>
        res.status(200).send("Sub-Grupo atualizado com sucesso!")
      )
      .catch((error) => res.status(400).json(error.message));

  }

}

module.exports = new SubGroupController();
