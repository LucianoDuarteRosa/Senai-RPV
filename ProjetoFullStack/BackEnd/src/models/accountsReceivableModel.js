
const dbConnection = require("../../db/dbConnection");

class AccountsReceivableModel {

  executeSQL(sql, parametros = "") {

    return new Promise(function (resolve, reject) {


      dbConnection.query(sql, parametros, function (error, resposta) {

        if (error) {
          return reject(error);
        }

        return resolve(resposta);
      });

    }
    );
  }

  readList() {
    const sql = `SELECT 
        AccountsReceivable.IdAccountReceivable, 
        AccountsReceivable.Amount, 
        AccountsReceivable.IdClientSupplier,
        ClientSupplier.ClientSupplierName,
        AccountsReceivable.RegistrationDate, 
        AccountsReceivable.DueDate, 
        AccountsReceivable.Note, 
        AccountsReceivable.Paid, 
        AccountsReceivable.IdSale, 
        Sale.SalePrice,
        Sale.SaleDate,
        Sale.IdUser,
        User.UserName
      FROM AccountsReceivable
      JOIN Sale ON AccountsReceivable.IdSale = Sale.IdSale
      JOIN User ON Sale.IdUser = User.IdUser
      JOIN ClientSupplier ON AccountsReceivable.IdClientSupplier = ClientSupplier.IdClientSupplier`;
    return this.executeSQL(sql);
  }


  read(id) {
    const sql = `SELECT
        AccountsReceivable.IdAccountReceivable, 
        AccountsReceivable.Amount, 
        AccountsReceivable.IdClientSupplier,
        ClientSupplier.ClientSupplierName,
        AccountsReceivable.RegistrationDate, 
        AccountsReceivable.DueDate, 
        AccountsReceivable.Note, 
        AccountsReceivable.Paid, 
        AccountsReceivable.IdSale, 
        Sale.SalePrice,
        Sale.SaleDate,
        Sale.IdUser,
        User.UserName
      FROM AccountsReceivable
      JOIN Sale ON AccountsReceivable.IdSale = Sale.IdSale
      JOIN User ON Sale.IdUser = User.IdUser
      JOIN ClientSupplier ON AccountsReceivable.IdClientSupplier = ClientSupplier.IdClientSupplier
      WHERE AccountsReceivable.IdAccountReceivable = ?`;
    return this.executeSQL(sql, id);
  }

  search(parametro) {
    const sql = `
      SELECT 
        AccountsReceivable.IdAccountReceivable, 
        AccountsReceivable.Amount, 
        AccountsReceivable.IdClientSupplier,
        ClientSupplier.ClientSupplierName,
        AccountsReceivable.RegistrationDate, 
        AccountsReceivable.DueDate, 
        AccountsReceivable.Note, 
        AccountsReceivable.Paid, 
        AccountsReceivable.IdSale, 
        Sale.SalePrice,
        Sale.SaleDate,
        Sale.IdUser,
        User.UserName
      FROM AccountsReceivable
      JOIN Sale ON AccountsReceivable.IdSale = Sale.IdSale
      JOIN User ON Sale.IdUser = User.IdUser
      JOIN ClientSupplier ON AccountsReceivable.IdClientSupplier = ClientSupplier.IdClientSupplier
      WHERE AccountsReceivable.IdAccountReceivable = ? 
        OR ClientSupplier.ClientSupplierName LIKE ? 
        OR User.UserName LIKE ? 
        OR AccountsReceivable.Note LIKE ? 
        OR AccountsReceivable.DueDate LIKE ? 
        OR AccountsReceivable.Amount LIKE ?`;
    const values = [parametro, `%${parametro}%`, `%${parametro}%`, `%${parametro}%`, `%${parametro}%`, `%${parametro}%`];
    return this.executeSQL(sql, values);
  }

  create(newAccountsReceivable) {
    const sql = "INSERT INTO AccountsReceivable SET ?";
    return this.executeSQL(sql, newAccountsReceivable);
  }

  update(updateAccountsReceivable, id) {
    const sql = "UPDATE AccountsReceivable SET ? WHERE IdAccountsReceivable = ?";
    return this.executeSQL(sql, [updateAccountsReceivable, id]);
  }
}

module.exports = new AccountsReceivableModel();
