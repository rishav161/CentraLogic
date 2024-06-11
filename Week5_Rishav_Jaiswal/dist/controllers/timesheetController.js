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
const timesheetService_1 = __importDefault(require("../services/timesheetService"));
const loggerUtils_1 = __importDefault(require("../utils/loggerUtils"));
class TimesheetController {
    createTimesheetEntry(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const entry = yield timesheetService_1.default.createTimesheetEntry(Object.assign(Object.assign({}, req.body), { employeeId: req.user.id }));
                res.status(201).json(entry);
            }
            catch (error) {
                loggerUtils_1.default.error('Error creating timesheet entry:', error);
                res.status(500).json({ message: 'Error creating timesheet entry' });
            }
        });
    }
    getTimesheetsByShift(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const entries = yield timesheetService_1.default.getTimesheetsByShift(req.params.shiftId);
                res.json(entries);
            }
            catch (error) {
                loggerUtils_1.default.error('Error fetching timesheet entries:', error);
                res.status(500).json({ message: 'Error fetching timesheet entries' });
            }
        });
    }
    getEmployeeTimesheets(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const entries = yield timesheetService_1.default.getTimesheetsByEmployee(req.user.id);
                res.json(entries);
            }
            catch (error) {
                loggerUtils_1.default.error('Error fetching employee timesheets:', error);
                res.status(500).json({ message: 'Error fetching timesheets' });
            }
        });
    }
}
exports.default = new TimesheetController();
//# sourceMappingURL=timesheetController.js.map