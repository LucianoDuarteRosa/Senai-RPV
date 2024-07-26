const Router = require("express").Router;

const router = Router();

const groupController = require("../controllers/groupController");

router.get("/group", groupController.readList);

router.get("/group/:id", groupController.read);

router.get("/groupsearch/:id", groupController.search);

router.post("/group", groupController.create);

router.put("/group/:id", groupController.update);

router.delete("/group/:id", groupController.delete);

module.exports = router;
