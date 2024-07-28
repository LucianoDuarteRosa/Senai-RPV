
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
    const { name, email, password } = req.body;
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(password, salt);
    let user = { UserName: name, UserEmail: email, Password: hashedPassword };

    const retorno = userModel.create(user);
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

  async login(req, res) {
    let email = req.body.email;
    let password = req.body.password;
    try {
      const user = await userModel.findByEmail(email);
      if (!user[0]) {
        return res.status(404).json({ message: 'Usuário não encontrado' });
      }

      if (!password) {
        return res.status(400).json({ message: 'Senha não fornecida' });
      }

      const isPasswordValid = await bcrypt.compare(password, user[0].Password);

      if (isPasswordValid) {
        const token = jwt.sign({ id: user[0].IdUsuario }, process.env.JWT_SECRET, { expiresIn: '8h' });
        return res.status(200).json({ 
          token: token, 
          id: user[0].IdUsuario, 
          name: user[0].UserName, 
          profile: user[0].IdProfile });
      } else {
        return res.status(400).json({ message: 'Credenciais Inválidas' });
      }
    } catch (error) {
      console.error('Erro durante o login:', error);
      res.status(500).json({ message: 'Erro no servidor' });
    }
  }

}

module.exports = new UserController();
