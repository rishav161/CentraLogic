import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/pgConfig';
import Customer from './customerModel';

class SOW extends Model {
  public id!: string;
  public invoiceEmailAddresses!: string[];
  public customerId!: string;
  public customerPONumber!: string;
  public title!: string;
  public customerSONumber!: string;
  public validFrom!: Date;
  public validUpto!: Date;
  public totalValue!: number;
  public currency!: string;
 
}


SOW.init({
  id: {
    type: DataTypes.STRING,
    allowNull: false,
    primaryKey: true,
  },
  invoiceEmailAddresses: {
    type: DataTypes.ARRAY(DataTypes.STRING),
    allowNull: false,
  },
  customerId: {
    type: DataTypes.STRING,
    allowNull: false,
    references: {
      model: 'customers', // Name of the target table
      key: 'id',
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
  },
  customerPONumber: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  customerSONumber: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  validFrom: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  validUpto: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  totalValue: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  currency: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  sequelize,
  modelName: 'SOW',
  tableName: 'sows',
  timestamps: true,
});

SOW.belongsTo(Customer, { foreignKey: 'customerId', as:'customer' });
Customer.hasMany(SOW, { foreignKey: 'customerId',as:'sows' });

export default SOW;
