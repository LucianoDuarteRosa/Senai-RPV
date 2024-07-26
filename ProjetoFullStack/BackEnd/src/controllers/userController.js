
const userModel = require("../models/userModel");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


class UserController {
 
  readList(req, res) {
   
    const retorno = userModel.readList();
    return retorno
      .then((result) => result.length == 0
        ? res.status(404).send("Nenhum usuário encontrado!")
        : res.status(200).json(result)
      )
      .catch((error) => res.status(400).json(error.message));
  }

 
  read(req, res) {
    
    const { id } = req.params;
    
    const retorno = userModel.read(id);
    return retorno
      .then((result) =>
        result.length == 0 
        ? res.status(404).send("Usuário não encontrado!") 
        : res.status(200).json(result)
      )
      .catch((error) => res.status(400).json(error.message));
  }

  search(req, res) {
    
    const { id } = req.params;
    
    const retorno = userModel.search(id);
    return retorno
      .then((result) =>
        result.length == 0 
        ? res.status(404).send("Nenhum usuário encontrado!") 
        : res.status(200).json(result)
      )
      .catch((error) => res.status(400).json(error.message));
  }

  create(req, res) {
    const reqBody = req.body; 
    const retorno = userModel.create(reqBody);
    return retorno
      .then((result) =>
        res.status(201).send("Usuário criado com sucesso!")
      )
      .catch((error) => res.status(400).json(error.message));
  }

  update(req, res) {
    const { id } = req.params;
    const reqBody = req.body;
      
    const retorno = userModel.update(reqBody, id);
    return retorno
      .then((result) =>
        res.status(200).send("Usuário atualizado com sucesso!")
      )
      .catch((error) => res.status(400).json(error.message));

  }

  delete(req, res) {
    const { id } = req.params;
    const retorno = userModel.delete(id);
    return retorno
      .then((result) =>
        res.status(200).send("Usuário deletado com sucesso!")
      )
      .catch((error) => res.status(400).json(error.message));
  }

  async login(req, res) {
    let email = req.body.email;
    let password = req.body.password;
    try {
      const user = await userModel.findByEmail(email);
      if (!user) {
        return res.status(404).json({ message: 'Usuário não encontrado' });
      }

      if (!password) {
        return res.status(400).json({ message: 'Senha não fornecida' });
      }
    
      return res.status(200).json({id: user[0].IdUser, email: user[0].UserEmail, nome: user[0].UserName});
    } catch (error) {
      console.error('Erro durante o login:', error);
      res.status(500).json({ message: 'Erro no servidor' });
    }
  }
  
}

module.exports = new UserController();
