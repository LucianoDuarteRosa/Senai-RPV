const Router = require("express").Router;

const router = Router();

const tarefaController = require("../controllers/tarefaController");

router.get("/tarefa", tarefaController.readList);

router.get("/tarefa/:id", tarefaController.read);

router.post("/tarefa", tarefaController.create);

router.put("/tarefa/:id", tarefaController.update);

router.delete("/tarefa/:id", tarefaController.delete);

module.exports = router;
