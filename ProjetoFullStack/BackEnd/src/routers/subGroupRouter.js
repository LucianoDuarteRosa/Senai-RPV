const Router = require("express").Router;

const router = Router();

const subGroupController = require("../controllers/subGroupController");

router.get("/subgroup", subGroupController.readList);

router.get("/subgroup/:id", subGroupController.read);

router.get("/subgroupsearch/:id", subGroupController.search);

router.post("/subgroup", subGroupController.create);

router.put("/subgroup/:id", subGroupController.update);

module.exports = router;
