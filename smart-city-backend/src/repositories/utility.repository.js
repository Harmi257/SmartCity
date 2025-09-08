const db = require('../models');
const Utility = db.Utility;

const getAllUtilities = async () => {
  return await Utility.findAll();
};

const createUtility = async (data) => {
  return await Utility.create(data);
};

const getUtilityById = async (id) => {
  return await Utility.findByPk(id);
};

const updateUtility = async (id, data) => {
  const utility = await Utility.findByPk(id);
  if (!utility) return null;
  return await utility.update(data);
};

const deleteUtility = async (id) => {
  const utility = await Utility.findByPk(id);
  if (!utility) return null;
  await utility.destroy();
  return utility;
};

module.exports = {
  getAllUtilities,
  createUtility,
  getUtilityById,
  updateUtility,
  deleteUtility
};
