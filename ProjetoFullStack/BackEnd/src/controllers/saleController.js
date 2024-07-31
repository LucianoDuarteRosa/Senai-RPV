
const saleModel = require("../models/saleModel");
const validator = require("../../utils/inputsValidator")


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
    const errors = [];

    const test = validator.integerValidator(id);
    if (test !== true) {
      errors.push(test);
    }
    if (errors.length > 0) {
      return res.status(400).json({ errors });
    }
    
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
    const errors = [];

    const testCostPrice = validator.floatValidator(reqBody.costPrice);
    const testSalePrice = validator.floatValidator(reqBody.salePrice);
    const testIdClientSupplier = validator.integerValidator(reqBody.idClientSupplier);
    const testIdUser = validator.integerValidator(reqBody.idUser);
    const testSaleDate = validator.dateValidator(reqBody.saleDate);
    const testPaymentCondition = validator.stringValidator(reqBody.paymentCondition);
    const testSaleStatus = validator.stringValidator(reqBody.saleStatus);

    if (testCostPrice !== true) {
      errors.push(testCostPrice);
    }
    if (testSalePrice !== true) {
      errors.push(testSalePrice);
    }
    if (testIdClientSupplier !== true) {
      errors.push(testIdClientSupplier);
    }
    if (testIdUser !== true) {
      errors.push(testIdUser);
    }
    if (testSaleDate !== true) {
      errors.push(testSaleDate);
    }
    if (testPaymentCondition !== true) {
      errors.push(testPaymentCondition);
    }
    if (testSaleStatus !== true) {
      errors.push(testSaleStatus);
    }
    if (errors.length > 0) {
      return res.status(400).json({ errors });
    }

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
    const errors = [];

    const testId = validator.integerValidator(reqBody.id)
    const testCostPrice = validator.floatValidator(reqBody.costPrice);
    const testSalePrice = validator.floatValidator(reqBody.salePrice);
    const testIdClientSupplier = validator.integerValidator(reqBody.idClientSupplier);
    const testIdUser = validator.integerValidator(reqBody.idUser);
    const testSaleDate = validator.dateValidator(reqBody.saleDate);
    const testPaymentCondition = validator.stringValidator(reqBody.paymentCondition);
    const testSaleStatus = validator.stringValidator(reqBody.saleStatus);

    if (testId !== true) {
      errors.push(testId);
    }
    if (testCostPrice !== true) {
      errors.push(testCostPrice);
    }
    if (testSalePrice !== true) {
      errors.push(testSalePrice);
    }
    if (testIdClientSupplier !== true) {
      errors.push(testIdClientSupplier);
    }
    if (testIdUser !== true) {
      errors.push(testIdUser);
    }
    if (testSaleDate !== true) {
      errors.push(testSaleDate);
    }
    if (testPaymentCondition !== true) {
      errors.push(testPaymentCondition);
    }
    if (testSaleStatus !== true) {
      errors.push(testSaleStatus);
    }
    if (errors.length > 0) {
      return res.status(400).json({ errors });
    }
      
    const retorno = saleModel.update(reqBody, id);
    return retorno
      .then((result) =>
        res.status(200).send("Venda atualizada com sucesso!")
      )
      .catch((error) => res.status(400).json(error.message));

  }
}

module.exports = new SaleController();
