import { Sequelize, DataTypes } from "sequelize";

const sequelize = new Sequelize('yasmin', 'admin', 'password', {
    host: 'localhost',
    dialect: 'mysql'
});

const EngGeSentenceEx = sequelize.define("EngGeSentenceEx", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    english: {
        type: DataTypes.STRING(1000),
        allowNull: false
    },
    german: {
        type: DataTypes.TEXT,
        allowNull: false
    }
},
    {
        timestamps:false
    }
);

export default EngGeSentenceEx;
