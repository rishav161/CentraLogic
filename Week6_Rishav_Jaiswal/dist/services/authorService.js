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
exports.deleteAuthor = exports.updateAuthor = exports.createAuthor = exports.getAuthorById = exports.getAllAuthors = void 0;
const authorModel_1 = __importDefault(require("../models/authorModel"));
const bookModel_1 = __importDefault(require("../models/bookModel"));
const getAllAuthors = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield authorModel_1.default.findAll({ include: [{ model: bookModel_1.default, as: 'books' }] });
});
exports.getAllAuthors = getAllAuthors;
const getAuthorById = (authorId) => __awaiter(void 0, void 0, void 0, function* () {
    return yield authorModel_1.default.findByPk(authorId, { include: [{ model: bookModel_1.default, as: 'books' }] });
});
exports.getAuthorById = getAuthorById;
const createAuthor = (authorData) => __awaiter(void 0, void 0, void 0, function* () {
    return yield authorModel_1.default.create(authorData);
});
exports.createAuthor = createAuthor;
const updateAuthor = (authorId, authorData) => __awaiter(void 0, void 0, void 0, function* () {
    const author = yield authorModel_1.default.findByPk(authorId);
    if (author) {
        yield author.update(authorData);
    }
    return author;
});
exports.updateAuthor = updateAuthor;
const deleteAuthor = (authorId) => __awaiter(void 0, void 0, void 0, function* () {
    const author = yield authorModel_1.default.findByPk(authorId);
    if (author) {
        yield author.destroy();
    }
    return author;
});
exports.deleteAuthor = deleteAuthor;
//# sourceMappingURL=authorService.js.map