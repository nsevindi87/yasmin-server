import { Sequelize, DataTypes } from "sequelize";

const sequelize = new Sequelize('yasmin', 'admin', 'password', {
    host: 'localhost',
    dialect: 'mysql'
});

const Texts = sequelize.define("Texts", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    title: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    english: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    german: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    turkish: {
        type: DataTypes.TEXT,
        allowNull: true
    }
},
    {
        timestamps:false
    }
);

export default Texts;
