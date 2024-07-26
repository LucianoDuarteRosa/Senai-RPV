const express = require('express');
const router = express.Router();
const exportController = require('../controllers/exportController');

router.get('/export/alltables', exportController.alltables);

module.exports = router;
