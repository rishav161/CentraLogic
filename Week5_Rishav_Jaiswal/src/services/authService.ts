import bcrypt from 'bcrypt';
import Employee from '../models/employeModel';
import { generateToken } from '../utils/jwtUtils';
import ShiftService from './shiftService';
import logger from '../utils/loggerUtils';

interface RegistrationData {
  name: string;
  email: string;
  password: string;
  role: 'SuperAdmin' | 'Manager' | 'Employee';
  assignedShiftHours?: number;
}

class AuthService {
  public async register(data: RegistrationData): Promise<Employee> {
    const { name, email, password, role, assignedShiftHours = 8 } = data;

    const existingEmployee = await Employee.findOne({ where: { email } });
    if (existingEmployee) {
      throw new Error('Email already in use');
    }

    const employee = await Employee.create({ name, email, password, role, assignedShiftHours });
    logger.info(`Employee ${employee.id} registered successfully`);
    return employee;
  }

  public async login(email: string, password: string): Promise<{ token: string; employee: Employee }> {
    const employee = await Employee.findOne({ where: { email } });
    if (!employee || !(await bcrypt.compare(password, employee.password))) {
      throw new Error('Invalid credentials');
    }

    const token = generateToken({ id: employee.id, role: employee.role });
    await ShiftService.startShift(employee.id);
    logger.info(`Employee ${employee.id} logged in`);
    return { token, employee };
  }
}

export default new AuthService();