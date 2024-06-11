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
const timeSheetModel_1 = __importDefault(require("../models/timeSheetModel"));
const loggerUtils_1 = __importDefault(require("../utils/loggerUtils"));
class TimesheetService {
    createTimesheetEntry(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const entry = yield timeSheetModel_1.default.create(data);
            loggerUtils_1.default.info(`Timesheet entry created for employee ${data.employeeId}, shift ${data.shiftId}`);
            return entry;
        });
    }
    getTimesheetsByShift(shiftId) {
        return __awaiter(this, void 0, void 0, function* () {
            return timeSheetModel_1.default.findAll({ where: { shiftId } });
        });
    }
    getTimesheetsByEmployee(employeeId) {
        return __awaiter(this, void 0, void 0, function* () {
            return timeSheetModel_1.default.findAll({ where: { employeeId } });
        });
    }
}
exports.default = new TimesheetService();
//# sourceMappingURL=timesheetService.js.map