const express = require('express');
const router = express.Router();
const crimeController = require('../controllers/crime.controller');

router.post('/', crimeController.createCrime);
router.get('/', crimeController.getAllCrimes);

module.exports = router;
