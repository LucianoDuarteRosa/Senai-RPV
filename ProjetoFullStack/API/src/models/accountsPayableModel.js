
const dbConnection = require("../../db/dbConnection");

class AccountsPayableModel {
  
  executeSQL(sql, parametros = "") {
    
    return new Promise( function (resolve, reject) {
        
       
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
        AccountsPayable.IdAccountPayable, 
        AccountsPayable.Amount, 
        AccountsPayable.IdClientSupplier,
        ClientSupplier.ClientSupplierName,
        AccountsPayable.RegistrationDate, 
        AccountsPayable.DueDate, 
        AccountsPayable.Note, 
        AccountsPayable.Paid, 
        AccountsPayable.IdSale, 
        Sale.SalePrice,
        Sale.SaleDate,
        Sale.IdUser,
        User.UserName
      FROM AccountsPayable
      JOIN Sale ON AccountsPayable.IdSale = Sale.IdSale
      JOIN User ON Sale.IdUser = User.IdUser
      JOIN ClientSupplier ON AccountsPayable.IdClientSupplier = ClientSupplier.IdClientSupplier`;
    return this.executeSQL(sql); 
  }
  

  read(id) {
    const sql =  `SELECT
        AccountsPayable.IdAccountPayable, 
        AccountsPayable.Amount, 
        AccountsPayable.IdClientSupplier,
        ClientSupplier.ClientSupplierName,
        AccountsPayable.RegistrationDate, 
        AccountsPayable.DueDate, 
        AccountsPayable.Note, 
        AccountsPayable.Paid, 
        AccountsPayable.IdSale, 
        Sale.SalePrice,
        Sale.SaleDate,
        Sale.IdUser,
        User.UserName
      FROM AccountsPayable
      JOIN Sale ON AccountsPayable.IdSale = Sale.IdSale
      JOIN User ON Sale.IdUser = User.IdUser
      JOIN ClientSupplier ON AccountsPayable.IdClientSupplier = ClientSupplier.IdClientSupplier
      WHERE AccountsPayable.IdAccountPayable = ?`; 
    return this.executeSQL(sql, id); 
  }

  search(parametro) {
    const sql = `
      SELECT 
        AccountsPayable.IdAccountPayable, 
        AccountsPayable.Amount, 
        AccountsPayable.IdClientSupplier,
        ClientSupplier.ClientSupplierName,
        AccountsPayable.RegistrationDate, 
        AccountsPayable.DueDate, 
        AccountsPayable.Note, 
        AccountsPayable.Paid, 
        AccountsPayable.IdSale, 
        Sale.SalePrice,
        Sale.SaleDate,
        Sale.IdUser,
        User.UserName
      FROM AccountsPayable
      JOIN Sale ON AccountsPayable.IdSale = Sale.IdSale
      JOIN User ON Sale.IdUser = User.IdUser
      JOIN ClientSupplier ON AccountsPayable.IdClientSupplier = ClientSupplier.IdClientSupplier
      WHERE AccountsPayable.IdAccountPayable = ? 
        OR ClientSupplier.ClientSupplierName LIKE ? 
        OR User.UserName LIKE ? 
        OR AccountsPayable.Note LIKE ? 
        OR AccountsPayable.DueDate LIKE ? 
        OR AccountsPayable.Amount LIKE ?`;
    const values = [parametro, `%${parametro}%`, `%${parametro}%`, `%${parametro}%`, `%${parametro}%`, `%${parametro}%`];
    return this.executeSQL(sql, values);
  }  

  create(newAccountsPayable) {
    const sql = "INSERT INTO AccountsPayable SET ?"; 
    return this.executeSQL(sql, newAccountsPayable);
  }

  update(updateAccountsPayable, id) {
    const sql = "UPDATE AccountsPayable SET ? WHERE IdAccountsPayable = ?";
    return this.executeSQL(sql, [updateAccountsPayable, id]); 
  }

  delete(id) {
    const sql = "DELETE FROM AccountsPayable WHERE IdAccountsPayable = ?"
    return this.executeSQL(sql, id); 
  }

}

module.exports = new AccountsPayableModel();
