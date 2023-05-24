//import sequelize from "../config/connection.js"
import { Sequelize,DataTypes } from "sequelize";
import Users from './UsersModel.js';

const sequelize = new Sequelize('yasmin', 'admin', 'password', {
    host: 'localhost',
    dialect: 'mysql'
});

const Words = sequelize.define("Words", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    word: {
        type: DataTypes.STRING,
        allowNull: false
    },
    wordMeaning: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    wordSecondMeaning: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    wordNote: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    wordCategory: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Users,
            key: 'id',
        }
    },
    createdAt: {
        type: DataTypes.DATE
    },
    updatedAt: {
        type: DataTypes.DATE
    }
});

Words.belongsTo(Users, { foreignKey: 'userId' });


export default Words;
