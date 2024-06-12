"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const ratingController_1 = require("../controller/ratingController");
const jwt_1 = require("../middleware/jwt");
const router = express_1.default.Router();
router.post('/ratings', jwt_1.authenticateToken, ratingController_1.addRating);
router.get('/ratings/:bookId', jwt_1.authenticateToken, ratingController_1.getRatings);
exports.default = router;
//# sourceMappingURL=ratingRoutes.js.map