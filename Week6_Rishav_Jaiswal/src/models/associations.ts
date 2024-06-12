import Author from './authorModel';
import Book from './bookModel';

// Define many-to-many relationships
Author.belongsToMany(Book, { through: 'BookAuthors', as: 'books' });
Book.belongsToMany(Author, { through: 'BookAuthors', as: 'authors' });
