import { Request, Response } from 'express';
import * as paymentService from '../services/paymentService';

export const createPayment = async (req: Request, res: Response) => {
    try {
        const { userId, bookId, amount } = req.body;
        const order = await paymentService.createPayment(userId, bookId, amount);
        res.status(201).json(order);
    } catch (error:any) {
        res.status(500).json({ error: error.message });
    }
};
