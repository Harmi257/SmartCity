const express = require('express');
const router = express.Router();
const controller = require('../controllers/disaster.controller');
const { verifyToken, isOfficial } = require('../middleware/auth.middleware');

router.post('/', verifyToken, isOfficial, controller.create);
router.get('/', verifyToken, controller.getAll);
router.get('/:id', verifyToken, controller.getById);
router.put('/:id', verifyToken, isOfficial, controller.update);
router.delete('/:id', verifyToken, isOfficial, controller.remove);

module.exports = router;
