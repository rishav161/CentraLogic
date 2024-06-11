import Timesheet from '../models/timeSheetModel';
import logger from '../utils/loggerUtils';

class TimesheetService {
  public async createTimesheetEntry(data: any): Promise<Timesheet> {
    const entry = await Timesheet.create(data);
    logger.info(`Timesheet entry created for employee ${data.employeeId}, shift ${data.shiftId}`);
    return entry;
  }

  public async getTimesheetsByShift(shiftId: string): Promise<Timesheet[]> {
    return Timesheet.findAll({ where: { shiftId } });
  }

  public async getTimesheetsByEmployee(employeeId: string): Promise<Timesheet[]> {
    return Timesheet.findAll({ where: { employeeId } });
  }
}

export default new TimesheetService();