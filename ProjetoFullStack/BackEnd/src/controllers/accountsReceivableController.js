
const accountsReceivableModel = require("../models/accountsReceivableModel");


class AccountsReceivableController {
 
  readList(req, res) {
   
    const retorno = accountsReceivableModel.readList();
    return retorno
      .then((result) => result.length == 0
        ? res.status(404).send("Nenhuma contas a receber encontrada!")
        : res.status(200).json(result)
      )
      .catch((error) => res.status(400).json(error.message));
  }

 
  read(req, res) {
    
    const { id } = req.params;
    
    const retorno = accountsReceivableModel.read(id);
    return retorno
      .then((result) =>
        result.length == 0 
        ? res.status(404).send("Conta a receber não encontrada!") 
        : res.status(200).json(result)
      )
      .catch((error) => res.status(400).json(error.message));
  }

  search(req, res) {
    
    const { id } = req.params;
    
    const retorno = accountsReceivableModel.search(id);
    return retorno
      .then((result) =>
        result.length == 0 
        ? res.status(404).send("Nenhuma contas a receber encontrada!") 
        : res.status(200).json(result)
      )
      .catch((error) => res.status(400).json(error.message));
  }

  create(req, res) {
    const reqBody = req.body; 
    const retorno = accountsReceivableModel.create(reqBody);
    return retorno
      .then((result) =>
        res.status(201).send("Conta a receber criado com sucesso!")
      )
      .catch((error) => res.status(400).json(error.message));
  }

  update(req, res) {
    const { id } = req.params;
    const reqBody = req.body;
      
    const retorno = accountsReceivableModel.update(reqBody, id);
    return retorno
      .then((result) =>
        res.status(200).send("Conta a receber atualizada com sucesso!")
      )
      .catch((error) => res.status(400).json(error.message));

  }

}

module.exports = new AccountsReceivableController();
