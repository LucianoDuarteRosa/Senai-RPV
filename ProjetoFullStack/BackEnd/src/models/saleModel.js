
const dbConnection = require("../../db/dbConnection");

class SaleModel {
  
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
        Sale.IdSale, 
        Sale.CostPrice, 
        Sale.SalePrice, 
        Sale.IdClientSupplier, 
        ClientSupplier.ClientSupplierName, 
        Sale.IdUser, 
        User.UserName,  
        Sale.SaleDate, 
        Sale.PaymentCondition, 
        Sale.SaleStatus 
      FROM Sale
      JOIN ClientSupplier ON Sale.IdClientSupplier = ClientSupplier.IdClientSupplier 
      JOIN User ON Sale.IdUser = User.IdUser`;
    return this.executeSQL(sql); 
  }
  

  read(id) {
    const sql = `SELECT 
        Sale.IdSale, 
        Sale.CostPrice, 
        Sale.SalePrice, 
        Sale.IdClientSupplier, 
        ClientSupplier.ClientSupplierName, 
        Sale.IdUser, 
        User.UserName,  
        Sale.SaleDate, 
        Sale.PaymentCondition, 
        Sale.SaleStatus 
      FROM Sale
      JOIN ClientSupplier ON Sale.IdClientSupplier = ClientSupplier.IdClientSupplier 
      JOIN User ON Sale.IdUser = User.IdUser 
      WHERE Sale.IdSale = ?`; 
    return this.executeSQL(sql, id); 
  }

  search(parametro) {
    const sql = `
      SELECT 
        Sale.IdSale, 
        Sale.SaleName, 
        Sale.Active,
        ClientSupplier.ClientSupplierName, 
        Sale.IdClientSupplier, 
        Sale.PaymentCondition, 
        Sale.SaleDate, 
        User.UserName 
      FROM Sale
      JOIN ClientSupplier ON Sale.IdClientSupplier = ClientSupplier.IdClientSupplier
      JOIN User ON Sale.IdUser = User.IdUser
      WHERE Sale.IdSale = ? 
        OR Sale.SaleName LIKE ? 
        OR ClientSupplier.ClientSupplierName LIKE ? 
        OR Sale.IdClientSupplier LIKE ? 
        OR Sale.PaymentCondition LIKE ? 
        OR Sale.SaleDate LIKE ? 
        OR User.UserName LIKE ?`;
  
    const values = [
      parametro, 
      `%${parametro}%`, 
      `%${parametro}%`, 
      `%${parametro}%`, 
      `%${parametro}%`, 
      `%${parametro}%`, 
      `%${parametro}%`
    ];
  
    return this.executeSQL(sql, values);
  }  

  create(newSale) {
    const sql = "INSERT INTO Sale SET ?"; 
    return this.executeSQL(sql, newSale);
  }

  update(updateSale, id) {
    const sql = "UPDATE Sale SET ? WHERE IdSale = ?";
    return this.executeSQL(sql, [updateSale, id]); 
  }

}

module.exports = new SaleModel();
