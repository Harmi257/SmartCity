const complaintRepo = require('../repositories/complaint.repository');

const createComplaint = async (data) => {
  return await complaintRepo.create(data);
};

const getAllComplaints = async () => {
  return await complaintRepo.findAll();
};

const getComplaintById = async (id) => {
  return await complaintRepo.findById(id);
};

const updateComplaint = async (id, data) => {
  return await complaintRepo.update(id, data);
};

const deleteComplaint = async (id) => {
  return await complaintRepo.remove(id);
};

module.exports = {
  createComplaint,
  getAllComplaints,
  getComplaintById,
  updateComplaint,
  deleteComplaint,
};
