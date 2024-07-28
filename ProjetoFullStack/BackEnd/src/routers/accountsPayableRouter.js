const Router = require("express").Router;

const router = Router();

const accountsPayableController = require("../controllers/accountsPayableController");

router.get("/payable", accountsPayableController.readList);

router.get("/payable/:id", accountsPayableController.read);

router.get("/payablesearch/:id", accountsPayableController.search);

router.post("/payable", accountsPayableController.create);

router.put("/payable/:id", accountsPayableController.update);

module.exports = router;
