"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const shiftController_1 = __importDefault(require("../controllers/shiftController"));
const authMiddleware_1 = require("../middleware/authMiddleware");
const router = (0, express_1.Router)();
router.post('/start', authMiddleware_1.authenticate, shiftController_1.default.startShift);
router.put('/:shiftId/end', authMiddleware_1.authenticate, shiftController_1.default.endShift);
router.get('/employee', authMiddleware_1.authenticate, shiftController_1.default.getEmployeeShifts);
router.get('/report', authMiddleware_1.authenticate, shiftController_1.default.generateReport);
exports.default = router;
//# sourceMappingURL=shiftRoutes.js.map