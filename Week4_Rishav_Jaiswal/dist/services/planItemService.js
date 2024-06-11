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
const planItemModel_1 = __importDefault(require("../models/planItemModel"));
const paymentModel_1 = __importDefault(require("../models/paymentModel"));
const sowModel_1 = __importDefault(require("../models/sowModel"));
class SOWPaymentPlanLineItemService {
    createSOWPaymentPlanLineItem(data) {
        return __awaiter(this, void 0, void 0, function* () {
            // Validate input data
            const { sowPaymentPlanId, sowId, orderId, particular, rate, unit, total } = data;
            // Check if the associated SOW Payment Plan and SOW exist
            const paymentPlan = yield paymentModel_1.default.findByPk(sowPaymentPlanId, {
                include: [{ model: sowModel_1.default, as: 'sow' }],
            });
            const sow = paymentPlan === null || paymentPlan === void 0 ? void 0 : paymentPlan.sow;
            if (!paymentPlan || !sow) {
                throw new Error('Invalid SOW Payment Plan or SOW ID');
            }
            // Create the new SOW Payment Plan Line Item
            const lineItem = yield planItemModel_1.default.create({
                sowPaymentPlanId,
                sowId,
                orderId,
                particular,
                rate,
                unit,
                total,
            });
            return lineItem;
        });
    }
    getSOWPaymentPlanLineItemById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const lineItem = yield planItemModel_1.default.findByPk(id, {
                include: [
                    { model: paymentModel_1.default, as: 'paymentPlan', include: [{ model: sowModel_1.default, as: 'sow' }] },
                    { model: sowModel_1.default, as: 'sow' },
                ],
            });
            return lineItem;
        });
    }
    getAllSOWPaymentPlanLineItems() {
        return __awaiter(this, void 0, void 0, function* () {
            const lineItems = yield planItemModel_1.default.findAll({
                include: [
                    { model: paymentModel_1.default, as: 'paymentPlan', include: [{ model: sowModel_1.default, as: 'sow' }] },
                    { model: sowModel_1.default, as: 'sow' },
                ],
            });
            return lineItems;
        });
    }
    updateSOWPaymentPlanLineItem(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            const lineItem = yield planItemModel_1.default.findByPk(id);
            if (!lineItem) {
                return null;
            }
            // Update the SOW Payment Plan Line Item
            yield lineItem.update(data);
            return lineItem;
        });
    }
    deleteSOWPaymentPlanLineItem(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const lineItem = yield planItemModel_1.default.findByPk(id);
            if (!lineItem) {
                return false;
            }
            // Delete the SOW Payment Plan Line Item
            yield lineItem.destroy();
            return true;
        });
    }
}
exports.default = new SOWPaymentPlanLineItemService();
//# sourceMappingURL=planItemService.js.map