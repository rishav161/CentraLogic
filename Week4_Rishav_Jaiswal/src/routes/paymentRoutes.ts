// src/routes/sowPaymentPlanRoutes.ts
import express from 'express';
import SOWPaymentPlanController from '../controllers/paymentController';

const router = express.Router();

// Create a new SOW Payment Plan
router.post('/', SOWPaymentPlanController.createSOWPaymentPlan);

// Get a single SOW Payment Plan by ID
router.get('/:id', SOWPaymentPlanController.getSOWPaymentPlanById);

// Get all SOW Payment Plans
router.get('/', SOWPaymentPlanController.getAllSOWPaymentPlans);

// Update a SOW Payment Plan
router.put('/:id', SOWPaymentPlanController.updateSOWPaymentPlan);

// Delete a SOW Payment Plan
router.delete('/:id', SOWPaymentPlanController.deleteSOWPaymentPlan);

export default router;