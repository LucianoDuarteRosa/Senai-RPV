
const productModel = require("../models/productModel");


class ProductController {
 
  readList(req, res) {
   
    const retorno = productModel.readList();
    return retorno
      .then((result) => result.length == 0
        ? res.status(404).send("Nenhum produto encontrado!")
        : res.status(200).json(result)
      )
      .catch((error) => res.status(400).json(error.message));
  }

 
  read(req, res) {
    
    const { id } = req.params;
    
    const retorno = productModel.read(id);
    return retorno
      .then((result) =>
        result.length == 0 
        ? res.status(404).send("Produto não encontrado!") 
        : res.status(200).json(result)
      )
      .catch((error) => res.status(400).json(error.message));
  }

  search(req, res) {
    
    const { id } = req.params;
    
    const retorno = productModel.search(id);
    return retorno
      .then((result) =>
        result.length == 0 
        ? res.status(404).send("Nenhum produto encontrado!") 
        : res.status(200).json(result)
      )
      .catch((error) => res.status(400).json(error.message));
  }

  create(req, res) {
    const reqBody = req.body; 
    const retorno = productModel.create(reqBody);
    return retorno
      .then((result) =>
        res.status(201).send("Produto criado com sucesso!")
      )
      .catch((error) => res.status(400).json(error.message));
  }

  update(req, res) {
    const { id } = req.params;
    const reqBody = req.body;
      
    const retorno = productModel.update(reqBody, id);
    return retorno
      .then((result) =>
        res.status(200).send("Produto atualizado com sucesso!")
      )
      .catch((error) => res.status(400).json(error.message));

  }

  delete(req, res) {
    const { id } = req.params;
    const retorno = productModel.delete(id);
    return retorno
      .then((result) =>
        res.status(200).send("Produto deletado com sucesso!")
      )
      .catch((error) => res.status(400).json(error.message));
  }
  
}

module.exports = new ProductController();
