
const dbConnection = require("../db/dbConnection");

class tarefaModel {


  executeSQL(sql, parameters = "") {

    return new Promise( function (resolve, reject) {
        
        dbConnection.query(sql, parameters, function (error, resposta) {
          if (error) {
            return reject(error);
          }
          return resolve(resposta);
        });

      }
    );
  }


  apiReadList() {
    const sql = "SELECT ID, Nome, Descricao, Data_Inicio, Data_Termino, Finalizado FROM Tarefas"; 
    return this.executeSQL(sql); 
  }

  apiRead(id) {
    const sql = "SELECT ID, Nome, Descricao, Data_Inicio, Data_Termino, Finalizado FROM Tarefas WHERE ID = ?"; 
    return this.executeSQL(sql, id); 
  }


  apiCreate(novaTarefa) {
    const sql = "INSERT INTO Tarefas SET ?"; 
    return this.executeSQL(sql, novaTarefa); o
  }


  apiUpdate(updatedTarefa, id) {
    const sql = "UPDATE Tarefas SET ? WHERE ID = ?"; 
    return this.executeSQL(sql, [updatedTarefa, id]); 
  }


  apiDelete(id) {
    const sql = "DELETE FROM Tarefas WHERE ID = ?"; 
    return this.executeSQL(sql, id); 
  }

  
  // ----------------------------------------------------------------------------------------------

  readList() {
    const sql = "SELECT ID, Nome, Descricao, Data_Inicio, Data_Termino, Finalizado FROM Tarefas"; 
    return this.executeSQL(sql);
  }

  read(id) {
    const sql = "SELECT ID, Nome, Descricao, Data_Inicio, Data_Termino, Finalizado FROM Tarefas WHERE ID = ?"; 
    return this.executeSQL(sql, id);
  }

  create(novaTarefa) {
    const sql = "INSERT INTO Tarefas (Nome, Descricao, Data_Inicio, Data_Termino, Finalizado) VALUES (?, ?, ?, ?, ?)"; 
    let values;
    if(novaTarefa.Finalizado == false || novaTarefa.Finalizado == "" || novaTarefa.Finalizado== null){
       values = [novaTarefa.Nome.toUpperCase(), novaTarefa.Descricao.toUpperCase(),  this.getCurrentDateTime(), novaTarefa.Data_Termino, false];
    }else{
       values = [novaTarefa.Nome.toUpperCase(), novaTarefa.Descricao.toUpperCase(),  novaTarefa.Data_Inicio, this.getCurrentDateTime(), true];
    }
     
    return this.executeSQL(sql, values);
  }

  update(updatedTarefa, id) {
    let sql = '';
    let values = '';
    if(updatedTarefa.Finalizado == true){
      sql = "UPDATE Tarefas SET Nome = ?, Descricao = ?, Data_Termino = ?, Finalizado = ? WHERE ID = ?";
      values = [updatedTarefa.Nome.toUpperCase(), updatedTarefa.Descricao.toUpperCase(), this.getCurrentDateTime(), updatedTarefa.Finalizado, id];
    }else{
      sql = "UPDATE Tarefas SET Nome = ?, Descricao = ?, Data_Termino = ?, Finalizado = ? WHERE ID = ?";
      values = [updatedTarefa.Nome.toUpperCase(), updatedTarefa.Descricao.toUpperCase(), null, false, id];
    }
    return this.executeSQL(sql, values);
  }

  delete(id) {
    const sql = "DELETE FROM Tarefas WHERE ID = ?";
    return this.executeSQL(sql, id);
  }

  search(pesquisa){
    const sql = "SELECT ID, Nome, Descricao, Data_Inicio, Data_Termino, Finalizado FROM Tarefas WHERE Nome like ? or Descricao like ? or Data_Inicio like ? or Data_Termino like ? ";
    return this.executeSQL(sql, [pesquisa, pesquisa, pesquisa, pesquisa]);    
  }

  getCurrentDateTime() {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');

    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
  }
}

module.exports = new tarefaModel();
