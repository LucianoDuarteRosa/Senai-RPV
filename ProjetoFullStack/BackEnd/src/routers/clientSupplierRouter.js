const Router = require("express").Router;

const router = Router();

const clientSupplierController = require("../controllers/clientSupplierController");

router.get("/client", clientSupplierController.readList);

router.get("/client/:id", clientSupplierController.read);

router.get("/clientsearch/:id", clientSupplierController.search);

router.post("/client", clientSupplierController.create);

router.put("/client/:id", clientSupplierController.update);

router.delete("/client/:id", clientSupplierController.delete);

module.exports = router;
