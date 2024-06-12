"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const jwt_1 = require("../middleware/jwt");
const orderController_1 = require("../controller/orderController");
const router = express_1.default.Router();
router.get('/orders', jwt_1.authenticateToken, (0, jwt_1.authorizeRole)('user'), orderController_1.getAllOrders);
router.get('/orders/:id', jwt_1.authenticateToken, (0, jwt_1.authorizeRole)('user'), orderController_1.getOrderById);
router.post('/orders', jwt_1.authenticateToken, (0, jwt_1.authorizeRole)('user'), orderController_1.createOrder);
router.put('/orders/:id', jwt_1.authenticateToken, (0, jwt_1.authorizeRole)('user'), orderController_1.updateOrder);
router.delete('/orders/:id', jwt_1.authenticateToken, (0, jwt_1.authorizeRole)('user'), orderController_1.deleteOrder);
exports.default = router;
//# sourceMappingURL=orderRoutes.js.map