// services/user.service.js
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const userRepo = require("../repositories/user.repository");
const SECRET_KEY =process.env.JWT_SECRET_KEY;

const registerUser = async ({ username, email, password, role }) => {
  const hashedPassword = await bcrypt.hash(password, 10);
  return await userRepo.createUser({ username, email, password: hashedPassword, role });
};

const loginUser = async ({ email, password }) => {
  const user = await userRepo.findUserByEmail(email);
  if (!user) throw new Error("User not found");

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) throw new Error("Invalid password");

  const token = jwt.sign({ id: user.id, role: user.role }, SECRET_KEY, { expiresIn: "1h" });

  return { token, role: user.role, username: user.username };
};

module.exports = {
  registerUser,
  loginUser,
};
