import { Sequelize, DataTypes } from "sequelize";

const sequelize = new Sequelize('yasmin', 'admin', 'password', {
    host: 'localhost',
    dialect: 'mysql'
});

const PersonalTexts = sequelize.define("PersonalTexts", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    title: {
        type: DataTypes.TEXT
    },
    english: {
        type: DataTypes.TEXT
    },
    german: {
        type: DataTypes.TEXT
    },
    turkish: {
        type: DataTypes.TEXT
    }
},
    {
        timestamps:false
    }
);

export default PersonalTexts;
