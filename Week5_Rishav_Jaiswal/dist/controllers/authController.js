"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const authService_1 = __importDefault(require("../services/authService"));
const loggerUtils_1 = __importDefault(require("../utils/loggerUtils"));
class AuthController {
    register(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { name, email, password, role } = req.body;
                const employee = yield authService_1.default.register({ name, email, password, role });
                res.status(201).json({ message: 'Employee registered successfully', employee });
            }
            catch (error) {
                loggerUtils_1.default.error('Registration error:', error);
                res.status(400).json({ message: error.message });
            }
        });
    }
    login(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { email, password } = req.body;
                const { token, employee } = yield authService_1.default.login(email, password);
                res.json({ message: 'Login successful', token, employee });
            }
            catch (error) {
                loggerUtils_1.default.error('Login error:', error);
                res.status(401).json({ message: error.message });
            }
        });
    }
}
exports.default = new AuthController();
//# sourceMappingURL=authController.js.map