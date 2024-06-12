"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authorizeRole = exports.authenticateToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const credentials_1 = __importDefault(require("../common/credentials"));
const authenticateToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if (token == null)
        return res.sendStatus(401);
    jsonwebtoken_1.default.verify(token, credentials_1.default.jwt.JWT_TOKEN, (err, user) => {
        if (err)
            return res.sendStatus(403);
        req.user = { userId: user.userId, role: user.role };
        next();
    });
};
exports.authenticateToken = authenticateToken;
const authorizeRole = (role) => {
    return (req, res, next) => {
        var _a;
        if (((_a = req.user) === null || _a === void 0 ? void 0 : _a.role) !== role) {
            return res.status(403).json({ error: 'Access denied' });
        }
        next();
    };
};
exports.authorizeRole = authorizeRole;
//# sourceMappingURL=jwt.js.map