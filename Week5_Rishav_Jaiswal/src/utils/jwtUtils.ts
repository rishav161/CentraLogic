import jwt from 'jsonwebtoken';
import { JWT_SECRET } from '../common/credential';

interface TokenPayload {
  id: string;
  role: 'SuperAdmin' | 'Manager' | 'Employee';
  [key: string]: any;
}

export const generateToken = (payload: TokenPayload): string => {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: '1d' });
};

export const verifyToken = (token: string): TokenPayload => {
  return jwt.verify(token, JWT_SECRET) as TokenPayload;
};