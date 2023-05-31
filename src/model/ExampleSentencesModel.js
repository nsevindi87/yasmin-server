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
    }
},
    {
        timestamps:false
    }
);

export default EngTrSentenceEx;
