const billRepository = require('../repositories/billRepository');

class BillService {
  // Service method to create a new bill
  async createBill(userId, unitsConsumed) {
    try {
      const bill = await billRepository.createBill(userId, unitsConsumed);
      return bill;
    } catch (error) {
      throw new Error('Error in creating bill service');
    }
  }

  // Service method to view a bill by its ID
  async getBillById(billId) {
    try {
      const bill = await billRepository.getBillById(billId);
      return bill;
    } catch (error) {
      throw new Error('Error in getting bill service');
    }
  }

  // Service method to pay a bill
  async payBill(billId) {
    try {
      const updatedBill = await billRepository.payBill(billId);
      return updatedBill;
    } catch (error) {
      throw new Error('Error in paying bill service');
    }
  }
}

module.exports = new BillService();
