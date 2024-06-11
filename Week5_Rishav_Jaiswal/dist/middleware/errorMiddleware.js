"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = void 0;
const loggerUtils_1 = __importDefault(require("../utils/loggerUtils"));
const errorHandler = (err, req, res, next) => {
    loggerUtils_1.default.error(`${err.name}: ${err.message}`, { stack: err.stack });
    res.status(500).json({ message: 'Internal Server Error' });
};
exports.errorHandler = errorHandler;
//# sourceMappingURL=errorMiddleware.js.map