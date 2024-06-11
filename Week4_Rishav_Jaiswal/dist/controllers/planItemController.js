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
const planItemService_1 = __importDefault(require("../services/planItemService"));
class SOWPaymentPlanLineItemController {
    createSOWPaymentPlanLineItem(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const lineItem = yield planItemService_1.default.createSOWPaymentPlanLineItem(req.body);
                res.status(201).json(lineItem);
            }
            catch (error) {
                res.status(400).json({ error: error.message });
            }
        });
    }
    getSOWPaymentPlanLineItemById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const lineItem = yield planItemService_1.default.getSOWPaymentPlanLineItemById(req.params.id);
                if (lineItem) {
                    res.json(lineItem);
                }
                else {
                    res.status(404).json({ error: 'SOW Payment Plan Line Item not found' });
                }
            }
            catch (error) {
                res.status(400).json({ error: error.message });
            }
        });
    }
    getAllSOWPaymentPlanLineItems(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const lineItems = yield planItemService_1.default.getAllSOWPaymentPlanLineItems();
                res.json(lineItems);
            }
            catch (error) {
                res.status(400).json({ error: error.message });
            }
        });
    }
    updateSOWPaymentPlanLineItem(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const updatedLineItem = yield planItemService_1.default.updateSOWPaymentPlanLineItem(req.params.id, req.body);
                if (updatedLineItem) {
                    res.json(updatedLineItem);
                }
                else {
                    res.status(404).json({ error: 'SOW Payment Plan Line Item not found' });
                }
            }
            catch (error) {
                res.status(400).json({ error: error.message });
            }
        });
    }
    deleteSOWPaymentPlanLineItem(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const deleted = yield planItemService_1.default.deleteSOWPaymentPlanLineItem(req.params.id);
                if (deleted) {
                    res.json({ message: 'SOW Payment Plan Line Item deleted successfully' });
                }
                else {
                    res.status(404).json({ error: 'SOW Payment Plan Line Item not found' });
                }
            }
            catch (error) {
                res.status(400).json({ error: error.message });
            }
        });
    }
}
exports.default = new SOWPaymentPlanLineItemController();
//# sourceMappingURL=planItemController.js.map