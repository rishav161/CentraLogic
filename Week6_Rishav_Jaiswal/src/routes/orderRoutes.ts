import express from 'express';
import { authenticateToken, authorizeRole } from '../middleware/jwt';
import { getOrderById, getAllOrders, createOrder, updateOrder, deleteOrder } from '../controller/orderController';

const router = express.Router();

router.get('/orders', authenticateToken, authorizeRole('user'), getAllOrders);
router.get('/orders/:id', authenticateToken, authorizeRole('user'), getOrderById);
router.post('/orders', authenticateToken, authorizeRole('user'), createOrder);
router.put('/orders/:id', authenticateToken, authorizeRole('user'), updateOrder);
router.delete('/orders/:id', authenticateToken, authorizeRole('user'), deleteOrder);

export default router;
