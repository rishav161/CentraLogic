import express from 'express';
import * as sowController from '../controllers/sowController';

const router = express.Router();

router.post('/', sowController.createSOW);
router.get('/:id', sowController.getSOWById);
router.get('/customer/:customerId', sowController.getSOWsByCustomerId);
router.put('/:id', sowController.updateSOW);
router.delete('/:id', sowController.deleteSOW);

export default router;