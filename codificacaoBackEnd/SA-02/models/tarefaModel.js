
const dbConnection = require("../db/dbConnection");


class tarefaModel {

  
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
    const sql = "SELECT ID, Descricao, Situacao_Atual,Data_Abertura,Data_Conclusao FROM tarefas";
    return this.executeSQL(sql); 
  }

  read(id) {
    const sql = "SELECT ID, Descricao, Situacao_Atual,Data_Abertura,Data_Conclusao FROM tarefas WHERE ID = ?"; 
    return this.executeSQL(sql, id); 
  }


  create(novaTarefa) {
    const sql = "INSERT INTO tarefas SET ?"; 
    return this.executeSQL(sql, novaTarefa);
  }


  update(updatedTarefa, id) {
    const sql = "UPDATE tarefas SET ? WHERE ID = ?";
    return this.executeSQL(sql, [updatedTarefa, id]); 
  }

  
  delete(id) {
    const sql = "DELETE FROM tarefas WHERE ID = ?"
    return this.executeSQL(sql, id); 
  }

}

module.exports = new tarefaModel();
