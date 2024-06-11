"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const helmet_1 = __importDefault(require("helmet"));
const authRoutes_1 = __importDefault(require("./routes/authRoutes"));
const shiftRoutes_1 = __importDefault(require("./routes/shiftRoutes"));
const timesheetRoutes_1 = __importDefault(require("./routes/timesheetRoutes"));
const errorMiddleware_1 = require("./middleware/errorMiddleware");
const loggerUtils_1 = __importDefault(require("./utils/loggerUtils"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use((0, helmet_1.default)());
app.use(express_1.default.json());
app.use('/api/auth', authRoutes_1.default);
app.use('/api/shifts', shiftRoutes_1.default);
app.use('/api/timesheets', timesheetRoutes_1.default);
app.use(errorMiddleware_1.errorHandler);
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    loggerUtils_1.default.info(`Server is running on port ${PORT}`);
});
//# sourceMappingURL=app.js.map