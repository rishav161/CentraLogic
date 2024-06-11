import { Router } from 'express';
import ShiftController from '../controllers/shiftController';
import { authenticate } from '../middleware/authMiddleware';

const router = Router();

router.post('/start', authenticate, ShiftController.startShift);
router.put('/:shiftId/end', authenticate, ShiftController.endShift);
router.get('/employee', authenticate, ShiftController.getEmployeeShifts);
router.get('/report', authenticate, ShiftController.generateReport);

export default router;