import { Model, DataTypes } from 'sequelize';
import sequelize from '../postgresDB/pgConfig';
import Book from './bookModel';

class Author extends Model {
    public id!: number;
    public name!: string;
    public bio?: string;
    public birthdate?: Date;
    public isSystemUser!: boolean;
    public readonly books?: Book[];
}

Author.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        bio: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        birthdate: {
            type: DataTypes.DATE,
            allowNull: true
        },
        isSystemUser: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        }
    },
    {
        sequelize,
        modelName: 'Author'
    }
);

export default Author;
