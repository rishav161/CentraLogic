"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// Routes
const organizationRoutes_1 = __importDefault(require("./routes/organizationRoutes"));
const customerRoutes_1 = __importDefault(require("./routes/customerRoutes"));
const sowRoutes_1 = __importDefault(require("./routes/sowRoutes"));
const paymentRoutes_1 = __importDefault(require("./routes/paymentRoutes")); // Importing paymentRoutes
const planItemRoutes_1 = __importDefault(require("./routes/planItemRoutes"));
const app = (0, express_1.default)();
const port = 3000;
app.use(express_1.default.json());
// Organization
app.use('/api/organizations', organizationRoutes_1.default);
// Customer
app.use('/api/customers', customerRoutes_1.default);
// SOW
app.use('/api/sows', sowRoutes_1.default);
// Payment
app.use('/api/payments', paymentRoutes_1.default);
// SOW Payment Plan Line Items
app.use('/api/sow-payment-plan-line-items', planItemRoutes_1.default);
app.listen(port, () => {
    console.log(`Server started at http://localhost:${port}`);
});
exports.default = app;
//# sourceMappingURL=server.js.map