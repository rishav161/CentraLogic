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
exports.createPayment = void 0;
const orderModel_1 = __importDefault(require("../models/orderModel"));
const credentials_1 = __importDefault(require("../common/credentials"));
const constants = require('gocardless-nodejs/constants');
const gocardless = require('gocardless-nodejs');
// Initialize the GoCardless client
const client = gocardless(credentials_1.default.gocardless.ACCESS_TOKEN, constants.Environments.Sandbox);
const createPayment = (userId, bookId, amount) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const payment = yield client.payments.create({
            amount: amount * 100,
            currency: 'USD',
            links: {
                mandate: 'MD123...' // Replace with actual mandate ID
            },
            metadata: {
                userId: userId.toString(),
                bookId: bookId.toString()
            }
        });
        const order = yield orderModel_1.default.create({
            userId,
            bookId,
            amount,
            paymentStatus: payment.status
        });
        return order;
    }
    catch (error) {
        throw new Error(`Payment creation failed: ${error.message}`);
    }
});
exports.createPayment = createPayment;
//# sourceMappingURL=paymentService.js.map