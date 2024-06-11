import SOWPaymentPlanLineItem from '../models/planItemModel';
import SOWPaymentPlan from '../models/paymentModel';
import SOW from '../models/sowModel';

class SOWPaymentPlanLineItemService {
  async createSOWPaymentPlanLineItem(data: any) {
    // Validate input data
    const { sowPaymentPlanId, sowId, orderId, particular, rate, unit, total } = data;

    // Check if the associated SOW Payment Plan and SOW exist
    const paymentPlan = await SOWPaymentPlan.findByPk(sowPaymentPlanId, {
      include: [{ model: SOW, as: 'sow' }],
    });
    const sow = paymentPlan?.sow;

    if (!paymentPlan || !sow) {
      throw new Error('Invalid SOW Payment Plan or SOW ID');
    }

    // Create the new SOW Payment Plan Line Item
    const lineItem = await SOWPaymentPlanLineItem.create({
      sowPaymentPlanId,
      sowId,
      orderId,
      particular,
      rate,
      unit,
      total,
    });

    return lineItem;
  }

  async getSOWPaymentPlanLineItemById(id: string) {
    const lineItem = await SOWPaymentPlanLineItem.findByPk(id, {
      include: [
        { model: SOWPaymentPlan, as: 'paymentPlan', include: [{ model: SOW, as: 'sow' }] },
        { model: SOW, as: 'sow' },
      ],
    });
    return lineItem;
  }

  async getAllSOWPaymentPlanLineItems() {
    const lineItems = await SOWPaymentPlanLineItem.findAll({
      include: [
        { model: SOWPaymentPlan, as: 'paymentPlan', include: [{ model: SOW, as: 'sow' }] },
        { model: SOW, as: 'sow' },
      ],
    });
    return lineItems;
  }

  async updateSOWPaymentPlanLineItem(id: string, data: any) {
    const lineItem = await SOWPaymentPlanLineItem.findByPk(id);

    if (!lineItem) {
      return null;
    }

    // Update the SOW Payment Plan Line Item
    await lineItem.update(data);

    return lineItem;
  }

  async deleteSOWPaymentPlanLineItem(id: string) {
    const lineItem = await SOWPaymentPlanLineItem.findByPk(id);

    if (!lineItem) {
      return false;
    }

    // Delete the SOW Payment Plan Line Item
    await lineItem.destroy();

    return true;
  }
}

export default new SOWPaymentPlanLineItemService();
