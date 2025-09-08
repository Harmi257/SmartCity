const transportRepo = require('../repositories/transport.repository');

const createTransport = async (data) => {
  return await transportRepo.create(data);
};

const getAllTransports = async () => {
  return await transportRepo.findAll();
};

const getTransportById = async (id) => {
  return await transportRepo.findById(id);
};

const updateTransport = async (id, data) => {
  return await transportRepo.update(id, data);
};

const deleteTransport = async (id) => {
  return await transportRepo.remove(id);
};

module.exports = {
  createTransport,
  getAllTransports,
  getTransportById,
  updateTransport,
  deleteTransport,
};
