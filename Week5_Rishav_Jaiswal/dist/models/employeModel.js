"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const dbConfig_1 = __importDefault(require("../dbService/dbConfig"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const shiftModel_1 = __importDefault(require("./shiftModel"));
class Employee extends sequelize_1.Model {
}
Employee.init({
    id: {
        type: sequelize_1.DataTypes.UUID,
        defaultValue: sequelize_1.DataTypes.UUIDV4,
        primaryKey: true,
    },
    name: sequelize_1.DataTypes.STRING,
    email: {
        type: sequelize_1.DataTypes.STRING,
        unique: true,
    },
    password: sequelize_1.DataTypes.STRING,
    assignedShiftHours: sequelize_1.DataTypes.INTEGER,
    role: sequelize_1.DataTypes.ENUM('SuperAdmin', 'Manager', 'Employee'),
}, {
    sequelize: dbConfig_1.default,
    modelName: 'Employee',
    hooks: {
        beforeCreate: (employee) => __awaiter(void 0, void 0, void 0, function* () {
            employee.password = yield bcrypt_1.default.hash(employee.password, 10);
        }),
    },
});
Employee.hasMany(shiftModel_1.default, { foreignKey: 'employeeId', as: 'Shifts' });
shiftModel_1.default.belongsTo(Employee, { foreignKey: 'employeeId' });
exports.default = Employee;
//# sourceMappingURL=employeModel.js.map