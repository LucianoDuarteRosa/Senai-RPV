const accountsReceivableModel = require("../models/accountsReceivableModel");
const validator = require("../../utils/inputsValidator");


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
    const errors = [];

    const testId = validator.integerValidator(id);

    if (testId !== true) {
      errors.push(testId);
    }
    if (errors.length > 0) {
      return res.status(400).json({ errors });
    }

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
    const errors = [];

    const testIdAccountsReceivable = validator.integerValidator(reqBody.idAccountsReceivable);
    const testAmount = validator.floatValidator(reqBody.amount);
    const testIdSale = validator.integerValidator(reqBody.idSale);
    const testIdClientSupplier = validator.integerValidator(reqBody.idClientSupplier);
    const testRegistrationDate = validator.dateValidator(reqBody.registrationDate);
    const testDueDate = validator.integerValidator(reqBody.dueDate);
    const testPaid = validator.booleanValidator(reqBody.Paid);

    if (testIdAccountsReceivable !== true) {
      errors.push(testIdAccountsReceivable);
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

    const retorno = accountsReceivableModel.update(reqBody, id);
    return retorno
      .then((result) =>
        res.status(200).send("Conta a receber atualizada com sucesso!")
      )
      .catch((error) => res.status(400).json(error.message));

  }
}

module.exports = new AccountsReceivableController();
