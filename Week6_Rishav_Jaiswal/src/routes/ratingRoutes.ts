import express from 'express';
import { addRating, getRatings } from '../controller/ratingController';
import { authenticateToken } from '../middleware/jwt';

const router = express.Router();

router.post('/ratings', authenticateToken, addRating);
router.get('/ratings/:bookId', authenticateToken, getRatings);

export default router;
