const Router = require("express").Router;

const router = Router();

const saleController = require("../controllers/saleController");

router.get("/sale", saleController.readList);

router.get("/sale/:id", saleController.read);

router.get("/salesearch/:id", saleController.search);

router.post("/sale", saleController.create);

router.put("/sale/:id", saleController.update);

router.delete("/sale/:id", saleController.delete);

module.exports = router;
