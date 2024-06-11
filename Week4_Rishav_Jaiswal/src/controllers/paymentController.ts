// src/controllers/SOWPaymentPlanController.ts
import { Request, Response } from 'express';
import SOWPaymentPlanService from '../services/paymentService';

class SOWPaymentPlanController {
  async createSOWPaymentPlan(req: Request, res: Response) {
    try {
      const paymentPlan = await SOWPaymentPlanService.createSOWPaymentPlan(req.body);
      res.status(201).json(paymentPlan);
    } catch (error:any) {
      res.status(400).json({ error: error.message });
    }
  }

  async getSOWPaymentPlanById(req: Request, res: Response) {
    try {
      const paymentPlan = await SOWPaymentPlanService.getSOWPaymentPlanById(req.params.id);
      if (paymentPlan) {
        res.json(paymentPlan);
      } else {
        res.status(404).json({ error: 'SOW Payment Plan not found' });
      }
    } catch (error:any) {
      res.status(400).json({ error: error.message });
    }
  }

  async getAllSOWPaymentPlans(req: Request, res: Response) {
    try {
      const paymentPlans = await SOWPaymentPlanService.getAllSOWPaymentPlans();
      res.json(paymentPlans);
    } catch (error:any) {
      res.status(400).json({ error: error.message });
    }
  }

  async updateSOWPaymentPlan(req: Request, res: Response) {
    try {
      const updatedPaymentPlan = await SOWPaymentPlanService.updateSOWPaymentPlan(req.params.id, req.body);
      if (updatedPaymentPlan) {
        res.json(updatedPaymentPlan);
      } else {
        res.status(404).json({ error: 'SOW Payment Plan not found' });
      }
    } catch (error:any) {
      res.status(400).json({ error: error.message });
    }
  }

  async deleteSOWPaymentPlan(req: Request, res: Response) {
    try {
      const deleted = await SOWPaymentPlanService.deleteSOWPaymentPlan(req.params.id);
      if (deleted) {
        res.json({ message: 'SOW Payment Plan deleted successfully' });
      } else {
        res.status(404).json({ error: 'SOW Payment Plan not found' });
      }
    } catch (error:any) {
      res.status(400).json({ error: error.message });
    }
  }
}

export default new SOWPaymentPlanController();