const db = require('../models');
const Traffic = db.TrafficData;


const getTrafficByArea = async (area) => {
  return await Traffic.findAll({ where: { area } });
};

const createTraffic = async (data) => {
  return await Traffic.create(data);
};

const updateTraffic = async (id, data) => {
  return await Traffic.update(data, { where: { id } });
};

const deleteTraffic = async (id) => {
  return await Traffic.destroy({ where: { id } });
};

module.exports = {
  getTrafficByArea,
  createTraffic,
  updateTraffic,
  deleteTraffic,
};
