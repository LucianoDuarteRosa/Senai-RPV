const clientSupplierModel = require('../models/clientSupplierModel')


class ClientSupplierController {
 
  readList(req, res) {
   
    const retorno = clientSupplierModel.readList();
    return retorno
      .then((result) => result.length == 0
        ? res.status(404).send("Nenhuma Cliente/Fornecedor encontrado!")
        : res.status(200).json(result)
      )
      .catch((error) => res.status(400).json(error.message));
  }

 
  read(req, res) {
    
    const { id } = req.params;
    
    const retorno = clientSupplierModel.read(id);
    return retorno
      .then((result) =>
        result.length == 0 
        ? res.status(404).send("Cliente/Fornecedor não encontrado!") 
        : res.status(200).json(result)
      )
      .catch((error) => res.status(400).json(error.message));
  }

  search(req, res) {
    
    const { id } = req.params;
    
    const retorno = clientSupplierModel.search(id);
    return retorno
      .then((result) =>
        result.length == 0 
        ? res.status(404).send("Nenhum Cliente/Fornecedor encontrado!") 
        : res.status(200).json(result)
      )
      .catch((error) => res.status(400).json(error.message));
  }

  create(req, res) {
    const reqBody = req.body; 
    const retorno = clientSupplierModel.create(reqBody);
    return retorno
      .then((result) =>
        res.status(201).send("Cliente/Fornecedor criado com sucesso!")
      )
      .catch((error) => res.status(400).json(error.message));
  }

  update(req, res) {
    const { id } = req.params;
    const reqBody = req.body;
      
    const retorno = clientSupplierModel.update(reqBody, id);
    return retorno
      .then((result) =>
        res.status(200).send("Cliente/Fornecedor atualizado com sucesso!")
      )
      .catch((error) => res.status(400).json(error.message));

  }

}

module.exports = new ClientSupplierController();
