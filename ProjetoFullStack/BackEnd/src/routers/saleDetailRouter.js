const Router = require("express").Router;

const router = Router();

const saleDetailController = require("../controllers/saleDetailController");

router.get("/saledetail", saleDetailController.readList);

router.get("/saledetail/:id", saleDetailController.read);

router.post("/saledetail", saleDetailController.create);

router.put("/saledetail/:id", saleDetailController.update);

module.exports = router;
