import { Request, Response } from 'express';
import AuthService from '../services/authService';
import logger from '../utils/loggerUtils';

class AuthController {
  public async register(req: Request, res: Response): Promise<void> {
    try {
      const { name, email, password, role } = req.body;
      const employee = await AuthService.register({ name, email, password, role });
      res.status(201).json({ message: 'Employee registered successfully', employee });
    } catch (error:any) {
      logger.error('Registration error:', error);
      res.status(400).json({ message: error.message });
    }
  }

  public async login(req: Request, res: Response): Promise<void> {
    try {
      const { email, password } = req.body;
      const { token, employee } = await AuthService.login(email, password);
      res.json({ message: 'Login successful', token, employee });
    } catch (error:any) {
      logger.error('Login error:', error);
      res.status(401).json({ message: error.message });
    }
  }
}

export default new AuthController();