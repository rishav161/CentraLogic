"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const authorModel_1 = __importDefault(require("./authorModel"));
const bookModel_1 = __importDefault(require("./bookModel"));
// Define many-to-many relationships
authorModel_1.default.belongsToMany(bookModel_1.default, { through: 'BookAuthors', as: 'books' });
bookModel_1.default.belongsToMany(authorModel_1.default, { through: 'BookAuthors', as: 'authors' });
//# sourceMappingURL=association.js.map