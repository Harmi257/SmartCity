const express = require('express');
const router = express.Router();
const utilityController = require('../controllers/utility.controller');
const { verifyToken, isOfficial } = require('../middleware/auth.middleware');

router.post('/', verifyToken, isOfficial, utilityController.createUtility);
router.get('/', verifyToken, utilityController.getAllUtilities);
router.get('/filter', verifyToken, utilityController.getUtilitiesByArea);
router.put('/:id', verifyToken, isOfficial, utilityController.updateUtility);
router.delete('/:id', verifyToken, isOfficial, utilityController.deleteUtility);

module.exports = router;
