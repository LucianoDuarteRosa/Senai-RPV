const Router = require("express").Router;

const router = Router();

const usuarioController = require("../controllers/UsuarioController");

router.get("/usuario", usuarioController.readList);

router.get("/usuario/:id", usuarioController.read);

router.get("/usuariosearch/:id", usuarioController.search);

router.post("/usuario", usuarioController.create);

router.put("/usuario/:id", usuarioController.update);

router.delete("/usuario/:id", usuarioController.delete);

module.exports = router;
