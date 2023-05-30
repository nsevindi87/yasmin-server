//import sequelize from "../config/connection.js"
import { Sequelize, DataTypes } from "sequelize";

const sequelize = new Sequelize('yasmin', 'admin', 'password', {
    host: 'localhost',
    dialect: 'mysql'
});

const EngToTRModel = sequelize.define("EngToTRModel", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    english: {
        type: DataTypes.STRING,
        allowNull: true
    },
    turkish: {
        type: DataTypes.TEXT,
        allowNull: true
    }
},{
    timestamps:false
});


export default EngToTRModel;
