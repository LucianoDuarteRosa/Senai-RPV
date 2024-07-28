
const accountsPayableModel = require("../models/accountsPayableModel");


class AccountsPayableController {
 
  readList(req, res) {
   
    const retorno = accountsPayableModel.readList();
    return retorno
      .then((result) => result.length == 0
        ? res.status(404).send("Nenhuma contas a pagar encontrada!")
        : res.status(200).json(result)
      )
      .catch((error) => res.status(400).json(error.message));
  }

 
  read(req, res) {
    
    const { id } = req.params;
    
    const retorno = accountsPayableModel.read(id);
    return retorno
      .then((result) =>
        result.length == 0 
        ? res.status(404).send("Conta a pagar não encontrada!") 
        : res.status(200).json(result)
      )
      .catch((error) => res.status(400).json(error.message));
  }

  search(req, res) {
    
    const { id } = req.params;
    
    const retorno = accountsPayableModel.search(id);
    return retorno
      .then((result) =>
        result.length == 0 
        ? res.status(404).send("Nenhuma contas a pagar encontrada!") 
        : res.status(200).json(result)
      )
      .catch((error) => res.status(400).json(error.message));
  }

  create(req, res) {
    const reqBody = req.body; 
    const retorno = accountsPayableModel.create(reqBody);
    return retorno
      .then((result) =>
        res.status(201).send("Conta a pagar criado com sucesso!")
      )
      .catch((error) => res.status(400).json(error.message));
  }

  update(req, res) {
    const { id } = req.params;
    const reqBody = req.body;
      
    const retorno = accountsPayableModel.update(reqBody, id);
    return retorno
      .then((result) =>
        res.status(200).send("Conta a pagar atualizada com sucesso!")
      )
      .catch((error) => res.status(400).json(error.message));

  }

}

module.exports = new AccountsPayableController();
