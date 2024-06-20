
const dbConnection = require("../db/dbConnection");


class pessoaModel {

  
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


  apiReadList() {
    const sql = "SELECT ID, Nome, Idade,Casado FROM pessoas";
    return this.executeSQL(sql); 
  }

  apiRead(id) {
    const sql = "SELECT ID, Nome, Idade,Casado FROM pessoas WHERE ID = ?"; 
    return this.executeSQL(sql, id); 
  }


  apiCreate(novaPessoa) {
    const sql = "INSERT INTO pessoas SET ?"; 
    return this.executeSQL(sql, novaPessoa);
  }


  apiUpdate(updatedPessoa, id) {
    const sql = "UPDATE pessoas SET ? WHERE ID = ?";
    return this.executeSQL(sql, [updatedPessoa, id]); 
  }

  
  apiDelete(id) {
    const sql = "DELETE FROM pessoas WHERE ID = ?"
    return this.executeSQL(sql, id); 
  }



  
  readList() {
    const sql = "SELECT ID, Nome, Idade,Casado FROM pessoas";
    return this.executeSQL(sql); 
  }

  read(id) {
    const sql = "SELECT ID, Nome, Idade,Casado FROM pessoas WHERE ID = ?"; 
    return this.executeSQL(sql, id); 
  }


  create(novaPessoa) {
    const sql = "INSERT INTO pessoas (Nome, Idade, Casado) VALUES (?,?,?)"; 
    const values = [novaPessoa.Nome, novaPessoa.Idade, novaPessoa.Casado]
    return this.executeSQL(sql, values);
  }


  update(updatedPessoa, id) {
    const sql = "UPDATE pessoas SET Nome = ?, Idade = ?, Casado = ? WHERE ID = ?";
    const values = [updatedPessoa.Nome, updatedPessoa.Idade, updatedPessoa.Casado, id]
    return this.executeSQL(sql, values); 
  }

  
  delete(id) {
    const sql = "DELETE FROM pessoas WHERE ID = ?"
    return this.executeSQL(sql, id); 
  }

}

module.exports = new pessoaModel();
