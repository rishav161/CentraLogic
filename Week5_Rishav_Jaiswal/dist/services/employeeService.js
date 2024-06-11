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
exports.getEmployeeById = void 0;
// src/services/employeeService.ts
const employeModel_1 = __importDefault(require("../models/employeModel"));
const getEmployeeById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const employee = yield employeModel_1.default.findByPk(id);
    if (!employee) {
        throw new Error('Employee not found');
    }
    return employee;
});
exports.getEmployeeById = getEmployeeById;
//# sourceMappingURL=employeeService.js.map