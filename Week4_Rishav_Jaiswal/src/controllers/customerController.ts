import { Request, Response } from 'express';
import {
  createCustomer,
  getCustomers,
  getCustomerById,
  updateCustomer,
  deleteCustomer
} from '../services/customerService';

export const createCustomerHandler = async (req: Request, res: Response) => {
  try {
    const customer = await createCustomer(req.body);
    res.json(customer);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

export const getCustomersHandler = async (req: Request, res: Response) => {
  try {
    const customers = await getCustomers();
    res.json(customers);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

export const getCustomerByIdHandler = async (req: Request, res: Response) => {
  const customerId = req.params.id;
  try {
    const customer = await getCustomerById(customerId);
    res.json(customer);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

export const updateCustomerHandler = async (req: Request, res: Response) => {
  const customerId = req.params.id;
  const customerData = req.body;
  try {
    const customer = await updateCustomer(customerId, customerData);
    res.json(customer);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

export const deleteCustomerHandler = async (req: Request, res: Response) => {
  const customerId = req.params.id;
  try {
    await deleteCustomer(customerId);
    res.send();
  } catch (err) {
    res.status(500).json({ error: err });
  }
};
