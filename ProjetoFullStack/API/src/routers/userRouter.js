const Router = require("express").Router;

const router = Router();

const userController = require("../controllers/userController");

router.get("/user", userController.readList);

router.get("/user/:id", userController.read);

router.get("/usersearch/:id", userController.search);

router.post("/user", userController.create);

router.put("/user/:id", userController.update);

router.delete("/user/:id", userController.delete);

router.post('/login', userController.login);

module.exports = router;
