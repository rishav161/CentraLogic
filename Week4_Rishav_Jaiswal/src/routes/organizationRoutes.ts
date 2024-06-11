import { Router } from 'express';
import {
  createOrganizationHandler,
  getAllOrganizationsHandler,
  getOrganizationByIdHandler,
  updateOrganizationHandler,
  deleteOrganizationHandler,
} from '../controllers/organizationController';

const router = Router();

router.post('/', createOrganizationHandler);
router.get('/', getAllOrganizationsHandler);
router.get('/:id', getOrganizationByIdHandler);
router.put('/:id', updateOrganizationHandler);
router.delete('/:id', deleteOrganizationHandler);

export default router;
