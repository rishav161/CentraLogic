"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// customerModel.ts
const sequelize_1 = require("sequelize");
const pgConfig_1 = __importDefault(require("../config/pgConfig"));
const organizationModel_1 = __importDefault(require("./organizationModel"));
class Customer extends sequelize_1.Model {
}
Customer.init({
    id: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        primaryKey: true,
    },
    orgId: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    MSAValidFrom: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false,
    },
    MSAValidUpto: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false,
    },
    LegalName: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    NDASignedOn: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false,
    },
    ShortName: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    NDAValidFrom: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false,
    },
    NDAValidUpto: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false,
    },
    AddressId: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    DisplayName: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    IsNDASigned: {
        type: sequelize_1.DataTypes.BOOLEAN,
        allowNull: false,
    },
    IsMSASigned: {
        type: sequelize_1.DataTypes.BOOLEAN,
        allowNull: false,
    },
    MSASignedOn: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false,
    },
}, {
    sequelize: pgConfig_1.default,
    modelName: 'Customer',
    tableName: 'customers',
    timestamps: true,
});
// Define the association
Customer.belongsTo(organizationModel_1.default, { foreignKey: 'orgId' });
organizationModel_1.default.hasMany(Customer, { foreignKey: 'orgId', });
exports.default = Customer;
//# sourceMappingURL=customerModel.js.map