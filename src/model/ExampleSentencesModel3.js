import { Sequelize, DataTypes } from "sequelize";

const sequelize = new Sequelize('yasmin', 'admin', 'password', {
    host: 'localhost',
    dialect: 'mysql'
});

const GeTrSentenceEx = sequelize.define("GeTrSentenceEx", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    german: {
        type: DataTypes.STRING(1000),
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

export default GeTrSentenceEx;
