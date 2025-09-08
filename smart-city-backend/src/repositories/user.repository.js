// repositories/user.repository.js
const db = require("../models");
const User = db.User;

const createUser = async (userData) => await User.create(userData);
const findUserByEmail = async (email) => await User.findOne({ where: { email } });
const findUserById = async (id) => await User.findByPk(id);

module.exports = {
  createUser,
  findUserByEmail,
  findUserById,
};
