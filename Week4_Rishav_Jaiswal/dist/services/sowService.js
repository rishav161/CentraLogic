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
exports.deleteSOW = exports.updateSOW = exports.getSOWsByCustomerId = exports.getSOWById = exports.createSOW = void 0;
const sowModel_1 = __importDefault(require("../models/sowModel"));
const createSOW = (sowData) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newSOW = yield sowModel_1.default.create(sowData);
        return newSOW;
    }
    catch (error) {
        console.error('Error creating SOW:', error);
        throw error;
    }
});
exports.createSOW = createSOW;
const getSOWById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield sowModel_1.default.findByPk(id);
});
exports.getSOWById = getSOWById;
const getSOWsByCustomerId = (customerId) => __awaiter(void 0, void 0, void 0, function* () {
    return yield sowModel_1.default.findAll({ where: { customerId } });
});
exports.getSOWsByCustomerId = getSOWsByCustomerId;
const updateSOW = (id, updatedSOWData) => __awaiter(void 0, void 0, void 0, function* () {
    const [updatedCount, updatedRows] = yield sowModel_1.default.update(updatedSOWData, { where: { id }, returning: true });
    return [updatedCount, updatedRows];
});
exports.updateSOW = updateSOW;
const deleteSOW = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const deletedCount = yield sowModel_1.default.destroy({ where: { id } });
    return deletedCount;
});
exports.deleteSOW = deleteSOW;
//# sourceMappingURL=sowService.js.map