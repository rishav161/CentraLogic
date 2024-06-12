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
exports.getRatings = exports.addRating = void 0;
const bookModel_1 = __importDefault(require("../models/bookModel"));
const ratingModel_1 = __importDefault(require("../models/ratingModel"));
const addRating = (bookId, userId, ratingValue) => __awaiter(void 0, void 0, void 0, function* () {
    const rating = yield ratingModel_1.default.create({ bookId, userId, rating: ratingValue });
    const ratings = yield ratingModel_1.default.findAll({ where: { bookId } });
    const averageRating = ratings.reduce((acc, r) => acc + r.rating, 0) / ratings.length;
    const book = yield bookModel_1.default.findByPk(bookId);
    if (book) {
        book.rating = averageRating;
        yield book.save();
    }
    return rating;
});
exports.addRating = addRating;
const getRatings = (bookId) => __awaiter(void 0, void 0, void 0, function* () {
    return yield ratingModel_1.default.findAll({ where: { bookId } });
});
exports.getRatings = getRatings;
//# sourceMappingURL=ratingService.js.map