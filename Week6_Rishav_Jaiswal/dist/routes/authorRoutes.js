"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const authorController_1 = require("../controller/authorController");
const jwt_1 = require("../middleware/jwt");
const router = express_1.default.Router();
router.get('/authors', jwt_1.authenticateToken, authorController_1.getAllAuthors);
router.get('/authors/:id', jwt_1.authenticateToken, authorController_1.getAuthorById);
router.post('/authors', jwt_1.authenticateToken, authorController_1.createAuthor);
router.put('/authors/:id', jwt_1.authenticateToken, authorController_1.updateAuthor);
router.delete('/authors/:id', jwt_1.authenticateToken, authorController_1.deleteAuthor);
exports.default = router;
//# sourceMappingURL=authorRoutes.js.map