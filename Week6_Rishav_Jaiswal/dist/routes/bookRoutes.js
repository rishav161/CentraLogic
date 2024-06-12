"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const bookController_1 = require("../controller/bookController");
const jwt_1 = require("../middleware/jwt");
const router = express_1.default.Router();
router.get('/books', jwt_1.authenticateToken, bookController_1.getAllBooks);
router.get('/books/:id', jwt_1.authenticateToken, bookController_1.getBookById);
router.post('/books', jwt_1.authenticateToken, bookController_1.createBook);
router.put('/books/:id', jwt_1.authenticateToken, bookController_1.updateBook);
router.delete('/books/:id', jwt_1.authenticateToken, bookController_1.deleteBook);
exports.default = router;
//# sourceMappingURL=bookRoutes.js.map