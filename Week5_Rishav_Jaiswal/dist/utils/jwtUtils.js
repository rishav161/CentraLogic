"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyToken = exports.generateToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const credential_1 = require("../common/credential");
const generateToken = (payload) => {
    return jsonwebtoken_1.default.sign(payload, credential_1.JWT_SECRET, { expiresIn: '1d' });
};
exports.generateToken = generateToken;
const verifyToken = (token) => {
    return jsonwebtoken_1.default.verify(token, credential_1.JWT_SECRET);
};
exports.verifyToken = verifyToken;
//# sourceMappingURL=jwtUtils.js.map