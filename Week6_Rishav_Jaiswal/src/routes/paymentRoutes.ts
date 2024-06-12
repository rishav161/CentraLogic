import express from 'express';
import { createPayment } from '../controller/paymentController';
import { authenticateToken, authorizeRole } from '../middleware/jwt';
import { getOrderById } from '../controller/orderController';

const router = express.Router();

router.post('/payments', authenticateToken, createPayment);

router.get('/orders/:id', authenticateToken, authorizeRole('user'), getOrderById);

export default router;
