const express = require('express');
const router = express.Router();
const complaintController = require('../controllers/complaint.controller');

router.get('/', complaintController.getAllComplaints);
router.get('/:id', complaintController.getComplaintById);
router.post('/', complaintController.createComplaint);
router.put('/:id', complaintController.updateComplaint);
router.delete('/:id', complaintController.deleteComplaint);

module.exports = router;
