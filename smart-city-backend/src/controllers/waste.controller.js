const wasteService = require('../services/waste.service');

exports.getAllWaste = async (req, res) => {
  try {
    const wastes = await wasteService.getAllWaste();
    res.status(200).json(wastes);
  } catch (err) {
    console.error('Error fetching waste data:', err);
    res.status(500).json({ error: 'Failed to fetch waste data' });
  }
};

exports.createWaste = async (req, res) => {
  try {
    const { type, level, area } = req.body;

    if (!type || !level || !area) {
      return res.status(400).json({ error: 'type, level, and area are required' });
    }

    const newWaste = await wasteService.createWaste({ type, level, area });
    res.status(201).json(newWaste);
  } catch (err) {
    console.error('Error creating waste data:', err);
    res.status(500).json({ error: 'Failed to create waste data' });
  }
};
