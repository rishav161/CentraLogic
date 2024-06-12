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
exports.deleteAuthor = exports.updateAuthor = exports.createAuthor = exports.getAuthorById = exports.getAllAuthors = void 0;
const authorService = __importStar(require("../services/authorService"));
//Author 
const getAllAuthors = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const authors = yield authorService.getAllAuthors();
    res.json(authors);
});
exports.getAllAuthors = getAllAuthors;
const getAuthorById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const author = yield authorService.getAuthorById(Number(req.params.id));
    if (author) {
        res.json(author);
    }
    else {
        res.status(404).json({ error: 'Author not found' });
    }
});
exports.getAuthorById = getAuthorById;
const createAuthor = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const author = yield authorService.createAuthor(req.body);
    res.status(201).json(author);
});
exports.createAuthor = createAuthor;
const updateAuthor = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const author = yield authorService.updateAuthor(Number(req.params.id), req.body);
    if (author) {
        res.json(author);
    }
    else {
        res.status(404).json({ error: 'Author not found' });
    }
});
exports.updateAuthor = updateAuthor;
const deleteAuthor = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const author = yield authorService.deleteAuthor(Number(req.params.id));
    if (author) {
        res.status(204).send();
    }
    else {
        res.status(404).json({ error: 'Author not found' });
    }
});
exports.deleteAuthor = deleteAuthor;
//# sourceMappingURL=authorController.js.map