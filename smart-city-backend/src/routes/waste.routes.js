const express = require('express');
const router = express.Router();
const wasteController = require('../controllers/waste.controller');
const { verifyToken, isOfficial } = require('../middleware/auth.middleware');

router.get('/', verifyToken, wasteController.getAllWaste);
router.post('/', verifyToken, isOfficial, wasteController.createWaste);

module.exports = router;
