
const storeModel = require("../models/storeModel");


class StoreController {
 
  readList(req, res) {
   
    const retorno = storeModel.readList();
    return retorno
      .then((result) => result.length == 0
        ? res.status(404).send("Nenhuma loja encontrada!")
        : res.status(200).json(result)
      )
      .catch((error) => res.status(400).json(error.message));
  }

 
  read(req, res) {
    
    const { id } = req.params;
    
    const retorno = storeModel.read(id);
    return retorno
      .then((result) =>
        result.length == 0 
        ? res.status(404).send("Loja não encontrada!") 
        : res.status(200).json(result)
      )
      .catch((error) => res.status(400).json(error.message));
  }

  search(req, res) {
    
    const { id } = req.params;
    
    const retorno = storeModel.search(id);
    return retorno
      .then((result) =>
        result.length == 0 
        ? res.status(404).send("Nenhuma loja encontrada!") 
        : res.status(200).json(result)
      )
      .catch((error) => res.status(400).json(error.message));
  }

  create(req, res) {
    const reqBody = req.body; 
    const retorno = storeModel.create(reqBody);
    return retorno
      .then((result) =>
        res.status(201).send("Loja criada com sucesso!")
      )
      .catch((error) => res.status(400).json(error.message));
  }

  update(req, res) {
    const { id } = req.params;
    const reqBody = req.body;
      
    const retorno = storeModel.update(reqBody, id);
    return retorno
      .then((result) =>
        res.status(200).send("Loja atualizada com sucesso!")
      )
      .catch((error) => res.status(400).json(error.message));

  }

}

module.exports = new StoreController();
