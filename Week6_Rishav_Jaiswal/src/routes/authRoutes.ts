import express, { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../models/userModel';
import credentials from '../common/credentials';
import { authenticateToken, RequestWithUser } from '../middleware/jwt';

const router = express.Router();

// Register a new user
router.post('/register', async (req: Request, res: Response) => {
    try {
        const { username, password, email } = req.body;

        // Hash the password using bcrypt
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);

        const user = await User.create({ username, password: hashedPassword, email });
        res.status(201).json(user);
    } catch (error) {
        res.status(400).json({ error: 'Unable to register user' });
    }
});

// Login a user
router.post('/login', async (req: Request, res: Response) => {
    const { username, password } = req.body;
    const user = await User.findOne({ where: { username } });

    if (user) {

        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (isPasswordValid) {
            const token = jwt.sign({ userId: user.id }, credentials.jwt.JWT_TOKEN, { expiresIn: '1h' });
            res.json({ token });
        } else {
            res.status(401).json({ error: 'Invalid credentials' });
        }
    } else {
        res.status(401).json({ error: 'Invalid credentials' });
    }
});

// Get current user details
router.get('/users/me', authenticateToken, async (req: RequestWithUser, res: Response) => {
    try {
        const user = await User.findByPk(req.user?.userId, { attributes: { exclude: ['password'] } });
        if (user) {
            res.json(user);
        } else {
            res.status(404).json({ error: 'User not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
});

export default router;