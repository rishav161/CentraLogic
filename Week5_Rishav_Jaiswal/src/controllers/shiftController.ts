import { Request, Response } from 'express';
import ShiftService from '../services/shiftService';
import logger from '../utils/loggerUtils';

class ShiftController {
  public async startShift(req: Request, res: Response): Promise<void> {
    try {
      const shift = await ShiftService.startShift(req.user!.id);
      res.json(shift);
    } catch (error) {
      logger.error('Error starting shift:', error);
      res.status(500).json({ message: 'Error starting shift' });
    }
  }

  public async endShift(req: Request, res: Response): Promise<void> {
    try {
      const shift = await ShiftService.endShift(req.params.shiftId);
      res.json(shift);
    } catch (error:any) {
      logger.error('Error ending shift:', error);
      res.status(400).json({ message: error.message });
    }
  }

  public async getEmployeeShifts(req: Request, res: Response): Promise<void> {
    try {
      const shifts = await ShiftService.getEmployeeShifts(req.user!.id);
      res.json(shifts);
    } catch (error) {
      logger.error('Error fetching employee shifts:', error);
      res.status(500).json({ message: 'Error fetching shifts' });
    }
  }

  public async generateReport(req: Request, res: Response): Promise<void> {
    try {
      const report = await ShiftService.generateReport();
      res.json(report);
    } catch (error) {
      logger.error('Error generating report:', error);
      res.status(500).json({ message: 'Error generating report' });
    }
  }
}

export default new ShiftController();