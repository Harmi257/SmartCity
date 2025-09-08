const DisasterService = require('../services/disaster.service');

// Create
const create = async (req, res) => {
  try {
    const result = await DisasterService.createDisaster(req.body);
    res.status(201).json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Read All
const getAll = async (req, res) => {
  try {
    const data = await DisasterService.getAllDisasters();
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Read by ID
const getById = async (req, res) => {
  try {
    const data = await DisasterService.getDisasterById(req.params.id);
    if (!data) return res.status(404).json({ message: "Disaster not found" });
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update
const update = async (req, res) => {
  try {
    const result = await DisasterService.updateDisaster(req.params.id, req.body);
    res.status(200).json({ message: 'Disaster updated', result });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Delete
const remove = async (req, res) => {
  try {
    await DisasterService.deleteDisaster(req.params.id);
    res.status(200).json({ message: 'Disaster deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  create,
  getAll,
  getById,
  update,
  remove,
};
