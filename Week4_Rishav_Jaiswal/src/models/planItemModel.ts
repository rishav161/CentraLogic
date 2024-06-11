// src/models/SOWPaymentPlanLineItem.ts
import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/pgConfig';
import SOWPaymentPlan from './paymentModel';
import SOW from './sowModel';

class SOWPaymentPlanLineItem extends Model {
  public id!: string;
  public sowPaymentPlanId!: string;
  public sowId!: string;
  public orderId!: string;
  public particular!: string;
  public rate!: number;
  public unit!: number;
  public total!: number;

  // Timestamps
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

SOWPaymentPlanLineItem.init(
  {
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    sowPaymentPlanId: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: SOWPaymentPlan,
        key: 'id',
      },
    },
    sowId: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: SOW,
        key: 'id',
      },
    },
    orderId: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    particular: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    rate: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    unit: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    total: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'SOWPaymentPlanLineItem',
  }
);

// Associate SOWPaymentPlanLineItem with SOWPaymentPlan (one-to-many relationship)
SOWPaymentPlanLineItem.belongsTo(SOWPaymentPlan, {
  foreignKey: 'sowPaymentPlanId',
  as: 'paymentPlan',
});
SOWPaymentPlan.hasMany(SOWPaymentPlanLineItem, {
  foreignKey: 'sowPaymentPlanId',
  as: 'lineItems',
});

// Associate SOWPaymentPlanLineItem with SOW (one-to-many relationship)
SOWPaymentPlanLineItem.belongsTo(SOW, { foreignKey: 'sowId', as: 'sow' });
SOW.hasMany(SOWPaymentPlanLineItem, { foreignKey: 'sowId', as: 'paymentPlanLineItems' });

export default SOWPaymentPlanLineItem;