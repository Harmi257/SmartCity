const db = require('../models');
const Crime = db.Crime;

const CrimeRepository = {
  async create(data) {
    return await Crime.create(data);
  },

  async findAll() {
    return await Crime.findAll();
  },

  async findById(id) {
    return await Crime.findByPk(id);
  },

  async update(id, data) {
    const crime = await Crime.findByPk(id);
    if (!crime) return null;
    return await crime.update(data);
  },

  async remove(id) {
    return await Crime.destroy({ where: { id } });
  }
};

module.exports = CrimeRepository;
