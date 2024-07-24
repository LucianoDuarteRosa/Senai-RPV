
const pessoaModel = require("../models/pessoaModel.js");


class PessoaController {
 
  apiReadList(req, res) {
   
    const retorno = pessoaModel.readList();
    return retorno
      .then((result) => result.length == 0
        ? res.status(404).send("Nenhuma pessoa foi encontrada!")
        : res.status(200).json(result)
      )
      .catch((error) => res.status(400).json(error.message));
  }

 
  apiRead(req, res) {
    
    const { id } = req.params;
    
    const retorno = pessoaModel.read(id);
    return retorno
      .then((result) =>
        result.length == 0 
        ? res.status(404).send("Pessoa não encontrada!") 
        : res.status(200).json(result)
      )
      .catch((error) => res.status(400).json(error.message));
  }

  apiCreate(req, res) {
    const reqBody = req.body; 
    const retorno = pessoaModel.create(reqBody);
    return retorno
      .then((result) =>
        res.status(201).send("Pessoa criada com sucesso!")
      )
      .catch((error) => res.status(400).json(error.message));
  }

  apiUpdate(req, res) {
    const { id } = req.params;
    const reqBody = req.body;
      
    const retorno = pessoaModel.update(reqBody, id);
    return retorno
      .then((result) =>
        res.status(200).send("Pessoa atualizada com sucesso!")
      )
      .catch((error) => res.status(400).json(error.message));

  }

  apiDelete(req, res) {
    const { id } = req.params;
    const retorno = pessoaModel.delete(id);
    return retorno
      .then((result) =>
        res.status(200).send("Pessoa deletada com sucesso!")
      )
      .catch((error) => res.status(400).json(error.message));
  }
  //-------------------------------------------------------------------

  viewCreate(req, res) {
    return res.status(200).render("./pessoa/pessoa_create", { title: "Adicionar nova pessoa." });
  }
  
 
  viewReadList(req, res) {
    const pessoaList = pessoaModel.readList();
    return pessoaList
      .then((result) =>
        result.length == 0
          ? res.status(404).render("./pessoa/pessoa_read", { title: "Todas pessoas", pessoa: result })
          : res.status(200).render("./pessoa/pessoa_read", { title: "Todas pessoas", pessoa: result })
      )
      .catch((error) => res.status(400).send(error.message));  
  }

  viewUpdate(req, res) {
    const { id } = req.params;
    const pessoa = pessoaModel.read(id);
    return pessoa
      .then((result) =>
        result.length == 0
          ? res.status(404).redirect("/")
          : res.status(200).render("./pessoa/pessoa_update", { title: "Atualizar pessoa", pessoa: result })
      )
      .catch((error) => res.status(400).send(error.message));  
  }


  viewHomePage(req, res) {
    return res.status(200).render("./index", { title: "Página Inicial"});
  }


  create(req, res) {
    const newPessoa = req.body;

    const pessoa = pessoaModel.create(newPessoa);
    return pessoa
      .then((result) => res.status(201).send("<script> alert('Pessoa criada com sucesso!'); window.location='/pessoa' </script>"))
      .catch((error) => res.status(400).send(error.message));    
  }

 
  update(req, res) {
    const { id } = req.params;
    const updatedPessoa = req.body;
    const pessoa = pessoaModel.update(updatedPessoa, id);
    return pessoa
      .then((result) => res.status(200).send("<script> alert('Pessoa atualizada com sucesso!'); window.location='../../pessoa' </script>"))
      .catch((error) => res.status(400).send(error.message));   
  }


  delete(req, res) {

    const { id } = req.params;
    const pessoa = pessoaModel.delete(id);
    return pessoa
      .then((result) => res.status(200).send("<script> alert('Pessoa excluída com sucesso!'); window.location='../../pessoa' </script>"))
      .catch((error) => res.status(400).send(error.message));  
  }

}

module.exports = new PessoaController();
