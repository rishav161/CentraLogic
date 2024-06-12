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
exports.deleteBook = exports.updateBook = exports.createBook = exports.getBookById = exports.getAllBooks = void 0;
const bookModel_1 = __importDefault(require("../models/bookModel"));
const authorModel_1 = __importDefault(require("../models/authorModel"));
const getAllBooks = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield bookModel_1.default.findAll({ include: [{ model: authorModel_1.default, as: 'authors' }] });
});
exports.getAllBooks = getAllBooks;
const getBookById = (bookId) => __awaiter(void 0, void 0, void 0, function* () {
    return yield bookModel_1.default.findByPk(bookId, { include: [{ model: authorModel_1.default, as: 'authors' }] });
});
exports.getBookById = getBookById;
const createBook = (bookData) => __awaiter(void 0, void 0, void 0, function* () {
    const book = yield bookModel_1.default.create(bookData);
    if (bookData.authors) {
        const authors = yield authorModel_1.default.findAll({
            where: {
                id: bookData.authors
            }
        });
        yield book.setAuthors(authors);
    }
    return book;
});
exports.createBook = createBook;
const updateBook = (bookId, bookData) => __awaiter(void 0, void 0, void 0, function* () {
    const book = yield bookModel_1.default.findByPk(bookId);
    if (book) {
        yield book.update(bookData);
        if (bookData.authors) {
            const authors = yield authorModel_1.default.findAll({
                where: {
                    id: bookData.authors
                }
            });
            yield book.setAuthors(authors);
        }
    }
    return book;
});
exports.updateBook = updateBook;
const deleteBook = (bookId) => __awaiter(void 0, void 0, void 0, function* () {
    const book = yield bookModel_1.default.findByPk(bookId);
    if (book) {
        yield book.destroy();
    }
    return book;
});
exports.deleteBook = deleteBook;
//# sourceMappingURL=bookService.js.map