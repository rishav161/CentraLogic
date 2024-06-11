"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteSOW = exports.updateSOW = exports.getSOWsByCustomerId = exports.getSOWById = exports.createSOW = void 0;
const sowService = __importStar(require("../services/sowService"));
const createSOW = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newSOW = yield sowService.createSOW(req.body);
        res.status(201).json(newSOW);
    }
    catch (error) {
        res.status(500).json({ error: 'Failed to create SOW' });
    }
});
exports.createSOW = createSOW;
const getSOWById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const sow = yield sowService.getSOWById(req.params.id);
        if (!sow) {
            res.status(404).json({ error: 'SOW not found' });
        }
        else {
            res.status(200).json(sow);
        }
    }
    catch (error) {
        res.status(500).json({ error: 'Failed to get SOW' });
    }
});
exports.getSOWById = getSOWById;
const getSOWsByCustomerId = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const sows = yield sowService.getSOWsByCustomerId(req.params.customerId);
        res.status(200).json(sows);
    }
    catch (error) {
        res.status(500).json({ error: 'Failed to get SOWs' });
    }
});
exports.getSOWsByCustomerId = getSOWsByCustomerId;
const updateSOW = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const [updatedCount, updatedRows] = yield sowService.updateSOW(req.params.id, req.body);
        if (updatedCount === 0) {
            res.status(404).json({ error: 'SOW not found' });
        }
        else {
            res.status(200).json(updatedRows[0]);
        }
    }
    catch (error) {
        res.status(500).json({ error: 'Failed to update SOW' });
    }
});
exports.updateSOW = updateSOW;
const deleteSOW = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const deletedCount = yield sowService.deleteSOW(req.params.id);
        if (deletedCount === 0) {
            res.status(404).json({ error: 'SOW not found' });
        }
        else {
            res.status(204).send();
        }
    }
    catch (error) {
        res.status(500).json({ error: 'Failed to delete SOW' });
    }
});
exports.deleteSOW = deleteSOW;
//# sourceMappingURL=sowController.js.map