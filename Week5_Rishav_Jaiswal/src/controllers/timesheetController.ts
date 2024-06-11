import { Request, Response } from 'express';
import TimesheetService from '../services/timesheetService';
import logger from '../utils/loggerUtils';

class TimesheetController {
  public async createTimesheetEntry(req: Request, res: Response): Promise<void> {
    try {
      const entry = await TimesheetService.createTimesheetEntry({
        ...req.body,
        employeeId: req.user!.id,
      });
      res.status(201).json(entry);
    } catch (error) {
      logger.error('Error creating timesheet entry:', error);
      res.status(500).json({ message: 'Error creating timesheet entry' });
    }
  }

  public async getTimesheetsByShift(req: Request, res: Response): Promise<void> {
    try {
      const entries = await TimesheetService.getTimesheetsByShift(req.params.shiftId);
      res.json(entries);
    } catch (error) {
      logger.error('Error fetching timesheet entries:', error);
      res.status(500).json({ message: 'Error fetching timesheet entries' });
    }
  }

  public async getEmployeeTimesheets(req: Request, res: Response): Promise<void> {
    try {
      const entries = await TimesheetService.getTimesheetsByEmployee(req.user!.id);
      res.json(entries);
    } catch (error) {
      logger.error('Error fetching employee timesheets:', error);
      res.status(500).json({ message: 'Error fetching timesheets' });
    }
  }
}

export default new TimesheetController();