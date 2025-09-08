const crimeService = require('../services/crime.service');

exports.createCrime = async (req, res) => {
  try {
    const crime = await crimeService.createCrime(req.body);
    res.status(201).json(crime);
  } catch (error) {
    res.status(500).json({ error: 'Error creating crime' });
  }
};

exports.getAllCrimes = async (req, res) => {
  try {
    const crimes = await crimeService.getAllCrimes(); // ✅ Make sure it's getAllCrimes
    res.status(200).json(crimes);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching crimes' });
  }
};

exports.getCrimeById = async (req, res) => {
  try {
    const crime = await crimeService.getCrimeById(req.params.id);
    if (!crime) return res.status(404).json({ error: 'Crime not found' });
    res.status(200).json(crime);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching crime' });
  }
};

exports.updateCrime = async (req, res) => {
  try {
    const updated = await crimeService.updateCrime(req.params.id, req.body);
    res.status(200).json(updated);
  } catch (error) {
    res.status(500).json({ error: 'Error updating crime' });
  }
};

exports.deleteCrime = async (req, res) => {
  try {
    await crimeService.deleteCrime(req.params.id);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: 'Error deleting crime' });
  }
};
