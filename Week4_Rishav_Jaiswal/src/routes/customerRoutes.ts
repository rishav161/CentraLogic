import express from 'express';
import {
  createCustomerHandler,
  getCustomersHandler,
  getCustomerByIdHandler,
  updateCustomerHandler,
  deleteCustomerHandler
} from '../controllers/customerController';

const router = express.Router();

router.post('/', createCustomerHandler);
router.get('/', getCustomersHandler);
router.get('/:id', getCustomerByIdHandler);
router.put('/:id', updateCustomerHandler);
router.delete('/:id', deleteCustomerHandler);

export default router;
