"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// src/models/SOWPaymentPlanLineItem.ts
const sequelize_1 = require("sequelize");
const pgConfig_1 = __importDefault(require("../config/pgConfig"));
const paymentModel_1 = __importDefault(require("./paymentModel"));
const sowModel_1 = __importDefault(require("./sowModel"));
class SOWPaymentPlanLineItem extends sequelize_1.Model {
}
SOWPaymentPlanLineItem.init({
    id: {
        type: sequelize_1.DataTypes.STRING,
        primaryKey: true,
    },
    sowPaymentPlanId: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        references: {
            model: paymentModel_1.default,
            key: 'id',
        },
    },
    sowId: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        references: {
            model: sowModel_1.default,
            key: 'id',
        },
    },
    orderId: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    particular: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    rate: {
        type: sequelize_1.DataTypes.FLOAT,
        allowNull: false,
    },
    unit: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    total: {
        type: sequelize_1.DataTypes.FLOAT,
        allowNull: false,
    },
}, {
    sequelize: pgConfig_1.default,
    modelName: 'SOWPaymentPlanLineItem',
});
// Associate SOWPaymentPlanLineItem with SOWPaymentPlan (one-to-many relationship)
SOWPaymentPlanLineItem.belongsTo(paymentModel_1.default, {
    foreignKey: 'sowPaymentPlanId',
    as: 'paymentPlan',
});
paymentModel_1.default.hasMany(SOWPaymentPlanLineItem, {
    foreignKey: 'sowPaymentPlanId',
    as: 'lineItems',
});
// Associate SOWPaymentPlanLineItem with SOW (one-to-many relationship)
SOWPaymentPlanLineItem.belongsTo(sowModel_1.default, { foreignKey: 'sowId', as: 'sow' });
sowModel_1.default.hasMany(SOWPaymentPlanLineItem, { foreignKey: 'sowId', as: 'paymentPlanLineItems' });
exports.default = SOWPaymentPlanLineItem;
//# sourceMappingURL=planItemModel.js.map