import { Request, Response } from 'express';
import * as bookService from '../services/bookService';
//Book
export const getAllBooks = async (req: Request, res: Response) => {
    const books = await bookService.getAllBooks();
    res.json(books);
};

export const getBookById = async (req: Request, res: Response) => {
    const book = await bookService.getBookById(Number(req.params.id));
    if (book) {
        res.json(book);
    } else {
        res.status(404).json({ error: 'Book not found' });
    }
};

export const createBook = async (req: Request, res: Response) => {
    const book = await bookService.createBook(req.body);
    res.status(201).json(book);
};

export const updateBook = async (req: Request, res: Response) => {
    const book = await bookService.updateBook(Number(req.params.id), req.body);
    if (book) {
        res.json(book);
    } else {
        res.status(404).json({ error: 'Book not found' });
    }
};

export const deleteBook = async (req: Request, res: Response) => {
    const book = await bookService.deleteBook(Number(req.params.id));
    if (book) {
        res.status(204).send();
    } else {
        res.status(404).json({ error: 'Book not found' });
    }
};
