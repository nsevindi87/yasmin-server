//import sequelize from "../config/connection.js"
import { Sequelize } from "sequelize"; 
import { DataTypes } from "sequelize"

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
    createdAt: {
        type: DataTypes.DATE
    },
    updatedAt: {
        type: DataTypes.DATE
    }
});



export default Words;
