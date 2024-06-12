"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const pgConfig_1 = __importDefault(require("../postgresDB/pgConfig"));
const userModel_1 = __importDefault(require("./userModel"));
const bookModel_1 = __importDefault(require("./bookModel"));
class Review extends sequelize_1.Model {
}
// Initialize 
Review.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    userId: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        references: { model: userModel_1.default, key: 'id' }
    },
    bookId: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        references: { model: bookModel_1.default, key: 'id' }
    },
    content: {
        type: sequelize_1.DataTypes.TEXT,
        allowNull: false
    }
}, {
    sequelize: pgConfig_1.default,
    modelName: 'review'
});
Review.belongsTo(userModel_1.default);
Review.belongsTo(bookModel_1.default);
exports.default = Review;
//# sourceMappingURL=reviewModel.js.map