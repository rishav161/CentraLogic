"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// src/models/claim.model.ts
const sequelize_1 = require("sequelize");
const dbConfig_1 = __importDefault(require("../dbService/dbConfig"));
const employeModel_1 = __importDefault(require("./employeModel"));
class Claim extends sequelize_1.Model {
}
Claim.init({
    id: {
        type: sequelize_1.DataTypes.UUID,
        defaultValue: sequelize_1.DataTypes.UUIDV4,
        primaryKey: true,
    },
    key: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    value: {
        type: sequelize_1.DataTypes.BOOLEAN,
        allowNull: false,
    },
    employeeId: {
        type: sequelize_1.DataTypes.UUID,
        allowNull: false,
        references: {
            model: employeModel_1.default,
            key: 'id',
        },
    },
}, {
    sequelize: dbConfig_1.default,
    modelName: 'Claim',
});
// Connection of Claim with Employee
Claim.belongsTo(employeModel_1.default, { foreignKey: 'employeeId' });
employeModel_1.default.hasMany(Claim, { foreignKey: 'employeeId' });
exports.default = Claim;
//# sourceMappingURL=claimsModel.js.map