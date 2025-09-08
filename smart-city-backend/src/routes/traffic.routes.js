const express = require('express');
const router = express.Router();
const trafficController = require('../controllers/traffic.controller');
const { verifyToken, isOfficial } = require('../middleware/auth.middleware');

router.get('/', verifyToken, trafficController.getAllTraffic);
router.post('/', verifyToken, isOfficial, trafficController.createTraffic);
router.get('/:area', verifyToken, trafficController.getTrafficByArea);

module.exports = router;
