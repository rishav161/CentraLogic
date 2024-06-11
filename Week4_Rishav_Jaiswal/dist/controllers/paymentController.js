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
const paymentService_1 = __importDefault(require("../services/paymentService"));
class SOWPaymentPlanController {
    createSOWPaymentPlan(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const paymentPlan = yield paymentService_1.default.createSOWPaymentPlan(req.body);
                res.status(201).json(paymentPlan);
            }
            catch (error) {
                res.status(400).json({ error: error.message });
            }
        });
    }
    getSOWPaymentPlanById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const paymentPlan = yield paymentService_1.default.getSOWPaymentPlanById(req.params.id);
                if (paymentPlan) {
                    res.json(paymentPlan);
                }
                else {
                    res.status(404).json({ error: 'SOW Payment Plan not found' });
                }
            }
            catch (error) {
                res.status(400).json({ error: error.message });
            }
        });
    }
    getAllSOWPaymentPlans(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const paymentPlans = yield paymentService_1.default.getAllSOWPaymentPlans();
                res.json(paymentPlans);
            }
            catch (error) {
                res.status(400).json({ error: error.message });
            }
        });
    }
    updateSOWPaymentPlan(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const updatedPaymentPlan = yield paymentService_1.default.updateSOWPaymentPlan(req.params.id, req.body);
                if (updatedPaymentPlan) {
                    res.json(updatedPaymentPlan);
                }
                else {
                    res.status(404).json({ error: 'SOW Payment Plan not found' });
                }
            }
            catch (error) {
                res.status(400).json({ error: error.message });
            }
        });
    }
    deleteSOWPaymentPlan(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const deleted = yield paymentService_1.default.deleteSOWPaymentPlan(req.params.id);
                if (deleted) {
                    res.json({ message: 'SOW Payment Plan deleted successfully' });
                }
                else {
                    res.status(404).json({ error: 'SOW Payment Plan not found' });
                }
            }
            catch (error) {
                res.status(400).json({ error: error.message });
            }
        });
    }
}
exports.default = new SOWPaymentPlanController();
//# sourceMappingURL=paymentController.js.map