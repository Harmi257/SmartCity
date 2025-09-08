const wasteRepo = require('../repositories/waste.repository');

const createWaste = async (data) => {
  return await wasteRepo.create(data);
};

const getAllWaste = async () => {
  return await wasteRepo.findAll();
};

const getWasteById = async (id) => {
  return await wasteRepo.findById(id);
};

const updateWaste = async (id, data) => {
  return await wasteRepo.update(id, data);
};

const deleteWaste = async (id) => {
  return await wasteRepo.remove(id);
};

module.exports = {
  createWaste,
  getAllWaste,
  getWasteById,
  updateWaste,
  deleteWaste,
};
