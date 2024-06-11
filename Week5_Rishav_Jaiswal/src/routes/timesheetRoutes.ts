import { Router } from 'express';
import TimesheetController from '../controllers/timesheetController'
import { authenticate } from '../middleware/authMiddleware';

const router = Router();

router.post('/', authenticate, TimesheetController.createTimesheetEntry);
router.get('/shift/:shiftId', authenticate, TimesheetController.getTimesheetsByShift);
router.get('/employee', authenticate, TimesheetController.getEmployeeTimesheets);

export default router;