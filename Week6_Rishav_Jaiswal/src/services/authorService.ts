import Author from '../models/authorModel';
import Book from '../models/bookModel';

export const getAllAuthors = async () => {
    return await Author.findAll({ include: [{ model: Book, as: 'books' }] });
};

export const getAuthorById = async (authorId: number) => {
    return await Author.findByPk(authorId, { include: [{ model: Book, as: 'books' }] });
};

export const createAuthor = async (authorData: any) => {
    return await Author.create(authorData);
};

export const updateAuthor = async (authorId: number, authorData: any) => {
    const author = await Author.findByPk(authorId);
    if (author) {
        await author.update(authorData);
    }
    return author;
};

export const deleteAuthor = async (authorId: number) => {
    const author = await Author.findByPk(authorId);
    if (author) {
        await author.destroy();
    }
    return author;
};
