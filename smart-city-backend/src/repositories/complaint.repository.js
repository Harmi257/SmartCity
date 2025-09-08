const db = require('../models');
const Complaint = db.Complaint;

const ComplaintRepository = {
  async create(data) {
    return await Complaint.create(data);
  },

  async findAll() {
    return await Complaint.findAll();
  },

  async findById(id) {
    return await Complaint.findByPk(id);
  },

  async update(id, data) {
    const complaint = await Complaint.findByPk(id);
    if (!complaint) return null;
    return await complaint.update(data);
  },

  async remove(id) {
    return await Complaint.destroy({ where: { id } });
  }
};

module.exports = ComplaintRepository;
