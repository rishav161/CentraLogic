"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const paymentController_1 = __importDefault(require("../controllers/paymentController"));
const router = (0, express_1.Router)();
router.post('/', paymentController_1.default.createSOWPaymentPlan);
router.get('/:id', paymentController_1.default.getSOWPaymentPlanById);
router.get('/', paymentController_1.default.getAllSOWPaymentPlans);
router.put('/:id', paymentController_1.default.updateSOWPaymentPlan);
router.delete('/:id', paymentController_1.default.deleteSOWPaymentPlan);
exports.default = router;
//# sourceMappingURL=planItemRoutes.js.map