const Router = require("express").Router;

const router = Router();

const productController = require("../controllers/productController");

router.get("/product", productController.readList);

router.get("/product/:id", productController.read);

router.get("/productsearch/:id", productController.search);

router.post("/product", productController.create);

router.put("/product/:id", productController.update);

module.exports = router;
