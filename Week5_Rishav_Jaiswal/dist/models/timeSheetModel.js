"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const dbConfig_1 = __importDefault(require("../dbService/dbConfig"));
const employeModel_1 = __importDefault(require("./employeModel"));
const shiftModel_1 = __importDefault(require("./shiftModel"));
class Timesheet extends sequelize_1.Model {
}
Timesheet.init({
    id: {
        type: sequelize_1.DataTypes.UUID,
        defaultValue: sequelize_1.DataTypes.UUIDV4,
        primaryKey: true,
    },
    employeeId: {
        type: sequelize_1.DataTypes.UUID,
        references: {
            model: employeModel_1.default,
            key: 'id',
        },
    },
    shiftId: {
        type: sequelize_1.DataTypes.UUID,
        references: {
            model: shiftModel_1.default,
            key: 'id',
        },
    },
    projectName: sequelize_1.DataTypes.STRING,
    taskName: sequelize_1.DataTypes.STRING,
    fromDate: sequelize_1.DataTypes.DATE,
    toDate: sequelize_1.DataTypes.DATE,
}, {
    sequelize: dbConfig_1.default,
    modelName: 'Timesheet',
});
employeModel_1.default.hasMany(Timesheet, { foreignKey: 'employeeId' });
Timesheet.belongsTo(employeModel_1.default, { foreignKey: 'employeeId' });
shiftModel_1.default.hasMany(Timesheet, { foreignKey: 'shiftId' });
Timesheet.belongsTo(shiftModel_1.default, { foreignKey: 'shiftId' });
exports.default = Timesheet;
//# sourceMappingURL=timeSheetModel.js.map