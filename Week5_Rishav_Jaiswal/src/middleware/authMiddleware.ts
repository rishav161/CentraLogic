import { Request, Response, NextFunction } from 'express';
import { verifyToken } from '../utils/jwtUtils';
import logger from '../utils/loggerUtils';

export const authenticate = (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization?.split(' ')[1];

  if (!token) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  try {
    const decoded = verifyToken(token);
    req.user = decoded;
    next();
  } catch (error) {
    logger.error('Invalid token:', error);
    return res.status(401).json({ message: 'Invalid token' });
  }
};