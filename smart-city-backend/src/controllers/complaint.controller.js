const complaintService = require('../services/complaint.service');

exports.getAllComplaints = async (req, res) => {
  try {
    const complaints = await complaintService.getAllComplaints();
    res.json(complaints);
  } catch (err) {
    res.status(500).json({ message: 'Error retrieving complaints' });
  }
};

exports.getComplaintById = async (req, res) => {
  try {
    const complaint = await complaintService.getComplaintById(req.params.id);
    if (!complaint) return res.status(404).json({ message: 'Complaint not found' });
    res.json(complaint);
  } catch (err) {
    res.status(500).json({ message: 'Error retrieving complaint' });
  }
};

exports.createComplaint = async (req, res) => {
  try {
    const newComplaint = await complaintService.createComplaint(req.body);
    res.status(201).json(newComplaint);
  } catch (err) {
    res.status(500).json({ message: 'Error creating complaint' });
  }
};

exports.updateComplaint = async (req, res) => {
  try {
    const updatedComplaint = await complaintService.updateComplaint(req.params.id, req.body);
    if (!updatedComplaint) return res.status(404).json({ message: 'Complaint not found' });
    res.json(updatedComplaint);
  } catch (err) {
    res.status(500).json({ message: 'Error updating complaint' });
  }
};

exports.deleteComplaint = async (req, res) => {
  try {
    const result = await complaintService.deleteComplaint(req.params.id);
    if (result === 0) return res.status(404).json({ message: 'Complaint not found' });
    res.json({ message: 'Complaint deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Error deleting complaint' });
  }
};
