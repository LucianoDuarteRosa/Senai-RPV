
const dbConnection = require("../../db/dbConnection");


class ClientSupplierModel {


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
    const sql = "SELECT IdClientSupplier, ClientSupplierName, Cpf, Cnpj, ZipCode, Address, Number, Complement, Neighborhood, City, State, Phone, Email, IsClient, IsSupplier, PixKey, Active FROM ClientSupplier";
    return this.executeSQL(sql);
  }

  read(id) {
    const sql = "SELECT IdClientSupplier, ClientSupplierName, Cpf, Cnpj, ZipCode, Address, Number, Complement, Neighborhood, City, State, Phone, Email, IsClient, IsSupplier, PixKey, Active FROM ClientSupplier WHERE IdClientSupplier = ?";
    return this.executeSQL(sql, id);
  }

  search(parametro) {
    const sql = `SELECT IdClientSupplier, ClientSupplierName, Cpf, Cnpj, ZipCode, Address, Number, Complement, Neighborhood, City, State, Phone, Email, IsClient, IsSupplier, PixKey, Active FROM ClientSupplier WHERE IdClientSupplier = ?
    OR IdClientSupplier LIKE ? OR ClientSupplierName LIKE ? OR Address LIKE ? OR Neighborhood LIKE ? OR City LIKE ? OR State LIKE ? OR Phone LIKE ? OR Email LIKE ?`;
    const values = [parametro, `%${parametro}%`, `%${parametro}%`, `%${parametro}%`, `%${parametro}%`, `%${parametro}%`, `%${parametro}%`, `%${parametro}%`, `%${parametro}%`];
    return this.executeSQL(sql, values);
  }

  create(newEspaco) {
    const sql = "INSERT INTO ClientSupplier SET ?";
    return this.executeSQL(sql, newEspaco);
  }

  update(updateEspaco, id) {
    const sql = "UPDATE ClientSupplier SET ? WHERE IdClientSupplier = ?";
    return this.executeSQL(sql, [updateEspaco, id]);
  }

}

module.exports = new ClientSupplierModel();
