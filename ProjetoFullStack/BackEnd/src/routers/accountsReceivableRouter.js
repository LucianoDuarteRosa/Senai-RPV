const Router = require("express").Router;

const router = Router();

const accountsReceivableController = require("../controllers/accountsReceivableController");

router.get("/receivable", accountsReceivableController.readList);

router.get("/receivable/:id", accountsReceivableController.read);

router.get("/receivablesearch/:id", accountsReceivableController.search);

router.post("/receivable", accountsReceivableController.create);

router.put("/receivable/:id", accountsReceivableController.update);

router.delete("/receivable/:id", accountsReceivableController.delete);

module.exports = router;
