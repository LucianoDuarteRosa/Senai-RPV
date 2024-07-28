
const saleModel = require("../models/saleModel");


class SaleController {
 
  readList(req, res) {
   
    const retorno = saleModel.readList();
    return retorno
      .then((result) => result.length == 0
        ? res.status(404).send("Nenhuma venda encontrada!")
        : res.status(200).json(result)
      )
      .catch((error) => res.status(400).json(error.message));
  }

 
  read(req, res) {
    
    const { id } = req.params;
    
    const retorno = saleModel.read(id);
    return retorno
      .then((result) =>
        result.length == 0 
        ? res.status(404).send("Venda não encontrada!") 
        : res.status(200).json(result)
      )
      .catch((error) => res.status(400).json(error.message));
  }

  search(req, res) {
    
    const { id } = req.params;
    
    const retorno = saleModel.search(id);
    return retorno
      .then((result) =>
        result.length == 0 
        ? res.status(404).send("Nenhuma venda encontrada!") 
        : res.status(200).json(result)
      )
      .catch((error) => res.status(400).json(error.message));
  }

  create(req, res) {
    const reqBody = req.body; 
    const retorno = saleModel.create(reqBody);
    return retorno
      .then((result) =>
        res.status(201).send("Venda criada com sucesso!")
      )
      .catch((error) => res.status(400).json(error.message));
  }

  update(req, res) {
    const { id } = req.params;
    const reqBody = req.body;
      
    const retorno = saleModel.update(reqBody, id);
    return retorno
      .then((result) =>
        res.status(200).send("Venda atualizada com sucesso!")
      )
      .catch((error) => res.status(400).json(error.message));

  }
}

module.exports = new SaleController();
