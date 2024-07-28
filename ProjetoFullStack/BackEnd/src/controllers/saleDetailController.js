
const saleDetailModel = require("../models/saleDetailModel");


class SaleDetailController {
 
  readList(req, res) {
   
    const retorno = saleDetailModel.readList();
    return retorno
      .then((result) => result.length == 0
        ? res.status(404).send("Nenhuma venda detalhada encontrada!")
        : res.status(200).json(result)
      )
      .catch((error) => res.status(400).json(error.message));
  }

 
  read(req, res) {
    
    const { id } = req.params;
    
    const retorno = saleDetailModel.read(id);
    return retorno
      .then((result) =>
        result.length == 0 
        ? res.status(404).send("Venda detalhada não encontrada!") 
        : res.status(200).json(result)
      )
      .catch((error) => res.status(400).json(error.message));
  }

  create(req, res) {
    const reqBody = req.body; 
    const retorno = saleDetailModel.create(reqBody);
    return retorno
      .then((result) =>
        res.status(201).send("Venda detalhada criada com sucesso!")
      )
      .catch((error) => res.status(400).json(error.message));
  }

  update(req, res) {
    const { id } = req.params;
    const reqBody = req.body;
      
    const retorno = saleDetailModel.update(reqBody, id);
    return retorno
      .then((result) =>
        res.status(200).send("Venda detalhada atualizada com sucesso!")
      )
      .catch((error) => res.status(400).json(error.message));

  }

}

module.exports = new SaleDetailController();
