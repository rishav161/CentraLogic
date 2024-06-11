"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// src/routes/sowPaymentPlanRoutes.ts
const express_1 = __importDefault(require("express"));
const paymentController_1 = __importDefault(require("../controllers/paymentController"));
const router = express_1.default.Router();
// Create a new SOW Payment Plan
router.post('/', paymentController_1.default.createSOWPaymentPlan);
// Get a single SOW Payment Plan by ID
router.get('/:id', paymentController_1.default.getSOWPaymentPlanById);
// Get all SOW Payment Plans
router.get('/', paymentController_1.default.getAllSOWPaymentPlans);
// Update a SOW Payment Plan
router.put('/:id', paymentController_1.default.updateSOWPaymentPlan);
// Delete a SOW Payment Plan
router.delete('/:id', paymentController_1.default.deleteSOWPaymentPlan);
exports.default = router;
//# sourceMappingURL=paymentRoutes.js.map