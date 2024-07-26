const Router = require("express").Router;

const router = Router();

const profileController = require("../controllers/profileController");

router.get("/profile", profileController.readList);

module.exports = router;
