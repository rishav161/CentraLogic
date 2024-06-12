import express from 'express';
import { getAllAuthors, getAuthorById, createAuthor, updateAuthor, deleteAuthor } from '../controller/authorController';
import { authenticateToken } from '../middleware/jwt';

const router = express.Router();

router.get('/authors', authenticateToken, getAllAuthors);
router.get('/authors/:id', authenticateToken, getAuthorById);
router.post('/authors', authenticateToken, createAuthor);
router.put('/authors/:id', authenticateToken, updateAuthor);
router.delete('/authors/:id', authenticateToken, deleteAuthor);

export default router;
