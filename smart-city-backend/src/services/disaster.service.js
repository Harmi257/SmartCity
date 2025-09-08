const DisasterRepository = require('../repositories/disaster.repository');

const createDisaster = async (data) => await DisasterRepository.create(data);
const getAllDisasters = async () => await DisasterRepository.findAll();
const getDisasterById = async (id) => await DisasterRepository.findById(id);
const updateDisaster = async (id, data) => await DisasterRepository.update(id, data);
const deleteDisaster = async (id) => await DisasterRepository.remove(id);

module.exports = {
  createDisaster,
  getAllDisasters,
  getDisasterById,
  updateDisaster,
  deleteDisaster,
};
