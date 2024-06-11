import { Request } from 'express';

declare global {
  namespace Express {
    interface Request {
      user?: {
        id: string;
        role: 'SuperAdmin' | 'Manager' | 'Employee';
        [key: string]: any;
      };
    }
  }
}