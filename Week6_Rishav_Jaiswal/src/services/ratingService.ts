import Book from '../models/bookModel';
import Rating from '../models/ratingModel';

export const addRating = async (bookId: number, userId: number, ratingValue: number) => {
    const rating = await Rating.create({ bookId, userId, rating: ratingValue });
    const ratings = await Rating.findAll({ where: { bookId } });
    const averageRating = ratings.reduce((acc, r) => acc + r.rating, 0) / ratings.length;
    const book = await Book.findByPk(bookId);
    if (book) {
        book.rating = averageRating;
        await book.save();
    }
    return rating;
};

export const getRatings = async (bookId: number) => {
    return await Rating.findAll({ where: { bookId } });
};
