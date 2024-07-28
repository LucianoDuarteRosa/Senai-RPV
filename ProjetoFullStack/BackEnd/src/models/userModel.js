
const dbConnection = require("../../db/dbConnection");

class UserModel {
  
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
      const sql = `SELECT User.IdUser, User.UserName, User.UserEmail, User.Active, User.IdProfile, Profile.UserProfile FROM  User 
      JOIN Profile ON User.IdProfile = Profile.IdProfile
    `;
    return this.executeSQL(sql); 
  }

  read(id) {
    const sql = "SELECT User.IdUser, User.UserName, User.UserEmail, User.Active, User.IdProfile, Profile.UserProfile FROM  User JOIN Profile ON User.IdProfile = Profile.IdProfile WHERE User.IdUser = ?"; 
    return this.executeSQL(sql, id); 
  }

  findByEmail(email){
    const sql = "SELECT IdUser, UserName, UserEmail, Active, IdProfile, Password FROM  User  WHERE UserEmail = ?"; 
    return this.executeSQL(sql, email); 
  }

  search(parametro) {
    const sql = `
      SELECT User.IdUser, User.UserName, User.UserEmail, User.Active, User.IdProfile, Profile.UserProfile 
      FROM User 
      JOIN Profile ON User.IdProfile = Profile.IdProfile 
      WHERE User.IdUser = ? OR User.UserName LIKE ? OR User.UserEmail LIKE ?`;
    const values = [parametro, `%${parametro}%`, `%${parametro}%`];
    return this.executeSQL(sql, values);
  }

  create(newUser) {
    const sql = "INSERT INTO User SET ?"; 
    return this.executeSQL(sql, newUser);
  }

  update(updateUser, id) {
    const sql = "UPDATE User SET ? WHERE IdUser = ?";
    return this.executeSQL(sql, [updateUser, id]); 
  }

}

module.exports = new UserModel();
