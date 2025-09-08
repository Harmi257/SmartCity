const db = require('../models');
const Utility = db.Utility;

// Create a new utility usage record
exports.createUtility = async (req, res) => {
  try {
    const { area, water, electricity, timestamp } = req.body;

    const newEntry = await Utility.create({
      area,
      water,
      electricity,
      timestamp,
    });

    res.status(201).json(newEntry);
  } catch (error) {
    console.error('Error creating utility data:', error);
    res.status(500).json({ message: 'Server error while creating utility record' });
  }
};

// Get all utility data
exports.getAllUtilities = async (req, res) => {
  try {
    const utilities = await Utility.findAll();
    res.status(200).json(utilities);
  } catch (error) {
    console.error('Error fetching utility data:', error);
    res.status(500).json({ message: 'Server error while fetching utility records' });
  }
};

// Get utility data filtered by area (optional query param)
exports.getUtilitiesByArea = async (req, res) => {
  try {
    const { area } = req.query;

    const whereClause = area ? { area } : {};

    const utilities = await Utility.findAll({ where: whereClause });
    res.status(200).json(utilities);
  } catch (error) {
    console.error('Error fetching utility data by area:', error);
    res.status(500).json({ message: 'Server error while fetching data' });
  }
};

// Update a utility record
exports.updateUtility = async (req, res) => {
  try {
    const { id } = req.params;
    const { area, water, electricity, timestamp } = req.body;

    const updated = await Utility.update(
      { area, water, electricity, timestamp },
      { where: { id } }
    );

    if (updated[0] === 0) {
      return res.status(404).json({ message: 'Utility record not found' });
    }

    res.status(200).json({ message: 'Utility record updated successfully' });
  } catch (error) {
    console.error('Error updating utility data:', error);
    res.status(500).json({ message: 'Server error while updating data' });
  }
};

// Delete a utility record
exports.deleteUtility = async (req, res) => {
  try {
    const { id } = req.params;

    const deleted = await Utility.destroy({ where: { id } });

    if (deleted === 0) {
      return res.status(404).json({ message: 'Utility record not found' });
    }

    res.status(200).json({ message: 'Utility record deleted successfully' });
  } catch (error) {
    console.error('Error deleting utility data:', error);
    res.status(500).json({ message: 'Server error while deleting data' });
  }
};
