"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const pgConfig_1 = __importDefault(require("../postgresDB/pgConfig"));
const userModel_1 = __importDefault(require("./userModel"));
const bookModel_1 = __importDefault(require("./bookModel"));
class Rating extends sequelize_1.Model {
}
// Initialize 
Rating.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    bookId: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false
    },
    userId: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false
    },
    rating: {
        type: sequelize_1.DataTypes.FLOAT,
        allowNull: false
    }
}, {
    sequelize: pgConfig_1.default,
    tableName: 'ratings'
});
Rating.belongsTo(userModel_1.default, { foreignKey: 'userId' });
Rating.belongsTo(bookModel_1.default, { foreignKey: 'bookId' });
exports.default = Rating;
//# sourceMappingURL=ratingModel.js.map