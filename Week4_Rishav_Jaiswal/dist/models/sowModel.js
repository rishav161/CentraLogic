"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const pgConfig_1 = __importDefault(require("../config/pgConfig"));
const customerModel_1 = __importDefault(require("./customerModel"));
class SOW extends sequelize_1.Model {
}
SOW.init({
    id: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        primaryKey: true,
    },
    invoiceEmailAddresses: {
        type: sequelize_1.DataTypes.ARRAY(sequelize_1.DataTypes.STRING),
        allowNull: false,
    },
    customerId: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        references: {
            model: 'customers', // Name of the target table
            key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
    },
    customerPONumber: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    title: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    customerSONumber: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    validFrom: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false,
    },
    validUpto: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false,
    },
    totalValue: {
        type: sequelize_1.DataTypes.FLOAT,
        allowNull: false,
    },
    currency: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
}, {
    sequelize: pgConfig_1.default,
    modelName: 'SOW',
    tableName: 'sows',
    timestamps: true,
});
SOW.belongsTo(customerModel_1.default, { foreignKey: 'customerId', as: 'customer' });
customerModel_1.default.hasMany(SOW, { foreignKey: 'customerId', as: 'sows' });
exports.default = SOW;
//# sourceMappingURL=sowModel.js.map