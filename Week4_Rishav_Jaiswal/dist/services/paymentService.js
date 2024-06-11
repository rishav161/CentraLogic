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
// src/services/SOWPaymentPlanService.ts
const paymentModel_1 = __importDefault(require("../models/paymentModel"));
const sowModel_1 = __importDefault(require("../models/sowModel"));
const customerModel_1 = __importDefault(require("../models/customerModel"));
class SOWPaymentPlanService {
    createSOWPaymentPlan(data) {
        return __awaiter(this, void 0, void 0, function* () {
            // Validate input data
            const { sowId, customerId, plannedInvoiceDate, totalActualAmount } = data;
            // Check if the associated SOW and Client exist
            const sow = yield sowModel_1.default.findByPk(sowId);
            const customer = yield customerModel_1.default.findByPk(customerId);
            if (!sow || !customer) {
                throw new Error('Invalid SOW or Client ID');
            }
            // Create the new SOW Payment Plan
            const paymentPlan = yield paymentModel_1.default.create({
                sowId,
                customerId,
                plannedInvoiceDate,
                totalActualAmount,
            });
            return paymentPlan;
        });
    }
    getSOWPaymentPlanById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const paymentPlan = yield paymentModel_1.default.findByPk(id, {
                include: [
                    { model: sowModel_1.default, as: 'sow' },
                    { model: customerModel_1.default, as: 'customer' },
                ],
            });
            return paymentPlan;
        });
    }
    getAllSOWPaymentPlans() {
        return __awaiter(this, void 0, void 0, function* () {
            const paymentPlans = yield paymentModel_1.default.findAll({
                include: [
                    { model: sowModel_1.default, as: 'sow' },
                    { model: customerModel_1.default, as: 'customer' },
                ],
            });
            return paymentPlans;
        });
    }
    updateSOWPaymentPlan(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            const paymentPlan = yield paymentModel_1.default.findByPk(id);
            if (!paymentPlan) {
                return null;
            }
            // Update the SOW Payment Plan
            yield paymentPlan.update(data);
            return paymentPlan;
        });
    }
    deleteSOWPaymentPlan(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const paymentPlan = yield paymentModel_1.default.findByPk(id);
            if (!paymentPlan) {
                return false;
            }
            // Delete the SOW Payment Plan
            yield paymentPlan.destroy();
            return true;
        });
    }
}
exports.default = new SOWPaymentPlanService();
//# sourceMappingURL=paymentService.js.map