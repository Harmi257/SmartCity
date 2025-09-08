const crimeRepo = require('../repositories/crime.repository');

const createCrime = async (data) => {
  return await crimeRepo.create(data);
};

const getAllCrimes = async () => {
  return await crimeRepo.findAll();
};

const getCrimeById = async (id) => {
  return await crimeRepo.findById(id);
};

const updateCrime = async (id, data) => {
  return await crimeRepo.update(id, data);
};

const deleteCrime = async (id) => {
  return await crimeRepo.remove(id);
};

module.exports = {
  createCrime,
  getAllCrimes,
  getCrimeById,
  updateCrime,
  deleteCrime,
};
