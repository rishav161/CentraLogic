"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authenticate = void 0;
const jwtUtils_1 = require("../utils/jwtUtils");
const loggerUtils_1 = __importDefault(require("../utils/loggerUtils"));
const authenticate = (req, res, next) => {
    var _a;
    const token = (_a = req.headers.authorization) === null || _a === void 0 ? void 0 : _a.split(' ')[1];
    if (!token) {
        return res.status(401).json({ message: 'Unauthorized' });
    }
    try {
        const decoded = (0, jwtUtils_1.verifyToken)(token);
        req.user = decoded;
        next();
    }
    catch (error) {
        loggerUtils_1.default.error('Invalid token:', error);
        return res.status(401).json({ message: 'Invalid token' });
    }
};
exports.authenticate = authenticate;
//# sourceMappingURL=authMiddleware.js.map