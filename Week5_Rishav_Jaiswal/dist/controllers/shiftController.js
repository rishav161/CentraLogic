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
const shiftService_1 = __importDefault(require("../services/shiftService"));
const loggerUtils_1 = __importDefault(require("../utils/loggerUtils"));
class ShiftController {
    startShift(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const shift = yield shiftService_1.default.startShift(req.user.id);
                res.json(shift);
            }
            catch (error) {
                loggerUtils_1.default.error('Error starting shift:', error);
                res.status(500).json({ message: 'Error starting shift' });
            }
        });
    }
    endShift(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const shift = yield shiftService_1.default.endShift(req.params.shiftId);
                res.json(shift);
            }
            catch (error) {
                loggerUtils_1.default.error('Error ending shift:', error);
                res.status(400).json({ message: error.message });
            }
        });
    }
    getEmployeeShifts(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const shifts = yield shiftService_1.default.getEmployeeShifts(req.user.id);
                res.json(shifts);
            }
            catch (error) {
                loggerUtils_1.default.error('Error fetching employee shifts:', error);
                res.status(500).json({ message: 'Error fetching shifts' });
            }
        });
    }
    generateReport(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const report = yield shiftService_1.default.generateReport();
                res.json(report);
            }
            catch (error) {
                loggerUtils_1.default.error('Error generating report:', error);
                res.status(500).json({ message: 'Error generating report' });
            }
        });
    }
}
exports.default = new ShiftController();
//# sourceMappingURL=shiftController.js.map