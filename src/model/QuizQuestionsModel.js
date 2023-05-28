//import sequelize from "../config/connection.js"
import { Sequelize,DataTypes } from "sequelize";

const sequelize = new Sequelize('yasmin', 'admin', 'password', {
    host: 'localhost',
    dialect: 'mysql'
});

const QuizQuestions = sequelize.define("QuizQuestions", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    question_text: {
        type: DataTypes.STRING,
        allowNull: false
    },
    options: {
        type: DataTypes.TEXT,
    },
    correct_word: {
        type: DataTypes.TEXT,
    },
    english_example: {
        type: DataTypes.TEXT,
    },
    german_example: {
        type: DataTypes.TEXT,
    },
    createdAt: {
        type: DataTypes.DATE
    },
    updatedAt: {
        type: DataTypes.DATE
    }
});


export default QuizQuestions;
