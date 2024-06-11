"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const timesheetController_1 = __importDefault(require("../controllers/timesheetController"));
const authMiddleware_1 = require("../middleware/authMiddleware");
const router = (0, express_1.Router)();
router.post('/', authMiddleware_1.authenticate, timesheetController_1.default.createTimesheetEntry);
router.get('/shift/:shiftId', authMiddleware_1.authenticate, timesheetController_1.default.getTimesheetsByShift);
router.get('/employee', authMiddleware_1.authenticate, timesheetController_1.default.getEmployeeTimesheets);
exports.default = router;
//# sourceMappingURL=timesheetRoutes.js.map