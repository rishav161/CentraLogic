"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
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
    key: sequelize_1.DataTypes.STRING,
    value: sequelize_1.DataTypes.STRING,
    employeeId: {
        type: sequelize_1.DataTypes.UUID,
        references: {
            model: employeModel_1.default,
            key: 'id',
        },
    },
}, {
    sequelize: dbConfig_1.default,
    modelName: 'Claim',
});
employeModel_1.default.hasMany(Claim, { foreignKey: 'employeeId' });
Claim.belongsTo(employeModel_1.default, { foreignKey: 'employeeId' });
exports.default = Claim;
//# sourceMappingURL=claimModel.js.map