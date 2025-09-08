const { Transport } = require('../models');

const TransportRepository = {
  async create(data) {
    return await Transport.create(data);
  },

  async findAll() {
    return await Transport.findAll();
  },

  async findById(id) {
    return await Transport.findByPk(id);
  },

  async update(id, data) {
    const transport = await Transport.findByPk(id);
    if (!transport) return null;
    await transport.update(data);
    return transport;
  },

  async remove(id) {
    return await Transport.destroy({ where: { id } });
  }
};

module.exports = TransportRepository;
