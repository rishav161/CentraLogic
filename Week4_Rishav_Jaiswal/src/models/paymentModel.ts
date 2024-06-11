import { DataTypes, Model, Association } from 'sequelize';
import sequelize from '../config/pgConfig';
import SOW from './sowModel';
import Customer from './customerModel';

class SOWPaymentPlan extends Model {
  public id!: string;
  public sowId!: string;
  public customerId!: string;
  public plannedInvoiceDate!: Date;
  public totalActualAmount!: number;

  // Timestamps
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;

  // Association properties
  public sow?: SOW;
  public customer?: Customer;

  // Define the associations
  public static associations: {
    sow: Association<SOWPaymentPlan, SOW>;
    customer: Association<SOWPaymentPlan, Customer>;
  };
}

SOWPaymentPlan.init(
  {
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    sowId: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: SOW,
        key: 'id',
      },
    },
    customerId: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: Customer,
        key: 'id',
      },
    },
    plannedInvoiceDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    totalActualAmount: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'SOWPaymentPlan',
  }
);

// Associate SOWPaymentPlan with SOW (one-to-many relationship)
SOWPaymentPlan.belongsTo(SOW, { foreignKey: 'sowId', as: 'sow' });
SOW.hasMany(SOWPaymentPlan, { foreignKey: 'sowId', as: 'paymentPlans' });

// Associate SOWPaymentPlan with Customer (one-to-many relationship)
SOWPaymentPlan.belongsTo(Customer, { foreignKey: 'customerId', as: 'customer' });
Customer.hasMany(SOWPaymentPlan, { foreignKey: 'customerId', as: 'paymentPlans' });

export default SOWPaymentPlan;
