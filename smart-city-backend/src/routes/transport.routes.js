const express = require('express');
const router = express.Router();
const transportController = require('../controllers/transport.controller');
const { verifyToken, isOfficial } = require('../middleware/auth.middleware');

router.get('/', verifyToken, transportController.getAllTransports);
router.post('/', verifyToken, isOfficial, transportController.createTransport);

module.exports = router;
