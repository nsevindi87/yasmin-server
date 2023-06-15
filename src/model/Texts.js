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
    english: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    german: {
        type: DataTypes.TEXT,
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

export default Texts;
