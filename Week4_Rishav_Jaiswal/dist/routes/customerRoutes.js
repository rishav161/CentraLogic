"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const customerController_1 = require("../controllers/customerController");
const router = express_1.default.Router();
router.post('/', customerController_1.createCustomerHandler);
router.get('/', customerController_1.getCustomersHandler);
router.get('/:id', customerController_1.getCustomerByIdHandler);
router.put('/:id', customerController_1.updateCustomerHandler);
router.delete('/:id', customerController_1.deleteCustomerHandler);
exports.default = router;
//# sourceMappingURL=customerRoutes.js.map