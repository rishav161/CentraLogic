import { Request, Response, NextFunction } from 'express';
import logger from '../utils/loggerUtils';

export const errorHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {
  logger.error(`${err.name}: ${err.message}`, { stack: err.stack });
  res.status(500).json({ message: 'Internal Server Error' });
};