const clientSupplierModel = require('../models/clientSupplierModel')
const validator = require('../../utils/inputsValidator')


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
    const errors = [];
    
    const testIdClientSupplier= validator.integerValidator(id);

    if (testIdClientSupplier !== true) {
      errors.push(testIdClientSupplier);
    }
    if (errors.length > 0) {
      return res.status(400).json({ errors });
    }

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
    const errors = [];

    const testClientSupplierName = validator.allValidator(reqBody.name, 2, 40);
    const testZipCode = validator.zipCodeValidator(reqBody.zipCode);
    const testAddress = validator.allValidator(reqBody.address, 5 , 255);
    const testNumber = validator.integerValidator(reqBody.number);
    const testComplement = validator.allValidator(reqBody.complement, 0, 100);
    const testNeighborhood = validator.allValidator(reqBody.neighborhood, 3, 60);
    const testCity = validator.allValidator(reqBody.city, 0, 100);
    const testState = validator.stringValidator(reqBody.state, 1, 40);
    const testPhone = validator.phoneValidator(reqBody.phone);
    const testEmail = validator.emailValidator(reqBody.email);
    const testActive = validator.booleanValidator(reqBody.active);
    let testCpf;
    let testCnpj

    if(reqBody.isSupplier === true){
      testCnpj = validator.cnpjValidator(testCnpj)
    }

    if(reqBody.isClient === true){
      testCpf = validator.cnpjValidator(testCpf)
    }

    if (testClientSupplierName !== true) {
      errors.push(testClientSupplierName);
    }
    if (testZipCode !== true) {
      errors.push(testZipCode);
    }
    if (testAddress !== true) {
      errors.push(testAddress);
    }
    if (testNumber !== true) {
      errors.push(testNumber);
    }
    if (testComplement !== true) {
      errors.push(testComplement);
    }
    if (testNeighborhood !== true) {
      errors.push(testNeighborhood);
    }
    if (testCity !== true) {
      errors.push(testCity);
    }
    if (testState !== true) {
      errors.push(testState);
    }
    if (testPhone !== true) {
      errors.push(testCity);
    }
    if (testEmail !== true) {
      errors.push(testPhone);
    }
    if (testActive !== true) {
      errors.push(testActive);
    }
    if (testCpf !== true) {
      errors.push(testCpf);
    }
    if (testCnpj !== true) {
      errors.push(testCnpj);
    }
    if (errors.length > 0) {
      return res.status(400).json({ errors });
    }

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
    const errors = [];

    const testClientSupplier = validator.integerValidator(reqBody.idClientSupplier);
    const testClientSupplierName = validator.allValidator(reqBody.name, 2, 40);
    const testZipCode = validator.zipCodeValidator(reqBody.zipCode);
    const testAddress = validator.allValidator(reqBody.address, 5 , 255);
    const testNumber = validator.integerValidator(reqBody.number);
    const testComplement = validator.allValidator(reqBody.complement, 0, 100);
    const testNeighborhood = validator.allValidator(reqBody.neighborhood, 3, 60);
    const testCity = validator.allValidator(reqBody.city, 0, 100);
    const testState = validator.stringValidator(reqBody.state, 1, 40);
    const testPhone = validator.phoneValidator(reqBody.phone);
    const testEmail = validator.emailValidator(reqBody.email);
    const testActive = validator.booleanValidator(reqBody.active);
    let testCpf;
    let testCnpj

    if(reqBody.isSupplier === true){
      testCnpj = validator.cnpjValidator(testCnpj)
    }

    if(reqBody.isClient === true){
      testCpf = validator.cnpjValidator(testCpf)
    }

    if (testClientSupplier !== true) {
      errors.push(testClientSupplier);
    }
    if (testClientSupplierName !== true) {
      errors.push(testClientSupplierName);
    }
    if (testZipCode !== true) {
      errors.push(testZipCode);
    }
    if (testAddress !== true) {
      errors.push(testAddress);
    }
    if (testNumber !== true) {
      errors.push(testNumber);
    }
    if (testComplement !== true) {
      errors.push(testComplement);
    }
    if (testNeighborhood !== true) {
      errors.push(testNeighborhood);
    }
    if (testCity !== true) {
      errors.push(testCity);
    }
    if (testState !== true) {
      errors.push(testState);
    }
    if (testPhone !== true) {
      errors.push(testCity);
    }
    if (testEmail !== true) {
      errors.push(testPhone);
    }
    if (testActive !== true) {
      errors.push(testActive);
    }
    if (testCpf !== true) {
      errors.push(testCpf);
    }
    if (testCnpj !== true) {
      errors.push(testCnpj);
    }
    if (errors.length > 0) {
      return res.status(400).json({ errors });
    }
      
    const retorno = clientSupplierModel.update(reqBody, id);
    return retorno
      .then((result) =>
        res.status(200).send("Cliente/Fornecedor atualizado com sucesso!")
      )
      .catch((error) => res.status(400).json(error.message));

  }

}

module.exports = new ClientSupplierController();
