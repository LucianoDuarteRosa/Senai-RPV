
const productModel = require("../models/productModel");
const validator = require("../../utils/inputsValidator")

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
    const errors = [];

    const test = validator.integerValidator(id);
    if (test !== true) {
      errors.push(test);
    }

    if (errors.length > 0) {
      return res.status(400).json({ errors });
    }
    
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
    const errors = [];

    const testProductName = validator.allValidator(reqBody.productName, 2,50);
    const testCostPrice = validator.floatValidator(reqBody.costPrice);
    const testSalePrice = validator.floatValidator(reqBody.salePrice);
    const testIdClientSupplier = validator.integerValidator(reqBody.idClientSupplier);
    const testIdStore = validator.integerValidator(reqBody.idStore);
    const testIdSubGroup = validator.integerValidator(reqBody.idSubGroup);
    const testIdUser = validator.integerValidator(reqBody.idUser);
    const testRegistrationDate = validator.dateValidator(reqBody.registrationDate);
    const testActive = validator.booleanValidator(reqBody.active);

    if (testProductName !== true) {
      errors.push(testProductName);
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
    if (testIdStore !== true) {
      errors.push(testIdStore);
    }
    if (testIdSubGroup !== true) {
      errors.push(testIdSubGroup);
    }
    if (testIdUser !== true) {
      errors.push(testIdUser);
    }
    if (testRegistrationDate !== true) {
      errors.push(testRegistrationDate);
    }
    if (testActive !== true) {
      errors.push(testActive);
    }
    if (errors.length > 0) {
      return res.status(400).json({ errors });
    }

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
    const errors = [];

    const testIdProduct = validator.integerValidator(reqBody.idProduct);
    const testProductName = validator.allValidator(reqBody.productName, 2,50);
    const testCostPrice = validator.floatValidator(reqBody.costPrice);
    const testSalePrice = validator.floatValidator(reqBody.salePrice);
    const testIdClientSupplier = validator.integerValidator(reqBody.idClientSupplier);
    const testIdStore = validator.integerValidator(reqBody.idStore);
    const testIdSubGroup = validator.integerValidator(reqBody.idSubGroup);
    const testIdUser = validator.integerValidator(reqBody.idUser);
    const testRegistrationDate = validator.dateValidator(reqBody.registrationDate);
    const testActive = validator.booleanValidator(reqBody.active);

    if (testIdProduct !== true) {
      errors.push(testIdProduct);
    }
    if (testProductName !== true) {
      errors.push(testProductName);
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
    if (testIdStore !== true) {
      errors.push(testIdStore);
    }
    if (testIdSubGroup !== true) {
      errors.push(testIdSubGroup);
    }
    if (testIdUser !== true) {
      errors.push(testIdUser);
    }
    if (testRegistrationDate !== true) {
      errors.push(testRegistrationDate);
    }
    if (testActive !== true) {
      errors.push(testActive);
    }
    if (errors.length > 0) {
      return res.status(400).json({ errors });
    }
      
    const retorno = productModel.update(reqBody, id);
    return retorno
      .then((result) =>
        res.status(200).send("Produto atualizado com sucesso!")
      )
      .catch((error) => res.status(400).json(error.message));

  }

}

module.exports = new ProductController();
