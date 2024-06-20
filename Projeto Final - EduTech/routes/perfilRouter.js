// não implementado

const Router = require("express").Router;

const router = Router();

const perfilController = require("../controllers/perfilController");

// ----------------------------------------------------------------------------------------------
// Integração Front End x Back End
// ----------------------------------------------------------------------------------------------


router.get("/perfil/create", perfilController.viewCreate);

router.get("/perfil", perfilController.viewReadList);

router.get("/perfil/update/:id", perfilController.viewUpdate);

router.get("/", perfilController.viewHomePage);

router.post("/perfil", perfilController.create);

router.post("/perfil/:id", perfilController.update);

router.get("/perfil/delete/:id", perfilController.delete);

module.exports = router;
