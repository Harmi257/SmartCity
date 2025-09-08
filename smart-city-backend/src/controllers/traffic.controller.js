const db = require('../models');
const TrafficData = db.TrafficData;
const TrafficRepository = require('../repositories/traffic.repository');


// Get all traffic data
exports.getAllTraffic = async (req, res) => {
  try {
    const traffic = await TrafficData.findAll();
    res.status(200).json(traffic);
  } catch (err) {
    console.error('Error fetching traffic data:', err);
    res.status(500).json({ error: 'Failed to fetch traffic data' });
  }
};

// Create new traffic record
exports.createTraffic = async (req, res) => {
  try {
    const { area, vehicle_count, suggestion } = req.body;

    if (!area || !vehicle_count) {
      return res.status(400).json({ error: 'Area and vehicle_count are required' });
    }

    const newTraffic = await TrafficData.create({
      area,
      vehicle_count,
      suggestion
    });

    res.status(201).json(newTraffic);
  } catch (err) {
    console.error('Error creating traffic data:', err);
    res.status(500).json({ error: 'Failed to create traffic data' });
  }
};


// Get traffic data by area
exports.getTrafficByArea = async (req, res) => {
  try {
    const area = req.params.area;
    const traffic = await TrafficRepository.getTrafficByArea(area);
    if (traffic.length === 0) {
      return res.status(404).json({ message: 'No traffic data found for this area' });
    }
    res.status(200).json(traffic);
  } catch (err) {
    console.error('Error fetching traffic by area:', err);
    res.status(500).json({ error: 'Failed to fetch traffic data' });
  }
};


// Update traffic data by ID
exports.updateTraffic = async (req, res) => {
  try {
    const id = req.params.id;
    const updatedData = req.body;

    const updatedTraffic = await TrafficRepository.updateTraffic(id, updatedData);
    if (!updatedTraffic) {
      return res.status(404).json({ message: 'Traffic record not found' });
    }

    res.status(200).json(updatedTraffic);
  } catch (err) {
    console.error('Error updating traffic data:', err);
    res.status(500).json({ error: 'Failed to update traffic data' });
  }
};

// Delete traffic data by ID
exports.deleteTraffic = async (req, res) => {
  try {
    const id = req.params.id;

    const result = await TrafficRepository.deleteTraffic(id);
    if (result === 0) {
      return res.status(404).json({ message: 'Traffic record not found' });
    }

    res.status(200).json({ message: 'Traffic data deleted successfully' });
  } catch (err) {
    console.error('Error deleting traffic data:', err);
    res.status(500).json({ error: 'Failed to delete traffic data' });
  }
};
