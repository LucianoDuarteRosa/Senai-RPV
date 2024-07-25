const Router = require("express").Router;

const router = Router();

const imageController = require("../controllers/imageController");

router.get("/image", imageController.readList);

router.get("/image/:id", imageController.read);

router.post("/image", imageController.create);

router.put("/image/:id", imageController.update);

router.delete("/image/:id", imageController.delete);

module.exports = router;
