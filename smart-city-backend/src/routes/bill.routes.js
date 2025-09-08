const express = require('express');
const router = express.Router();
const BillController = require('../controllers/billController');

// Route to create a new bill
router.post('/create', BillController.createBill);

// Route to view a specific bill
router.get('/view/:id', BillController.viewBill);

// Route to pay a bill
router.post('/pay/:id', BillController.payBill);

module.exports = router;
