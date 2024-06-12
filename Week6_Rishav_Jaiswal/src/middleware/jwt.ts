import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import credentials from '../common/credentials';

export interface RequestWithUser extends Request {
    user?: { userId: number, role: string };
}

export const authenticateToken = (req: RequestWithUser, res: Response, next: NextFunction) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (token == null) return res.sendStatus(401);

    jwt.verify(token, credentials.jwt.JWT_TOKEN, (err: any, user: any) => {
        if (err) return res.sendStatus(403);
        req.user = { userId: user.userId, role: user.role };
        next();
    });
};

export const authorizeRole = (role: string) => {
    return (req: RequestWithUser, res: Response, next: NextFunction) => {
        if (req.user?.role !== role) {
            return res.status(403).json({ error: 'Access denied' });
        }
        next();
    };
};
