import { Router } from 'express';
import SOWPaymentPlanLineItemController from '../controllers/paymentController';

const router = Router();

router.post('/', SOWPaymentPlanLineItemController.createSOWPaymentPlan);
router.get('/:id', SOWPaymentPlanLineItemController.getSOWPaymentPlanById);
router.get('/', SOWPaymentPlanLineItemController.getAllSOWPaymentPlans);
router.put('/:id', SOWPaymentPlanLineItemController.updateSOWPaymentPlan);
router.delete('/:id', SOWPaymentPlanLineItemController.deleteSOWPaymentPlan);

export default router;
