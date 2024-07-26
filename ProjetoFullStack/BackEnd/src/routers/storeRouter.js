const Router = require("express").Router;

const router = Router();

const storeController = require("../controllers/storeController");

router.get("/store", storeController.readList);

router.get("/store/:id", storeController.read);

router.get("/storesearch/:id", storeController.search);

router.post("/store", storeController.create);

router.put("/store/:id", storeController.update);

router.delete("/store/:id", storeController.delete);

module.exports = router;
