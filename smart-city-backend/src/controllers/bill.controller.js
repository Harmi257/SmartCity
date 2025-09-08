const billService = require('../services/bill.service');

// Create a new electricity bill based on units consumed
exports.createBill = async (req, res) => {
  const { userId, unitsConsumed } = req.body;

  try {
    const newBill = await billService.createBill(userId, unitsConsumed);
    res.status(201).json({ message: 'Bill created successfully', bill: newBill });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// View a user's bill by its ID
exports.viewBill = async (req, res) => {
  const billId = req.params.id;

  try {
    const bill = await billService.viewBill(billId);
    res.status(200).json(bill);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Pay a bill by its ID
exports.payBill = async (req, res) => {
  const billId = req.params.id;

  try {
    const updatedBill = await billService.payBill(billId);
    res.status(200).json({ message: 'Bill paid successfully', bill: updatedBill });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
