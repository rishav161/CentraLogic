"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const bookRoutes_1 = __importDefault(require("./routes/bookRoutes"));
const authorRoutes_1 = __importDefault(require("./routes/authorRoutes"));
const orderRoutes_1 = __importDefault(require("./routes/orderRoutes"));
const paymentRoutes_1 = __importDefault(require("./routes/paymentRoutes"));
const ratingRoutes_1 = __importDefault(require("./routes/ratingRoutes"));
const authRoutes_1 = __importDefault(require("./routes/authRoutes"));
// Import the associations to ensure they are applied
require("./models/associations");
const app = (0, express_1.default)();
const port = 3000;
app.use(express_1.default.json());
// Routes
app.use('/api', authRoutes_1.default);
app.use('/api', bookRoutes_1.default);
app.use('/api', authorRoutes_1.default);
app.use('/api', orderRoutes_1.default);
app.use('/api', paymentRoutes_1.default);
app.use('/api', ratingRoutes_1.default);
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
//# sourceMappingURL=app.js.map