const Router = require("express").Router;

const router = Router();

const pessoaController = require("../controllers/pessoaController");

router.get("/api/pessoa", pessoaController.apiReadList);

router.get("/api/pessoa/:id", pessoaController.apiRead);

router.post("/api/pessoa", pessoaController.apiCreate);

router.put("/api/pessoa/:id", pessoaController.apiUpdate);

router.delete("/api/pessoa/:id", pessoaController.apiDelete);


router.get("/pessoa/create", pessoaController.viewCreate);

router.get("/pessoa", pessoaController.viewReadList);

router.get("/pessoa/update/:id", pessoaController.viewUpdate);

router.get("/", pessoaController.viewHomePage);

router.post("/pessoa", pessoaController.create);

router.post("/pessoa/:id", pessoaController.update);

router.get("/pessoa/delete/:id", pessoaController.delete);

module.exports = router;
