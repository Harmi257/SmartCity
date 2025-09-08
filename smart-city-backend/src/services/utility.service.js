const db = require('../models');
const Utility = db.Utility;


const createUtility = async (utilityData) => {
  return await Utility.create(utilityData);
};

const getAllUtilities = async () => {
  return await Utility.findAll();
};

const getUtilitiesByArea = async (area) => {
  if (area) {
    return await Utility.findAll({ where: { area } });
  }
  return await Utility.findAll();
};

const updateUtility = async (id, updatedData) => {
  const [updated] = await Utility.update(updatedData, {
    where: { id },
  });
  return updated; // returns 0 if not updated, 1 if successful
};

const deleteUtility = async (id) => {
  return await Utility.destroy({
    where: { id },
  });
};

module.exports = {
  createUtility,
  getAllUtilities,
  getUtilitiesByArea,
  updateUtility,
  deleteUtility,
};
