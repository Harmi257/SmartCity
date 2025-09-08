// controllers/user.controller.js
const userService = require("../services/user.service");

const register = async (req, res) => {
  try {
    const newUser = await userService.registerUser(req.body);
    res.status(201).json({ message: "User registered", user: newUser });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const login = async (req, res) => {
  try {
    const data = await userService.loginUser(req.body);
    res.status(200).json(data);
  } catch (err) {
    res.status(401).json({ error: err.message });
  }
};

module.exports = {
  register,
  login,
};
