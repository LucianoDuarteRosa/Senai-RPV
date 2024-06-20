const perfilModel = require("../models/perfilModel");

class PerfilController {

//Criar alerts melhores   <<------------------ a corrigir

// Integração Front End x Back End

  viewCreate(req, res) {
    return res.status(200).render(".perfil//perfil_create", { title: "Novo perfil"});
  }
  
  viewReadList(req, res) {
    const perfilList = perfilModel.readList();
    return perfilList
      .then((result) =>
        result.length == 0
          ? res.status(404).render("./perfil/perfil_read", { title: "Tarefas", perfilList: result, search: '' })
          : res.status(200).render("./perfil/perfil_read", { title: "Tarefas", perfilList: result, search: '' })
      )
      .catch((error) => res.status(400).send(error.message));  
  }

  viewUpdate(req, res) {
    const { id } = req.params;
    const perfil = perfilModel.read(id);
    return perfil
      .then((result) =>
        result.length == 0
          ? res.status(404).redirect("/")
          : res.status(200).render("./perfil/perfil_update", { title: "Atualizar perfil", perfil: result })
      )
      .catch((error) => res.status(400).send(error.message));  
  }

 
  viewHomePage(req, res) {
    return res.status(200).render("./index", { title: "Página Inicial"});
  }

  create(req, res) {
    const novoPerfil = req.body;
    const perfil = perfilModel.create(novoPerfil);
    return perfil
      .then((result) => res.status(201).send("<script> alert('Tarefa criada com sucesso!'); window.location='/perfil' </script>"))
      .catch((error) => res.status(400).send(error.message));    
  }


  update(req, res) {
    const { id } = req.params;
    const updatedTPerfil = req.body;
    const perfil = perfilModel.update(updatedTPerfil, id);
    return perfil
      .then((result) => res.status(200).send("<script> alert('Tarefas atualizada com sucesso!'); window.location='../../perfil' </script>"))
      .catch((error) => res.status(400).send(error.message));   
  }

  delete(req, res) {
    const { id } = req.params;
    const perfil = perfilModel.delete(id);
    return perfil
      .then((result) => res.status(200).send("<script> alert('Tarefas excluída com sucesso!'); window.location='../../perfil' </script>"))
      .catch((error) => res.status(400).send(error.message));  
  }

}

module.exports = new PerfilController();
