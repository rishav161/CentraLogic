import { Request, Response } from 'express';
import * as authorService from '../services/authorService';
//Author 

export const getAllAuthors = async (req: Request, res: Response) => {
    const authors = await authorService.getAllAuthors();
    res.json(authors);
};

export const getAuthorById = async (req: Request, res: Response) => {
    const author = await authorService.getAuthorById(Number(req.params.id));
    if (author) {
        res.json(author);
    } else {
        res.status(404).json({ error: 'Author not found' });
    }
};

export const createAuthor = async (req: Request, res: Response) => {
    const author = await authorService.createAuthor(req.body);
    res.status(201).json(author);
};

export const updateAuthor = async (req: Request, res: Response) => {
    const author = await authorService.updateAuthor(Number(req.params.id), req.body);
    if (author) {
        res.json(author);
    } else {
        res.status(404).json({ error: 'Author not found' });
    }
};

export const deleteAuthor = async (req: Request, res: Response) => {
    const author = await authorService.deleteAuthor(Number(req.params.id));
    if (author) {
        res.status(204).send();
    } else {
        res.status(404).json({ error: 'Author not found' });
    }
};
