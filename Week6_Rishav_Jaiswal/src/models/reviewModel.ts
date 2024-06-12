import { Model, DataTypes } from 'sequelize';
import sequelize from '../postgresDB/pgConfig';
import User from './userModel';
import Book from './bookModel';

class Review extends Model {}
// Initialize 
Review.init({
  id: { 
    type: DataTypes.INTEGER,
    primaryKey: true, 
    autoIncrement: true

  },
  userId: { 
    type: DataTypes.INTEGER, 
    allowNull: false, 
    references: { model: User, key: 'id' } },
  bookId: { 
    type: DataTypes.INTEGER,
     allowNull: false,
     references: { model: Book, key: 'id' } },
  content: { 
    type: DataTypes.TEXT, 
    allowNull: false }
}, 
{ 
  sequelize,
  modelName: 'review' 
});

Review.belongsTo(User);

Review.belongsTo(Book);

export default Review;
