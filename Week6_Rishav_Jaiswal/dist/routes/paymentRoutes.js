"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const paymentController_1 = require("../controller/paymentController");
const jwt_1 = require("../middleware/jwt");
const orderController_1 = require("../controller/orderController");
const router = express_1.default.Router();
router.post('/payments', jwt_1.authenticateToken, paymentController_1.createPayment);
router.get('/orders/:id', jwt_1.authenticateToken, (0, jwt_1.authorizeRole)('user'), orderController_1.getOrderById);
exports.default = router;
//# sourceMappingURL=paymentRoutes.js.map