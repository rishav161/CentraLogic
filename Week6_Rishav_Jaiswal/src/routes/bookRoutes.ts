import express from 'express';
import { getAllBooks, getBookById, createBook, updateBook, deleteBook } from '../controller/bookController';
import { authenticateToken } from '../middleware/jwt';

const router = express.Router();

router.get('/books', authenticateToken, getAllBooks);
router.get('/books/:id', authenticateToken, getBookById);
router.post('/books', authenticateToken, createBook);
router.put('/books/:id', authenticateToken, updateBook);
router.delete('/books/:id', authenticateToken, deleteBook);

export default router;
