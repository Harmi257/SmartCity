const transportService = require('../services/transport.service');

exports.getAllTransports = async (req, res) => {
  try {
    const transports = await transportService.getAllTransports();
    res.status(200).json(transports);
  } catch (error) {
    console.error('Error fetching transports:', error);
    res.status(500).json({ error: 'Failed to fetch transports' });
  }
};

exports.createTransport = async (req, res) => {
  try {
    const { type, usage, area } = req.body;

    if (!type || !usage || !area) {
      return res.status(400).json({ error: 'type, usage, and area are required' });
    }

    const transport = await transportService.createTransport({ type, usage, area });
    res.status(201).json(transport);
  } catch (error) {
    console.error('Error creating transport:', error);
    res.status(500).json({ error: 'Failed to create transport' });
  }
};
