import Shift from '../models/shiftModel';
import Employee from '../models/employeModel';
import logger from '../utils/loggerUtils';

interface ShiftReport {
  date: string;
  actualHours: number;
}

interface EmployeeReport {
  employeeId: string;
  name: string;
  assignedHours: number;
  shifts: ShiftReport[];
}

class ShiftService {
  public async startShift(employeeId: string): Promise<Shift> {
    const shift = await Shift.create({ employeeId, startTime: new Date() });
    logger.info(`Employee ${employeeId} started shift ${shift.id}`);
    return shift;
  }

  public async endShift(shiftId: string): Promise<Shift> {
    const shift = await Shift.findByPk(shiftId);
    if (!shift || shift.endTime) {
      throw new Error('Invalid shift or shift already ended');
    }

    shift.endTime = new Date();
    shift.actualHours = (shift.endTime.getTime() - shift.startTime.getTime()) / 3600000; // hours
    await shift.save();
    logger.info(`Shift ${shiftId} ended with ${shift.actualHours} hours`);
    return shift;
  }

  public async getEmployeeShifts(employeeId: string): Promise<Shift[]> {
    return Shift.findAll({ where: { employeeId } });
  }

  public async generateReport(): Promise<EmployeeReport[]> {
    const report = await Employee.findAll({
      attributes: ['id', 'name', 'assignedShiftHours'],
      include: [{
        model: Shift,
        as: 'Shifts',
        attributes: ['startTime', 'endTime', 'actualHours'],
      }],
    });

    return report.map(employee => ({
      employeeId: employee.id,
      name: employee.name,
      assignedHours: employee.assignedShiftHours,
      shifts: employee.Shifts!.map(shift => ({
        date: shift.startTime.toISOString().split('T')[0],
        actualHours: shift.actualHours,
      })),
    }));
  }
}

export default new ShiftService();