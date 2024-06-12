import Book from '../models/bookModel';
import Author from '../models/authorModel';

export const getAllBooks = async () => {
    return await Book.findAll({ include: [{ model: Author, as: 'authors' }] });
};

export const getBookById = async (bookId: number) => {
    return await Book.findByPk(bookId, { include: [{ model: Author, as: 'authors' }] });
};

export const createBook = async (bookData: any) => {
    const book = await Book.create(bookData);
    if (bookData.authors) {
        const authors = await Author.findAll({
            where: {
                id: bookData.authors
            }
        });
        await (book as any).setAuthors(authors);
    }
    return book;
};

export const updateBook = async (bookId: number, bookData: any) => {
    const book = await Book.findByPk(bookId);
    if (book) {
        await book.update(bookData);
        if (bookData.authors) {
            const authors = await Author.findAll({
                where: {
                    id: bookData.authors
                }
            });
            await (book as any).setAuthors(authors);
        }
    }
    return book;
};

export const deleteBook = async (bookId: number) => {
    const book = await Book.findByPk(bookId);
    if (book) {
        await book.destroy();
    }
    return book;
};
