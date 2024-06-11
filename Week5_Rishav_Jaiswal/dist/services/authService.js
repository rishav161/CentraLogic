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
const bcrypt_1 = __importDefault(require("bcrypt"));
const employeModel_1 = __importDefault(require("../models/employeModel"));
const jwtUtils_1 = require("../utils/jwtUtils");
const shiftService_1 = __importDefault(require("./shiftService"));
const loggerUtils_1 = __importDefault(require("../utils/loggerUtils"));
class AuthService {
    register(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const { name, email, password, role, assignedShiftHours = 8 } = data;
            const existingEmployee = yield employeModel_1.default.findOne({ where: { email } });
            if (existingEmployee) {
                throw new Error('Email already in use');
            }
            const employee = yield employeModel_1.default.create({ name, email, password, role, assignedShiftHours });
            loggerUtils_1.default.info(`Employee ${employee.id} registered successfully`);
            return employee;
        });
    }
    login(email, password) {
        return __awaiter(this, void 0, void 0, function* () {
            const employee = yield employeModel_1.default.findOne({ where: { email } });
            if (!employee || !(yield bcrypt_1.default.compare(password, employee.password))) {
                throw new Error('Invalid credentials');
            }
            const token = (0, jwtUtils_1.generateToken)({ id: employee.id, role: employee.role });
            yield shiftService_1.default.startShift(employee.id);
            loggerUtils_1.default.info(`Employee ${employee.id} logged in`);
            return { token, employee };
        });
    }
}
exports.default = new AuthService();
//# sourceMappingURL=authService.js.map