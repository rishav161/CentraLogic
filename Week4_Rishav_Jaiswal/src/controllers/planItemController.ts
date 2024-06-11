// src/controllers/SOWPaymentPlanLineItemController.ts
import { Request, Response } from 'express';
import SOWPaymentPlanLineItemService from '../services/planItemService';

class SOWPaymentPlanLineItemController {
  async createSOWPaymentPlanLineItem(req: Request, res: Response) {
    try {
      const lineItem = await SOWPaymentPlanLineItemService.createSOWPaymentPlanLineItem(req.body);
      res.status(201).json(lineItem);
    } catch (error:any) {
      res.status(400).json({ error: error.message });
    }
  }

  async getSOWPaymentPlanLineItemById(req: Request, res: Response) {
    try {
      const lineItem = await SOWPaymentPlanLineItemService.getSOWPaymentPlanLineItemById(req.params.id);
      if (lineItem) {
        res.json(lineItem);
      } else {
        res.status(404).json({ error: 'SOW Payment Plan Line Item not found' });
      }
    } catch (error:any) {
      res.status(400).json({ error: error.message });
    }
  }

  async getAllSOWPaymentPlanLineItems(req: Request, res: Response) {
    try {
      const lineItems = await SOWPaymentPlanLineItemService.getAllSOWPaymentPlanLineItems();
      res.json(lineItems);
    } catch (error:any) {
      res.status(400).json({ error: error.message });
    }
  }

  async updateSOWPaymentPlanLineItem(req: Request, res: Response) {
    try {
      const updatedLineItem = await SOWPaymentPlanLineItemService.updateSOWPaymentPlanLineItem(req.params.id, req.body);
      if (updatedLineItem) {
        res.json(updatedLineItem);
      } else {
        res.status(404).json({ error: 'SOW Payment Plan Line Item not found' });
      }
    } catch (error:any) {
      res.status(400).json({ error: error.message });
    }
  }

  async deleteSOWPaymentPlanLineItem(req: Request, res: Response) {
    try {
      const deleted = await SOWPaymentPlanLineItemService.deleteSOWPaymentPlanLineItem(req.params.id);
      if (deleted) {
        res.json({ message: 'SOW Payment Plan Line Item deleted successfully' });
      } else {
        res.status(404).json({ error: 'SOW Payment Plan Line Item not found' });
      }
    } catch (error:any) {
      res.status(400).json({ error: error.message });
    }
  }
}

export default new SOWPaymentPlanLineItemController();