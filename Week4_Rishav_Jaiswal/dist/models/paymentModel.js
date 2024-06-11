"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const pgConfig_1 = __importDefault(require("../config/pgConfig"));
const sowModel_1 = __importDefault(require("./sowModel"));
const customerModel_1 = __importDefault(require("./customerModel"));
class SOWPaymentPlan extends sequelize_1.Model {
}
SOWPaymentPlan.init({
    id: {
        type: sequelize_1.DataTypes.STRING,
        primaryKey: true,
    },
    sowId: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        references: {
            model: sowModel_1.default,
            key: 'id',
        },
    },
    customerId: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        references: {
            model: customerModel_1.default,
            key: 'id',
        },
    },
    plannedInvoiceDate: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false,
    },
    totalActualAmount: {
        type: sequelize_1.DataTypes.FLOAT,
        allowNull: false,
    },
}, {
    sequelize: pgConfig_1.default,
    modelName: 'SOWPaymentPlan',
});
// Associate SOWPaymentPlan with SOW (one-to-many relationship)
SOWPaymentPlan.belongsTo(sowModel_1.default, { foreignKey: 'sowId', as: 'sow' });
sowModel_1.default.hasMany(SOWPaymentPlan, { foreignKey: 'sowId', as: 'paymentPlans' });
// Associate SOWPaymentPlan with Customer (one-to-many relationship)
SOWPaymentPlan.belongsTo(customerModel_1.default, { foreignKey: 'customerId', as: 'customer' });
customerModel_1.default.hasMany(SOWPaymentPlan, { foreignKey: 'customerId', as: 'paymentPlans' });
exports.default = SOWPaymentPlan;
//# sourceMappingURL=paymentModel.js.map