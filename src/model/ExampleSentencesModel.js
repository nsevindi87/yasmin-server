//import sequelize from "../config/connection.js"
import { Sequelize, DataTypes } from "sequelize";

const sequelize = new Sequelize('yasmin', 'admin', 'password', {
    host: 'localhost',
    dialect: 'mysql'
});

const EngTrSentenceEx = sequelize.define("EngTrSentenceEx", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    english: {
        type: DataTypes.STRING,
        allowNull: false
    },
    turkish: {
        type: DataTypes.TEXT,
        allowNull: false
    }, createdAt: {
        type: DataTypes.DATE,
        defaultValue: Sequelize.NOW,
        allowNull: true
    },
    updatedAt: {
        type: DataTypes.DATE,
        defaultValue: Sequelize.NOW,
        allowNull: true
    }
});


export default EngTrSentenceEx;
