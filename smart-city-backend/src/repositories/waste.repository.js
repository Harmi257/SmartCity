const db = require('../models');
const Waste = db.Waste;

const WasteRepository = {
  async create(data) {
    return await Waste.create(data);
  },

  async findAll() {
    return await Waste.findAll();
  },

  async findById(id) {
    return await Waste.findByPk(id);
  },

  async update(id, data) {
    const waste = await Waste.findByPk(id);
    if (!waste) return null;
    await waste.update(data);
    return waste;
  },

  async remove(id) {
    return await Waste.destroy({ where: { id } });
  }
};

module.exports = WasteRepository;
