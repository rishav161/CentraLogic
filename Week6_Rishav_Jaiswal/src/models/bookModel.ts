import { Model, DataTypes } from 'sequelize';
import sequelize from '../postgresDB/pgConfig';
import Author from './authorModel';

class Book extends Model {
    public id!: number;
    public title!: string;
    public description!: string;
    public rating!: number;
    public readonly authors?: Author[];
}

Book.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        rating: {
            type: DataTypes.FLOAT,
            defaultValue: 0
        }
    },
    {
        sequelize,
        tableName: 'books'
    }
);

export default Book;
