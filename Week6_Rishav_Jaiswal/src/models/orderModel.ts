import { Model, DataTypes } from 'sequelize';
import sequelize from '../postgresDB/pgConfig';

class Order extends Model {
  public id!: number;
  public userId!: number;
  public bookId!: number;
  public amount!: number;
  public paymentStatus!: string;
}
// Initialize 

Order.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    bookId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    amount: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    paymentStatus: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'Order',
  }
);

export default Order;
