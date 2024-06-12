import { Model, DataTypes } from 'sequelize';
import sequelize from '../postgresDB/pgConfig';
import User from './userModel';
import Book from './bookModel';

class Rating extends Model {
    public id!: number;
    public bookId!: number;
    public userId!: number;
    public rating!: number;
}
// Initialize 

Rating.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        bookId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        rating: {
            type: DataTypes.FLOAT,
            allowNull: false
        }
    },
    {
        sequelize,
        tableName: 'ratings'
    }
);

Rating.belongsTo(User, { foreignKey: 'userId' });
Rating.belongsTo(Book, { foreignKey: 'bookId' });

export default Rating;
