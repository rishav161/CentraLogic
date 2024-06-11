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
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteCustomerHandler = exports.updateCustomerHandler = exports.getCustomerByIdHandler = exports.getCustomersHandler = exports.createCustomerHandler = void 0;
const customerService_1 = require("../services/customerService");
const createCustomerHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const customer = yield (0, customerService_1.createCustomer)(req.body);
        res.json(customer);
    }
    catch (err) {
        res.status(500).json({ error: err });
    }
});
exports.createCustomerHandler = createCustomerHandler;
const getCustomersHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const customers = yield (0, customerService_1.getCustomers)();
        res.json(customers);
    }
    catch (err) {
        res.status(500).json({ error: err });
    }
});
exports.getCustomersHandler = getCustomersHandler;
const getCustomerByIdHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const customerId = req.params.id;
    try {
        const customer = yield (0, customerService_1.getCustomerById)(customerId);
        res.json(customer);
    }
    catch (err) {
        res.status(500).json({ error: err });
    }
});
exports.getCustomerByIdHandler = getCustomerByIdHandler;
const updateCustomerHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const customerId = req.params.id;
    const customerData = req.body;
    try {
        const customer = yield (0, customerService_1.updateCustomer)(customerId, customerData);
        res.json(customer);
    }
    catch (err) {
        res.status(500).json({ error: err });
    }
});
exports.updateCustomerHandler = updateCustomerHandler;
const deleteCustomerHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const customerId = req.params.id;
    try {
        yield (0, customerService_1.deleteCustomer)(customerId);
        res.send();
    }
    catch (err) {
        res.status(500).json({ error: err });
    }
});
exports.deleteCustomerHandler = deleteCustomerHandler;
//# sourceMappingURL=customerController.js.map