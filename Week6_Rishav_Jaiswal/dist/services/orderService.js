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
exports.deleteOrder = exports.updateOrder = exports.createOrder = exports.getOrderById = exports.getAllOrders = void 0;
const orderModel_1 = __importDefault(require("../models/orderModel"));
const getAllOrders = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield orderModel_1.default.findAll();
});
exports.getAllOrders = getAllOrders;
const getOrderById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield orderModel_1.default.findByPk(id);
});
exports.getOrderById = getOrderById;
const createOrder = (orderData) => __awaiter(void 0, void 0, void 0, function* () {
    return yield orderModel_1.default.create(orderData);
});
exports.createOrder = createOrder;
const updateOrder = (id, orderData) => __awaiter(void 0, void 0, void 0, function* () {
    const order = yield orderModel_1.default.findByPk(id);
    if (order) {
        yield order.update(orderData);
        return order;
    }
    return null;
});
exports.updateOrder = updateOrder;
const deleteOrder = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const order = yield orderModel_1.default.findByPk(id);
    if (order) {
        yield order.destroy();
        return order;
    }
    return null;
});
exports.deleteOrder = deleteOrder;
//# sourceMappingURL=orderService.js.map