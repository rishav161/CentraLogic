import { Request, Response } from 'express';
import * as orderService from '../services/orderService';
import { RequestWithUser } from '../middleware/jwt';
import Order from '../models/orderModel'; // Ensure Order model is imported

// Order
export const getAllOrders = async (req: Request, res: Response) => {
    const orders = await orderService.getAllOrders();
    res.json(orders);
};

export const getOrderById = async (req: RequestWithUser, res: Response) => {
    try {
        const { id } = req.params;
        const order = await Order.findByPk(id);

        if (!order) {
            return res.status(404).json({ error: 'Order not found' });
        }

        // Ensure the user can only access their own orders
        if (!req.user || order.userId !== req.user.userId) {
            return res.status(403).json({ error: 'Access denied' });
        }

        res.status(200).json(order);
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
};

export const createOrder = async (req: Request, res: Response) => {
    const order = await orderService.createOrder(req.body);
    res.status(201).json(order);
};

export const updateOrder = async (req: Request, res: Response) => {
    const order = await orderService.updateOrder(Number(req.params.id), req.body);
    if (order) {
        res.json(order);
    } else {
        res.status(404).json({ error: 'Order not found' });
    }
};

export const deleteOrder = async (req: Request, res: Response) => {
    const order = await orderService.deleteOrder(Number(req.params.id));
    if (order) {
        res.status(204).send();
    } else {
        res.status(404).json({ error: 'Order not found' });
    }
};
