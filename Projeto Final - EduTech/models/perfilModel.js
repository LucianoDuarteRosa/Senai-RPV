const dbConnection = require('../db/dbConnection');

class PerfilModel {
  
  async executeSQL(sql, parameters = []) {
    return new Promise((resolve, reject) => {
      dbConnection.query(sql, parameters, (error, results) => {
        if (error) {
          return reject(error);
        }
        resolve(results);
      });
    });
  }

  // Método para listar todos os perfis
  async readList() {
    const sql = "SELECT id, perfilUsuario FROM Perfil";
    return this.executeSQL(sql);
  }

  // Método para ler um perfil específico pelo ID
  async read(id) {
    const sql = "SELECT id, perfilUsuario FROM Perfil WHERE id = ?";
    return this.executeSQL(sql, [id]);
  }

  // Método para criar um novo perfil
  async create(perfilUsuario) {
    const sql = "INSERT INTO Perfil (perfilUsuario) VALUES (?)";
    return this.executeSQL(sql, [perfilUsuario]);
  }

  // Método para atualizar um perfil existente
  async update(id, perfilUsuario) {
    const sql = "UPDATE Perfil SET perfilUsuario = ? WHERE id = ?";
    return this.executeSQL(sql, [perfilUsuario, id]);
  }

  // Método para deletar um perfil
  async delete(id) {
    const sql = "DELETE FROM Perfil WHERE id = ?";
    return this.executeSQL(sql, [id]);
  }
}

module.exports = new PerfilModel();
