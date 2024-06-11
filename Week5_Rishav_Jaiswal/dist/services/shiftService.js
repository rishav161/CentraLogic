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
const shiftModel_1 = __importDefault(require("../models/shiftModel"));
const employeModel_1 = __importDefault(require("../models/employeModel"));
const loggerUtils_1 = __importDefault(require("../utils/loggerUtils"));
class ShiftService {
    startShift(employeeId) {
        return __awaiter(this, void 0, void 0, function* () {
            const shift = yield shiftModel_1.default.create({ employeeId, startTime: new Date() });
            loggerUtils_1.default.info(`Employee ${employeeId} started shift ${shift.id}`);
            return shift;
        });
    }
    endShift(shiftId) {
        return __awaiter(this, void 0, void 0, function* () {
            const shift = yield shiftModel_1.default.findByPk(shiftId);
            if (!shift || shift.endTime) {
                throw new Error('Invalid shift or shift already ended');
            }
            shift.endTime = new Date();
            shift.actualHours = (shift.endTime.getTime() - shift.startTime.getTime()) / 3600000; // hours
            yield shift.save();
            loggerUtils_1.default.info(`Shift ${shiftId} ended with ${shift.actualHours} hours`);
            return shift;
        });
    }
    getEmployeeShifts(employeeId) {
        return __awaiter(this, void 0, void 0, function* () {
            return shiftModel_1.default.findAll({ where: { employeeId } });
        });
    }
    generateReport() {
        return __awaiter(this, void 0, void 0, function* () {
            const report = yield employeModel_1.default.findAll({
                attributes: ['id', 'name', 'assignedShiftHours'],
                include: [{
                        model: shiftModel_1.default,
                        as: 'Shifts',
                        attributes: ['startTime', 'endTime', 'actualHours'],
                    }],
            });
            return report.map(employee => ({
                employeeId: employee.id,
                name: employee.name,
                assignedHours: employee.assignedShiftHours,
                shifts: employee.Shifts.map(shift => ({
                    date: shift.startTime.toISOString().split('T')[0],
                    actualHours: shift.actualHours,
                })),
            }));
        });
    }
}
exports.default = new ShiftService();
//# sourceMappingURL=shiftService.js.map