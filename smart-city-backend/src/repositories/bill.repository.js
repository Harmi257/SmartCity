const db = require('../models');
const ElectricityBill = db.ElectricityBill;

class BillRepository {
  // Create a new bill
  async createBill(userId, unitsConsumed) {
    try {
      const billAmount = this.calculateBillAmount(unitsConsumed);
      const bill = await ElectricityBill.create({
        user_id: userId,
        units_consumed: unitsConsumed,
        bill_amount: billAmount,
        bill_status: 'pending',
      });
      return bill;
    } catch (error) {
      throw new Error('Error creating bill');
    }
  }

  // View a bill by its ID
  async getBillById(billId) {
    try {
      const bill = await ElectricityBill.findOne({ where: { id: billId } });
      if (!bill) {
        throw new Error('Bill not found');
      }
      return bill;
    } catch (error) {
      throw new Error('Error fetching bill');
    }
  }

  // Update the bill status to 'paid'
  async payBill(billId) {
    try {
      const bill = await ElectricityBill.findOne({ where: { id: billId } });
      if (!bill) {
        throw new Error('Bill not found');
      }

      bill.bill_status = 'paid';
      await bill.save();
      return bill;
    } catch (error) {
      throw new Error('Error paying bill');
    }
  }

  // Helper method to calculate the bill amount based on units consumed
  calculateBillAmount(units) {
    const rate = 5; // example rate per unit
    return units * rate;
  }
}

module.exports = new BillRepository();
