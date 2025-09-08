const db = require('../models');
const Traffic = db.TrafficData;

const TrafficRepository = {
  // Create new traffic data
  async createTraffic(data) {
    return await Traffic.create(data);
  },

  // Get all traffic data
  async getAllTraffic() {
    return await Traffic.findAll();
  },

  // Get traffic data by area
  async getTrafficByArea(area) {
    return await Traffic.findAll({ where: { area } });
  },

  // Update traffic data by ID
  async updateTraffic(id, updatedData) {
    const traffic = await Traffic.findByPk(id);
    if (!traffic) return null;
    await traffic.update(updatedData);
    return traffic;
  },

  // Delete traffic data by ID
  async deleteTraffic(id) {
    return await Traffic.destroy({ where: { id } });
  }
};

module.exports = TrafficRepository;
