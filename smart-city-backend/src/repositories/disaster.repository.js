const db = require('../models');
const DisasterRisk = db.DisasterRisk;

const create = (data) => DisasterRisk.create(data);
const findAll = () => DisasterRisk.findAll();
const findById = (id) => DisasterRisk.findByPk(id);
const update = (id, data) => DisasterRisk.update(data, { where: { id } });
const remove = (id) => DisasterRisk.destroy({ where: { id } });

module.exports = {
  create,
  findAll,
  findById,
  update,
  remove,
};
