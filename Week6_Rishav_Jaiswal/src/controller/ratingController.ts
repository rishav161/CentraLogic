import { Request, Response, NextFunction } from 'express';
import * as ratingService from '../services/ratingService';

// Define a custom interface extending Request
interface RequestWithUser extends Request {
  user?: { id: number }; // Make the `user` property optional
}

export const addRating = async (
  req: RequestWithUser,
  res: Response,
  next: NextFunction
) => {
  try {
    const { bookId, rating } = req.body;
    const userId = req.user?.id; // Use optional chaining to handle `req.user` being undefined
    if (!userId) {
      return res.status(401).json({ error: 'Unauthorized' });
    }
    const newRating = await ratingService.addRating(bookId, userId, rating);
    res.status(201).json(newRating);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

export const getRatings = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { bookId } = req.params;
    const ratings = await ratingService.getRatings(Number(bookId));
    res.status(200).json(ratings);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};