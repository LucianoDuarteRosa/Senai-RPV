const accountsPayableModel = require("../models/accountsPayableModel");
const validator = require('../../utils/inputsValidator');

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
    const errors = [];

    const testId = validator.integerValidator(id);

    if (testId !== true) {
      errors.push(testId);
    }
    if (errors.length > 0) {
      return res.status(400).json({ errors });
    }

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
    const errors = [];

    const testAmount = validator.floatValidator(reqBody.amount);
    const testIdSale = validator.integerValidator(reqBody.idSale);
    const testIdClientSupplier = validator.integerValidator(reqBody.idClientSupplier);
    const testRegistrationDate = validator.dateValidator(reqBody.registrationDate);
    const testDueDate = validator.integerValidator(reqBody.dueDate);
    const testPaid = validator.booleanValidator(reqBody.Paid);

    if (testAmount !== true) {
      errors.push(testAmount);
    }
    if (testIdSale !== true) {
      errors.push(testIdSale);
    }
    if (testIdClientSupplier !== true) {
      errors.push(testIdClientSupplier);
    }
    if (testRegistrationDate !== true) {
      errors.push(testRegistrationDate);
    }
    if (testDueDate !== true) {
      errors.push(testDueDate);
    }
    if (testPaid !== true) {
      errors.push(testPaid);
    }
    if (errors.length > 0) {
      return res.status(400).json({ errors });
    }

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
    const errors = [];

    const testIdAccountsPayable = validator.integerValidator(reqBody.idAccountsPayable);
    const testAmount = validator.floatValidator(reqBody.amount);
    const testIdSale = validator.integerValidator(reqBody.idSale);
    const testIdClientSupplier = validator.integerValidator(reqBody.idClientSupplier);
    const testRegistrationDate = validator.dateValidator(reqBody.registrationDate);
    const testDueDate = validator.integerValidator(reqBody.dueDate);
    const testPaid = validator.booleanValidator(reqBody.Paid);

    if (testIdAccountsPayable !== true) {
      errors.push(testIdAccountsPayable);
    }
    if (testAmount !== true) {
      errors.push(testAmount);
    }
    if (testIdSale !== true) {
      errors.push(testIdSale);
    }
    if (testIdClientSupplier !== true) {
      errors.push(testIdClientSupplier);
    }
    if (testRegistrationDate !== true) {
      errors.push(testRegistrationDate);
    }
    if (testDueDate !== true) {
      errors.push(testDueDate);
    }
    if (testPaid !== true) {
      errors.push(testPaid);
    }
    if (errors.length > 0) {
      return res.status(400).json({ errors });
    }

    const retorno = accountsPayableModel.update(reqBody, id);
    return retorno
      .then((result) =>
        res.status(200).send("Conta a pagar atualizada com sucesso!")
      )
      .catch((error) => res.status(400).json(error.message));

  }

}

module.exports = new AccountsPayableController();
