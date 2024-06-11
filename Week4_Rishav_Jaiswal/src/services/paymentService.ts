// src/services/SOWPaymentPlanService.ts
import SOWPaymentPlan from '../models/paymentModel';
import SOW from '../models/sowModel';
import Customer from '../models/customerModel';

class SOWPaymentPlanService {
  async createSOWPaymentPlan(data: any) {
    // Validate input data
    const { sowId, customerId, plannedInvoiceDate, totalActualAmount } = data;

    // Check if the associated SOW and Client exist
    const sow = await SOW.findByPk(sowId);
    const customer = await Customer.findByPk(customerId);

    if (!sow || !customer) {
      throw new Error('Invalid SOW or Client ID');
    }

    // Create the new SOW Payment Plan
    const paymentPlan = await SOWPaymentPlan.create({
      sowId,
      customerId,
      plannedInvoiceDate,
      totalActualAmount,
    });

    return paymentPlan;
  }

  async getSOWPaymentPlanById(id: string) {
    const paymentPlan = await SOWPaymentPlan.findByPk(id, {
      include: [
        { model: SOW, as: 'sow' },
        { model: Customer, as: 'customer' },
      ],
    });
    return paymentPlan;
  }

  async getAllSOWPaymentPlans() {
    const paymentPlans = await SOWPaymentPlan.findAll({
      include: [
        { model: SOW, as: 'sow' },
        { model: Customer, as: 'customer' },
      ],
    });
    return paymentPlans;
  }

  async updateSOWPaymentPlan(id: string, data: any) {
    const paymentPlan = await SOWPaymentPlan.findByPk(id);

    if (!paymentPlan) {
      return null;
    }

    // Update the SOW Payment Plan
    await paymentPlan.update(data);

    return paymentPlan;
  }

  async deleteSOWPaymentPlan(id: string) {
    const paymentPlan = await SOWPaymentPlan.findByPk(id);

    if (!paymentPlan) {
      return false;
    }

    // Delete the SOW Payment Plan
    await paymentPlan.destroy();

    return true;
  }
}

export default new SOWPaymentPlanService();